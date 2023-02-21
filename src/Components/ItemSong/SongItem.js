import React, { Fragment, useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { playerActions, playerSelector } from "../Player/playerSlice";

export default function SongItem(props) {
   useEffect(() => {
      document.body.style.userSelect = "none";
   }, []);

   const { doItemPlaying, doPlay, doIdItemPlaying, doNext, doPrevious } =
      playerActions;

   const { songs } = props;
   const dispatch = useDispatch();
   const { idItemPlaying, playStatus, nextStatus, previousStatus } =
      useSelector(playerSelector);

   const handlePlaySong = (song) => {
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

   const handleNext = () => {
      if (nextStatus) {
         let index = songs.findIndex((song) => song.id === idItemPlaying);
         if (index < songs.length - 1) {
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

   useEffect(() => {
      handleNext();
   }, [nextStatus]);

   useEffect(() => {
      handlePrevious();
   }, [previousStatus]);

   const handlePrevious = () => {
      if (previousStatus) {
         let index = songs.findIndex((song) => song.id === idItemPlaying);
         if (index > 0) {
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
      e.preventDefault();
      dispatch(doPlay("pause"));
   };

   const handlePlay = (e) => {
      e.preventDefault();
      dispatch(doPlay("play"));
   };

   const renderSongItem = () => {
      if (props.songs !== undefined) {
         let jsx = [];
         props.songs.map((song) => {
            const item = (
               <li
                  key={song.id}
                  className={clsx(
                     "song-item individual-ctn2-song-item",
                     idItemPlaying === song.id ? "active-item" : ""
                  )}
                  onDoubleClick={(e) => {
                     e.preventDefault();
                     handlePlaySong(song);
                  }}
               >
                  <div className="individual-ctn2-song-item-img">
                     <img
                        src={song.image}
                        alt=""
                        className="individual-ctn2-song-img"
                     />
                     <div
                        className="individual-ctn2-song-item-icon"
                        onClick={(e) => {
                           e.preventDefault();
                           handlePlaySong(song);
                        }}
                     >
                        <i className="icon-play fa-solid fa-play"></i>
                     </div>
                     {playStatus === "play" ? (
                        <div className="icon-play-song" onClick={handlePause}>
                           <img
                              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                              alt=""
                           />
                        </div>
                     ) : (
                        <div
                           className="individual-ctn2-song-item-icon"
                           onClick={handlePlay}
                        >
                           <i className="fa-solid fa-play"></i>
                        </div>
                     )}
                  </div>
                  <div className="individual-ctn2-song-title">
                     <span className="color-title">{song.name}</span>
                     <small className="color-small">
                        {song.singer.map(({ id, name }) => {
                           return (
                              <Fragment key={id}>
                                 <a className="singer color-small" href="">
                                    {name}
                                 </a>{" "}
                              </Fragment>
                           );
                        })}
                     </small>
                  </div>
                  <div className="zingchart-body-main  color-small c-0">
                     <span className="title">{song.name}</span>
                     <span className="singer">(single)</span>
                  </div>
                  <div className="individual-ctn2-song-right color-main">
                     <div className="individual-ctn2-song-right-icon">
                        <div className="icon-video c-0 m-0">
                           <ion-icon>
                              <IonIcon name="videocam" />
                           </ion-icon>
                        </div>
                        <div className="icon-heart c-0 m-0">
                           <ion-icon>
                              <IonIcon name="heart" />
                           </ion-icon>
                        </div>
                     </div>
                     <div className="time">
                        <div className="song-time">{song.duration}</div>
                        <ion-icon>
                           <IonIcon name="ellipsis-horizontal-outline" />
                        </ion-icon>
                     </div>
                  </div>
               </li>
            );
            jsx.push(item);
         });
         return jsx;
      }
   };

   return <div>{renderSongItem()}</div>;
}
