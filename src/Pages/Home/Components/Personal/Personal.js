import React from 'react'
import PropTypes from 'prop-types'
import IonIcon from '@reacticons/ionicons'

function Personal(props) {
   return (
      <div className="individual">
         <div className="zing-body-avatar">
            <a href="https://www.facebook.com/duongnguyen321" target="_blank">
               <img
                  className="avatar"
                  src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/294425669_753282749214570_5402023003580552129_n.jpg?stp=c0.33.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AfA6i8Ly4TcAX_UtegU&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCNxrXJ0cVsluHMTb74_BFgh5RhfXg4XJaOnAuWsbC50A&oe=637D1C66"
                  alt=""
               />
            </a>
            <h1 className="color-title">Dương Nguyễn</h1>
         </div>
         <div className="zing-body-selector">
            <div className="list">
               <div className="item color-main zing-body-selector-bgr">
                  <span>tổng quan</span>
               </div>
               <div className="item color-main">
                  <span>bài hát</span>
               </div>
               <div className="item color-main">
                  <span>playlist</span>
               </div>
               <div className="item color-main">
                  <span>nghệ sĩ</span>
               </div>
               <div className="item color-main c-0">
                  <IonIcon
                     name="ellipsis-horizontal-outline"
                     role="img"
                     className="md hydrated"
                     aria-label="ellipsis horizontal outline"
                  />
               </div>
            </div>
         </div>
         <div className="individual-ctn1">
            <div className="individual-ctn1-header">
               <div className="individual-ctn1-header-left">
                  <h1 className="color-title ">Bài Hát</h1>
                  <div className="addPlayList color-main">
                     <div className="checkbox-wrapper" style={{ display: "none" }}>
                        <div className="checkbox">
                           <input type="checkbox" />
                        </div>
                     </div>
                     <div className="btn color-small">Thêm vào Danh Sách Phát</div>
                     <div className="item">
                        <IonIcon
                           name="ellipsis-horizontal-outline"
                           role="img"
                           className="md hydrated"
                           aria-label="ellipsis horizontal outline"
                        />
                     </div>
                  </div>
               </div>
               <div className="individual-ctn1-header-right c-0">
                  <button className="btn color-main individual-btn">
                     <div className="icon">
                        <IonIcon
                           name="cloud-upload-outline"
                           role="img"
                           className="md hydrated"
                           aria-label="cloud upload outline"
                        />
                     </div>
                     <span>TẢI LÊN</span>
                  </button>
                  <button className="btn individual-btn individual-btn-all">
                     <div className="icon">
                        <IonIcon
                           name="play"
                           role="img"
                           className="md hydrated"
                           aria-label="play"
                        />
                     </div>
                     <span>PHÁT TẤT CẢ</span>
                  </button>
               </div>
            </div>
         </div>
         <div className="individual-ctn2">
            <div className="l-4 m-0 c-0">
               <div className="individual-ctn2-left">
                  <img
                     src="..//img/slider/0.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-second"
                  />{" "}
                  <img
                     src="./img/slider/1.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-third"
                  />{" "}
                  <img
                     src="./img/slider/2.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/3.jpg"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/4.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/5.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/6.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/7.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/8.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/9.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/11.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />{" "}
                  <img
                     src="./img/slider/12.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-first"
                  />{" "}
                  <img
                     src="./img/slider/13.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-second"
                  />{" "}
                  <img
                     src="./img/slider/14.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-third"
                  />{" "}
                  <img
                     src="./img/slider/15.webp"
                     alt=""
                     className="individual-ctn2-img individual-ctn2-img-four"
                  />
               </div>
            </div>
            <div className="l-8 m-12 c-12">
               <div className="individual-ctn2-right" style={{ height: 300 }}>
                  <ul className="individual-ctn2-song-list action-add-playlist-mb">
                     {" "}
                     <li className="song-item individual-ctn2-song-item" data-index={0}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={0}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={0}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">CÓ CHƠI CÓ CHỊU</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 KARIK x ONLY C
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">CÓ CHƠI CÓ CHỊU</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={0}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:46</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={1}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={1}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/discover/ctn2/1.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={1}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Waiting For You</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 MONO
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Waiting For You</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={1}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:25</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li
                        className="song-item individual-ctn2-song-item music-color-selection music-color"
                        data-index={2}
                     >
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={2}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img action-pause-music">
                           <img
                              src="https://tse1.mm.bing.net/th?id=OIP.hSgGC0yJ6GeY8IE1GDTW6gHaFi&pid=Api&P=0"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={2}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Cơn Mưa Băng Giá</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Noo Phước Thịnh
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Cơn Mưa Băng Giá</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={2}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:41</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={3}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={3}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://i.ytimg.com/vi/orFNbppc6_0/maxresdefault.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={3}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Em Là Con Thuyền Cô Đơn</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Thái Học
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Em Là Con Thuyền Cô Đơn</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={3}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">05:06</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={4}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={4}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/0.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={4}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Anh Đã Lạc Vào</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Green
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Đại Mèo Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Anh Đã Lạc Vào</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={4}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:27</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={5}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={5}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/1.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={5}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Chạy Về Khóc Với Anh</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Erik
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Duzme Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Chạy Về Khóc Với Anh</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={5}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:05</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={6}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={6}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/2.jpeg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={6}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Sẵn Sàng Yêu Em Đi Thôi</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Woni
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Minh Tú
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Đại Mèo Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Sẵn Sàng Yêu Em Đi Thôi</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={6}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">03:51</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={7}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={7}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://img.theinfluencer.vn/thumb_w/850/uploads/2022/07/oqoFCoJCODsBjBzOkfd6IEpJUkrYnLZjKLM7eBpV.png"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={7}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Ngôi Sao Cô Đơn</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Jack - J97
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Ngôi Sao Cô Đơn</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={7}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:44</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={8}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={8}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://i.ytimg.com/vi/4CCGI83vOVo/maxresdefault.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={8}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Đom Dóm</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Jack - J97
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Đom Dóm</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={8}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">06:21</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={9}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={9}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/3.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={9}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Gieo Quẻ</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Hoàng Thuỳ Linh
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 ĐEN
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Orinn Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Gieo Quẻ</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={9}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:27</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={10}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={10}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/4.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={10}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Vui Lắm Nha</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Hương Ly
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Jombie
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 RIN Music Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Vui Lắm Nha</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={10}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">05:16</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={11}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={11}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/5.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={11}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Lưu Số Em Đi</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Huỳnh Văn
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 V.P. Tiên
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Đại Mèo Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Lưu Số Em Đi</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={11}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:10</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={12}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={12}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/6.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={12}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Như Một Người Dưng</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Nguyễn Thạc Bảo Ngọc
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Như Một Người Dưng</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={12}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">05:05</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={13}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={13}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://icdn.dantri.com.vn/2021/05/29/2-mua-lua-chin-1622224483750.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={13}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Lặng Yên</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Bùi Anh Tuấn ft. Ái Phương
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Lặng Yên</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={13}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:41</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={14}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={14}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="https://i.ytimg.com/vi/EjrIz5UX4Io/maxresdefault.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={14}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Về Bên Anh</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Jack - J97
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Về Bên Anh</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={14}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:21</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={15}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={15}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/7.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={15}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Ôm Nhiều Mộng Mơ</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Phát Huy T4
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Đại Mèo Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Ôm Nhiều Mộng Mơ</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={15}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">03:16</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={16}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={16}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/8.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={16}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Tình Yêu Ngủ Quên</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Hoàng Tôn
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 LyHan
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Orinn Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Tình Yêu Ngủ Quên</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={16}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:27</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={17}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={17}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/9.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={17}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Không Bằng</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Na
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 RIN Music Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Không Bằng</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={17}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">03:23</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={18}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={18}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/10.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={18}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Ai Chung Tình Được Mãi</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Đinh Tùng Huy
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 ACV Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Ai Chung Tình Được Mãi</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={18}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">03:55</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={19}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={19}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/11.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={19}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Cô Đơn Dành Cho Ai</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 NAL
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 LEE KEN
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Orinn Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Cô Đơn Dành Cho Ai</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={19}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">04:45</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={20}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={20}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/12.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={20}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Ánh mắt ta chạm nhau</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Ngô Lan Hương
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Đại Mèo remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Ánh mắt ta chạm nhau</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={20}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">06:01</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={21}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={21}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/13.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={21}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">2 Phút Hơn</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Phao
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 KAIZ Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">2 Phút Hơn</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={21}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">05:02</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
                     <li className="song-item individual-ctn2-song-item" data-index={22}>
                        <div
                           className="checkbox-wrapper color-main "
                           data-index={22}
                           style={{ display: "none" }}
                        >
                           <IonIcon
                              className="checkBox-icon-music md hydrated"
                              name="musical-notes-outline"
                              role="img"
                              aria-label="musical notes outline"
                           />
                           <div className="checkbox">
                              <input type="checkbox" />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-item-img">
                           <img
                              src="./img/songs/14.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div className="individual-ctn2-song-item-icon" data-index={22}>
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title">
                           <span className="color-title">Là Ai Từ Bỏ Là Ai Vô Tình</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Hương Ly
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 Jombie (G5R)
                              </a>
                              ,
                              <a className="singer color-small" href="">
                                 {" "}
                                 RIN Music Remix
                              </a>
                           </small>
                        </div>
                        <div className="zingchart-body-main  color-small c-0">
                           <span className="title">Là Ai Từ Bỏ Là Ai Vô Tình</span>
                           <span className="singer">(singer)</span>
                        </div>
                        <div className="individual-ctn2-song-right color-main">
                           <div className="individual-ctn2-song-right-icon">
                              <div className="icon-video c-0 m-0">
                                 <IonIcon
                                    name="videocam"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="videocam"
                                 />
                              </div>
                              <div className="icon-favorite color-small " data-index={22}>
                                 <div className="no-favorite icon action-hover">
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </div>
                                 <div className="yes-favorite icon action-hover">
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="time">
                              <div className="song-time">03:25</div>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                     </li>{" "}
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
                              <img src="./img/discover/ctn6/f1.webp" alt="" />
                              <div className="individual-ctn3-modal">
                                 <div className="individual-ctn3-favorite action-favorite">
                                    <i className="fa-solid fa-heart" />
                                 </div>
                                 <div className="individual-ctn3-play">
                                    <i className="fa-solid fa-play" />
                                 </div>
                                 <IonIcon
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
                              <img src="./img/discover/ctn6/f3.webp" alt="" />
                              <div className="individual-ctn3-modal">
                                 <div className="individual-ctn3-favorite action-favorite">
                                    <i className="fa-solid fa-heart" />
                                 </div>
                                 <div className="individual-ctn3-play">
                                    <i className="fa-solid fa-play" />
                                 </div>
                                 <IonIcon
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
                              <img src="./img/discover/ctn6/0.webp" alt="" />
                              <div className="individual-ctn3-modal">
                                 <div className="individual-ctn3-favorite action-favorite">
                                    <i className="fa-solid fa-heart" />
                                 </div>
                                 <div className="individual-ctn3-play">
                                    <i className="fa-solid fa-play" />
                                 </div>
                                 <IonIcon
                                    name="ellipsis-horizontal-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="ellipsis horizontal outline"
                                 />
                              </div>
                           </div>
                        </div>
                        <h1 className="individual-ctn3-item-title color-main">Lạc Trôi</h1>
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
                              <img src="./img/playlist/1601543857865_640.jpg" alt="" />
                              <div className="individual-ctn3-modal">
                                 <div className="individual-ctn3-favorite action-favorite">
                                    <i className="fa-solid fa-heart" />
                                 </div>
                                 <div className="individual-ctn3-play">
                                    <i className="fa-solid fa-play" />
                                 </div>
                                 <IonIcon
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
         <div className="individual-ctn4">
            <div className="individual-ctn3-header">
               <h1 className="color-title">Mv</h1>
            </div>
            <div className="l-12 m-12 c-12">
               <div className="individual-ctn4-Body">
                  <div className="l-4 m-6 c-12">
                     <div className="individual-ctn4-item">
                        <div className="individual-ctn4-hover">
                           <div className="individual-ctn4-img">
                              <img
                                 src="https://i.ytimg.com/vi/-vtBgNxMyZI/maxresdefault.jpg"
                                 alt=""
                              />
                              <div className="individual-ctn2-song-item-icon modal-icon-play">
                                 <IonIcon
                                    name="play"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="play"
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="individual-ctn4-infoSong">
                           <div className="individual-ctn4-infoSong-img">
                              <img
                                 src="https://i.ytimg.com/vi/-vtBgNxMyZI/maxresdefault.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="individual-ctn4-infoSong-des">
                              <h1 className="color-main">Chạy Ngay Đi</h1>
                              <span className="color-small">Sơn Tùng Mtp</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="l-4 m-6 c-12">
                     <div className="individual-ctn4-item">
                        <div className="individual-ctn4-hover">
                           <div className="individual-ctn4-img">
                              <img
                                 src="https://photo-zmp3.zmdcdn.me/banner/4/3/b/1/43b15ea8ad5b4f7d92f9142e32b3978a.jpg"
                                 alt=""
                              />
                              <div className="individual-ctn2-song-item-icon modal-icon-play">
                                 <IonIcon
                                    name="play"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="play"
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="individual-ctn4-infoSong">
                           <div className="individual-ctn4-infoSong-img">
                              <img
                                 src="https://photo-zmp3.zmdcdn.me/banner/4/3/b/1/43b15ea8ad5b4f7d92f9142e32b3978a.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="individual-ctn4-infoSong-des">
                              <h1 className="color-main">Sa Mưa Giông</h1>
                              <span className="color-small">Hoài Lâm</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="l-4 m-6 c-12">
                     <div className="individual-ctn4-item">
                        <div className="individual-ctn4-hover">
                           <div className="individual-ctn4-img">
                              <img
                                 src="https://photo-zmp3.zmdcdn.me/banner/8/7/f/6/87f675f710d21eb3c90729258da7c3cc.jpg"
                                 alt=""
                              />
                              <div className="individual-ctn2-song-item-icon modal-icon-play">
                                 <IonIcon
                                    name="play"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="play"
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="individual-ctn4-infoSong">
                           <div className="individual-ctn4-infoSong-img">
                              <img
                                 src="https://photo-zmp3.zmdcdn.me/banner/8/7/f/6/87f675f710d21eb3c90729258da7c3cc.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="individual-ctn4-infoSong-des">
                              <h1 className="color-main">Ngôi Sao Cô Đơn</h1>
                              <span className="color-small">Jack</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="individual-ctn5">
            <div className="individual-ctn3-header">
               <h1 className="color-title">Nghệ sĩ</h1>
            </div>
            <div className="individual-ctn5-body">
               {" "}
               <div className="l-2-4 m-2-4 c-6">
                  <div className="individual-ctn5-item">
                     <div className="individual-ctn5-hover">
                        <div className="individual-ctn5-img">
                           <img src="./img/listSinger/jack.png" alt="" />
                           <div className="individual-ctn2-song-item-icon modal-icon-play">
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="individual-ctn5-info color-main">
                        <h1>Jack</h1>
                        <span className="color-small">1 triệu quan tâm</span>
                        <button className="btn color-small">
                           <IonIcon
                              name="shuffle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="shuffle outline"
                           />
                           GÓC NHẠC
                        </button>
                     </div>
                  </div>
               </div>{" "}
               <div className="l-2-4 m-2-4 c-6">
                  <div className="individual-ctn5-item">
                     <div className="individual-ctn5-hover">
                        <div className="individual-ctn5-img">
                           <img src="./img/listSinger/huong-ly.png" alt="" />
                           <div className="individual-ctn2-song-item-icon modal-icon-play">
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="individual-ctn5-info color-main">
                        <h1>Hương Ly</h1>
                        <span className="color-small">190k quan tâm</span>
                        <button className="btn color-small">
                           <IonIcon
                              name="shuffle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="shuffle outline"
                           />
                           GÓC NHẠC
                        </button>
                     </div>
                  </div>
               </div>{" "}
               <div className="l-2-4 m-2-4 c-6">
                  <div className="individual-ctn5-item">
                     <div className="individual-ctn5-hover">
                        <div className="individual-ctn5-img">
                           <img src="./img/listSinger/karik.png" alt="" />
                           <div className="individual-ctn2-song-item-icon modal-icon-play">
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="individual-ctn5-info color-main">
                        <h1>Karik</h1>
                        <span className="color-small">600k quan tâm</span>
                        <button className="btn color-small">
                           <IonIcon
                              name="shuffle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="shuffle outline"
                           />
                           GÓC NHẠC
                        </button>
                     </div>
                  </div>
               </div>{" "}
               <div className="l-2-4 m-2-4 c-6">
                  <div className="individual-ctn5-item">
                     <div className="individual-ctn5-hover">
                        <div className="individual-ctn5-img">
                           <img src="./img/listSinger/onlyc.png" alt="" />
                           <div className="individual-ctn2-song-item-icon modal-icon-play">
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="individual-ctn5-info color-main">
                        <h1>Onlyc</h1>
                        <span className="color-small">120k quan tâm</span>
                        <button className="btn color-small">
                           <IonIcon
                              name="shuffle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="shuffle outline"
                           />
                           GÓC NHẠC
                        </button>
                     </div>
                  </div>
               </div>{" "}
               <div className="l-2-4 m-2-4 c-6">
                  <div className="individual-ctn5-item">
                     <div className="individual-ctn5-hover">
                        <div className="individual-ctn5-img">
                           <img src="./img/listSinger/mr-siro.png" alt="" />
                           <div className="individual-ctn2-song-item-icon modal-icon-play">
                              <IonIcon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="individual-ctn5-info color-main">
                        <h1>Mr-siro</h1>
                        <span className="color-small">1 triệu quan tâm</span>
                        <button className="btn color-small">
                           <IonIcon
                              name="shuffle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="shuffle outline"
                           />
                           GÓC NHẠC
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


   )
}

Personal.propTypes = {}

export default Personal
