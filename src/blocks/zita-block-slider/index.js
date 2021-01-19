import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
let bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
const attrSave = {
  sliderSetting: {
    type: "array",
    default: [
      {
        dimension: {
          width: false,
          custom_width: 580,
          height: false,
          custom_height: 360,
        },
        sliderEffect: "fadeEffect",
        linearTrigger: {
          enable: true,
          fontSize: 20,
          color: "rgba(231,192,192,1)",
          activeColor: "rgba(68,222,68,1)",
        },
        leftRightTrigger: {
          enable: true,
          fontSize: 20,
          color: "rgba(231,192,192,1)",
          backgroundColor: "rgb(128, 128, 128)",
        },
        autoTrigger: {
          enable: true,
          delay: 4,
        },
      },
    ],
  },
  slides: {
    type: "array",
    default: [
      {
        container: {
          bgImage: bgImageWrapper,
          overlayColor: "",
          bgSize: "cover",
        },
        wrapper: {
          bgcolor: "",
          border: "",
          alignment: "left",
          spacing: 2,
        },
        title: {
          text: __("This Is Title text", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        text: {
          text: __("Add Description", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        buttoneOne: {
          enable: true,
          text: __("Button One", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
        buttoneTwo: {
          enable: true,
          text: __("Button Two", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
      },
      {
        container: {
          bgImage: bgImageWrapper,
          overlayColor: "",
          bgSize: "cover",
        },
        wrapper: {
          bgcolor: "",
          border: "",
          alignment: "left",
          spacing: 2,
        },
        title: {
          text: __("This Is Title text", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        text: {
          text: __("Add Description", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        buttoneOne: {
          enable: true,
          text: __("Button One", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
        buttoneTwo: {
          enable: true,
          text: __("Button Two", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
      },
      {
        container: {
          bgImage: bgImageWrapper,
          overlayColor: "",
          bgSize: "cover",
        },
        wrapper: {
          bgcolor: "",
          border: "",
          alignment: "left",
          spacing: 2,
        },
        title: {
          text: __("This Is Title text", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        text: {
          text: __("Add Description", "zita-blocks"),
          fontSize: 17,
          color: "red",
        },
        buttoneOne: {
          enable: true,
          text: __("Button One", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
        buttoneTwo: {
          enable: true,
          text: __("Button Two", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: "",
        },
      },
    ],
  },
};
let elementLiSlide = (val, index_, clone = false) => {
  let buttonOneStyle = {};
  if (val.buttoneOne.fontSize)
    buttonOneStyle.fontSize = val.buttoneOne.fontSize;
  if (val.buttoneOne.color) buttonOneStyle.color = val.buttoneOne.color;
  if (val.buttoneOne.backgroundColor)
    buttonOneStyle.backgroundColor = val.buttoneOne.backgroundColor;
  if (val.buttoneOne.height) {
    buttonOneStyle.paddingBottom = val.buttoneOne.height;
    buttonOneStyle.paddingTop = val.buttoneOne.height;
  }
  if (val.buttoneOne.width) {
    buttonOneStyle.paddingLeft = val.buttoneOne.width;
    buttonOneStyle.paddingRight = val.buttoneOne.width;
  }

  buttonOneStyle = val.buttoneOne.border
    ? {
        ...{
          borderColor: val.buttoneOne.borderColor,
          borderWidth: val.buttoneOne.borderWidth,
          borderRadius: val.buttoneOne.borderRadius,
          borderStyle: "solid",
        },
        ...buttonOneStyle,
      }
    : buttonOneStyle;
  let buttonTwoStyle = {};
  if (val.buttoneTwo.fontSize)
    buttonTwoStyle.fontSize = val.buttoneTwo.fontSize;
  if (val.buttoneTwo.color) buttonTwoStyle.color = val.buttoneTwo.color;
  if (val.buttoneTwo.backgroundColor)
    buttonTwoStyle.backgroundColor = val.buttoneTwo.backgroundColor;
  if (val.buttoneTwo.height) {
    buttonTwoStyle.paddingBottom = val.buttoneTwo.height;
    buttonTwoStyle.paddingTop = val.buttoneTwo.height;
  }
  if (val.buttoneTwo.width) {
    buttonTwoStyle.paddingLeft = val.buttoneTwo.width;
    buttonTwoStyle.paddingRight = val.buttoneTwo.width;
  }

  buttonTwoStyle = val.buttoneTwo.border
    ? {
        ...{
          borderColor: val.buttoneTwo.borderColor,
          borderWidth: val.buttoneTwo.borderWidth,
          borderRadius: val.buttoneTwo.borderRadius,
          borderStyle: "solid",
        },
        ...buttonTwoStyle,
      }
    : buttonTwoStyle;

  return (
    <li
      key={index_}
      className={`slides ${index_ == 0 ? "selected_" : ""} ${
        clone ? clone : ""
      }`}
    >
      <div className="zita-slider-wrapper">
        <div className="zita-slider-container">
          <div className="zita-slider-content-wrapper">
            <div
              className="zita-slider-image-container"
              style={{
                backgroundSize: "cover",
                backgroundImage: "url(" + val.container.bgImage + ")",
              }}
            ></div>
            <div
              className={`zita-slider-text ${val.wrapper.alignment}`}
              style={{
                backgroundColor: val.container.overlayColor,
              }}
            >
              <div
                style={
                  val.wrapper.spacing && {
                    marginTop: val.wrapper.spacing + "px",
                    marginBottom: val.wrapper.spacing + "px",
                  }
                }
              >
                <RichText.Content
                  tagName="h1"
                  value={__(val.title.text, "zita-blocks")}
                  style={{
                    fontSize: val.title.fontSize + "px",
                    color: val.title.color,
                  }}
                />
                <RichText.Content
                  tagName="h2"
                  value={__(val.text.text, "zita-blocks")}
                  style={{
                    fontSize: val.text.fontSize + "px",
                    color: val.text.color,
                  }}
                />

                <div className="button-container">
                  {val.buttoneOne.enable && (
                    <>
                      <RichText.Content
                        tagName="a"
                        placeholder={__("Button One", "zita-blocks")}
                        value={val.buttoneOne.text}
                        style={buttonOneStyle}
                      />
                    </>
                  )}
                  {val.buttoneTwo.enable && (
                    <RichText.Content
                      tagName="a"
                      placeholder={__("Button One", "zita-blocks")}
                      value={val.buttoneTwo.text}
                      style={buttonTwoStyle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
registerBlockType("zita-blocks/slide", {
  title: __("Slider", "zita-blocks"),
  icon: "editor-code",
  category: "zita-category",
  getEditWrapperProps(attributes) {
    let { sliderSetting } = attributes;
    let sliderWidth = sliderSetting[0].dimension;
    let attr_ = { "data-align": "full" };
    if (sliderWidth.width && sliderWidth.custom_width) {
      attr_ = {
        ...attr_,
        ...{
          style: { maxWidth: sliderWidth.custom_width + "px" },
        },
      };
    }
    return attr_;
  },
  keywords: ["slider", "slider section"],
  attributes: attrSave,
  example: () => {},
  edit: Edit,
  save: (props) => {
    let { slides, sliderSetting } = props.attributes;
    sliderSetting = sliderSetting[0];
    let leftRightStyle = {
      color: sliderSetting.leftRightTrigger.color,
      backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
      fontSize: sliderSetting.leftRightTrigger.fontSize,
    };
    let trigStyle = `height: ${sliderSetting.linearTrigger.fontSize}px;width:${sliderSetting.linearTrigger.fontSize}px;background-color: ${sliderSetting.linearTrigger.color};`;
    let trigStyleObj = {
      height: sliderSetting.linearTrigger.fontSize + "px",
      width: sliderSetting.linearTrigger.fontSize + "px",
      backgroundColor: sliderSetting.linearTrigger.color,
    };

    let sliderSettingJson = {};
    if (sliderSetting.dimension.width)
      sliderSettingJson = {
        ...sliderSettingJson,
        ...{ width: sliderSetting.dimension.custom_width },
      };
    if (sliderSetting.dimension.height)
      sliderSettingJson = {
        ...sliderSettingJson,
        ...{ height: sliderSetting.dimension.custom_height },
      };
    sliderSettingJson = JSON.stringify(sliderSettingJson);
    return (
      <div className="zita-block-slide-wrapper">
        <div
          className="zita-slider-container"
          sliderDelay={
            sliderSetting.autoTrigger.delay > 0 &&
            sliderSetting.autoTrigger.enable
              ? sliderSetting.autoTrigger.delay
              : 0
          }
        >
          {sliderSetting.linearTrigger.enable && (
            <ul
              className="zita-slider-bullet-trigger"
              active-color={sliderSetting.linearTrigger.activeColor}
              childStyle={trigStyle}
            >
              {slides.map((val, index_) => {
                return (
                  <li className={`${index_ == 0 ? "selected_" : ""}`}>
                    <span style={trigStyleObj}></span>
                  </li>
                );
              })}
            </ul>
          )}
          {/* next prev btn */}
          {sliderSetting.leftRightTrigger.enable && (
            <>
              <div className="zita-slider-bullet-next-prev next">
                <span style={leftRightStyle}>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </div>
              <div className="zita-slider-bullet-next-prev prev">
                <span style={leftRightStyle}>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </div>
            </>
          )}
          {/* slider main slides */}
          <ul
            className={`zita-slider-ul-slides ${sliderSetting.sliderEffect}`}
            sliderSetting={sliderSettingJson}
          >
            {/* {sliderSetting.sliderEffect == "slideEffect" &&
              elementLiSlide(
                slides[slides.length - 1],
                slides.length - 1,
                "clone_ last_"
              )} */}
            {slides.map((val, index_) => {
              return elementLiSlide(val, index_);
            })}
            {/* {sliderSetting.sliderEffect == "slideEffect" &&
              elementLiSlide(slides[0], 0, "clone_ first_")} */}
          </ul>
        </div>
      </div>
    );
  },
});
