import React from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import "./Home.css";
const Home = () => {
  return (
    <Page
      idProp={"Home"}
      text={Text.home}
      layout="layout home-layout"
      textProp="text home-text"
      titleProp="title-size"
      imgContainerStyle="image-home"
      imgStyle="image"
      buttonContainerProp="button-container-home"
      subtitleProp="home-subtitle"
      button={<BookADemoButtom />}
    />
  );
};

const BookADemoButtom = () => (
  <button className="demo-button">Book a Demo</button>
);
export default Home;
