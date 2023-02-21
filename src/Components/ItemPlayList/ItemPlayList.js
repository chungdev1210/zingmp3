import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useUrl from "../../Services/Hooks/useUrl";
import IonIcon from "@reacticons/ionicons";

function ItemPlayList(props) {
   const url = useUrl();
   const {id, name, image, singers} = props;

   const renderSingers = () => {
      if(singers !== undefined) {
         let result = singers.join(", ")
         return result;
      }
   }

   return (
      <li className="l-3 m-4 c-6">
         <div className="individual-ctn3-item discover-ctn3-item">
            <div className="individual-ctn3-consis">
               <div className="individual-ctn3-hover">
                  <div className="individual-ctn3-item-img discover-ctn3-img">
                     <Link to={url.getPlaylist(id, name)}>
                        <img src={image} alt="" />
                        <div className="individual-ctn3-modal">
                           <div className="individual-ctn3-favorite action-favorite">
                              <i className="fa-solid fa-heart" />
                           </div>
                           <div className="individual-ctn3-play">
                              <i className="fa-solid fa-play" />
                           </div>
                           <ion-icon>
                              <IonIcon
                                 name="ellipsis-horizontal-outline"
                              />
                           </ion-icon>
                        </div>
                     </Link>
                  </div>
               </div>
               <h1 className="individual-ctn3-item-title discover-ctn3-item-title color-main">
                  {name}
               </h1>
               <div className="individual-ctn3-item-name discover-ctn3-item-des">
                  <small className="color-small">
                     {renderSingers()}
                  </small>
               </div>
            </div>
         </div>
      </li>
   );
}

ItemPlayList.propTypes = {
   id: PropTypes.number,
   name: PropTypes.string,
   image: PropTypes.string,
   singers: PropTypes.array
};

export default ItemPlayList;
