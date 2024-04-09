export default interface popoverInterface {
  animation?: Boolean,
  container?: String | false,
  content: String | Element ,
  delay?: Number | Object,
  placement?: String | Function,
  selector?: String | false,
  template?: String,
  title: String | Element,
  trigger: "click" | "focus" | "blur",
  offset?: Number | String,
  fallbackPlacement?: String | Array<String>,
  boundary?: String | Element,
  sanitize?: Boolean,
  whiteList?: Object,
  sanitizeFn?: null | Function
}
