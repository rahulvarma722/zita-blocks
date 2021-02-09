/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/icon-block/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/icon-block/script.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/icon-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/icon-block/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/icon-block/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-category-layout/script.js":
/*!***************************************************!*\
  !*** ./src/blocks/post-category-layout/script.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-category-layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-category-layout/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/post-category-layout/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-grid-layout/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/post-grid-layout/script.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-grid-layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-grid-layout/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/post-grid-layout/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-image-layout-five-post/script.js":
/*!**********************************************************!*\
  !*** ./src/blocks/post-image-layout-five-post/script.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-image-layout-five-post/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-image-layout-five-post/style.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/post-image-layout-five-post/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-image-layout-four-post/script.js":
/*!**********************************************************!*\
  !*** ./src/blocks/post-image-layout-four-post/script.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-image-layout-four-post/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-image-layout-four-post/style.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/post-image-layout-four-post/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-image-layout-three-post/script.js":
/*!***********************************************************!*\
  !*** ./src/blocks/post-image-layout-three-post/script.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-image-layout-three-post/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-image-layout-three-post/style.scss":
/*!************************************************************!*\
  !*** ./src/blocks/post-image-layout-three-post/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-image-layout/script.js":
/*!************************************************!*\
  !*** ./src/blocks/post-image-layout/script.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-image-layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-image-layout/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/post-image-layout/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/post-list-layout/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/post-list-layout/script.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/post-list-layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/post-list-layout/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/post-list-layout/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/pricing-table/script.js":
/*!********************************************!*\
  !*** ./src/blocks/pricing-table/script.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/pricing-table/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar-pie/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/progress-bar-pie/script.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/progress-bar-pie/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);

var stateCheck = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    var circle_ = document.querySelectorAll(".zita-block-pie-circle.front_");

    if (circle_.length > 0) {
      for (var x in circle_) {
        if (circle_[x].nodeName == "DIV") {
          (function () {
            var circleTxt = circle_[x].querySelectorAll("span.percent_")[0];
            var circle_ele = circle_[x].querySelectorAll("svg")[0];
            var circle_ele_apply = circle_[x].querySelectorAll(".percent-apply")[0];
            var getCircleData = circle_ele.getAttribute("data");
            getCircleData = JSON.parse(getCircleData);
            var _getCircleData = getCircleData,
                radius = _getCircleData.radius,
                text = _getCircleData.text,
                strokeWidth = _getCircleData.strokeWidth,
                strokeBgColor = _getCircleData.strokeBgColor,
                strokeColor = _getCircleData.strokeColor,
                fillBgColor = _getCircleData.fillBgColor,
                lineCap = _getCircleData.lineCap,
                animationDelay = _getCircleData.animationDelay; // let dasharray_

            circle_ele_apply.style.strokeWidth = strokeWidth;
            circle_ele_apply.style.stroke = strokeColor;
            var startAng = 0;

            var setIntFn = function setIntFn() {
              circleTxt.innerText = startAng + "%";
              circle_ele_apply.style.strokeDasharray = "".concat(startAng * (Math.PI * (radius * 2) / 100), " ").concat(Math.PI * (radius * 2));
              if (startAng >= text) clearInterval(startInt);
              startAng++;
            };

            var startInt = setInterval(setIntFn, animationDelay);
            circle_ele.removeAttribute("data");
          })();
        }
      }
    }
  }
}, 100);

/***/ }),

/***/ "./src/blocks/progress-bar-pie/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/progress-bar-pie/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar/script.js":
/*!*******************************************!*\
  !*** ./src/blocks/progress-bar/script.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/progress-bar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);

var stateCheck = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    var getProgressBar = document.querySelectorAll(".zita-linear-progress-bar.front_");

    if (getProgressBar.length) {
      for (var x in getProgressBar) {
        if (getProgressBar[x].nodeName == "DIV") {
          (function () {
            var getPercent = getProgressBar[x].getAttribute("percent");
            var getDelay = getProgressBar[x].getAttribute("delay");
            var iniTialPercent = 0;
            var putTextPErcent = getProgressBar[x].querySelectorAll(".percent_")[0];
            var putStylePErcent = getProgressBar[x].querySelectorAll(".line-inner_")[0];
            var setValue = setInterval(function () {
              putTextPErcent.innerText = iniTialPercent + "%";
              putStylePErcent.style.width = iniTialPercent + "%";
              if (getPercent <= iniTialPercent) clearInterval(setValue);
              iniTialPercent++;
            }, getDelay);
          })();
        }
      }
    }
  }
}, 100);

/***/ }),

/***/ "./src/blocks/progress-bar/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/progress-bar/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/service-section/script.js":
/*!**********************************************!*\
  !*** ./src/blocks/service-section/script.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/service-section/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/service-section/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/service-section/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-block-slider/script.js":
/*!************************************************!*\
  !*** ./src/blocks/zita-block-slider/script.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/zita-block-slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);

var stateCheck = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(stateCheck); // common slider initillization
    // for slide sliding effect

    var getAllslideSlide = document.querySelectorAll(".zita-slider-ul-slides.slideEffect");

    for (var sliderSlide in getAllslideSlide) {
      if (getAllslideSlide[sliderSlide].nodeName == "UL") {
        (function () {
          var slider = getAllslideSlide[sliderSlide];
          var firstElement_ = slider.firstElementChild.cloneNode(true);
          firstElement_.classList.add("first-element");
          var lastElement_ = slider.lastElementChild.cloneNode(true);
          lastElement_.classList.add("last-element");
          slider.append(firstElement_);
          slider.prepend(lastElement_);
          slider.children[1].classList.add("selected_"); // return;

          var sliderINIT = slider.getAttribute("slidersetting");
          sliderINIT = JSON.parse(sliderINIT);
          var containerClosest = slider.closest(".zita-block-slide-wrapper");
          var getPArentWidthSlide = containerClosest.parentNode.getBoundingClientRect().width; // overWirting Width and height

          if ("width" in sliderINIT && sliderINIT.width && getPArentWidthSlide > sliderINIT.width) {
            // overwriting width
            getPArentWidthSlide = sliderINIT.width;
            containerClosest.style.width = getPArentWidthSlide + "px";
          }

          if ("height" in sliderINIT && sliderINIT.height) {
            // overwriting height
            slider.style.height = sliderINIT.height + "px";
          } // overWirting Width and height


          var countChildern = slider.children.length;
          slider.style.width = countChildern * getPArentWidthSlide + "px";
          slider.style.marginLeft = -getPArentWidthSlide + "px";
          containerClosest.style.opacity = 1;
          var tranSitionDuration = 1;
          var transitionDuClone = tranSitionDuration;
          var sliderDelay = containerClosest.querySelector(".zita-slider-container").getAttribute("sliderDelay");
          var prev = containerClosest.querySelector(".zita-slider-bullet-next-prev.prev");
          var next = containerClosest.querySelector(".zita-slider-bullet-next-prev.next");
          var indicator = containerClosest.querySelector(".zita-slider-bullet-trigger");
          var indicatorActive = void 0,
              indiCatorStyle = void 0;

          if (indicator) {
            indicatorActive = indicator.getAttribute("active-color");
            indiCatorStyle = indicator.getAttribute("childStyle");
            indicator = indicator.children;

            if (indicator[0].querySelector("span")) {
              indicator[0].querySelector("span").style.backgroundColor = indicatorActive;
            }
          }

          var slideIndex = 1;

          if (prev && next) {
            prev.addEventListener("click", function () {
              prevSlideSl();
              resetTimerSl();
            });
            next.addEventListener("click", function () {
              nextSlideSl();
              resetTimerSl();
            });
          }

          var _loop = function _loop(x) {
            if (indicator[x].nodeName == "LI") {
              indicator[x].addEventListener("click", function () {
                slideIndex = parseInt(x) + 1;
                changesSlideSl();
                resetTimerSl();
              });
            }
          };

          for (var x in indicator) {
            _loop(x);
          }

          function nextSlideSl() {
            if (slideIndex == countChildern - 2) {
              // next opt perform
              slideIndex++;
              setTimeout(function () {
                slideIndex = 1;
                transitionDuClone = 0;
                changesSlideSl();
                transitionDuClone = tranSitionDuration;
              }, transitionDuClone * 1000); // next opt perform
            } else if (slideIndex < countChildern - 2) {
              slideIndex++;
            }

            changesSlideSl();
          }

          function prevSlideSl() {
            if (slideIndex == 1) {
              // prev opt perform
              slideIndex--;
              setTimeout(function () {
                slideIndex = countChildern - 2;
                transitionDuClone = 0;
                changesSlideSl();
                transitionDuClone = tranSitionDuration;
              }, transitionDuClone * 1000); // prev opt perform
            } else if (slideIndex > 1) {
              slideIndex--;
            }

            changesSlideSl();
          }

          function changesSlideSl() {
            var moveSlide = slideIndex > 0 ? -(slideIndex * getPArentWidthSlide) : 0;
            slider.style.marginLeft = moveSlide + "px";
            slider.style.transitionDuration = transitionDuClone + "s";

            for (var i = 0; i < countChildern; i++) {
              slider.children[i].classList.remove("selected_");

              if (indicator && indicator[i]) {
                indicator[i].classList.remove("selected_");

                if (indicator[i].querySelector("span")) {
                  indicator[i].querySelector("span").setAttribute("style", indiCatorStyle);
                }
              }
            }

            slider.children[slideIndex].classList.add("selected_");

            if (indicator) {
              var indicatorIndex = countChildern - 1 == slideIndex ? 0 : slideIndex == 0 ? indicator.length - 1 : slideIndex - 1;
              indicator[indicatorIndex].classList.add("selected_");

              if (indicator[indicatorIndex].querySelector("span")) {
                indicator[indicatorIndex].querySelector("span").style.backgroundColor = indicatorActive;
              }
            }
          }

          sliderDelay = parseInt(sliderDelay);

          if (sliderDelay > 0) {
            sliderDelay = sliderDelay * 1000;
          }

          function resetTimerSl() {
            if (sliderDelay > 0) {
              clearInterval(timer);
              timer = setInterval(autoPlaySl, sliderDelay);
            }
          }

          function autoPlaySl() {
            nextSlideSl();
          }

          var timer = void 0;

          if (sliderDelay > 0) {
            timer = setInterval(autoPlaySl, sliderDelay);
          }
        })();
      }
    }
    /****************************** */
    // for slide fade effect


    var getAllSlide = document.querySelectorAll(".zita-slider-ul-slides.fadeEffect");

    for (var slider in getAllSlide) {
      if (getAllSlide[slider].nodeName == "UL") {
        (function () {
          var slides = getAllSlide[slider].children;
          var containerClosest = getAllSlide[slider].closest(".zita-slider-container"); // overwriting width and height

          var sliderINIT_ = getAllSlide[slider].getAttribute("slidersetting");
          sliderINIT_ = JSON.parse(sliderINIT_);
          var containerWrapper = getAllSlide[slider].closest(".zita-block-slide-wrapper");
          var getPArentWidthSlide_ = containerWrapper.parentNode.getBoundingClientRect().width;
          slides[0].classList.add("selected_");

          if ("width" in sliderINIT_ && sliderINIT_.width && getPArentWidthSlide_ > sliderINIT_.width) {
            // overwriting width
            containerWrapper.style.width = sliderINIT_.width + "px";
          }

          if ("height" in sliderINIT_ && sliderINIT_.height) {
            // overwriting height
            getAllSlide[slider].style.height = sliderINIT_.height + "px";
          } // overwriting width and height


          var sliderDelay = containerClosest.getAttribute("sliderDelay");
          var prev = containerClosest.querySelector(".zita-slider-bullet-next-prev.prev");
          var next = containerClosest.querySelector(".zita-slider-bullet-next-prev.next");
          var indicator = containerClosest.querySelector(".zita-slider-bullet-trigger");
          var indicatorActive = void 0,
              indiCatorStyle = void 0;

          if (indicator) {
            indicatorActive = indicator.getAttribute("active-color");
            indiCatorStyle = indicator.getAttribute("childStyle");
            indicator = indicator.children;

            if (indicator[0].querySelector("span")) {
              indicator[0].querySelector("span").style.backgroundColor = indicatorActive;
            }
          }

          containerWrapper.style.opacity = 1;
          var index = 0;

          if (prev && next) {
            prev.addEventListener("click", function () {
              prevSlide();
              resetTimer();
            });
            next.addEventListener("click", function () {
              nextSlide();
              resetTimer();
            });
          }

          var _loop2 = function _loop2(x) {
            if (indicator[x].nodeName == "LI") {
              indicator[x].addEventListener("click", function () {
                index = x;
                changesSlide();
                resetTimer();
              });
            }
          };

          for (var x in indicator) {
            _loop2(x);
          }

          function nextSlide() {
            if (index == slides.length - 1) {
              index = 0;
            } else {
              index++;
            }

            changesSlide();
          }

          function prevSlide() {
            if (index == 0) {
              index = slides.length - 1;
            } else {
              index--;
            }

            changesSlide();
          }

          function changesSlide() {
            for (var i = 0; i < slides.length; i++) {
              slides[i].classList.remove("selected_");

              if (indicator) {
                indicator[i].classList.remove("selected_");

                if (indicator[i].querySelector("span")) {
                  indicator[i].querySelector("span").setAttribute("style", indiCatorStyle);
                }
              }
            }

            slides[index].classList.add("selected_");

            if (indicator) {
              indicator[index].classList.add("selected_");

              if (indicator[index].querySelector("span")) {
                indicator[index].querySelector("span").style.backgroundColor = indicatorActive;
              }
            }
          }

          sliderDelay = parseInt(sliderDelay);

          if (sliderDelay > 0) {
            sliderDelay = sliderDelay * 1000;
          }

          function resetTimer() {
            if (sliderDelay > 0) {
              clearInterval(timer);
              timer = setInterval(autoPlay, sliderDelay);
            }
          }

          function autoPlay() {
            nextSlide();
          }

          var timer = void 0;

          if (sliderDelay > 0) {
            timer = setInterval(autoPlay, sliderDelay);
          }
        })();
      }
    } // ready state

  }
}, 100);

/***/ }),

/***/ "./src/blocks/zita-block-slider/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/zita-block-slider/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-post-slider/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/zita-post-slider/script.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/zita-post-slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/zita-post-slider/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/zita-post-slider/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_icon_block_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/icon-block/script */ "./src/blocks/icon-block/script.js");
/* harmony import */ var _blocks_pricing_table_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/pricing-table/script */ "./src/blocks/pricing-table/script.js");
/* harmony import */ var _blocks_service_section_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/service-section/script */ "./src/blocks/service-section/script.js");
/* harmony import */ var _blocks_progress_bar_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/progress-bar/script */ "./src/blocks/progress-bar/script.js");
/* harmony import */ var _blocks_progress_bar_pie_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/progress-bar-pie/script */ "./src/blocks/progress-bar-pie/script.js");
/* harmony import */ var _blocks_zita_block_slider_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/zita-block-slider/script */ "./src/blocks/zita-block-slider/script.js");
/* harmony import */ var _blocks_post_list_layout_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/post-list-layout/script */ "./src/blocks/post-list-layout/script.js");
/* harmony import */ var _blocks_zita_post_slider_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/zita-post-slider/script */ "./src/blocks/zita-post-slider/script.js");
/* harmony import */ var _blocks_post_category_layout_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/post-category-layout/script */ "./src/blocks/post-category-layout/script.js");
/* harmony import */ var _blocks_post_grid_layout_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/post-grid-layout/script */ "./src/blocks/post-grid-layout/script.js");
/* harmony import */ var _blocks_post_image_layout_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/post-image-layout/script */ "./src/blocks/post-image-layout/script.js");
/* harmony import */ var _blocks_post_image_layout_three_post_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/post-image-layout-three-post/script */ "./src/blocks/post-image-layout-three-post/script.js");
/* harmony import */ var _blocks_post_image_layout_four_post_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/post-image-layout-four-post/script */ "./src/blocks/post-image-layout-four-post/script.js");
/* harmony import */ var _blocks_post_image_layout_five_post_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/post-image-layout-five-post/script */ "./src/blocks/post-image-layout-five-post/script.js");















/***/ })

/******/ });
//# sourceMappingURL=script.js.map