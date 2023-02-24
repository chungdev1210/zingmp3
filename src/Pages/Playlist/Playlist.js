import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import SongItem from "../../Components/ItemSong/SongItem";
import useClient from "../../Services/Hooks/useClient";
import {
   playerActions,
   playerSelector,
} from "../../Components/Player/playerSlice";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

function Playlist(props) {
   const client = useClient();
   const dispatch = useDispatch();
   const [songs, setSongs] = useState([]);
   const { id } = useParams();

   const { playStatus } = useSelector(playerSelector);

   const { doPlay } = playerActions;

   const getSongs = async () => {
      const res = await client.get(client.playLists + "/" + id);
      if (res.response.ok) {
         setSongs(res.data);
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

   useEffect(() => {
      getSongs();
   }, []);

   return (
      <div className="zing-playList">
         <div className="l-4 m-12 c-12">
            <div className="zing-playList-left">
               <div className="m-5 c-12">
                  <div
                     className={clsx(
                        playStatus === "play" ? "action-play-music" : "",
                        "zing-playlist-img"
                     )}
                  >
                     <div className="zing-playlist-img-rotate">
                        <img src={songs.image} alt="" />
                     </div>
                     <div className="individual-ctn2-song-item-icon zing-playlist-icon-pause" onClick={handlePlay}>
                        <i className="fa-solid fa-play"></i>
                     </div>
                     <div className="individual-ctn2-song-item-icon zing-playlist-icon-play">
                        <img
                           src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                           alt=""
                        />
                     </div>
                  </div>
               </div>
               <div className="m-7 c-12">
                  <div className="zing-playlist-content">
                     <h1 className="zing-playlist-title color-title">
                        {songs.name}
                     </h1>
                     <span className="zing-playlist-des color-small">
                        1k người yêu thích
                     </span>
                     <div className="btn zing-playlist-btn">
                        {playStatus === "pause" ? (
                           <span
                              className="zing-playlist-btn-play"
                              onClick={handlePlay}
                           >
                              <i className="fa-solid fa-play"></i>
                              TIẾP TỤC PHÁT
                           </span>
                        ) : (
                           <span
                              className="zing-playlist-btn-pause"
                              onClick={handlePause}
                           >
                              <i className="fa-solid fa-pause"></i>
                              TẠM DỪNG
                           </span>
                        )}
                     </div>
                     <div className="zing-playList-icon">
                        <span className="zing-playList-favorate">
                           <i className="fa-solid fa-heart" />
                        </span>
                        <span className="zing-playList-selection color-title">
                           <i className="fa-solid fa-ellipsis"></i>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="l-8 m-12 c-12">
            <div className="zing-playList-right">
               <div className="zing-playList-right-header">
                  <span className="song color-small">bài hát</span>
                  <span className="album color-small">album</span>
                  <span className="time color-small">thời gian</span>
               </div>
               <div className="zing-playList-right-body">
                  <SongItem songs={songs.songlists} />
               </div>
            </div>
         </div>
      </div>
   );
}

Playlist.propTypes = {};

export default Playlist;
