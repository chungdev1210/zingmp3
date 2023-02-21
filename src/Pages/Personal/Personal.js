import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import { NavLink } from "react-router-dom";
import SongItem from "../../Components/ItemSong/SongItem";
import useClient from "../../Services/Hooks/useClient";

const navLists = [
   {
      id: 1,
      title: "Tổng quan",
      path: "/"
   },
   {
      id: 2,
      title: "Bài hát",
      path: "/song"
   },
   {
      id: 3,
      title: "Playlist",
      path: "/playlist"
      
   },
   {
      id: 4,
      title: "Nghệ sĩ",
      path: "/singer"
      
   },
];
function Personal(props) {
   const client  = useClient();
   const [songs, setSongs] = useState([]);


   const getSongs = async () => {
      const res = await client.get(client.songs);
      if(res.response.ok) {
         setSongs(res.data);
      }
   }

   useEffect(() => {
      getSongs()
   }, [])

   return (
      <>
         <div className="indiviual">
            <div className="zing-body-avatar">
               <a href="https://www.facebook.com/anh.chung1210" target="_blank">
                  <img
                     className="avatar"
                     src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/324875208_561075959251777_1794226441279383977_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_ohc=lGNVD-QsN4oAX9ewPy6&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDLIATxSPugXfaYqFqgsX9RVNQ5rsSSDaCkIxTqgiwY3g&oe=63DEC58A"
                     alt=""
                  />
               </a>
               <h1 className="color-title">Nguyen Van Chung</h1>
            </div>
            <div className="zing-body-selector">
               <div className="list">
                  {navLists.map(({ id, title }) => {
                     return (
                        <div key={id} className="item color-main">
                           <span>{title}</span>
                        </div>
                     );
                  })}
                  <div className="item color-main c-0">
                     <ion-icon>
                        <IonIcon name="ellipsis-horizontal-outline" />
                     </ion-icon>
                  </div>
               </div>
            </div>
            <div className="individual-ctn1">
               <div className="individual-ctn1-header">
                  <div className="individual-ctn1-header-left ">
                     <h1 className="color-title ">Bài Hát</h1>
                     <div className="addPlayList color-main">
                        <div className="checkbox-wrapper">
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="btn color-small">
                           Thêm vào Danh Sách Phát
                        </div>
                        <div className="item">
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
                  <div className="individual-ctn1-header-right c-0">
                     <button className="btn color-main individual-btn">
                        <div className="icon">
                           <ion-icon>
                              <IonIcon
                                 name="cloud-upload-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="cloud upload outline"
                              />
                           </ion-icon>
                        </div>
                        <span>TẢI LÊN</span>
                     </button>
                     <button className="btn  individual-btn individual-btn-all">
                        <div className="icon">
                           <ion-icon>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </ion-icon>
                        </div>
                        <span>PHÁT TẤT CẢ</span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="individual-ctn2">
               <div className="m-12 c-12">
                  <div className="individual-ctn2-right">
                     <ul className="individual-ctn2-song-list">
                        <SongItem songs={songs}/>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="individual-ctn3">
               <div className="individual-ctn3-header ">
                  <h1 className="color-title">Playlist</h1>
               </div>
               <div className="individual-ctn3-body">
                  <li className="l-2-4 m-0 c-0">
                     <div className="individual-ctn3-item-add">
                        <div className="individual-ctn3-consists color-main m-0">
                           <div className="newList-icon">
                              <i className="fa-solid fa-plus" />
                           </div>
                           <h1>Tạo Playlist mới</h1>
                        </div>
                     </div>
                  </li>
                  <li className="l-2-4 m-6 c-6">
                     <div className="individual-ctn3-item">
                        <div className="individual-ctn3-consis">
                           <div className="individual-ctn3-hover">
                              <div className="individual-ctn3-item-img">
                                 <img
                                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/7/b/3/37b399152caaa40571278cda7adf2af8.jpg"
                                    alt=""
                                 />
                                 <div className="individual-ctn3-modal">
                                    <div className="individual-ctn3-favorite action-favorite">
                                       <i className="fa-solid fa-heart" />
                                    </div>
                                    <div className="individual-ctn3-play">
                                       <i className="fa-solid fa-play" />
                                    </div>
                                    <ion-icon
                                       name="ellipsis-horizontal-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="ellipsis horizontal outline"
                                    />
                                 </div>
                              </div>
                           </div>
                           <h1 className="individual-ctn3-item-title color-main">
                              Nhạc Trẻ Remix
                           </h1>
                           <small className="individual-ctn3-item-name color-small">
                              Zing MP3
                           </small>
                        </div>
                     </div>
                  </li>
                  <li className="l-2-4 m-6 c-6">
                     <div className="individual-ctn3-item">
                        <div className="individual-ctn3-consis">
                           <div className="individual-ctn3-hover">
                              <div className="individual-ctn3-item-img">
                                 <img
                                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/5/a/a55ad75f2e3b2fe896cfd2e6fd61e566.jpg"
                                    alt=""
                                 />
                                 <div className="individual-ctn3-modal">
                                    <div className="individual-ctn3-favorite action-favorite">
                                       <i className="fa-solid fa-heart" />
                                    </div>
                                    <div className="individual-ctn3-play">
                                       <i className="fa-solid fa-play" />
                                    </div>
                                    <ion-icon
                                       name="ellipsis-horizontal-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="ellipsis horizontal outline"
                                    />
                                 </div>
                              </div>
                           </div>
                           <h1 className="individual-ctn3-item-title color-main">
                              Tổng Hợp Những Ca Khúc Hay Nhất
                           </h1>
                           <small className="individual-ctn3-item-name color-small">
                              Zing MP3
                           </small>
                        </div>
                     </div>
                  </li>
                  <li className="l-2-4 m-6 c-6">
                     <div className="individual-ctn3-item">
                        <div className="individual-ctn3-consis">
                           <div className="individual-ctn3-hover">
                              <div className="individual-ctn3-item-img">
                                 <img
                                    src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/covers/f/a/fa8586e9353a5f80c9d22c63a88d222b_1504987991.jpg"
                                    alt=""
                                 />
                                 <div className="individual-ctn3-modal">
                                    <div className="individual-ctn3-favorite action-favorite">
                                       <i className="fa-solid fa-heart" />
                                    </div>
                                    <div className="individual-ctn3-play">
                                       <i className="fa-solid fa-play" />
                                    </div>
                                    <ion-icon
                                       name="ellipsis-horizontal-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="ellipsis horizontal outline"
                                    />
                                 </div>
                              </div>
                           </div>
                           <h1 className="individual-ctn3-item-title color-main">
                              Lạc Trôi
                           </h1>
                           <small className="individual-ctn3-item-name color-small">
                              Zing MP3
                           </small>
                        </div>
                     </div>
                  </li>
                  <li className="l-2-4 m-6 c-6">
                     <div className="individual-ctn3-item">
                        <div className="individual-ctn3-consis">
                           <div className="individual-ctn3-hover">
                              <div className="individual-ctn3-item-img">
                                 <img
                                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg"
                                    alt=""
                                 />
                                 <div className="individual-ctn3-modal">
                                    <div className="individual-ctn3-favorite action-favorite">
                                       <i className="fa-solid fa-heart" />
                                    </div>
                                    <div className="individual-ctn3-play">
                                       <i className="fa-solid fa-play" />
                                    </div>
                                    <ion-icon
                                       name="ellipsis-horizontal-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="ellipsis horizontal outline"
                                    />
                                 </div>
                              </div>
                           </div>
                           <h1 className="individual-ctn3-item-title color-main">
                              Hoa Hải Đường
                           </h1>
                           <small className="individual-ctn3-item-name color-small">
                              Zing MP3
                           </small>
                        </div>
                     </div>
                  </li>
               </div>
            </div>
         </div>
      </>
   );
}

Personal.propTypes = {};

export default Personal;
