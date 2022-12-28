import React from 'react'
import { Link } from "react-router-dom";
import useUrl from "../../Services/Hooks/useUrl"

export default function CategoryItem({ id, name, image, playlists }) {

   const renderPlaylists = () => {
      let jsx = []
      for (let index in playlists) {
         if (index <= 2) {
            const { id, image } = playlists[index];
            const item = <div key={id} className="playlist__item--img">
            <img src={image} alt="" />
         </div>
            jsx.push(item)
         }
      }

      return jsx;
   }

   return (
      <div className="playlist__item">
         <h3 className="playlist__item-title">{name}</h3>
         <div className="playlist__item-img">
            <img src={image} alt="" />
            <div className="overlay"></div>
         </div>
         <div className="playlist__item-hot">
            {renderPlaylists()}
         </div>
      </div>
   )
}
