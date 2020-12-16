import "./style.scss";
let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    // common slider initillization
    // for slide sliding effect
    let getAllslideSlide = document.querySelectorAll(
      ".zita-slider-ul-slides.slideEffect"
    );
    for (let sliderSlide in getAllslideSlide) {
      if (getAllslideSlide[sliderSlide].nodeName == "UL") {
        let slider = getAllslideSlide[sliderSlide];

        let firstElement_ = slider.firstElementChild.cloneNode(true);
        firstElement_.classList.add("first-element");
        let lastElement_ = slider.lastElementChild.cloneNode(true);
        lastElement_.classList.add("last-element");
        slider.append(firstElement_);
        slider.prepend(lastElement_);
        slider.children[1].classList.add("selected_");
        // return;

        let sliderINIT = slider.getAttribute("slidersetting");
        sliderINIT = JSON.parse(sliderINIT);
        let containerClosest = slider.closest(".zita-block-slide-wrapper");
        let getPArentWidthSlide = containerClosest.parentNode.getBoundingClientRect()
          .width;
        // overWirting Width and height
        if (
          "width" in sliderINIT &&
          sliderINIT.width &&
          getPArentWidthSlide > sliderINIT.width
        ) {
          // overwriting width
          getPArentWidthSlide = sliderINIT.width;
          containerClosest.style.width = getPArentWidthSlide + "px";
        }
        if ("height" in sliderINIT && sliderINIT.height) {
          // overwriting height
          slider.style.height = sliderINIT.height + "px";
        }
        // overWirting Width and height
        let countChildern = slider.children.length;
        slider.style.width = countChildern * getPArentWidthSlide + "px";
        slider.style.marginLeft = -getPArentWidthSlide + "px";
        containerClosest.style.opacity = 1;

        let tranSitionDuration = 1;
        let transitionDuClone = tranSitionDuration;
        let sliderDelay = containerClosest
          .querySelector(".zita-slider-container")
          .getAttribute("sliderDelay");
        const prev = containerClosest.querySelector(
          ".zita-slider-bullet-next-prev.prev"
        );
        const next = containerClosest.querySelector(
          ".zita-slider-bullet-next-prev.next"
        );

        let indicator = containerClosest.querySelector(
          ".zita-slider-bullet-trigger"
        );
        let indicatorActive, indiCatorStyle;
        if (indicator) {
          indicatorActive = indicator.getAttribute("active-color");
          indiCatorStyle = indicator.getAttribute("childStyle");
          indicator = indicator.children;
          if (indicator[0].querySelector("span")) {
            indicator[0].querySelector(
              "span"
            ).style.backgroundColor = indicatorActive;
          }
        }
        let slideIndex = 1;
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
        for (let x in indicator) {
          if (indicator[x].nodeName == "LI") {
            indicator[x].addEventListener("click", function () {
              slideIndex = parseInt(x) + 1;
              changesSlideSl();
              resetTimerSl();
            });
          }
        }
        function nextSlideSl() {
          if (slideIndex == countChildern - 2) {
            // next opt perform
            slideIndex++;
            setTimeout(() => {
              slideIndex = 1;
              transitionDuClone = 0;
              changesSlideSl();
              transitionDuClone = tranSitionDuration;
            }, transitionDuClone * 1000);
            // next opt perform
          } else if (slideIndex < countChildern - 2) {
            slideIndex++;
          }
          changesSlideSl();
        }
        function prevSlideSl() {
          if (slideIndex == 1) {
            // prev opt perform
            slideIndex--;
            setTimeout(() => {
              slideIndex = countChildern - 2;
              transitionDuClone = 0;
              changesSlideSl();
              transitionDuClone = tranSitionDuration;
            }, transitionDuClone * 1000);
            // prev opt perform
          } else if (slideIndex > 1) {
            slideIndex--;
          }
          changesSlideSl();
        }

        function changesSlideSl() {
          let moveSlide =
            slideIndex > 0 ? -(slideIndex * getPArentWidthSlide) : 0;
          slider.style.marginLeft = moveSlide + "px";
          slider.style.transitionDuration = transitionDuClone + "s";
          for (let i = 0; i < countChildern; i++) {
            slider.children[i].classList.remove("selected_");
            if (indicator && indicator[i]) {
              indicator[i].classList.remove("selected_");
              if (indicator[i].querySelector("span")) {
                indicator[i]
                  .querySelector("span")
                  .setAttribute("style", indiCatorStyle);
              }
            }
          }
          slider.children[slideIndex].classList.add("selected_");
          if (indicator) {
            let indicatorIndex =
              countChildern - 1 == slideIndex
                ? 0
                : slideIndex == 0
                ? indicator.length - 1
                : slideIndex - 1;
            indicator[indicatorIndex].classList.add("selected_");
            if (indicator[indicatorIndex].querySelector("span")) {
              indicator[indicatorIndex].querySelector(
                "span"
              ).style.backgroundColor = indicatorActive;
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
        let timer;
        if (sliderDelay > 0) {
          timer = setInterval(autoPlaySl, sliderDelay);
        }
      }
    }

    /****************************** */
    // for slide fade effect
    let getAllSlide = document.querySelectorAll(
      ".zita-slider-ul-slides.fadeEffect"
    );
    for (let slider in getAllSlide) {
      if (getAllSlide[slider].nodeName == "UL") {
        const slides = getAllSlide[slider].children;
        const containerClosest = getAllSlide[slider].closest(
          ".zita-slider-container"
        );
        // overwriting width and height
        let sliderINIT_ = getAllSlide[slider].getAttribute("slidersetting");
        sliderINIT_ = JSON.parse(sliderINIT_);
        let containerWrapper = getAllSlide[slider].closest(
          ".zita-block-slide-wrapper"
        );
        let getPArentWidthSlide_ = containerWrapper.parentNode.getBoundingClientRect()
          .width;
        slides[0].classList.add("selected_");

        if (
          "width" in sliderINIT_ &&
          sliderINIT_.width &&
          getPArentWidthSlide_ > sliderINIT_.width
        ) {
          // overwriting width
          containerWrapper.style.width = sliderINIT_.width + "px";
        }
        if ("height" in sliderINIT_ && sliderINIT_.height) {
          // overwriting height
          getAllSlide[slider].style.height = sliderINIT_.height + "px";
        }

        // overwriting width and height

        let sliderDelay = containerClosest.getAttribute("sliderDelay");

        const prev = containerClosest.querySelector(
          ".zita-slider-bullet-next-prev.prev"
        );
        const next = containerClosest.querySelector(
          ".zita-slider-bullet-next-prev.next"
        );
        let indicator = containerClosest.querySelector(
          ".zita-slider-bullet-trigger"
        );
        let indicatorActive, indiCatorStyle;
        // console.log(indicator.children);
        if (indicator) {
          indicatorActive = indicator.getAttribute("active-color");
          indiCatorStyle = indicator.getAttribute("childStyle");
          indicator = indicator.children;
          if (indicator[0].querySelector("span")) {
            indicator[0].querySelector(
              "span"
            ).style.backgroundColor = indicatorActive;
          }
        }
        containerWrapper.style.opacity = 1;
        let index = 0;
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

        for (let x in indicator) {
          if (indicator[x].nodeName == "LI") {
            indicator[x].addEventListener("click", function () {
              index = x;
              changesSlide();
              resetTimer();
            });
          }
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
          for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("selected_");
            if (indicator) {
              indicator[i].classList.remove("selected_");
              if (indicator[i].querySelector("span")) {
                indicator[i]
                  .querySelector("span")
                  .setAttribute("style", indiCatorStyle);
              }
            }
          }
          slides[index].classList.add("selected_");
          if (indicator) {
            indicator[index].classList.add("selected_");
            if (indicator[index].querySelector("span")) {
              indicator[index].querySelector(
                "span"
              ).style.backgroundColor = indicatorActive;
            }
          }
        }
        // console.log(sliderDelay);
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
        let timer;
        if (sliderDelay > 0) {
          timer = setInterval(autoPlay, sliderDelay);
        }
      }
    }
    // ready state
  }
}, 100);
