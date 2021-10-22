import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import events from "./events";
import { useEffect, useRef } from "react";

const FirstPageStyle = styled(motion.div)`
  position: relative;
  height: auto;
  max-height: 1000px;
  width: 100%;
  max-height: 2000px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 8vw 5% 0 5%;
  justify-content: space-between;
  color: #f8f8ff;
  background-color: #191919;
  margin-bottom: 10%;
  max-width: 2000px;
  .title {
    width: 45%;
    font-size: 100px;
  }
  .cover {
    height: 45vw;
    max-height: 1000px;
    width: 45%;
    background-image: url("https://images.unsplash.com/photo-1563253746-350a0a877afa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
  }
  .purshase {
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    .details {
      width: 100%;
      margin-bottom: 4%;
    }
    .purshaseNow {
      padding: 1vw;
      background-color: #f2c14e;
      cursor: pointer;
      color: #191919;
    }
    .more {
      align-items: center;
      margin-top: 2%;
      margin-left: 10%;
      cursor: pointer;
      color: #f2c14e;
    }
  }
  @media (min-width: 2000px) {
    width: 1800px;
    left: calc(50vw - 1000px);
    .purshase {
      left: 5vw;
    }
  }
  @media (max-width: 1200px) {
    .title {
      font-size: 50px;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .cover {
      width: 100%;
    }
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
    .cover {
      width: 100%;
    }
    .title {
      margin-top: 10vw;
      width: 100%;
      font-size: 40px;
    }
    .purshase {
      position: relative;
      left: 0;
      margin-top: 10vw;
      width: 90%;
    }
  }
`;

const FirstPage = () => {
  let controller = useMotionValue(1);
  const backgroundOpacity = useMotionValue(0);
  // events.scrollEffect((e) => {
  //   if (e > 200) {
  //     const value = e / 600;
  //     controller.set(1 - value);
  //   } else controller.set(1);

  //   if (e > 300) {
  //     const value2 = (e - 300) / 400;
  //     backgroundOpacity.set(value2);
  //   } else {
  //     backgroundOpacity.set(0);
  //   }
  // });

  const ref = useRef(null);
  // useEffect(() => {
  //   events.addHeight(
  //     "firstPage",
  //     ref.current.clientHeight,
  //     ref.current.clientWidth
  //   );
  //   events.onResize(() => {
  //     events.addHeight(
  //       "firstPage",
  //       ref.current.clientHeight,
  //       ref.current.clientWidth
  //     );
  //   });
  // }, []);

  return (
    <FirstPageStyle style={{ opacity: controller }} ref={ref}>
      <div className="cover" />
      <span className="title">Modern & Creative Blog, Magazine</span>
      <div className="purshase">
        <span className="details">
          Modern & Creative , DeepEnd is an React.js theme, a perfect starting
          point for your next blog, magazine site.
        </span>
        <span className="purshaseNow"> Purshase now </span>
        <span className="more"> Learn more. </span>
      </div>
    </FirstPageStyle>
  );
};

export default FirstPage;
