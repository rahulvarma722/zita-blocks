import "./parent";
import icons_ from "../block-assets/icons";
import "./editor.scss";
import fontFamily from "../block-assets/font-family";

import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload,
} from "@wordpress/block-editor";
import { useState, useRef, useEffect } from "@wordpress/element";
import {
  PanelBody,
  IconButton,
  RangeControl,
  ToggleControl,
  ColorPicker,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const attrSave = {
  image: {
    type: "string",
    default: "icon",
  },
  imageWidth: {
    type: "number",
    default: 30,
  },
  imageUrl: {
    type: "string",
    default: plugin_url.url + "assets/img/image2.jpg",
  },
  imageBorderRadius: {
    type: "number",
    default: 0,
  },
  imagePadding: {
    type: "number",
    default: 0,
  },
  title: {
    type: "string",
    default: __("Add Title", "zita-blocks"),
  },
  titleFontSize: {
    type: "number",
    default: "21",
  },
  titleColor: {
    type: "string",
    default: "#ffa600",
  },
  titleFF: {
    type: "string",
  },
  description: {
    type: "string",
    default: __("Add Service Description", "zita-blocks"),
  },
  descriptionFontSize: {
    type: "number",
    default: "21",
  },
  descriptionColor: {
    type: "string",
  },
  descriptionFF: {
    type: "string",
    default: "Arimo",
  },
  containerBgColor: {
    type: "string",
    default: "#EEF6F9",
  },

  containerBorder: {
    type: "boolean",
    default: false,
  },
  containerBorderWidth: {
    type: "number",
    default: 2,
  },
  containerBorderRadius: {
    type: "number",
    default: 3,
  },
  containerBorderColor: {
    type: "string",
    default: "black",
  },
  containerSpace: { type: "number", default: 0 },
  //   icon
  iconClass: {
    type: "string",
    default: "fas fa-coffee",
  },
  iconFontsize: {
    type: "number",
    default: "40",
  },
  iconColor: {
    type: "string",
    default: "#ffa600",
  },
  iconBgColor: {
    type: "string",
  },
  iconBorder: {
    type: "boolean",
    default: true,
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
};
registerBlockType("zita-blocks/icon-image-content", {
  title: __("icon Image content", "zita-blocks"),
  icon: "editor-insertmore",
  category: "zita-category",
  parent: ["zita-blocks/block-column-parent"],
  getEditWrapperProps(attributes) {},
  keywords: ["service", "service-section"],
  attributes: attrSave,
  // example: () => {},
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const {
      image,
      imageWidth,
      imageUrl,
      imagePadding,
      imageBorderRadius,
      title,
      titleFontSize,
      titleColor,
      titleFF,
      description,
      descriptionFF,
      descriptionFontSize,
      descriptionColor,
      containerBgColor,
      containerBorder,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor,
      containerSpace,
      //icon
      iconFontsize,
      iconClass,
      iconColor,
      iconBgColor,
      iconBorder,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconSpace,
    } = attributes;

    //icon border
    let borderStyle = iconBorder
      ? {
          borderWidth: iconBorderWidth + "px",
          borderStyle: "solid",
          borderColor: iconBorderColor,
          borderRadius: iconBorderRadius + "%",
          width: iconSpace + "px",
          height: iconSpace + "px",
        }
      : {};
    borderStyle = { ...borderStyle, ...{ backgroundColor: iconBgColor } };
    //icon border

    const imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px",
    };
    let containerBorderStyle = containerBorder
      ? {
          borderWidth: containerBorderWidth + "px",
          borderStyle: "solid",
          borderColor: containerBorderColor,
          borderRadius: containerBorderRadius + "px",
        }
      : {};
    containerBorderStyle = containerBgColor
      ? {
          ...containerBorderStyle,
          ...{
            backgroundColor: containerBgColor,
            paddingTop: containerSpace + "px",
            paddingBottom: containerSpace + "px",
          },
        }
      : containerBorderStyle;
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

    const [activeFamilyContainer, activeFamilyDrop] = useState(false);
    let familyRef = useRef();
    useEffect(() => {
      let handler = (event) => {
        if (!familyRef.current.contains(event.target)) {
          activeFamilyDrop(false);
        }
      };

      if (activeFamilyContainer) document.addEventListener("mouseup", handler);
      return () => {
        document.removeEventListener("mouseup", handler);
      };
    });

    return [
      <InspectorControls>
        <PanelBody
          title={__("Image and Icon Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p>
            <strong>{__("Choose Image Or Icon", "zita-blocks")} </strong>
          </p>
          <ToggleControl
            label={
              image == "image"
                ? __("Icon", "zita-blocks")
                : __("Image", "zita-blocks")
            }
            checked={image == "image" ? true : false}
            onChange={(e) => {
              setAttributes({ image: e ? "image" : "icon" });
            }}
          />
          {image == "image" && (
            <div className="service-image-setting">
              <MediaUpload
                label={__("Choose Image", "zita-blocks")}
                onSelect={(e) => {
                  setAttributes({ imageUrl: e.sizes.full.url });
                }}
                value={imageUrl}
                render={({ open }) => (
                  <IconButton
                    onClick={open}
                    icon="upload"
                    className="service-image-uploader editor-media-placeholder__button is-button is-default is-large"
                  >
                    {__("Open Media Library", "zita-blocks")}
                  </IconButton>
                )}
              />
              <RangeControl
                label={__("Width", "zita-blocks")}
                value={imageWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ imageWidth: e })}
              />
              <RangeControl
                label={__("Padding", "zita-blocks")}
                value={imagePadding}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ imagePadding: e })}
              />
              <RangeControl
                label={__("Border Radius", "zita-blocks")}
                value={imageBorderRadius}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ imageBorderRadius: e })}
              />
            </div>
          )}
          {image == "icon" && (
            <div className="service-icon-setting">
              <p>
                <strong>{__("Choose Icon", "zita-blocks")}</strong>
              </p>

              <div
                ref={iconReff}
                className={`wpgt-radio-wrap ${
                  activeIconContainer ? "active" : ""
                }`}
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
                <strong>{__("Font Size", "zita-blocks")}</strong>
              </p>
              <RangeControl
                value={iconFontsize}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ iconFontsize: e })}
              />
              <p>
                <strong>{__("Color", "zita-blocks")}</strong>
              </p>
              <ColorPalette
                onChange={(color) => setAttributes({ iconColor: color })}
              />
              <p>
                <strong>{__("Background Color", "zita-blocks")}</strong>
              </p>
              <ColorPicker
                onChangeComplete={(colorBg) => {
                  let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                  setAttributes({ iconBgColor: color });
                }}
              />
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
                    onChange={(color) =>
                      setAttributes({ iconBorderColor: color })
                    }
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
            </div>
          )}
        </PanelBody>

        <PanelBody
          title={__("Title Settings", "zita-blocks")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={titleFontSize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ titleFontSize: e })}
          />
          <p>
            <strong>{__("Color", "zita-blocks")} </strong>
          </p>
          <ColorPalette
            value={titleColor}
            onChange={(e) => setAttributes({ titleColor: e })}
          />
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>{__("Font Family", "zita-blocks")}</strong>
            </p>
            <div
              ref={familyRef}
              className={`font-family-drop-down ${
                activeFamilyContainer ? "active" : ""
              }`}
            >
              <div
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
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
          title={__("Description Settings", "zita-blocks")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={descriptionFontSize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ descriptionFontSize: e })}
          />
          <p>
            <strong>{__("Color", "zita-blocks")} </strong>
          </p>
          <ColorPalette
            value={descriptionColor}
            onChange={(e) => setAttributes({ descriptionColor: e })}
          />
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>{__("Font Family", "zita-blocks")}</strong>
            </p>
            <div
              ref={familyRef}
              className={`font-family-drop-down ${
                activeFamilyContainer ? "active" : ""
              }`}
            >
              <div
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: descriptionFF }}>
                  {descriptionFF
                    ? descriptionFF
                    : __("Choose Family", "zita-blocks")}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ descriptionFF: family })}
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
          title={__("Container Settings", "zita-blocks")}
          initialOpen={false}
        >
          <ColorPicker
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ containerBgColor: color });
            }}
          />
          <RangeControl
            label={__("Container Space", "zita-blocks")}
            value={containerSpace}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ containerSpace: e })}
          />
          <p>
            <strong>{__("Border", "zita-blocks")}</strong>
          </p>
          <ToggleControl
            label={
              containerBorder
                ? __("Disable", "zita-blocks")
                : __("Enable", "zita-blocks")
            }
            checked={containerBorder}
            onChange={(e) => setAttributes({ containerBorder: e })}
          />
          {containerBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label={__("Border Width", "zita-blocks")}
                value={containerBorderWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ containerBorderWidth: e })}
              />
              <RangeControl
                label={__("Border Radius", "zita-blocks")}
                value={containerBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ containerBorderRadius: e })}
              />
              <p>{__("Border Color", "zita-blocks")}</p>
              <ColorPalette
                onChange={(color) =>
                  setAttributes({ containerBorderColor: color })
                }
              />
            </div>
          )}
        </PanelBody>
      </InspectorControls>,
      <div className="service-section-wrapper" style={containerBorderStyle}>
        <div className={`service-image-icon ${image == "icon" ? "icon_" : ""}`}>
          {image == "image" && (
            <div className="service-image-section">
              <img style={imageStyle} src={imageUrl} />
            </div>
          )}
          {image == "icon" && (
            <div className="icon-container" style={borderStyle}>
              <i
                style={{
                  color: iconColor,
                  fontSize: iconFontsize + "px",
                }}
                className={iconClass}
              ></i>
            </div>
          )}
        </div>
        <div className="service-title-description">
          <div>
            <RichText
              key="editable"
              tagName="h1"
              placeholder={__("Service Title", "zita-blocks")}
              value={__(title, "zita-blocks")}
              onChange={(e) => setAttributes({ title: e })}
              style={{
                color: titleColor,
                fontSize: titleFontSize + "px",
                fontFamily: titleFF,
              }}
            />
            <RichText
              key="editable"
              tagName="p"
              placeholder={__("Service Description", "zita-blocks")}
              value={description}
              onChange={(e) => setAttributes({ description: e })}
              style={{
                color: descriptionColor,
                fontSize: descriptionFontSize + "px",
                fontFamily: descriptionFF,
              }}
            />
          </div>
        </div>
      </div>,
    ];
  },
  save: (props) => {
    const { attributes } = props;
    const {
      image,
      imageWidth,
      imageUrl,
      imagePadding,
      imageBorderRadius,
      title,
      titleFontSize,
      titleColor,
      description,
      descriptionFontSize,
      descriptionColor,
      containerBgColor,
      containerBorder,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor,
      containerSpace,
      //icon
      iconFontsize,
      iconClass,
      iconColor,
      iconBgColor,
      iconBorder,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconSpace,
    } = attributes;
    //icon border
    let borderStyle = iconBorder
      ? {
          borderWidth: iconBorderWidth + "px",
          borderStyle: "solid",
          borderColor: iconBorderColor,
          borderRadius: iconBorderRadius + "%",
          width: iconSpace + "px",
          height: iconSpace + "px",
        }
      : {};
    borderStyle = {
      ...borderStyle,
      ...{ backgroundColor: iconBgColor },
    };
    //icon border

    const imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px",
    };
    let containerBorderStyle = containerBorder
      ? {
          borderWidth: containerBorderWidth + "px",
          borderStyle: "solid",
          borderColor: containerBorderColor,
          borderRadius: containerBorderRadius + "px",
        }
      : {};
    containerBorderStyle = containerBgColor
      ? {
          ...containerBorderStyle,
          ...{
            backgroundColor: containerBgColor,
            paddingTop: containerSpace + "px",
            paddingBottom: containerSpace + "px",
          },
        }
      : containerBorderStyle;

    return (
      <div className="service-section-wrapper" style={containerBorderStyle}>
        <div className={`service-image-icon ${image == "icon" ? "icon_" : ""}`}>
          {image == "image" && (
            <div className="service-image-section">
              <img style={imageStyle} src={imageUrl} />
            </div>
          )}
          {image == "icon" && (
            <div className="icon-container" style={borderStyle}>
              <i
                style={{
                  color: iconColor,
                  fontSize: iconFontsize + "px",
                }}
                className={iconClass}
              ></i>
            </div>
          )}
        </div>
        <div className="service-title-description">
          <div>
            <RichText.Content
              tagName="h1"
              value={__(title, "zita-blocks")}
              style={{ color: titleColor, fontSize: titleFontSize + "px" }}
            />
            <RichText.Content
              tagName="p"
              value={__(description, "zita-blocks")}
              style={{
                color: descriptionColor,
                fontSize: descriptionFontSize + "px",
              }}
            />
          </div>
        </div>
      </div>
    );
  },
});
