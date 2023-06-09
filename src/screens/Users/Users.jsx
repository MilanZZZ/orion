import React from "react";
import "./Users.css";
import images from "../../constants/Images/images";

const Users = () => {
  const imageList = [
    images.slack,
    images.prudential,
    images.microsoft,
    images.zoover,
  ];
  return (
    <div className="image-row container">
      {imageList.map((img, index) => (
        <div className="imagine" key={`id-${index}`}>
          <img className={`image`} src={img} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default Users;
