import "./editor.scss";
import icons_ from "../block-assets/icons";
import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { useState, useRef, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  ColorPicker,
  SelectControl,
} from "@wordpress/components";
import fontFamily from "../block-assets/font-family";
registerBlockType("zita-blocks/icon-block", {
  title: __("Icon", "zita-blocks"),
  icon: "star-empty",
  description: __(
    "Use a slide title for your main title for the slide.",
    "zita-blocks"
  ),
  category: "zita-category",
  keywords: ["icon", "iconbox"],
  attributes: {
    iconClass: {
      type: "string",
      default: "fab fa-wordpress-simple",
    },
    iconColor: {
      type: "string",
      default: "#0693e3",
    },
    iconBgColor: {
      type: "string",
      default: "#EEF6F9",
    },
    titleColor: {
      type: "string",
      default: "#0693e3",
    },
    iconFontsize: {
      type: "number",
      default: 55,
    },
    titleFontsize: {
      type: "number",
      default: 24,
    },
    titleTxt: {
      type: "string",
      default: __("Icon Title", "zita-blocks"),
    },
    titleArrenge: {
      type: "string",
      default: "column",
    },
    itemAlign: {
      type: "text",
      default: "center",
    },
    titleMarginTop: {
      type: "number",
      defalut: 18,
    },
    titleMarginRight: {
      type: "number",
    },
    titleMarginBottom: {
      type: "number",
    },
    titleMarginLeft: {
      type: "number",
      default: 11,
    },
    titleOnOff: {
      type: "boolean",
      default: true,
    },
    iconPaddingTop: {
      type: "number",
      default: 16,
    },
    iconPaddingRight: {
      type: "number",
      default: 20,
    },
    titleTag: {
      type: "string",
      default: "p",
    },
    titleFF: {
      type: "string",
      default: "Ubuntu Mono",
    },
    iconBorder: {
      type: "boolean",
      default: false,
    },
    iconBorderWidth: {
      type: "number",
      default: 2,
    },
    iconBorderRadius: {
      type: "number",
      default: 50,
    },
    iconBorderColor: {
      type: "string",
      default: "#ffa600",
    },
    iconSpace: {
      type: "number",
      default: 79,
    },
  },
  example: () => {},
  // example: {
  // attributes: {
  //   backgroundType: "gradient",
  //   backgroundGradient:
  //     "linear-gradient(-225deg, rgb(255, 5, 124) 0%, rgb(141, 11, 147) 50%, rgb(50, 21, 117) 100%)",
  //   align: "center",
  //   quoteStyle: "quotes",
  //   paddingTop: 30,
  //   paddingBottom: 30,
  //   blockquoteAlign: "center",
  //   textColor: "#FFFFFF",
  //   content: "An inspiring quote...",
  // },
  // },
  edit: ({ attributes, setAttributes }) => {
    const {
      iconClass,
      iconColor,
      iconBgColor,
      titleColor,
      iconFontsize,
      titleFF,
      titleFontsize,
      titleMarginTop,
      titleMarginRight,
      titleMarginBottom,
      titleMarginLeft,
      titleTxt,
      titleArrenge,
      itemAlign,
      titleOnOff,
      iconPaddingTop,
      iconPaddingRight,
      titleTag,
      iconBorder,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconSpace,
    } = attributes;

    let borderStyle = iconBorder
      ? {
          borderWidth: iconBorderWidth + "px",
          borderStyle: "solid",
          borderColor: iconBorderColor,
          borderRadius: iconBorderRadius + "%",
          width: iconSpace + "px",
          height: iconSpace + "px",
        }
      : null;

    const [activeIconContainer, activeIconContainerSet] = useState(false);
    const [iconList, setIconList] = useState(icons_);
    let iconReff = useRef();
    useEffect(() => {
      let handler = (event) => {
        if (!iconReff.current.contains(event.target)) {
          activeIconContainerSet(false);
        }
      };

      if (activeIconContainer) document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });
    const [activeFamilyContainer2, activeFamilyDrop2] = useState(false);
    let familyRef2 = useRef();
    useEffect(() => {
      let handler = (event) => {
        if (!familyRef2.current.contains(event.target)) {
          activeFamilyDrop2(false);
        }
      };

      if (activeFamilyContainer2) document.addEventListener("mouseup", handler);
      return () => {
        document.removeEventListener("mouseup", handler);
      };
    });

    return [
      <InspectorControls>
        <PanelBody
          title={__("Icon Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p>
            <strong>{__("Choose Icon", "zita-blocks")}</strong>
          </p>

          <div
            ref={iconReff}
            className={`wpgt-radio-wrap ${activeIconContainer ? "active" : ""}`}
          >
            <div
              className="selected-icon"
              onClick={(e) => {
                // let set__container = !activeIconContainer;
                activeIconContainerSet(true);
              }}
            >
              <i className={iconClass}></i>
              <div className="search-container">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  onChange={(e) => {
                    let value_ = e.target.value;
                    if (value_ != "") {
                      let newAr = icons_.filter(
                        (checkStr) => checkStr.search(value_) != -1
                      );
                      if (newAr.length) {
                        setIconList(newAr);
                      }
                    } else {
                      setIconList(icons_);
                    }
                  }}
                />
              </div>
            </div>
            <div
              className="wpgt-radio-container"
              onChange={(e) => {
                setAttributes({ iconClass: e.target.value });
              }}
            >
              {iconList.map((iconValue) => {
                return (
                  <div className="wpgt-radio-wrapper">
                    <input
                      id={"wpgt-Radio-" + iconValue}
                      type="radio"
                      name="wpgt-choose-icon"
                      className="radio-input"
                      value={iconValue}
                    />
                    <label htmlFor={"wpgt-Radio-" + iconValue}>
                      <i className={iconValue}></i>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <p>
            <strong>{__("Icon Position", "zita-blocks")}</strong>
          </p>
          <SelectControl
            value={titleArrenge} // e.g: value = [ 'a', 'c' ]
            onChange={(e) => {
              setAttributes({
                titleArrenge: e,
                titleMarginTop: 0,
                titleMarginRight: 0,
                titleMarginBottom: 0,
                titleMarginLeft: 0,
              });
            }}
            options={[
              { value: null, label: "Select a User", disabled: true },
              { value: "unset", label: "Left" },
              { value: "row-reverse", label: "Right" },
              { value: "column", label: "Top" },
              { value: "column-reverse", label: "Bottom" },
            ]}
          />
          <p>
            <strong>{__("Space Between Icon and Title", "zita-blocks")}</strong>
          </p>
          {titleArrenge == "column" && (
            <RangeControl
              label={__("Top", "zita-blocks")}
              value={titleMarginTop}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ titleMarginTop: e })}
            />
          )}
          {titleArrenge == "row-reverse" && (
            <RangeControl
              label={__("Right", "zita-blocks")}
              value={titleMarginRight}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ titleMarginRight: e })}
            />
          )}
          {titleArrenge == "column-reverse" && (
            <RangeControl
              label={__("Bottom", "zita-blocks")}
              value={titleMarginBottom}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ titleMarginBottom: e })}
            />
          )}
          {titleArrenge == "unset" && (
            <RangeControl
              label={__("Left", "zita-blocks")}
              value={titleMarginLeft}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ titleMarginLeft: e })}
            />
          )}

          <p>
            <strong>{__("Font Size", "zita-blocks")}</strong>
          </p>
          <RangeControl
            value={iconFontsize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ iconFontsize: e })}
          />
          <p>
            <strong>{__("Border", "zita-blocks")}</strong>
          </p>
          <ToggleControl
            label={
              iconBorder
                ? __("Disable", "zita-blocks")
                : __("Enable", "zita-blocks")
            }
            checked={iconBorder}
            onChange={(e) => setAttributes({ iconBorder: e })}
          />
          {iconBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label={__("Border Width", "zita-blocks")}
                value={iconBorderWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ iconBorderWidth: e })}
              />
              <RangeControl
                label={__("Border Radius", "zita-blocks")}
                value={iconBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ iconBorderRadius: e })}
              />
              <p>{__("Border Color", "zita-blocks")}</p>
              <ColorPalette
                onChange={(color) => setAttributes({ iconBorderColor: color })}
              />
              <RangeControl
                label={__("Icon Space", "zita-blocks")}
                value={iconSpace}
                min={0}
                max={200}
                onChange={(e) => setAttributes({ iconSpace: e })}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody
          title={__("Title Setting", "zita-blocks")}
          initialOpen={false}
        >
          <ToggleControl
            label={
              titleOnOff ? __("Hide", "zita-blocks") : __("Show", "zita-blocks")
            }
            checked={titleOnOff}
            onChange={(e) => setAttributes({ titleOnOff: e })}
          />
          <p>
            <strong>{__("Choose Tag", "zita-blocks")}</strong>
          </p>
          <SelectControl
            value={titleTag} // e.g: value = [ 'a', 'c' ]
            onChange={(e) => setAttributes({ titleTag: e })}
            options={[
              {
                value: null,
                label: __("Choose Tag", "zita-blocks"),
                disabled: true,
              },
              { value: "h1", label: "h1" },
              { value: "h2", label: "h2" },
              { value: "h3", label: "h3" },
              { value: "p", label: "p" },
            ]}
          />
          <p>
            <strong>{__("Font Size", "zita-blocks")}</strong>
          </p>
          <RangeControl
            value={titleFontsize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ titleFontsize: e })}
          />
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>{__("Font Family", "zita-blocks")}</strong>
            </p>
            <div
              ref={familyRef2}
              className={`font-family-drop-down ${
                activeFamilyContainer2 ? "active" : ""
              }`}
            >
              <div
                onClick={() => {
                  let applyActive = !activeFamilyContainer2;
                  activeFamilyDrop2(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: titleFF }}>
                  {titleFF ? titleFF : __("Choose Family", "zita-blocks")}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ titleFF: family })}
                      style={{ fontFamily: family }}
                    >
                      {family}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {/* font family */}
        </PanelBody>
        <PanelBody
          title={__("Color Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p>
            <strong>{__("Background Color", "zita-blocks")}</strong>
          </p>
          <ColorPicker
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ iconBgColor: color });
            }}
          />
          <p>
            <strong>{__("Icon Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            onChange={(color) => setAttributes({ iconColor: color })}
          />
          <p>
            <strong>{__("Title Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette onChange={(e) => setAttributes({ titleColor: e })} />
        </PanelBody>

        <PanelBody
          title={__("Container Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p>
            <strong>{__("Padding", "zita-blocks")}</strong>
          </p>
          <RangeControl
            label={__("Top & Bottom", "zita-blocks")}
            value={iconPaddingTop}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ iconPaddingTop: e })}
          />
          <RangeControl
            label={__("Left & Right", "zita-blocks")}
            value={iconPaddingRight}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ iconPaddingRight: e })}
          />
        </PanelBody>
      </InspectorControls>,
      <>
        <BlockControls>
          <AlignmentToolbar
            value={itemAlign}
            onChange={(e) => {
              let side =
                e == "left" ? "left" : e == "right" ? "flex-end" : "center";
              setAttributes({ itemAlign: side });
            }}
          />
        </BlockControls>
        <div
          className="themehunk-icon-block"
          style={{
            "justify-content": itemAlign,
          }}
        >
          <div
            style={{
              "flex-direction": titleArrenge,
              backgroundColor: iconBgColor,
              paddingTop: iconPaddingTop + "px",
              paddingRight: iconPaddingRight + "px",
              paddingBottom: iconPaddingTop + "px",
              paddingLeft: iconPaddingRight + "px",
            }}
          >
            <div className="icon-container" style={borderStyle}>
              <i
                style={{
                  color: iconColor,
                  fontSize: iconFontsize + "px",
                }}
                className={iconClass}
              ></i>
            </div>
            {titleOnOff && (
              <div className="text-container">
                <RichText
                  key="editable"
                  tagName={titleTag}
                  placeholder="Icon Title"
                  value={titleTxt}
                  onChange={(e) => setAttributes({ titleTxt: e })}
                  style={{
                    color: titleColor,
                    fontSize: titleFontsize + "px",
                    marginTop: titleMarginTop + "px",
                    marginRight: titleMarginRight + "px",
                    marginBottom: titleMarginBottom + "px",
                    marginLeft: titleMarginLeft + "px",
                    fontFamily: titleFF,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </>,
    ];
  },
  save: ({ attributes }) => {
    const {
      iconClass,
      iconColor,
      iconBgColor,
      titleColor,
      iconFontsize,
      titleFontsize,
      titleMarginTop,
      titleMarginRight,
      titleMarginBottom,
      titleMarginLeft,
      titleTxt,
      titleArrenge,
      titleFF,
      itemAlign,
      titleOnOff,
      titleTag,
      iconBorder,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconSpace,
      iconPaddingTop,
      iconPaddingRight,
    } = attributes;
    let borderStyle = iconBorder
      ? {
          borderWidth: iconBorderWidth + "px",
          borderStyle: "solid",
          borderColor: iconBorderColor,
          borderRadius: iconBorderRadius + "%",
          width: iconSpace + "px",
          height: iconSpace + "px",
        }
      : null;
    // console.log(borderStyle);

    return (
      <div
        className="themehunk-icon-block"
        style={{
          "justify-content": itemAlign,
        }}
      >
        <div
          style={{
            "flex-direction": titleArrenge,
            backgroundColor: iconBgColor,
            paddingTop: iconPaddingTop + "px",
            paddingRight: iconPaddingRight + "px",
            paddingBottom: iconPaddingTop + "px",
            paddingLeft: iconPaddingRight + "px",
          }}
        >
          <div className="icon-container" style={borderStyle}>
            <i
              style={{
                color: iconColor,
                fontSize: iconFontsize + "px",
              }}
              className={iconClass}
            ></i>
          </div>
          {titleOnOff && (
            <div className="text-container">
              <RichText.Content
                tagName={titleTag}
                value={titleTxt}
                style={{
                  color: titleColor,
                  fontSize: titleFontsize + "px",
                  marginTop: titleMarginTop + "px",
                  marginRight: titleMarginRight + "px",
                  marginBottom: titleMarginBottom + "px",
                  marginLeft: titleMarginLeft + "px",
                  fontFamily: titleFF,
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
});
