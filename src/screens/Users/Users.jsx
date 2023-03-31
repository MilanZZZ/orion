import React from 'react';
import './Users.css';
import images from "../../constants/Images/images"

const Users = () => {
  const imageList = [images.slack, images.prudential, images.microsoft, images.zoover]
  return (
   <div className="image-row">
    {imageList.map((img, index)=>
    <div className="imagine"><img className={`image`} src={img} alt='image'/></div>
    )}
   </div>
  )
}

export default Users