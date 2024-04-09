import "./css/style.css";
import Popover from "./js/popover";

new Popover(".btn1").popover({
  content: "this button popover",
  title: "button",
  trigger: "click",
  delay: 2000,
});

new Popover(".btn2").popover({
  content: "this button popover",
  title: "button",
  trigger: "click",
  delay: 2000,
});

new Popover(".btn3").popover({
  content: "this button popover",
  title: "button",
  trigger: "click",
  delay: 2000,
});

new Popover("img").popover({
  content: "this img popover",
  title: "img",
  trigger: "click",
  delay: 1000,
});
