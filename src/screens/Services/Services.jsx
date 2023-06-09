import React from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import images from "../../constants/Images/images";
import "./Services.css";

//pomesao sam slucajno naziv strana jbg, solutions je services i vice-versa
const Services = () => {
  return (
    <div className="background">

    <Page
      idProp="Features"
      text={Text.services}
      layout="layout-secondary container"
      imgContainerStyle="image-services"
      imgStyle="image"
      textProp="text services-text home-text"
      titleProp="services-title-size "
      topTextProp="top-services"
      buttonContainerProp="button-container-services"
      buttonStyleProp="button-services"
      numbers={<PointList />}
      />
      </div>
  );
};

const PointList = () => (
  <div className="bullet-point">
    <ul className="bullet-list">
      <li>
        <img className="bullet-img" src={images.vector} alt="bullet" />
        Video Tutorials
      </li>
      <li>
        <img className="bullet-img" src={images.vector} alt="bullet" />
        Skill Development
      </li>
      <li>
        <img className="bullet-img" src={images.vector} alt="bullet" />
        Marketing Analysis
      </li>
    </ul>
  </div>
);

export default Services;
