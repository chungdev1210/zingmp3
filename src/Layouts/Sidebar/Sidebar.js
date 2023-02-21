import React, { useState } from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const sidebars = [
   {
      id: 1,
      nameIcon: "play-outline",
      name: "Cá nhân",
      path: "/mymusic",
   },
   {
      id: 2,
      nameIcon: "disc-outline",
      name: "Khám phá",
      path: "/",
   },
   {
      id: 3,
      nameIcon: "pie-chart-outline",
      name: "Zing Chart",
      path: "/zing-chart",
   },
   {
      id: 4,
      nameIcon: "radio-outline",
      name: "Radio",
      path: "/radio",
   },
   {
      id: 5,
      nameIcon: "podium-outline",
      name: "Theo dõi",
      path: "/theodoi",
   },
];
const zingNavar = [
   {
      id: 1,
      nameIcon: "musical-notes-outline",
      name: "Nhạc mới",
      path: "/nhacmoi",
   },
   {
      id: 2,
      nameIcon: "images-outline",
      name: "Thể loại",
      path: "/hub",
   },
   {
      id: 3,
      nameIcon: "star-outline",
      name: "Top 100",
      path: "/top100",
   },
   {
      id: 4,
      nameIcon: "save-outline",
      name: "MV",
      path: "/mv",
   },
];

function Sidebar(props) {
   return (
      <div className="zing-sidebar zing-sidebar-mb c-0">
         <div className="zing-logo c-0">
            <div className="zing-logo-pc ">
               <img
                  src="https://sona7ns.github.io/zingmp3.vn/assets/img/sidebar-icon/logo/logo-dark.svg"
                  alt=""
               />
            </div>
            <div className="zing-logo-mb l-0">
               <img
                  src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.35/static/media/icon_zing_mp3_60.f6b51045.svg"
                  alt=""
               />
            </div>
         </div>
         <div className="zing-navbar-menu c-0">
            {sidebars.map((sidebar) => {
               return (
                  <div key={sidebar.id} className="zing-navbar-item color-main">
                     <NavLink to={sidebar.path}>
                        <ion-icon>
                           <IonIcon name={sidebar.nameIcon} />
                        </ion-icon>
                        <h1 className="title ">{sidebar.name}</h1>
                     </NavLink>
                  </div>
               );
            })}
            <div className="sidebar-divide" />
         </div>
         {/* ======================= */}
         <div className="zing-navar">
            <div className="zing-navbar-menu">
               {zingNavar.map((zingnav) => {
                  return (
                     <div key={zingnav.id} className="zing-navbar-item color-main">
                        <NavLink to={zingnav.path}>
                           <ion-icon>
                              <IonIcon name={zingnav.nameIcon} />
                           </ion-icon>
                           <h1 className="title ">{zingnav.name}</h1>
                        </NavLink>
                     </div>
                  );
               })}

               <div className="zing-vip m-0">
                  <span className="zing-vip-title color-main">
                     Nghe nhạc không quảng cáo cùng kho nhạc VIP
                  </span>
                  <button className="btn btn-lever">NÂNG CẤP VIP</button>
               </div>
               <ul className="zing-library-list">
                  <li className="zing-library-item color-main m-0">
                     <h1 className="zing-library-title color-main ">
                        Thư viện
                     </h1>
                  </li>
                  <li className="zing-library-item color-main">
                     <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                        alt=""
                     />
                     <span className="title">Bài Hát</span>
                  </li>
                  <li className="zing-library-item color-main">
                     <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                        alt=""
                     />
                     <span className="title">Playlist</span>
                  </li>
                  <li className="zing-library-item color-main">
                     <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
                        alt=""
                     />
                     <span className="title">Gần Đây</span>
                  </li>
               </ul>
            </div>
         </div>
         {/* =============================== */}
         <div className="zing-create-list m-0 color-main">
            <ion-icon>
               <IonIcon
                  className="m-0 md hydrated"
                  name="add-outline"
                  role="img"
                  aria-label="add outline"
               />
            </ion-icon>
            <span className="m-0">Tạo playlist mới</span>
         </div>
         <div className="expanded l-0">
            <div className="expanded-left  l-0 color-main">
               <i className="fa-solid fa-chevron-left" />
            </div>
            <div className="expanded-right l-0 color-main ">
               <i className="fa-solid fa-chevron-right" />
            </div>
         </div>
      </div>
   );
}

Sidebar.propTypes = {};

export default Sidebar;
