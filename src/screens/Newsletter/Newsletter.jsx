import React, { useState } from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="wrapper-news">
      <Subscribe />
      <Page
        text={Text.newsletter}
        layout="layout-reverse news-container "
        imgContainerStyle="image-news"
        imgStyle="image"
        subtitleProp="subtitle-news"
        buttonStyleProp="button-news"
        textProp='text-news'
        button={<EmailForm />}
        buttonContainerProp='button-container-news'
      />
    </div>
  );
};

const Subscribe = () => (
  <div className="cont">
    <div className="top-title">our team</div>
    <div className="title news-title">Subscribe To Our Newsleter</div>
  </div>
);

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form className="news-form-container" onSubmit={handleSubmit}>
      <input
        className="news-form"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </form>
  );
};
export default Newsletter;
