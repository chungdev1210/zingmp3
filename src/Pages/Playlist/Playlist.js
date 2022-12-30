import React from "react";
import PropTypes from "prop-types";
import "./Playlist.scss"
import IonIcon from "@reacticons/ionicons";

function Playlist(props) {
   return (
      <div className="playlist__album">
         <div className="playlist__left">
            <div className="playlist__card">
               <div className="card--image">
                  <img
                     src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/5/4/6/f/546fc34dd0e75c226f9aee98fc98ab03.jpg"
                     alt=""
                  />
               </div>
               <div className="card--content">
                  <div className="content-top">
                     <h3 className="title">Sao anh chưa về với em</h3>
                     <div className="release">Cập nhật: 26/2/2022</div>
                     <div className="artists">
                        <a href="#">Ricky Star</a>,<a href="#">AMEE</a>,
                        <a href="#">Chi Pu</a>,<a href="#">Rtee</a>
                     </div>
                     <div className="like">
                        <p>7K người yêu thích</p>
                     </div>
                  </div>
                  <div className="actions">
                     <button className="btn-play">
                        <IonIcon
                           className="actions--icon"
                           name="play-outline"
                        ></IonIcon>
                        <span>Phát ngẫu nhiên</span>
                     </button>
                     <div className="level">
                        <button>
                           <IonIcon
                              className="hover--icon_heart"
                              name="heart-outline"
                           ></IonIcon>
                        </button>
                        <button>
                           <IonIcon
                              className="hover--icon_ellipsis"
                              name="ellipsis-horizontal-outline"
                           ></IonIcon>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="playlist__right">
            <div className="decription">
               <span>Lời tựa:</span>
               <span> Đừng mải mê đi rong chơi mà quên đi rằng trong đêm còn có em đợi anh về nhà. Ngoài kia bao điều mặn đắng, anh đừng lăn tăn, về nhà thôi.</span>
            </div>
            <div className="list">
               <div className="media-header select-header">
                  <div className="media-left">
                     <div className="sort-wrapper">
                        <button>
                           <IonIcon className="icon" name="caret-down-circle-outline"></IonIcon>
                        </button>
                        <span>Bài hát</span>
                     </div>
                  </div>
                  <div className="media-center">Album</div>
                  <div className="media-right">Thời gian</div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="select--item">
                  <div className="checkbox-wrapper">
                     <label className="checkbox">
                        <input type="checkbox" />
                     </label>
                  </div>
                  <div className="media--item">
                     <div className="media-content">
                        <div className="media--left">
                           <div className="media--icon">
                              <IonIcon name="musical-notes-outline"></IonIcon>
                           </div>
                           <div className="media--img">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/6/f/4/66f40f8639e0e23f95e444f3d9368c9c.jpg" alt="" />
                           </div>
                           <div className="media--info">
                              <div className="media--info_title">
                                 <span>Sao anh chưa về nhà về nhà</span>
                              </div>
                              <div className="media--info_singers">
                                 <span>AMEE</span>
                              </div>
                           </div>
                        </div>
                        <div className="media--center">
                           <a href="#" className="title">Sao anh chưa về nhà(Singer)</a>
                        </div>
                        <div className="media--right">
                           <div className="duration">
                              04:07
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

Playlist.propTypes = {};

export default Playlist;
