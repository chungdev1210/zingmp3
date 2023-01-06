import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import useClient from "../../Services/Hooks/useClient";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import useUrl from "../../Services/Hooks/useUrl"

function Categories(props) {
   const client = useClient();
   const url = useUrl();
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
                        return <Link key={category.id} to={url.getCategory(category.id, category.name)} ><CategoryItem {...category} /></Link>;
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
