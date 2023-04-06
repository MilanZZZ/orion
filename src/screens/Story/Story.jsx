import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import Text from "../../constants/Text/Text";
import CountUp from "react-countup";
import "./Story.css";

const Story = () => {
  return (
    <Page
      idProp={"Resources"}
      text={Text.story}
      layout="layout story-layout container"
      textProp="story-text"
      topTextProp="story-top"
      buttonStyleProp="story-button"
      titleProp="story-title"
      subtitleProp="story-subtitle"
      imgContainerStyle="image-story"
      imgStyle="image"
      line={<Line />}
      numbers={<CountIt />}
    />
  );
};

const Line = () => <div className="line"></div>;

const CountIt = () => {
  const [startCounter, setStartCounter] = useState(false);
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-up");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setStartCounter(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="value" id="count-up">
      <div className="projects-done">
        <div className="number">
          {" "}
          <CountUp
            start={startCounter ? 0 : null}
            end={1000}
            onEnd={() => setEnded(true)}
            duration={1.3}
            separator=""
          />
          {ended && <span>+</span>}
        </div>
        <div className="text-value">Projects Done</div>
      </div>
      <div className="team">
        <div className="number">
          {" "}
          <CountUp
            start={startCounter ? 0 : null}
            end={230}
            duration={1.2}
            separator=""
          />
        </div>
        <div className="text-value">Our Team</div>
      </div>
      <div className="team">
        <div className="number">
          {" "}
          <CountUp
            start={startCounter ? 0 : null}
            end={900}
            duration={1.1}
            separator=""
          />
        </div>
        <div className="text-value">Our Clients</div>
      </div>
    </div>
  );
};

export default Story;
