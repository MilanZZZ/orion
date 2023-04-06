import React from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import "./Performance.css";
const Performance = () => {
  return (
    <div className="background">

    <Page
      text={Text.performance}
      layout="layout-secondary perf container"
      imgContainerStyle="image-performance"
      imgStyle="image"
      buttonStyleProp="performance-button"
      topTextProp="top-performance"
      subtitleProp="subtitle-performance"
      textProp="text-performance"
      titleProp='title-performance'
      />
      </div>
  );
};

export default Performance;
