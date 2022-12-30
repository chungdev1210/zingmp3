import React from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";

function Player(props) {
   return (
      <div className="zing-controls">
         <div className="audio">
            <audio src="./music/list-song/KARIK x ONLY C - CÓ CHƠI CÓ CHỊU (OFFICIAL MUSIC VIDEO).mp3" />
         </div>
         <div className="l-4 m-3 c-9">
            <div className=" zing-control-left zing-control-left-action">
               <div className="control-left-img " style={{ marginLeft: 0 }}>
                  <img
                     src="https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg"
                     alt=""
                  />
               </div>
               <div className="control-left-title">
                  <h1 className="color-title">CÓ CHƠI CÓ CHỊU</h1>
                  <small className="color-small">KARIK x ONLY C</small>
               </div>
               <div
                  className="icon-favorite color-small "
                  data-index="${index}"
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
               <div className="control-left-icon m-0">
                  <div className="item icon action-hover  color-title m-0 ">
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
         <div className="l-4 m-6 c-3">
            <div className="zing-control-main">
               <div className="controls">
                  <div className="repeat control-icon action-hover color-title action-controls">
                     <i className="fa-solid fa-repeat" />
                  </div>
                  <div className="icon-control-left control-icon action-hover  color-title c-0">
                     <i className="fa-solid fa-backward-step" />
                  </div>
                  <div className="play c-0">
                     <div className="play-music control-icon action-hover  color-title">
                        <ion-icon>
                           <IonIcon
                              name="play-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="play outline"
                           />
                        </ion-icon>
                     </div>
                     <div className="pause-music control-icon action-hover  color-title ">
                        <ion-icon>
                           <IonIcon
                              name="pause-circle-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="pause circle outline"
                           />
                        </ion-icon>
                     </div>
                  </div>
                  <div className="icon-control-right control-icon action-hover color-title ">
                     <i className="fa-solid fa-forward-step" />
                  </div>
                  <div className="icon-shuffle control-icon action-hover color-title c-0 action-controls">
                     <i className="fa-solid fa-shuffle" />
                  </div>
               </div>
               <div className="control-handle-time c-0">
                  <div className="time-begin color-title">
                     <span className="minute">00</span>:
                     <span className="second">02</span>
                  </div>
                  <div className="progress">
                     <div
                        className="progressCurrent"
                        style={{ width: "0.709279%" }}
                     />
                  </div>
                  <div className="time-end color-title">04:46</div>
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
                  <div className="volume-control color-title">
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
