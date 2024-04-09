import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import Popover from "./popover";

describe("Popover widget", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.body.innerHTML = `<button type="button" class="btn1 btn-lg btn-danger">Click to toggle popover</button>`;
  });
  test("create popover", () => {
    new Popover("button").popover({
      content: "this button popover",
      title: "button",
      trigger: "click",
      delay: 1000,
    });
    const MouseEvent = window.MouseEvent;
    const button = document.querySelector("button");
    button.dispatchEvent(
      new MouseEvent("click", { view: window, bubbles: true }),
    );
    const res = document.getElementsByClassName("popover").length;
    expect(res).toBe(1);
  });
  test("popover delay", () => {
    new Popover("button").popover({
      content: "this button popover",
      title: "button",
      trigger: "click",
      delay: 5,
    });
    const MouseEvent = window.MouseEvent;
    const button = document.querySelector("button");
    button.dispatchEvent(
      new MouseEvent("click", { view: window, bubbles: true }),
    );
    setTimeout(() => {
      const res = document.getElementsByClassName("popover").length;
      expect(res).toBe(0);
    }, 10);
  });
});
