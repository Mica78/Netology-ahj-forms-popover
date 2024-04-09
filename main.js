/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 215:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ARIA_ATTRIBUTE_PATTERN = void 0;
exports.ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;


/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultSettings = void 0;
var default_whitelist_1 = __webpack_require__(371);
exports.defaultSettings = {
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
    whiteList: default_whitelist_1.DefaultWhitelist,
    sanitizeFn: null
};


/***/ }),

/***/ 371:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultWhitelist = void 0;
var constants_1 = __webpack_require__(215);
exports.DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', constants_1.ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};


/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var default_settings_1 = __webpack_require__(81);
var Popover = /** @class */ (function () {
    function Popover(element) {
        this._element = document.querySelector(element);
        this.pushPopover = this.pushPopover.bind(this);
    }
    Popover.prototype.pushPopover = function (event) {
        event.preventDefault();
        if (event.target === this._element) {
            var popover_1 = this.popover(this._data);
            this.targetElement.appendChild(popover_1);
            setTimeout(function () {
                popover_1.remove();
            }, this.delay);
        }
    };
    Popover.prototype.popover = function (data) {
        if (data === void 0) { data = default_settings_1.defaultSettings; }
        if (data != default_settings_1.defaultSettings) {
            for (var key in default_settings_1.defaultSettings) {
                if (!Object.prototype.hasOwnProperty.call(data, key)) {
                    Object.defineProperty(data, key, { value: default_settings_1.defaultSettings[key] });
                }
            }
        }
        this._data = data;
        var title = this._data["title"];
        var content = this._data["content"];
        this.container = this._data["container"];
        var elementCoord = this.getCoords(this._element);
        var popover = document.createElement("div");
        popover.innerHTML += this._data["template"];
        popover.querySelector(".popover-header").innerHTML = "<p>".concat(title, "</p>");
        popover.querySelector(".popover-body").innerHTML = "<p>".concat(content, "</p>");
        popover.style.width = "150px";
        popover.style.height = "150px";
        popover.style.position = "absolute";
        popover.style.zIndex = "2";
        popover.style.transform = "translate(".concat(elementCoord["xCenterCoord"] - 85, "px, ").concat(elementCoord["yTopCoord"] - 107, "px)");
        document.addEventListener(this._data["trigger"], this.pushPopover);
        return popover;
    };
    Object.defineProperty(Popover.prototype, "targetElement", {
        // eslint-disable-next-line getter-return
        get: function () {
            switch (this.container) {
                case typeof String:
                    return document.querySelector(".".concat(this.container));
                case false:
                    return document.body;
            }
        },
        enumerable: false,
        configurable: true
    });
    Popover.prototype.getCoords = function (element) {
        var rect = element.getBoundingClientRect();
        return {
            yTopCoord: rect.top,
            xCenterCoord: rect.width / 2 + rect.x,
        };
    };
    Object.defineProperty(Popover.prototype, "delay", {
        get: function () {
            var delay = this._data["delay"];
            if (typeof delay === "number") {
                return delay;
            }
            return delay["show"];
        },
        enumerable: false,
        configurable: true
    });
    return Popover;
}());
exports["default"] = Popover;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(588);
var popover_1 = __webpack_require__(767);
new popover_1.default(".btn1").popover({
    content: "this button popover",
    title: "button",
    trigger: "click",
    delay: 2000,
});
new popover_1.default(".btn2").popover({
    content: "this button popover",
    title: "button",
    trigger: "click",
    delay: 2000,
});
new popover_1.default(".btn3").popover({
    content: "this button popover",
    title: "button",
    trigger: "click",
    delay: 2000,
});
new popover_1.default("img").popover({
    content: "this img popover",
    title: "img",
    trigger: "click",
    delay: 1000,
});

})();

/******/ })()
;