import React from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import "./Performance.css";
const Performance = () => {
  return (
    <Page
      text={Text.performance}
      layout="layout-secondary perf"
      imgContainerStyle="image-performance"
      imgStyle="image"
      buttonStyleProp="performance-button"
      topTextProp="top-performance"
      subtitleProp="subtitle-performance"
      textProp="text-performance"
    />
  );
};

export default Performance;
