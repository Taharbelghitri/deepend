import { useEffect } from "react";
import FirstPage from "./firstPage";
import events from "./events";
import Pages from "./pages";
import Featers from "./feuters";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

const StyledBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #e8e8e8;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;
const NavbarSTyle = styled.div`
  height: 5vw;
  max-height: 100px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200000000;
  background-color: #191919;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    font-size: 24px;
    color: #f2c14e;
    width: 60%;
    cursor: default;
  }
  .purshase {
    background-color: #f2c14e;
    padding: 15px;
    cursor: pointer;
    font-size: 20px;
  }
  .demo {
    color: #f8f8ff;
    font-size: 18px;
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <NavbarSTyle>
      <span className="logo">DeepEnd</span>
      <span className="purshase">Purshase now</span>
      <span className="demo"> Live demo </span>
    </NavbarSTyle>
  );
};

function App() {
  const backgroundOpacity = useMotionValue(0);

  const handleNavigation = () => {
    events.isScrolling(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleNavigation());
    return window.removeEventListener("scroll", () => handleNavigation());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => events.resizeEvent());
    return window.addEventListener("resize", () => events.resizeEvent());
  }, []);

  const opacityFunction = (e) => {
    // let changeValues = [];
    // Object.keys(events.getHeight()).forEach((key) => {
    //   const height = events.getHeight()[key].h;
    //   const width = events.getHeight()[key].w;
    //   const changeValue = height - width / 30;
    //   changeValues.push(changeValue);
    // });
    // if (e < changeValues[0]) backgroundOpacity.set(0);
    // else if (e > changeValues[0] && e < changeValues[1]) {
    //   const value2 = (e - changeValues[0]) / 500;
    //   backgroundOpacity.set(value2);
    // } else if (
    //   e >
    //   changeValues[1] +
    //     (events.getHeight().pages.h + events.getHeight().firstPage.h)
    // ) {
    //   const height =
    //     changeValues[1] +
    //     events.getHeight().pages.h +
    //     events.getHeight().firstPage.h;
    //   const value2 = (e - height) / 500;
    //   backgroundOpacity.set(1 - value2);
    // }
  };

  events.scrollEffect(opacityFunction);

  return (
    <>
      <Navbar />
      <div className="App">
        <StyledBackground style={{ opacity: backgroundOpacity }} />
        <FirstPage />
        <Pages />
        <Featers.Featers /> <Featers.About />
      </div>
    </>
  );
}

export default App;
