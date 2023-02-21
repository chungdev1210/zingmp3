import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import useTime from "../../Services/Hooks/useTime";
import { playerActions } from "./playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { playerSelector } from "./playerSlice";
import clsx from "clsx";
import Audio from "./Audio";

let isMouseDown = false;
let initialClientX = 0;
let initialRate = 0;
let currentTime = 0;
let initialVolume = 50;

const { doPlay, doActiveElement, doNext, doPrevious } = playerActions;

function Player(props) {
   const progressRef = useRef();

   const audioRef = useRef();

   const volumeRef = useRef();

   const { getMins } = useTime();

   const dispatch = useDispatch();

   const [duration, setDuration] = useState(0);

   const { playStatus, elementActive, dataItemPlaying } =
      useSelector(playerSelector);

   useEffect(() => {
      if (duration > 0) {
         document.addEventListener("mouseup", handleMouseUp);

         document.addEventListener("mousemove", (e) => {
            if (isMouseDown) {
               document.body.style.userSelect = "none"; //vô hiệu hóa chọn văn bản

               handleProgressDrag(e);
            }
         });
      }
   }, [duration]);

   useEffect(() => {
      document.addEventListener("keyup", (e) => {
         if (e.code === "Space" && elementActive === "player") {
            handlePlay();
         }
      });
   }, [elementActive]);

   useEffect(() => {
      if (playStatus === "play") {
         audioRef.current.play();
      } 
      if (playStatus === "pause") {
         audioRef.current.pause();
      }
   }, [playStatus]);


   useEffect(() => {
      const volume = initialVolume / 100;

      volumeRef.current.children[0].style.width = `${initialVolume}%`;

      audioRef.current.setVolumeAudio(volume);
   }, [initialVolume]);


   const handleProgressTimer = (e) => {
      //Chỉ cho phép bấm chuột trái
      if (e.nativeEvent.which == 1) {
         const rate = getProgressRate(e.nativeEvent.offsetX);
         progressRef.current.children[0].style.width = `${rate}%`;

         handleMouseDown();

         initialClientX = e.clientX;

         initialRate = rate;

         currentTime = getCurrentTime(rate);

         progressRef.current.previousElementSibling.children[0].innerText =
            getMins(currentTime);
      }
   };


   //vô hiệu hóa khi bấm chuột phải vào timer
   const handleRightMenu = (e) => {
      e.preventDefault();
   };


   const handleProgressDrag = (e) => {
      const clientX = e.clientX; //Vị trí con trỏ chuột đang kéo so với góc bên trái của trang web

      const spaceRate = clientX - initialClientX; //Khoảng cách kéo thêm (px)

      const rateNew = getProgressRate(spaceRate); //Tỷ lệ phần trăm kéo thêm

      let rate = initialRate + rateNew;

      if (rate < 0) {
         rate = 0;
      }

      if (rate > 100) {
         rate = 100;
      }

      progressRef.current.children[0].style.width = `${rate}%`;
      currentTime = getCurrentTime(rate);

      progressRef.current.previousElementSibling.children[0].innerText =
         getMins(currentTime);
   };


   const getProgressRate = (positionX) => {
      const rate = (positionX / progressRef.current.clientWidth) * 100;
      return rate;
   };


   const getVolumeRate = (positionX) => {
      const rate = (positionX / volumeRef.current.clientWidth) * 100;
      return rate;
   };


   const handleMouseDown = () => {
      isMouseDown = true;
   };


   const handleMouseUp = () => {
      if (isMouseDown) {
         isMouseDown = false;

         document.body.style.userSelect = "text";

         audioRef.current.setCurrentTime(currentTime);
      }
   };


   const handleLoadAudio = () => {
      const duration = audioRef.current.getDuration();
      setDuration(duration);
   };


   const getCurrentTime = (rate) => {
      const currentTime = (rate * duration) / 100;
      return currentTime;
   };


   const handlePlay = () => {
      if (audioRef.current.getPauseStatus()) {
         audioRef.current.play();
         dispatch(doPlay("play"));
      } else {
         audioRef.current.pause();
         dispatch(doPlay("pause"));
      }
   };


   const handleTimeUpdate = () => {
      const currentTime = audioRef.current.getCurrentTime();
      progressRef.current.previousElementSibling.children[0].innerText =
         getMins(currentTime);

      const rate = (currentTime / duration) * 100;

      if (!isMouseDown) {
         progressRef.current.children[0].style.width = `${rate}%`;
      }
   };


   const handleClickPlayerArea = (e) => {
      e.stopPropagation();
      dispatch(doActiveElement("player"));
   };


   const handleProgressVolume = (e) => {
      if (e.nativeEvent.which == 1) {
         const volumeRate = getVolumeRate(e.nativeEvent.offsetX);
         initialVolume = volumeRate;

         volumeRef.current.children[0].style.width = `${volumeRate}%`;

         audioRef.current.setVolumeAudio(volumeRate / 100);
      }
   };


   const handleEndAudio = () => {
      progressRef.current.previousElementSibling.children[0].innerText =
         "00:00";
      dispatch(doPlay("pause"));
      progressRef.current.children[0].style.width = "0%";
      dispatch(doNext(true))
   };


   const handeNext = (e) => {
      e.preventDefault();
      dispatch(doNext(true))
   }

   const handePrevious = (e) => {
      e.preventDefault();
      dispatch(doPrevious(true))
   }


   return (
      <div className="zing-controls" onClick={handleClickPlayerArea}>
         <Audio
            onLoadedData={handleLoadAudio}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEndAudio}
            ref={audioRef}
         />

         <div className="l-4 m-3 c-9">
            <div className=" zing-control-left zing-control-left-action">
               <div className="control-left-img " style={{ marginLeft: 0 }}>
                  <img src={dataItemPlaying.image} alt="" />
               </div>
               <div className="control-left-title">
                  <h1 className="color-title">{dataItemPlaying.name}</h1>
                  <small className="color-small">
                     {dataItemPlaying.singer?.map(({ id, name }) => {
                        return <a href="#" key={id}>{name} </a>;
                     })}
                  </small>
               </div>
               <div className="control-left-icon m-0">
                  <div className="item icon color-title m-0">
                     <ion-icon>
                        <IonIcon name="heart-outline" />
                     </ion-icon>
                  </div>
                  <div className="item icon action-hover color-title m-0">
                     <ion-icon>
                        <IonIcon name="ellipsis-horizontal-outline" />
                     </ion-icon>
                  </div>
               </div>
            </div>
         </div>
         <div className="l-4 m-6 c-3">
            <div className="zing-control-main">
               <div className="controls">
                  <div className="repeat control-icon action-hover color-title action-controls">
                     <i className="fa-solid fa-repeat" />
                  </div>
                  <div className="icon-control-left control-icon action-hover  color-title c-0" onClick={handePrevious}>
                     <i className="fa-solid fa-backward-step" />
                  </div>
                  <div className="play c-0">
                     <div
                        className="play-music action-hover color-title"
                        onClick={handlePlay}
                     >
                        <ion-icon>
                           <IonIcon
                              name={clsx(
                                 playStatus === "play"
                                    ? "pause-circle-outline"
                                    : "play-outline"
                              )}
                           />
                        </ion-icon>
                     </div>
                  </div>
                  <div className="icon-control-right control-icon action-hover color-title " onClick={handeNext}>
                     <i className="fa-solid fa-forward-step" />
                  </div>
                  <div className="icon-shuffle control-icon action-hover color-title c-0 action-controls">
                     <i className="fa-solid fa-shuffle" />
                  </div>
               </div>
               <div className="control-handle-time c-0">
                  <div className="time-begin color-title">
                     <span className="minute">00:00</span>
                  </div>
                  <div
                     className="progress"
                     onMouseDown={handleProgressTimer}
                     onContextMenu={handleRightMenu}
                     ref={progressRef}
                  >
                     <div className="progressCurrent" style={{ width: "0%" }} />
                  </div>
                  <div className="time-end color-title">
                     {getMins(duration)}
                  </div>
               </div>
            </div>
         </div>
         <div className="l-4 m-3 c-0 ">
            <div className="zing-control-right">
               <div className="media control-icon action-hover  color-title m-0 ">
                  <i className="fa-solid fa-photo-film" />
               </div>
               <div className="micro control-icon action-hover  color-title m-0">
                  <i className="fa-solid fa-microphone" />
               </div>
               <div className="volume ">
                  <div className="volume-play control-icon action-hover  color-title">
                     <i className="fa-solid fa-volume-low" />
                  </div>
                  <div className="volume-pause control-icon action-hover  color-title hide">
                     <i className="fa-solid fa-volume-xmark" />
                  </div>
                  <div
                     className="volume-control color-title"
                     ref={volumeRef}
                     onMouseDown={handleProgressVolume}
                     onContextMenu={handleRightMenu}
                  >
                     <div className="volume-control-play" />
                  </div>
               </div>
               <div className="list-song control-icon action-hover color-title ">
                  <i className="fa-solid fa-list-ul" />
               </div>
            </div>
         </div>
      </div>
   );
}

Player.propTypes = {};

export default Player;
