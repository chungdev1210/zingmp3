import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import { useDispatch, useSelector } from "react-redux";
import { exploreSelector, getPlayLists, getSongsNew } from "./exploreSlice";
import ItemPlayList from "../../Components/ItemPlayList/ItemPlayList";
import ItemSong from "../../Components/ItemSong/ItemSong";


function Explore(props) {

   const dispatch = useDispatch();
   const data = useSelector(exploreSelector);

   useEffect(() => {
      dispatch(getPlayLists());
      dispatch(getSongsNew());
   }, []);

   const renderListsYoung = () => {
      if (data.playLists.length > 0) {
         let jsx = [];
         for (let index in data.playLists[0].playlists) {
            if (index <= 4) {
               const item = (
                  <ItemPlayList key={index} {...data.playLists[0].playlists[index]}/>
               );
               jsx.push(item);
            }
         }
         return jsx;
      }
   };

   const renderListsNew = () => {
      if (data.playLists.length > 0) {
         let jsx = [];
         for (let index in data.playLists[1].playlists) {
            if (index <= 4) {
               const item = (
                  <ItemPlayList key={index} {...data.playLists[1].playlists[index]}/>
               );
               jsx.push(item);
            }
         }
         return jsx;
      }
   };


   return (
      <div className="explore__app">
         <div className="discover">
            <div className="discover-ctn1-mb l-0 m-0">
               <div className="discover-ctn1-mb-img"></div>
            </div>
            <div className="discover-ctn1 c-0">
               <div className="discover-ctn1-list-img">
                  <div className="discover-ctn1-img discover-ctn1-img-four">
                     <img
                        src="https://photo-zmp3.zmdcdn.me/banner/8/b/a/8/8ba847cc792a0495ccb0ab18be1ebf48.jpg"
                        alt=""
                     />
                  </div>
                  <div className="discover-ctn1-img discover-ctn1-img-first">
                     <img
                        src="https://photo-zmp3.zmdcdn.me/banner/8/b/a/8/8ba847cc792a0495ccb0ab18be1ebf48.jpg"
                        alt=""
                     />
                  </div>
                  <div className="discover-ctn1-img discover-ctn1-img-first">
                     <img
                        src="https://photo-zmp3.zmdcdn.me/banner/8/b/a/8/8ba847cc792a0495ccb0ab18be1ebf48.jpg"
                        alt=""
                     />
                  </div>
               </div>
               <div className="icon icon-left m-0 discover-ctn1-left action-hover color-main">
                  <iom-icon>
                     <IonIcon name="chevron-back-outline" />
                  </iom-icon>
               </div>
               <div className="icon icon-right m-0 discover-ctn1-right action-hover color-main">
                  <ion-icon>
                     <IonIcon name="chevron-forward-outline" />
                  </ion-icon>
               </div>
            </div>
            <div className="discover-ctn2">
               <div className="discover-ctn2-header">
                  <h1 className="color-title">Mới Phát Hành</h1>
                  <div className="discover-ctn2-selection">
                     <div className="discover-ctn2-btn">
                        <div className="btn btn-discover2-songs color-main action-btn">
                           BÀI HÁT{" "}
                        </div>
                        <div className="btn btn-discover2-album color-main">
                           ALBUM
                        </div>
                     </div>
                     <div className="discover-ctn2-all color-small">
                        <span>TẤT CẢ</span>
                        <i className="fa-solid fa-chevron-right" />
                     </div>
                  </div>
               </div>
               <div className="l-12 m-12 c-12">
                  <div className="discover-ctn2-body">
                     <ItemSong songs={data.songs}/>
                  </div>
               </div>
            </div>
            <div className="discover-ctn3">
               <div className="discover-ctn3-header color-title">
                  Có thể bạn muốn nghe
               </div>
               <div className="l-12 m-12 c-12">
                  <div className="discover-ctn3-body">{renderListsYoung()}</div>
               </div>
            </div>
            <div className="discover-ctn4">
               <div className="discover-ctn3-header discover-ctn4-header color-title">
                  Nhạc Mới Mỗi Ngày
               </div>
               <div className="l-12">
                  <div className="discover-ctn4-body">{renderListsNew()}</div>
               </div>
            </div>
            <div className="discover-ctn5 c-0">
               <div className="discover-ctn5-header">
                  <li className="l-4 m-4">
                     <div className="discover-ctn5-img">
                        <img
                           src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg"
                           alt=""
                        />
                     </div>
                  </li>
                  <li className="l-4 m-4">
                     <div className="discover-ctn5-img">
                        <img
                           src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg"
                           alt=""
                        />
                     </div>
                  </li>
                  <li className="l-4 m-4">
                     <div className="discover-ctn5-img">
                        <img
                           src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg"
                           alt=""
                        />
                     </div>
                  </li>
               </div>
               <div className="l-12 m-12">
                  <div className="discover-ctn5-body">
                     <div className="discover-ctn5-main">
                        <div className="discover-ctn5-list-singer">
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
                                 alt=""
                              />
                           </div>
                           <div className="discover-ctn5-singer-img l-2-4 m-3">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="icon icon-left action-icon-change color-main m-0 c-0">
                        <ion-icon>
                           <IonIcon
                              name="chevron-back-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="chevron back outline"
                           />
                        </ion-icon>
                     </div>
                     <div className="icon icon-right color-main m-0 c-0">
                        <ion-icon>
                           <IonIcon
                              name="chevron-forward-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="chevron forward outline"
                           />
                        </ion-icon>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

Explore.propTypes = {};
export default Explore;
