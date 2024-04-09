import { defaultSettings as defaultOptions } from "./default-settings";
import popoverInterface from "./popover-interface";

export default class Popover {
  private _data: popoverInterface;
  private container: false | String;
  private _element: Element;

  constructor(element: string) {
    this._element = document.querySelector(element);
    this.pushPopover = this.pushPopover.bind(this);
  }

  pushPopover(event: Event): void {
    event.preventDefault();

    if (event.target === this._element) {
      const popover = this.popover(this._data);
      this.targetElement.appendChild(popover);

      setTimeout(() => {
        popover.remove();
      }, this.delay);
    }
  }

  popover(data: popoverInterface = defaultOptions): HTMLDivElement {
    if (data != defaultOptions) {
      for (const key in defaultOptions) {
        if (!Object.prototype.hasOwnProperty.call(data, key)) {
          Object.defineProperty(data, key, { value: defaultOptions[key] });
        }
      }
    }

    this._data = data;
    const title: String | Element = this._data["title"];
    const content: String | Element = this._data["content"];
    this.container = this._data["container"];
    const elementCoord = this.getCoords(this._element);

    const popover: HTMLDivElement = document.createElement("div");
    popover.innerHTML += this._data["template"];
    popover.querySelector(".popover-header").innerHTML = `<p>${title}</p>`;
    popover.querySelector(".popover-body").innerHTML = `<p>${content}</p>`;
    popover.style.width = "150px";
    popover.style.height = "150px";
    popover.style.position = "absolute";
    popover.style.zIndex = "2";
    popover.style.transform = `translate(${elementCoord["xCenterCoord"] - 85}px, ${elementCoord["yTopCoord"] - 107}px)`;

    document.addEventListener(this._data["trigger"], this.pushPopover);
    return popover;
  }

  // eslint-disable-next-line getter-return
  get targetElement(): Element {
    switch (this.container) {
      case typeof String:
        return document.querySelector(`.${this.container}`);
      case false:
        return document.body;
    }
  }

  getCoords(element: Element): Object {
    const rect = element.getBoundingClientRect();
    return {
      yTopCoord: rect.top,
      xCenterCoord: rect.width / 2 + rect.x,
    };
  }

  get delay(): number {
    const delay: Number | Object = this._data["delay"];
    if (typeof delay === "number") {
      return delay;
    }
    return delay["show"];
  }
}
