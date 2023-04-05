import React, { useState } from "react";
import "./Footer.css";
import images from "../../constants/Images/images";

const FooterButton = [images.facebook, images.twitter, images.linkedin];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="columns">


        <div className="logo-column">
          <div className="footer-logo">
            <img className={`image`} src={images.logo} alt="logo" />
          </div>
          <p className="values values-subtitle">
            You'll find your next home loan value you prefer.
          </p>
          <div className="button-container">
            {FooterButton.map((image) => (
              <button className="footer-button">
                <img className="image image-footer" src={image} />
              </button>
            ))}
          </div>
        </div>

        <div className="resources-column">
          <div className="resources">Resources</div>
          {["Our Agents", "Member Stories", "Video", "Free Trial"].map(
            (value) => (
              <a className="values">{value}</a>
            )
          )}
        </div>

        <div className="resources-column">
          <div className="resources">Company</div>
          {["Partnerships", "Terms of use", "Privacy", "Sitemap"].map(
            (value) => (
              <a className="values">{value}</a>
            )
          )}
        </div>

        <div className="resources-column add-dis">
          <div className="resources">Get in touch</div>
          <EmailForm />
        </div>
      </div>

      <div className="div-line"></div>
      <div className="copyright">
        Copyright @MilanWebDev All rights reserved.
      </div>
    </div>
  );
};

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="footer-form"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your mail"
      />
      <button className="submit" type="submit">
        <img className="image" src={images.submitArrow} />
      </button>
    </form>
  );
};
export default Footer;
