import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import events from "./events";
import Page1 from "./screen1.png";
import Page2 from "./screen2.png";
import Page3 from "./screen3.png";
import { useEffect, useRef } from "react";

const PagesStyle = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 10% 5% 10% 5%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;
  .title {
    color: #222222;
    font-size: 50px;
  }
  .subTitle {
    width: 50%;
    margin-top: 3vw;
    color: #737373;
    font-size: 20px;
  }
  .page1 {
    width: 90%;
    height: auto;
    margin-top: 10vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
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
    .purshase {
      position: relative;
      left: 0;
      margin-top: 10vw;
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .subTitle {
      width: 90%;
    }
    .title {
      margin-top: 10vw;
      width: 100%;
      font-size: 40px;
    }
  }
`;
const Pages = () => {
  const backgroundOpacity = useMotionValue(1);
  // events.scrollEffect((e) => {
  //   if (e > 4000) {
  //     const value2 = (e - 4000) / 600;
  //     backgroundOpacity.set(1 - value2);
  //   } else if (e > 300) {
  //     const value2 = (e - 300) / 400;
  //     backgroundOpacity.set(value2);
  //   } else {
  //     backgroundOpacity.set(0);
  //   }
  // });

  const ref = useRef(null);

  // useEffect(() => {
  //   events.addHeight(
  //     "pages",
  //     ref.current.clientHeight,
  //     ref.current.clientWidth
  //   );
  //   events.onResize(() => {
  //     events.addHeight(
  //       "pages",
  //       ref.current.clientHeight,
  //       ref.current.clientWidth
  //     );
  //   });
  // }, []);

  return (
    <PagesStyle style={{ opacity: backgroundOpacity }} ref={ref}>
      <span className="title">+3 principal home page</span>
      <span className="subTitle">
        Modern, Elegant & Beautiful home pages for your magazine. We plan to
        show new demos regularly
      </span>
      <motion.img
        src={Page1}
        className="page1"
        whileHover={{ boxShadow: "0px 0px 10px #191919", scale: 1.1 }}
      />
      <motion.img
        src={Page2}
        className="page1"
        whileHover={{ boxShadow: "0px 0px 10px #191919", scale: 1.1 }}
      />
      <motion.img src={Page3} className="page1" />
    </PagesStyle>
  );
};

export default Pages;
