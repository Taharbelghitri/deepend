import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import events from "./events";
import reactIcon from "./icons/react-icon.png";
import responsive from "./icons/responsive-icon.png";
import darkMood from "./icons/dark-icon.png";
import codeIcon from "./icons/code-icon.png";
import support from "./icons/support-icon.png";
import docsIcon from "./icons/docs-icon.png";
import design from "./icons/design-icon.png";

const FeatersStyle = styled(motion.div)`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10% 5% 0 5%;
  background-color: #191919;
  max-width: 2000px;
  .title {
    color: #f8f8ff;
    font-size: 50px;
    width: 100%;
  }
  .subTitle {
    width: 50%;
    margin-top: 3vw;
    color: #c1c0c4;
    font-size: 20px;
    width: 50%;
  }
  .featers {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    .feater {
      margin-top: 5vw;
      width: 30%;
      min-width: 300px;
      padding: 4%;
      background-color: #000000;
      color: #8a8888;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      justify-content: center;
      .featerInfos {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20%;
        .featerTilte {
          width: 70%;
          font-size: 30px;
          /* color: #f2c14e; */
          color: #f8f8ff;
        }
        .icon {
          height: 50px;
          width: 50px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-clip: border-box;
        }
      }
    }
  }
  .purshase {
    margin-top: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .subTitle {
      font-size: 20px;
      color: #8a8888;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      margin-top: 2vw;
      margin-bottom: 5vw;
      font-size: 50px;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f8f8ff;
      text-align: center;
    }
    .purshaseNow {
      padding: 2vw;
      background-color: #f2c14e;
      font-size: 40px;
      color: #f8f8ff;
      cursor: pointer;
      margin-bottom: 2vw;
    }
    .demo {
      font-size: 30px;
      color: #f2c14e;
      cursor: pointer;
    }
  }
  .about {
    background-color: #000000;
    height: 10vw;
    width: 100%;
  }
  @media (min-width: 2000px) {
    width: 2000px;
    left: calc(50vw - 1000px);
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .title {
      margin-top: 10vw;
      width: 100%;
      font-size: 40px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .title {
      margin-top: 10vw;
      width: 100%;
      font-size: 40px;
    }
    .subTitle {
      width: 90%;
    }
    .purshase {
      .title {
        font-size: 30px;
        width: 90%;
        margin-top: 10vw;
        margin-bottom: 10vw;
      }
      .subTitle {
        width: 90%;
        font-size: 20px;
      }
    }
  }
`;
const AbouteStyle = styled(motion.div)`
  margin-top: 10vw;
  position: relative;
  background-color: #000000;
  height: 10vw;
  max-height: 100px;
  width: 100%;
  font-size: 20px;
  color: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const About = () => (
  <AbouteStyle>© 2021 by tahar balghitri. All rights reserved.</AbouteStyle>
);

const Featers = () => {
  const ref = useRef(null);

  // useEffect(() => {
  //   events.addHeight(
  //     "feuters",
  //     ref.current.clientHeight,
  //     ref.current.clientWidth
  //   );
  //   events.onResize(() => {
  //     events.addHeight(
  //       "feuters",
  //       ref.current.clientHeight,
  //       ref.current.clientWidth
  //     );
  //   });
  // }, []);

  return (
    <FeatersStyle ref={ref}>
      <span className="title">Template Feature</span>
      <span className="subTitle">
        we used amaizing feuters not justto make it work but also to make it
        look awsome such as react and faramer motion ...
      </span>
      <div className="featers">
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> React </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + reactIcon + "')" }}
            />
          </div>
          <span className="text">
            Built with React, core nodejs event emitter , motion faramer, styled
            component, and rich of components
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> 100% responsive </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + responsive + "')" }}
            />
          </div>
          <span className="text">
            Works on all devices and touch sensors. High quality images, fonts &
            text.
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> Dark mode </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + darkMood + "')" }}
            />
          </div>
          <span className="text">
            Darkmode modern. Helps you quickly turn the theme mode to dark at
            night time.
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> Customizing the theme </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + codeIcon + "')" }}
            />
          </div>
          <span className="text">
            Completely customize the template and whole Taiwindcss, quickly
            modifying its config variables.
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> Free updates and support</span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + support + "')" }}
            />
          </div>
          <span className="text">
            I work closely with my customers to provide a high standard of
            support and quick bug fixes.
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte"> Well documented </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + docsIcon + "')" }}
            />
          </div>
          <span className="text">
            Shane documented organized way and its customization instruction
            easy for all.
          </span>
        </div>
        <div className="feater">
          <div className="featerInfos">
            <span className="featerTilte">Modern simple design </span>
            <div
              className="icon"
              style={{ backgroundImage: "url('" + design + "')" }}
            />
          </div>
          <span className="text">
            It's followed with modern, creative and trendy design for Creative
            organization,blog,magazine and pesonal blog
          </span>
        </div>
      </div>
      <div className="purshase">
        <span className="subTitle">Start building right now!</span>
        <span className="title"> The New Standard for Blog/Magazine </span>
        <span className="purshaseNow">Purshase now</span>
        <span className="demo">Live demo.</span>
      </div>
    </FeatersStyle>
  );
};
const component = {
  Featers,
  About,
};

export default component;
