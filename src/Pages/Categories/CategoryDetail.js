import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import { useParams } from "react-router-dom";
import useClient from "../../Services/Hooks/useClient";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import useUrl from "../../Services/Hooks/useUrl";

function CategoryDetail(props) {
   const url = useUrl();
   const [category, setCategory] = useState([]);
   const [isLoading, setLoading] = useState(true);
   const { id } = useParams();
   const client = useClient();

   const getCategoyDetail = async () => {
      const res = await client.get(client.categories + "/" + id);
      if (res.response.ok) {
         setCategory(res.data);
         setLoading(false);
      }
   };

   useEffect(() => {
      getCategoyDetail();
   }, []);

   return (
      <div className="category__detail">
         <div className="category__detail--banner">
            <img src={category.banner} alt="banner" />
         </div>
         <div className="category__detail--box">
            {category.playlists?.length &&
               category.playlists.map(({ id, name, image }) => {
                  return (
                     <Link
                        className="tag_link"
                        key={id}
                        to={url.getPlaylist(id, name)}
                     >
                        <div className="category__detail--item">
                           <div className="category__detail--item_img">
                              <img src={image} alt="" />
                              <div className="overlay"></div>
                              <div className="category__detail--item_img-hover">
                                 <div className="hover--icon">
                                    <IonIcon
                                       className="hover--icon_heart"
                                       name="heart-outline"
                                    ></IonIcon>
                                    <IonIcon
                                       className="hover--icon_play"
                                       name="play-circle-outline"
                                    ></IonIcon>
                                    <IonIcon
                                       className="hover--icon_ellipsis"
                                       name="ellipsis-horizontal-outline"
                                    ></IonIcon>
                                 </div>
                              </div>
                           </div>
                           <div className="category__detail--item_info">
                              <p className="title">{name}</p>
                              <div className="singers">
                                 <a href="#">Đen Vâu</a>,<a href="#">MONO</a>,
                                 <a href="#">Quân AP</a>,
                                 <a href="#">Sơn Tùng MTP</a>
                                 ...
                              </div>
                           </div>
                        </div>
                     </Link>
                  );
               })}
         </div>
      </div>
   );
}

CategoryDetail.propTypes = {};

export default CategoryDetail;
