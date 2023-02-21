import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import { useParams } from "react-router-dom";
import useClient from "../../Services/Hooks/useClient";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import useUrl from "../../Services/Hooks/useUrl";
import ItemPlayList from "../../Components/ItemPlayList/ItemPlayList";

const iconHover = [
   {
      id: 1,
      className: "hover--icon_heart",
      iconName: "heart-outline",
   },
   {
      id: 2,
      className: "hover--icon_play",
      iconName: "play-circle-outline",
   },
   {
      id: 3,
      className: "hover--icon_ellipsis",
      iconName: "ellipsis-horizontal-outline",
   },
];

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

   const renderPlayList = () => {
      if (category.playlists !== undefined) {
         let jsx = [];
         for (let index in category.playlists) {
            const item = (
               <ItemPlayList key={index} {...category.playlists[index]} />
            );
            jsx.push(item);
         }
         return jsx;
      }
   };

   return (
      <div className="category__detail">
         <div className="category__detail--banner">
            <img src={category.banner} alt="banner" />
         </div>
         <div className="l-12 m-12 c-12">
            <div className="discover-ctn3-body">
               {renderPlayList()}
            </div>
         </div>
      </div>
   );
}

CategoryDetail.propTypes = {};

export default CategoryDetail;
