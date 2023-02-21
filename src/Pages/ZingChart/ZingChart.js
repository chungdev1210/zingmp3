import React from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";

function ZingChart(props) {
   return (
      <div className="zingchartCtn">
         <div className="zingchart-header">
            <h1 className="name-zingchart color-title">#Zingchart</h1>
            <span className="zingchartCtn-play">
               <ion-icon>
                  <IonIcon
                     name="play"
                     role="img"
                     className="md hydrated"
                     aria-label="play"
                  />
               </ion-icon>
            </span>
         </div>
         <div className="zingchart-body">
            <div className="zingchart-body-list zingchart-body-list-height zingchart-height">
               <li className="song-item zingchart-body-item" data-index={0}>
                  <h1
                     className="zingchart-number
                   zingchart-body-no1"
                  >
                     1
                  </h1>
                  <h1 className="zingchart-body-icon color-small">
                     <i className="fa-solid fa-minus" />
                  </h1>
                  <div className="zingchart-body-ctn">
                     <div className="zingchart-body-left">
                        <div className="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                           <img
                              src="https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div
                              className="individual-ctn2-song-item-icon"
                              data-index={0}
                           >
                              <ion-icon>
                                 <IonIcon
                                    name="play"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="play"
                                 />
                              </ion-icon>
                           </div>
                           <div className="icon-play-song icon-play-song-top ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title zingchart ">
                           <span className="color-title">CÓ CHƠI CÓ CHỊU</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 KARIK x ONLY C
                              </a>
                           </small>
                        </div>
                     </div>
                     <div className="zingchart-body-main  color-small c-0">
                        <span className="title">CÓ CHƠI CÓ CHỊU</span>
                        <span className="singer">(singer)</span>
                     </div>
                     <div className="zingchart-body-right">
                        <div className="zingchart-body-right-icon">
                           <div className="zingchart-icon icon-mic color-title">
                              <i className="fa-sharp fa-solid fa-microphone" />
                           </div>
                           <div
                              className="icon-favorite color-small "
                              data-index={0}
                           >
                              <div className="no-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon>
                                    <IonIcon
                                       name="heart-outline"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart outline"
                                    />
                                 </ion-icon>
                              </div>
                              <div className="yes-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon>
                                    <IonIcon
                                       name="heart"
                                       role="img"
                                       className="md hydrated"
                                       aria-label="heart"
                                    />
                                 </ion-icon>
                              </div>
                           </div>
                           <div className="zingchart-icon color-title c-0">
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
                        <span className="zingchart-song-time color-small">
                           04:46
                        </span>
                     </div>
                  </div>
               </li>
               <li className="song-item zingchart-body-item" data-index={1}>
                  <h1
                     className="zingchart-number
                   zingchart-body-no2"
                  >
                     2
                  </h1>
                  <h1 className="zingchart-body-icon color-small">
                     <i className="fa-solid fa-minus" />
                  </h1>
                  <div className="zingchart-body-ctn">
                     <div className="zingchart-body-left">
                        <div className="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                           <img
                              src="./img/discover/ctn2/1.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div
                              className="individual-ctn2-song-item-icon"
                              data-index={1}
                           >
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song icon-play-song-top ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title zingchart ">
                           <span className="color-title">Waiting For You</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 MONO
                              </a>
                           </small>
                        </div>
                     </div>
                     <div className="zingchart-body-main  color-small c-0">
                        <span className="title">Waiting For You</span>
                        <span className="singer">(singer)</span>
                     </div>
                     <div className="zingchart-body-right">
                        <div className="zingchart-body-right-icon">
                           <div className="zingchart-icon icon-mic color-title">
                              <i className="fa-sharp fa-solid fa-microphone" />
                           </div>
                           <div
                              className="icon-favorite color-small "
                              data-index={1}
                           >
                              <div className="no-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart outline"
                                 />
                              </div>
                              <div className="yes-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart"
                                 />
                              </div>
                           </div>
                           <div className="zingchart-icon color-title c-0">
                              <ion-icon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                        <span className="zingchart-song-time color-small">
                           04:25
                        </span>
                     </div>
                  </div>
               </li>
               <li className="song-item zingchart-body-item" data-index={2}>
                  <h1
                     className="zingchart-number
                   zingchart-body-no3"
                  >
                     3
                  </h1>
                  <h1 className="zingchart-body-icon color-small">
                     <i className="fa-solid fa-minus" />
                  </h1>
                  <div className="zingchart-body-ctn">
                     <div className="zingchart-body-left">
                        <div className="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                           <img
                              src="https://tse1.mm.bing.net/th?id=OIP.hSgGC0yJ6GeY8IE1GDTW6gHaFi&pid=Api&P=0"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div
                              className="individual-ctn2-song-item-icon"
                              data-index={2}
                           >
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song icon-play-song-top ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title zingchart ">
                           <span className="color-title">Cơn Mưa Băng Giá</span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Noo Phước Thịnh
                              </a>
                           </small>
                        </div>
                     </div>
                     <div className="zingchart-body-main  color-small c-0">
                        <span className="title">Cơn Mưa Băng Giá</span>
                        <span className="singer">(singer)</span>
                     </div>
                     <div className="zingchart-body-right">
                        <div className="zingchart-body-right-icon">
                           <div className="zingchart-icon icon-mic color-title">
                              <i className="fa-sharp fa-solid fa-microphone" />
                           </div>
                           <div
                              className="icon-favorite color-small "
                              data-index={2}
                           >
                              <div className="no-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart outline"
                                 />
                              </div>
                              <div className="yes-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart"
                                 />
                              </div>
                           </div>
                           <div className="zingchart-icon color-title c-0">
                              <ion-icon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                        <span className="zingchart-song-time color-small">
                           04:41
                        </span>
                     </div>
                  </div>
               </li>
               <li className="song-item zingchart-body-item" data-index={3}>
                  <h1
                     className="zingchart-number
                   "
                  >
                     4
                  </h1>
                  <h1 className="zingchart-body-icon color-small">
                     <i className="fa-solid fa-minus" />
                  </h1>
                  <div className="zingchart-body-ctn">
                     <div className="zingchart-body-left">
                        <div className="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                           <img
                              src="https://i.ytimg.com/vi/orFNbppc6_0/maxresdefault.jpg"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div
                              className="individual-ctn2-song-item-icon"
                              data-index={3}
                           >
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song icon-play-song-top ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title zingchart ">
                           <span className="color-title">
                              Em Là Con Thuyền Cô Đơn
                           </span>
                           <small className="color-small">
                              <a className="singer color-small" href="">
                                 Thái Học
                              </a>
                           </small>
                        </div>
                     </div>
                     <div className="zingchart-body-main  color-small c-0">
                        <span className="title">Em Là Con Thuyền Cô Đơn</span>
                        <span className="singer">(singer)</span>
                     </div>
                     <div className="zingchart-body-right">
                        <div className="zingchart-body-right-icon">
                           <div className="zingchart-icon icon-mic color-title">
                              <i className="fa-sharp fa-solid fa-microphone" />
                           </div>
                           <div
                              className="icon-favorite color-small "
                              data-index={3}
                           >
                              <div className="no-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart outline"
                                 />
                              </div>
                              <div className="yes-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart"
                                 />
                              </div>
                           </div>
                           <div className="zingchart-icon color-title c-0">
                              <ion-icon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                        <span className="zingchart-song-time color-small">
                           05:06
                        </span>
                     </div>
                  </div>
               </li>
               <li className="song-item zingchart-body-item" data-index={4}>
                  <h1
                     className="zingchart-number
                   "
                  >
                     5
                  </h1>
                  <h1 className="zingchart-body-icon color-small">
                     <i className="fa-solid fa-minus" />
                  </h1>
                  <div className="zingchart-body-ctn">
                     <div className="zingchart-body-left">
                        <div className="individual-ctn2-song-item-img zingchart-body-left-song-item-img">
                           <img
                              src="./img/songs/0.webp"
                              alt=""
                              className="individual-ctn2-song-img"
                           />
                           <div
                              className="individual-ctn2-song-item-icon"
                              data-index={4}
                           >
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </div>
                           <div className="icon-play-song icon-play-song-top ">
                              <img
                                 src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="individual-ctn2-song-title zingchart ">
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
                     </div>
                     <div className="zingchart-body-main  color-small c-0">
                        <span className="title">Anh Đã Lạc Vào</span>
                        <span className="singer">(singer)</span>
                     </div>
                     <div className="zingchart-body-right">
                        <div className="zingchart-body-right-icon">
                           <div className="zingchart-icon icon-mic color-title">
                              <i className="fa-sharp fa-solid fa-microphone" />
                           </div>
                           <div
                              className="icon-favorite color-small "
                              data-index={4}
                           >
                              <div className="no-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart outline"
                                 />
                              </div>
                              <div className="yes-favorite zingchart-icon icon-tym action-hover">
                                 <ion-icon
                                    name="heart"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="heart"
                                 />
                              </div>
                           </div>
                           <div className="zingchart-icon color-title c-0">
                              <ion-icon
                                 name="ellipsis-horizontal-outline"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="ellipsis horizontal outline"
                              />
                           </div>
                        </div>
                        <span className="zingchart-song-time color-small">
                           04:27
                        </span>
                     </div>
                  </div>
               </li>
            </div>
            <div className="btn btn-top-100 color-title">Xem Top 100</div>
         </div>
         <div className="l-12 c-12 ">
            <div className="zingchart-footer">
               <h1 className="zingchart-footer-topic color-title">
                  Bảng Xếp Hạng Tuần
               </h1>
               <div className="zingchart-footer-body">
                  <div className="l-4 m-6 c-12">
                     <div className="zingchart-footer-ctn zingchart-footer-ctn1">
                        <div className="zingchart-footer-header">
                           <h1 className="color-title">Việt Nam</h1>
                           <span className="color-main zingchartCtn-play">
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </span>
                        </div>
                        <div className="zingchart-footer-list">
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={10}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no1"
                              >
                                 1
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/4.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={10}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Vui Lắm Nha
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Hương Ly
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Jombie
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             RIN Music Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
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
                                    <span className="zingchart-song-time color-small">
                                       05:16
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={11}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no2"
                              >
                                 2
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/5.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={11}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Lưu Số Em Đi
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Huỳnh Văn
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             V.P. Tiên
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Đại Mèo Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       04:10
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={12}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no3"
                              >
                                 3
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/6.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={12}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Như Một Người Dưng
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Nguyễn Thạc Bảo Ngọc
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       05:05
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={13}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 4
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="https://icdn.dantri.com.vn/2021/05/29/2-mua-lua-chin-1622224483750.jpg"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={13}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Lặng Yên
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Bùi Anh Tuấn ft. Ái Phương
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       04:41
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={14}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 5
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="https://i.ytimg.com/vi/EjrIz5UX4Io/maxresdefault.jpg"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={14}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Về Bên Anh
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Jack - J97
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       04:21
                                    </span>
                                 </div>
                              </div>
                           </li>
                        </div>
                        <div className="btn btn-top-100 btn-view-all color-title ">
                           Xem tất cả
                        </div>
                     </div>
                  </div>
                  <div className="l-4 m-6 c-12 c-0">
                     <div className="zingchart-footer-ctn zingchart-footer-ctn2">
                        <div className="zingchart-footer-header">
                           <h1 className="color-title">US-UK</h1>
                           <span className="color-main zingchartCtn-play">
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </span>
                        </div>
                        <div className="zingchart-footer-list">
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={20}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no1"
                              >
                                 1
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/12.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={20}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Ánh mắt ta chạm nhau
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Ngô Lan Hương
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Đại Mèo remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       06:01
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={21}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no2"
                              >
                                 2
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/13.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={21}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          2 Phút Hơn
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Phao
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             KAIZ Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       05:02
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={22}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no3"
                              >
                                 3
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/14.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={22}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Là Ai Từ Bỏ Là Ai Vô Tình
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Hương Ly
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Jombie (G5R)
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             RIN Music Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       03:25
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={23}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 4
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/songs/2.jpeg"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={23}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Yêu Đừng Sợ Đau
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Ngô Lan Hương
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             {" "}
                                             Cukak Remix
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       03:51
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={24}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 5
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/0.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={24}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Giữ Lại Được Chi
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Renddy
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       04:06
                                    </span>
                                 </div>
                              </div>
                           </li>
                        </div>
                        <div
                           className="btn btn-top-100 btn-view-all color-title
                                                  "
                        >
                           Xem tất cả
                        </div>
                     </div>
                  </div>
                  <div className="l-4 m-6 c-12 c-0">
                     <div className="zingchart-footer-ctn zingchart-footer-ctn3">
                        <div className="zingchart-footer-header">
                           <h1 className="color-title">K-Pop</h1>
                           <span className="color-main zingchartCtn-play">
                              <ion-icon
                                 name="play"
                                 role="img"
                                 className="md hydrated"
                                 aria-label="play"
                              />
                           </span>
                        </div>
                        <div className="zingchart-footer-list">
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={30}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no1"
                              >
                                 1
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/4.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={30}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Thế Giới Trong Em
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Hương Ly
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          />
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       04:02
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={31}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no2"
                              >
                                 2
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/5.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={31}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Wavin' Flag
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             K'NAAN
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       03:44
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={32}
                           >
                              <h1
                                 className="zingchart-number 
              zingchart-body-no3"
                              >
                                 3
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/6.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={32}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          I'm So Happy
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Jeremy Zucker
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             BENEE
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       06:03
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={33}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 4
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/7.jpg"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={33}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Để Rồi Tổn Thương
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             Sara Luu
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             JayKii
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       05:17
                                    </span>
                                 </div>
                              </div>
                           </li>
                           <li
                              className="song-item zingchart-body-item zingchart-footer-item"
                              data-index={34}
                           >
                              <h1
                                 className="zingchart-number 
              "
                              >
                                 5
                              </h1>
                              <h1 className="zingchart-body-icon color-small">
                                 <i className="fa-solid fa-minus" />
                              </h1>
                              <div className="zingchart-body-ctn">
                                 <div className="zingchart-body-left zingchart-footer--body-left">
                                    <div className="individual-ctn2-song-item-img">
                                       <img
                                          src="./img/discover/ctn2/9.webp"
                                          alt=""
                                          className="individual-ctn2-song-img"
                                       />
                                       <div
                                          className="individual-ctn2-song-item-icon"
                                          data-index={34}
                                       >
                                          <ion-icon
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
                                    <div className="individual-ctn2-song-title zingchart-footer-title ">
                                       <span className="color-title">
                                          Hay Là Trăng Nói
                                       </span>
                                       <small className="color-small">
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             DatKaa
                                          </a>
                                          ,
                                          <a
                                             className="singer color-small"
                                             href=""
                                          >
                                             QT Beatz
                                          </a>
                                       </small>
                                    </div>
                                 </div>
                                 <div className="zingchart-body-right">
                                    <div className="zingchart-body-right-icon">
                                       <div className="zingchart-icon zingchart-footer-icon icon-mic color-title">
                                          <i className="fa-sharp fa-solid fa-microphone" />
                                       </div>
                                       <div className="zingchart-icon  zingchart-footer-icon color-title ">
                                          <ion-icon
                                             name="ellipsis-horizontal-outline"
                                             role="img"
                                             className="md hydrated"
                                             aria-label="ellipsis horizontal outline"
                                          />
                                       </div>
                                    </div>
                                    <span className="zingchart-song-time color-small">
                                       05:07
                                    </span>
                                 </div>
                              </div>
                           </li>
                        </div>
                        <div className="btn btn-top-100 btn-view-all color-title">
                           Xem tất cả
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

ZingChart.propTypes = {};

export default ZingChart;
