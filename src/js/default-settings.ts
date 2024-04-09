import { DefaultWhitelist } from "./default-whitelist";
import popoverInterface from "./popover-interface";

export const defaultSettings: popoverInterface = {
  animation: true,
  container: false,
  content: "And here's some amazing content. It's very engaging. Right?",
  delay: 0,
  placement: "right",
  selector: false,
  template: '<div class="popover"><h3 class="popover-header"></h3><div class="popover-body"></div><div class="arrow"></div></div>',
  title: "Popover title",
  trigger: "click",
  offset: 0,
  fallbackPlacement: 'flip',
  boundary: 'scrollParent',
  sanitize: true,
  whiteList: DefaultWhitelist,
  sanitizeFn: null
}
