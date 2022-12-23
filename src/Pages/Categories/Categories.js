import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import useClient from "../../Services/Hooks/useClient";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

function Categories(props) {
   const client = useClient();
   const [categories, setCategories] = useState([]);
   const [isLoading, setLoading] = useState(true);

   const getCategories = async () => {
      const res = await client.get(client.categories);
      if (res.response.ok) {
         setCategories(res.data);
         setLoading(false);
      }
   };

   useEffect(() => {
      getCategories();
   }, []);

   return (
      <>
         <div className="categories">
            {isLoading ? (
               <p>Loading....</p>
            ) : (
               <>
                  <div className="categories__banner">
                     <img
                        src="https://photo-zmp3.zmdcdn.me/cover/c/5/f/d/c5fd5a2092ba742c23782124fc0e59cc.jpg"
                        alt=""
                     />
                  </div>
                  <div className="categories__playlists">
                     {categories?.map((category) => {
                        return <Link to={`detail${category.id}`}><CategoryItem key={category.id} {...category} /></Link>;
                     })}
                  </div>
               </>
            )}
         </div>
      </>
   );
}

Categories.propTypes = {};

export default Categories;
