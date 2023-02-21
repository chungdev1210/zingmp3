import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { playerActions, playerSelector } from "../Player/playerSlice";

function ItemSong(props) {
   const { doItemPlaying, doPlay, doIdItemPlaying, doNext, doPrevious } =
      playerActions;

   const { songs } = props;
   const dispatch = useDispatch();
   const { idItemPlaying, playStatus, nextStatus, previousStatus } =
      useSelector(playerSelector);

   const handlePlayItem = (song) => {
      document.body.style.userSelect = "none";
      dispatch(doItemPlaying(song));
      dispatch(doIdItemPlaying(song.id));
      dispatch(doPlay("play"));
      if (idItemPlaying !== song.id) {
         dispatch(doPlay("pause"));
         setTimeout(() => {
            dispatch(doPlay("play"));
         }, 100);
      }
   };

   useEffect(() => {
      handleNext();
   }, [nextStatus]);

   useEffect(() => {
      handlePrevious();
   }, [previousStatus]);

   const handleNext = () => {
      if (nextStatus) {
         let index = songs.findIndex((song) => song.id === idItemPlaying);
         if(index < songs.length - 1) {
            dispatch(doItemPlaying(songs[index + 1]));
            dispatch(doIdItemPlaying(songs[index + 1].id));
            dispatch(doPlay("pause"));
            setTimeout(() => {
               dispatch(doPlay("play"));
            }, 100);
            dispatch(doNext(false));
         }
      }
   };

   const handlePrevious = () => {
      if (previousStatus) {
         let index = songs.findIndex((song) => song.id === idItemPlaying);
         if(index > 0) {
            dispatch(doItemPlaying(songs[index - 1]));
            dispatch(doIdItemPlaying(songs[index - 1].id));
            dispatch(doPlay("pause"));
            setTimeout(() => {
               dispatch(doPlay("play"));
            }, 100);
            dispatch(doPrevious(false));
         }
      }
   };


   const handlePause = (e) => {
      e.preventDefault()
      dispatch(doPlay("pause"));
   }


   const handlePlay = (e) => {
      e.preventDefault();
      dispatch(doPlay("play"));
   }
   

   return (
      <>
         {songs.length > 0 &&
            songs.map((song) => {
               return (
                  <div key={song.id} className="l-4 m-6 c-12 m-pro-6">
                     <div className="the-song">
                        <div
                           className={clsx(
                              "the-song-include ",
                              idItemPlaying === song.id ? "active-item" : ""
                           )}
                           onDoubleClick={(e) => {
                              e.preventDefault();
                              handlePlayItem(song);
                           }}
                        >
                           <div className="the-song-include-left">
                              <div className="the-song-include-img">
                                 <img
                                    src={song.image}
                                    className="the-song-img discover-ctn2-img"
                                    alt=""
                                 />
                                 <div className="the-song-icon-play" onClick={(e) => {
                                    e.preventDefault();
                                    handlePlayItem(song)
                                 }}>
                                    <ion-icon>
                                       <IonIcon name="play" />
                                    </ion-icon>
                                 </div>
                                 {playStatus === "play" ? (
                                    <div className="icon-play-song" onClick={handlePause}>
                                       <img
                                          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                          alt=""
                                       />
                                    </div>
                                 ) : (
                                    <div className="icon-play-song" onClick={handlePlay}>
                                       <ion-icon>
                                          <IonIcon name="play" />
                                       </ion-icon>
                                    </div>
                                 )}
                              </div>
                              <div className="the-song-info discover-ctn2-info">
                                 <div className="song-name">
                                    <h1 className="songs color-main">
                                       {song.name}
                                    </h1>
                                    {/* <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.34/static/media/vip-label.3dd6ac7e.svg"
                        alt=""
                     /> */}
                                 </div>
                                 <span className="singer color-small">
                                    {song.singer.map(({ id, name }) => {
                                       return (
                                          <Fragment key={id}>
                                             <span>{name}</span>, {""}
                                          </Fragment>
                                       );
                                    })}
                                 </span>
                                 <span className="time color-small">
                                    1 ngày trước
                                 </span>
                              </div>
                           </div>
                           <div className="item icon action-hover color-main">
                              <ion-icon>
                                 <IonIcon
                                    name="ellipsis-horizontal-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="ellipsis horizontal outline"
                                 />
                              </ion-icon>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
      </>
   );
}

ItemSong.propTypes = {};

export default ItemSong;
