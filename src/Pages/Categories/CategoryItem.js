import React from 'react'

export default function CategoryItem({ name, image, playlists }) {

   const renderPlaylists = () => {
      let jsx = []
      for (let index in playlists) {
         if (index <= 2) {
            const { id, image } = playlists[index];
            const item = <div key={id} className="playlist__item-img">
            <img src={image} alt="" />
         </div>
            jsx.push(item)

         }
      }

      return jsx;
   }

   // useEffect(() => {
   //    handlePlaylists()
   // }, [])

   return (
      <div className="playlist__item">
         <div className="overlay"></div>
         <h3 className="playlist__item-title">{name}</h3>
         <img src={image} alt="" />
         <div className="playlist__item-hot">
            {renderPlaylists()}
            {/* <div className="playlist__item-img">
               <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/3/d/b43d77d3bf42808cbbc56bff6709b991.jpg" alt="" />
            </div>
            <div className="playlist__item-img">
               <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/5/3/8/3538565766aee9c4a61c1ff4aeb5a07d.jpg" alt="" />
            </div>
            <div className="playlist__item-img">
               <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/6/5/3/d653f35e5252395e2b26b4dd7942a811.jpg" alt="" />
            </div> */}
         </div>
      </div>
   )
}
