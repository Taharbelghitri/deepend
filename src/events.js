import { EventEmitter } from "events";

let height = {};

class event extends EventEmitter {
  isScrolling(y) {
    this.emit("scrolling", y === 0 ? 1 : y);
  }
  scrollEffect(cb) {
    this.on("scrolling", cb);
  }
  getHeight() {
    return height;
  }
  addHeight(...args) {
    this.emit("getHeight", ...args);
  }
  resizeEvent() {
    this.emit("resize");
  }
  onResize(cb) {
    this.on("resize", cb);
  }
}

const events = new event();

events.on("getHeight", (page, h, w) => {
  height[page] = { h, w };
});

export default events;
