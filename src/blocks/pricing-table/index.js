import "./parent";
import "./editor.scss";
import fontFamily from "../block-assets/font-family";
import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";

import { useState, useRef, useEffect } from "@wordpress/element";
import {
  PanelBody,
  RangeControl,
  ColorPicker,
  ToggleControl,
} from "@wordpress/components";
const attrS = {
  headingTxt: {
    type: "string",
    default: "Basic",
  },
  headingFontSize: {
    type: "number",
    default: 29,
  },
  headingColor: {
    type: "string",
    default: "#ffffff",
  },
  headingFF: {
    type: "string",
  },
  headingDescription: {
    type: "string",
  },
  headerBackground: {
    type: "string",
    default: "#5f5f5f",
  },
  descriptionColor: {
    type: "string",
    default: "grey",
  },
  descriptionFontSize: {
    type: "number",
  },
  descriptionFF: {
    type: "string",
  },
  middleTxt: {
    type: "string",
    default:
      "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>2 User Free</p><p>Multiple Email Support</p>",
  },
  pointsColor: {
    type: "string",
    default: "white",
  },
  middleBgColor: {
    type: "string",
    default: "#2B2B2B",
  },
  pointsFontSize: {
    type: "number",
    default: 16,
  },
  pointsSpaceBw: {
    type: "number",
    default: 24,
  },
  pointAlign: {
    type: "string",
    default: "center",
  },
  pointsFF: {
    type: "string",
  },
  currencyC: { type: "string", default: "$" },
  // currencyColor: { type: "string" },
  currencyFs: { type: "number", default: 16 },
  priceMonth: {
    type: "string",
    default: "99",
  },
  currencyFormate: {
    type: "boolean",
    default: true,
  },
  currencyFontWeight: { type: "string" },
  priceMonthPrice: {
    type: "string",
    default: "/ month",
  },
  priceMonthPriceFs: {
    type: "string",
  },
  priceMonthPriceColor: {
    type: "string",
    default: "#c2c4c4",
  },
  pricePosition: {
    type: "string",
    default: "top",
  },
  priceFontSize: {
    type: "number",
    default: 50,
  },
  priceColor: {
    type: "string",
    default: "#ffffff",
  },
  priceBgColor: {
    type: "string",
  },
  priceFF: {
    type: "string",
  },
  priceInline: { type: "boolean", default: true },
  pricePadding: { type: "number", default: 0 },
  priceBorder: { type: "boolean", default: false },
  priceBorderWidth: {
    type: "number",
    default: 2,
  },
  priceBorderRadius: {
    type: "number",
    default: 50,
  },
  priceBorderColor: {
    type: "string",
    default: "#ffa600",
  },
  priceSpace: {
    type: "number",
    default: 100,
  },
  linkTxt: {
    type: "string",
    default: "ORDER NOW",
  },
  linkLink: {
    type: "string",
    default: "#",
  },
  linkTarget: {
    type: "boolean",
    default: false,
  },
  linkColor: {
    type: "string",
  },
  linkBgColor: {
    type: "string",
    default: "#f1b426",
  },
  linkFontSize: {
    type: "number",
  },
  linkBorder: { type: "boolean", default: false },
  linkBorderWidth: { type: "number", default: 1 },
  linkBorderRadius: { type: "number", default: 2 },
  linkBorderColor: { type: "string" },
  linkSpaceV: { type: "number", default: 14 },
  linkSpaceH: { type: "number", default: 45 },
  bottomTxt: {
    type: "string",
    default: "Terms & Conditions",
  },
  bottomTxtColor: {
    type: "string",
    default: "white",
  },
  bottomTxtFontSize: {
    type: "number",
  },
  bottomTxtFF: {
    type: "string",
  },
  footerBgColor: { type: "string", default: "#2B2B2B" },
  // containerBgColor: {
  //   type: "string",
  // },
  containerBorder: {
    type: "boolean",
    default: false,
  },
  containerBorderWidth: {
    type: "number",
  },
  containerBorderRadius: {
    type: "number",
  },
  containerBorderColor: {
    type: "string",
  },
};

registerBlockType("zita-blocks/pricing-table-table", {
  title: "Price Table Colomn",
  icon: "table-col-before",
  category: "zita-category",
  parent: ["zita-blocks/pricing-table-section"],
  keywords: ["price", "pricebox"],
  attributes: attrS,
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const {
      headerBackground,
      headingTxt,
      headingFontSize,
      headingColor,
      headingFF,
      headingDescription,
      descriptionColor,
      descriptionFontSize,
      descriptionFF,
      middleTxt,
      middleBgColor,
      pointsColor,
      pointsFontSize,
      pointsSpaceBw,
      pointsFF,
      pointAlign,
      priceMonth,
      priceMonthPrice,
      priceMonthPriceFs,
      priceMonthPriceColor,
      pricePosition,
      priceFontSize,
      priceColor,
      priceBgColor,
      priceFF,
      priceInline,
      currencyFontWeight,
      priceBorder,
      priceBorderWidth,
      priceBorderRadius,
      priceBorderColor,
      priceSpace,
      priceSpaceV,
      priceSpaceH,
      currencyC,
      // currencyColor,
      currencyFs,
      currencyFormate,

      linkTxt,
      linkLink,
      linkTarget,
      linkColor,
      linkBgColor,
      linkFontSize,
      linkBorder,
      linkBorderWidth,
      linkBorderRadius,
      linkBorderColor,
      linkSpaceH,
      linkSpaceV,
      bottomTxt,
      bottomTxtColor,
      bottomTxtFontSize,
      bottomTxtFF,
      footerBgColor,
      // container
      // containerBgColor,
      containerBorder,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor,
    } = attributes;
    let containerBorderStyle = containerBorder
      ? {
          borderWidth: containerBorderWidth + "px",
          borderStyle: "solid",
          borderColor: containerBorderColor,
          borderRadius: containerBorderRadius + "px",
        }
      : {};
    // containerBorderStyle = containerBgColor
    //   ? {
    //       ...containerBorderStyle,
    //       ...{
    //         backgroundColor: containerBgColor,
    //       },
    //     }
    //   : containerBorderStyle;
    // price style
    let priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight,
    };

    if (priceBorder)
      priceStyle = {
        ...priceStyle,
        ...{
          borderWidth: priceBorderWidth + "px",
          borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
          borderColor: priceBorderColor,
          borderStyle: "solid",
        },
      };
    if (!priceInline) {
      priceStyle = {
        ...priceStyle,
        ...{
          height: priceSpace + "px",
          width: priceSpace + "px",
        },
      };
    } else {
      priceStyle = {
        ...priceStyle,
        ...{
          paddingTop: priceSpaceV + "px",
          paddingBottom: priceSpaceV + "px",
          paddingLeft: priceSpaceH + "px",
          paddingRight: priceSpaceH + "px",
        },
      };
    }

    let link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px",
    };
    link_style = linkBorder
      ? {
          ...{
            borderWidth: linkBorderWidth + "px",
            borderRadius: linkBorderRadius + "px",
            borderStyle: "solid",
            borderColor: linkBorderColor,
          },
          ...link_style,
        }
      : link_style;

    // one
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
    // two
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
        <PanelBody title={"Header Section"} initialOpen={false}>
          <p className="block-inside">Header Setting</p>
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>Font Family</strong>
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
                <span style={{ fontFamily: headingFF }}>
                  {headingFF ? headingFF : "Choose Family"}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ headingFF: family })}
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
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={headingColor}
            onChange={(color) => setAttributes({ headingColor: color })}
          />
          <RangeControl
            label="Font Size"
            value={headingFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ headingFontSize: e })}
          />
          <p className="block-inside">Short Description</p>

          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>Font Family</strong>
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
                <span style={{ fontFamily: descriptionFF }}>
                  {descriptionFF ? descriptionFF : "Choose Family"}
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

          <RangeControl
            label="Font Size"
            value={descriptionFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ descriptionFontSize: e })}
          />
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={descriptionColor}
            onChange={(color) => setAttributes({ descriptionColor: color })}
          />
          <p className="block-inside">Background Color</p>
          <ColorPicker
            color={headerBackground}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ headerBackground: color });
            }}
          />
        </PanelBody>
        <PanelBody title={"Price Setting"} initialOpen={false}>
          <p className="block-inside">Position</p>
          <div className="column-layout-num-column text_">
            <div>
              <input
                type="radio"
                name="price-position"
                id="price-position-top"
                checked={pricePosition == "top" ? true : false}
                onChange={() => setAttributes({ pricePosition: "top" })}
              />
              <label for="price-position-top">Top</label>
            </div>
            <div>
              <input
                type="radio"
                name="price-position"
                id="price-position-bottom"
                checked={pricePosition == "bottom" ? true : false}
                onChange={() => setAttributes({ pricePosition: "bottom" })}
              />
              <label for="price-position-bottom">Bottom</label>
            </div>
          </div>
          <p className="block-inside">Price</p>
          <div className="flex-section">
            <p>Price</p>
            <input
              type="number"
              value={priceMonth}
              onChange={(e) => {
                setAttributes({ priceMonth: e.target.value });
              }}
            />
          </div>
          <p>Color</p>
          <ColorPalette
            value={priceColor}
            onChange={(color) => setAttributes({ priceColor: color })}
          />
          <RangeControl
            label="Font Size"
            value={priceFontSize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ priceFontSize: e })}
          />
          <p className="block-inside">Currency</p>

          <div className="flex-section">
            <p>Currency</p>
            <select
              value={currencyC}
              onChange={(e) => {
                setAttributes({ currencyC: e.target.value });
              }}
            >
              {[
                ["$", "Dollar"],
                ["€", "Euro"],
                ["฿", "Baht"],
                ["₣", "Franc"],
                ["ƒ", "Guilder"],
                ["kr", "Krona"],
                ["₤", "Lira"],
                ["₹", "Rupee (Indian)"],
                ["₧", "Peseta"],
                ["₱", "Peso"],
                ["£", "Pound Sterling"],
                ["R$", "Real"],
                ["₽", "Ruble"],
                ["₨", "Rupee"],
                ["₪", "Shekel"],
                ["¥", "Yen/Yuan"],
                ["₩", "Won"],
                ["", "Custom"],
              ].map((v) => (
                <option value={v[0]}>{v[0] + " " + v[1]}</option>
              ))}
            </select>
          </div>
          {/* <p>Color</p>
          <ColorPalette
            value={currencyColor}
            onChange={(color) => setAttributes({ currencyColor: color })}
          />*/}
          <RangeControl
            label="Font Size"
            value={currencyFs}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ currencyFs: e })}
          />
          <div className="flex-section">
            <p>Formate</p>
            <select
              value={currencyFormate}
              onChange={(e) => {
                let raised = e.target.value == 1 ? true : false;
                setAttributes({ currencyFormate: raised });
                if (raised) setAttributes({ currencyFs: 8 });
              }}
            >
              <option value="0">Normal</option>
              <option value="1">Rasied</option>
            </select>
          </div>
          <p className="block-inside">Text</p>

          <div className="flex-section">
            <p>Enter Text</p>
            <input
              type="text"
              value={priceMonthPrice}
              onChange={(e) => {
                setAttributes({ priceMonthPrice: e.target.value });
              }}
            />
          </div>
          <p>Color</p>
          <ColorPalette
            value={priceMonthPriceColor}
            onChange={(color) => setAttributes({ priceMonthPriceColor: color })}
          />
          <RangeControl
            label="Font Size"
            value={priceMonthPriceFs}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ priceMonthPriceFs: e })}
          />

          <p className="block-inside">Advance Setting</p>
          <p>Layout</p>
          <div className="column-layout-num-column text_">
            <div>
              <input
                type="radio"
                id="price-layout-rounded"
                name="price-layout"
                checked={!priceInline ? true : false}
                onChange={() => setAttributes({ priceInline: false })}
              />
              <label for="price-layout-rounded">Rounded</label>
            </div>
            <div>
              <input
                type="radio"
                id="price-layout-box"
                name="price-layout"
                checked={priceInline ? true : false}
                onChange={() => setAttributes({ priceInline: true })}
              />
              <label for="price-layout-box">Box</label>
            </div>
          </div>

          {!priceInline && (
            <RangeControl
              label="Price Space"
              value={priceSpace}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ priceSpace: e })}
            />
          )}
          {priceInline && (
            <>
              <RangeControl
                label="Top/Bottom"
                value={priceSpaceV}
                min={0}
                max={200}
                onChange={(e) => setAttributes({ priceSpaceV: e })}
              />
              <RangeControl
                label="Left/Right"
                value={priceSpaceH}
                min={0}
                max={200}
                onChange={(e) => setAttributes({ priceSpaceH: e })}
              />
            </>
          )}

          <p>
            <strong>Border</strong>
          </p>

          <ToggleControl
            label={priceBorder ? "Disable" : "Enable"}
            checked={priceBorder}
            onChange={(e) => setAttributes({ priceBorder: e })}
          />
          {priceBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label="Border Width"
                value={priceBorderWidth}
                min={0}
                max={20}
                onChange={(e) => setAttributes({ priceBorderWidth: e })}
              />
              <RangeControl
                label="Border Radius"
                value={priceBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ priceBorderRadius: e })}
              />
              <p>Border Color</p>
              <ColorPalette
                value={priceBorderColor}
                onChange={(color) => setAttributes({ priceBorderColor: color })}
              />
            </div>
          )}
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>Font Family</strong>
            </p>
            <div
              ref={familyRef}
              className={`font-family-drop-down ${
                activeFamilyContainer ? "active" : ""
              }`}
            >
              <div
                ref={familyRef}
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: priceFF }}>
                  {priceFF ? priceFF : "Choose Family"}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ priceFF: family })}
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
          {/* font weight */}
          <div className="flex-section">
            <p>Font Weight</p>
            <select
              value={currencyFontWeight}
              onChange={(e) => {
                setAttributes({ currencyFontWeight: e.target.value })}}
            >
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="700">700</option>
              <option value="900">900</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
            </select>
          </div>
          {/* font weight */}
          <p>
            <strong>Background Color</strong>
          </p>
          <ColorPicker
            color={priceBgColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ priceBgColor: color });
            }}
          />
        </PanelBody>
        <PanelBody title={"Middle Section"} initialOpen={false}>
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>Font Family</strong>
            </p>
            <div
              ref={familyRef}
              className={`font-family-drop-down ${
                activeFamilyContainer ? "active" : ""
              }`}
            >
              <div
                ref={familyRef}
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: pointsFF }}>
                  {pointsFF ? pointsFF : "Choose Family"}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ pointsFF: family })}
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

          <RangeControl
            label="Font Size"
            value={pointsFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ pointsFontSize: e })}
          />
          <RangeControl
            label="Space Between Text"
            value={pointsSpaceBw}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ pointsSpaceBw: e })}
          />
          <p>
            <strong>Text Align</strong>
          </p>
          <div className="column-layout-num-column text_">
            <div>
              <input
                type="radio"
                name="points-align"
                id="points-align-top"
                checked={pointAlign == "left" ? true : false}
                onChange={() => setAttributes({ pointAlign: "left" })}
              />
              <label for="points-align-top">Left</label>
            </div>
            <div>
              <input
                type="radio"
                name="points-align"
                id="points-align-bottom"
                checked={pointAlign == "center" ? true : false}
                onChange={() => setAttributes({ pointAlign: "center" })}
              />
              <label for="points-align-bottom">Center</label>
            </div>
          </div>

          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={pointsColor}
            onChange={(color) => setAttributes({ pointsColor: color })}
          />
          <p>
            <strong>Background Color</strong>
          </p>
          <ColorPicker
            color={middleBgColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ middleBgColor: color });
            }}
          />
        </PanelBody>

        <PanelBody title={"Button Section"} initialOpen={false}>
          <p className="block-inside">Button</p>
          <RangeControl
            label="Font Size"
            value={linkFontSize}
            min={0}
            max={70}
            onChange={(e) => setAttributes({ linkFontSize: e })}
          />
          <p>Color</p>
          <ColorPalette
            value={linkColor}
            onChange={(color) => setAttributes({ linkColor: color })}
          />
          <p>Background Color</p>
          <ColorPalette
            value={linkBgColor}
            onChange={(color) => setAttributes({ linkBgColor: color })}
          />
          <RangeControl
            label="Height"
            value={linkSpaceV}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ linkSpaceV: e })}
          />
          <RangeControl
            label="Width"
            value={linkSpaceH}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ linkSpaceH: e })}
          />
          <p>
            <strong>Border</strong>
          </p>
          <ToggleControl
            label={linkBorder ? "Disable" : "Enable"}
            checked={linkBorder}
            onChange={(e) => setAttributes({ linkBorder: e })}
          />
          {linkBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label="Border Width"
                value={linkBorderWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ linkBorderWidth: e })}
              />
              <RangeControl
                label="Border Radius"
                value={linkBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ linkBorderRadius: e })}
              />
              <p>Border Color</p>
              <ColorPalette
                value={linkBorderColor}
                onChange={(color) => setAttributes({ linkBorderColor: color })}
              />
            </div>
          )}

          <p className="block-inside">Small Text</p>
          <RangeControl
            label="Font Size"
            value={bottomTxtFontSize}
            min={0}
            max={70}
            onChange={(e) => setAttributes({ bottomTxtFontSize: e })}
          />
          <p>Color</p>
          <ColorPalette
            value={bottomTxtColor}
            onChange={(color) => setAttributes({ bottomTxtColor: color })}
          />
          {/* font family */}
          <div className="THK-font-family-wrapper">
            <p>
              <strong>Font Family</strong>
            </p>
            <div
              ref={familyRef}
              className={`font-family-drop-down ${
                activeFamilyContainer ? "active" : ""
              }`}
            >
              <div
                ref={familyRef}
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: bottomTxtFF }}>
                  {bottomTxtFF ? bottomTxtFF : "Choose Family"}
                </span>
              </div>
              <div className="family-items">
                {fontFamily.map((family, key_) => {
                  return (
                    <span
                      onClick={() => setAttributes({ bottomTxtFF: family })}
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
          <p className="block-inside">Background Color</p>
          <ColorPicker
            color={footerBgColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ footerBgColor: color });
            }}
          />
        </PanelBody>

        <PanelBody title={"Container Settings"} initialOpen={false}>
          {/* <ColorPicker
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ containerBgColor: color });
            }}
          /> */}
          <p>
            <strong>Border</strong>
          </p>
          <ToggleControl
            label={containerBorder ? "Disable" : "Enable"}
            checked={containerBorder}
            onChange={(e) => setAttributes({ containerBorder: e })}
          />
          {containerBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label="Border Width"
                value={containerBorderWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ containerBorderWidth: e })}
              />
              <RangeControl
                label="Border Radius"
                value={containerBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ containerBorderRadius: e })}
              />
              <p>Border Color</p>
              <ColorPalette
                value={containerBorderColor}
                onChange={(color) =>
                  setAttributes({ containerBorderColor: color })
                }
              />
            </div>
          )}
        </PanelBody>
      </InspectorControls>,
      <div className="pricing-table-wrapper" style={containerBorderStyle}>
        <div
          style={{ backgroundColor: headerBackground }}
          className="pricing-table-top"
          style={{ backgroundColor: headerBackground }}
        >
          <RichText
            key="editable"
            tagName="h3"
            placeholder="Pricing Table"
            value={headingTxt}
            style={{
              fontSize: headingFontSize + "px",
              color: headingColor,
              fontFamily: headingFF,
            }}
            onChange={(e) => setAttributes({ headingTxt: e })}
          />
          {pricePosition == "top" && (
            <div
              className={`price_ ${priceInline ? "inline_" : "box_"}`}
              style={priceStyle}
            >
              <div
                style={{ color: priceColor }}
                className={currencyFormate ? "rasied" : ""}
              >
                <p style={{ fontSize: currencyFs }}>{currencyC}</p>
                <p style={{ fontSize: priceFontSize + "px" }}>{priceMonth}</p>
              </div>
              <p
                style={{
                  fontSize: priceMonthPriceFs + "px",
                  color: priceMonthPriceColor,
                }}
              >
                {priceMonthPrice}
              </p>
            </div>
          )}
          <RichText
            key="editable"
            tagName="p"
            style={{
              fontSize: descriptionFontSize + "px",
              color: descriptionColor,
              fontFamily: descriptionFF,
            }}
            value={headingDescription}
            onChange={(e) => setAttributes({ headingDescription: e })}
          />
        </div>
        <div
          className="pricing-table-middle"
          style={{ backgroundColor: middleBgColor }}
        >
          <RichText
            key="editable"
            tagName="div"
            placeholder="Pricing Description"
            multiline="p"
            style={{
              fontSize: pointsFontSize + "px",
              color: pointsColor,
              fontFamily: pointsFF,
              marginTop: pointsSpaceBw + "px",
              marginBottom: pointsSpaceBw + "px",
              textAlign: pointAlign,
            }}
            value={middleTxt}
            onChange={(e) => {
              setAttributes({ middleTxt: e });
            }}
          />
        </div>
        <div
          className="pricing-table-bottom"
          style={{ backgroundColor: footerBgColor }}
        >
          {pricePosition == "bottom" && (
            <div
              className={`price_ ${priceInline ? "inline_" : "box_"}`}
              style={priceStyle}
            >
              <div
                style={{ color: priceColor }}
                className={currencyFormate ? "rasied" : ""}
              >
                <p style={{ fontSize: currencyFs }}>{currencyC}</p>
                <p style={{ fontSize: priceFontSize + "px" }}>{priceMonth}</p>
              </div>
              <p
                style={{
                  fontSize: priceMonthPriceFs + "px",
                  color: priceMonthPriceColor,
                }}
              >
                {priceMonthPrice}
              </p>
            </div>
          )}
          <div className="link_button">
            <RichText
              key="editable"
              tagName="a"
              placeholder="Click Me"
              value={linkTxt}
              onChange={(e) => setAttributes({ linkTxt: e })}
              style={link_style}
            />
          </div>
          <RichText
            className="bottom-text"
            key="editable"
            tagName="p"
            placeholder="Price"
            value={bottomTxt}
            onChange={(e) => setAttributes({ bottomTxt: e })}
            style={{
              color: bottomTxtColor,
              fontSize: bottomTxtFontSize + "px",
              fontFamily: bottomTxtFF,
            }}
          />
        </div>
      </div>,
    ];
  },
  save: (props) => {
    const {
      headerBackground,
      headingTxt,
      headingFontSize,
      headingColor,
      headingFF,
      headingDescription,
      descriptionColor,
      descriptionFontSize,
      descriptionFF,
      middleTxt,
      middleBgColor,
      pointsColor,
      pointsFontSize,
      pointAlign,
      pointsSpaceBw,
      pointsFF,
      priceMonth,
      priceMonthPrice,
      priceMonthPriceFs,
      priceMonthPriceColor,
      pricePosition,
      priceFontSize,
      priceColor,
      priceBgColor,
      priceFF,
      priceInline,
      currencyFontWeight,
      priceBorder,
      priceBorderWidth,
      priceBorderRadius,
      priceBorderColor,
      priceSpace,
      priceSpaceV,
      priceSpaceH,
      currencyC,
      // currencyColor,
      currencyFs,
      currencyFormate,

      linkTxt,
      linkLink,
      linkTarget,
      linkColor,
      linkBgColor,
      linkFontSize,
      linkBorder,
      linkBorderWidth,
      linkBorderRadius,
      linkBorderColor,
      linkSpaceH,
      linkSpaceV,
      bottomTxt,
      bottomTxtColor,
      bottomTxtFontSize,
      bottomTxtFF,
      footerBgColor,
      // container
      // containerBgColor,
      containerBorder,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor,
    } = props.attributes;

    let containerBorderStyle = containerBorder
      ? {
          borderWidth: containerBorderWidth + "px",
          borderStyle: "solid",
          borderColor: containerBorderColor,
          borderRadius: containerBorderRadius + "px",
        }
      : {};
    // price style
    let priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight,
    };
    if (priceBorder)
      priceStyle = {
        ...priceStyle,
        ...{
          borderWidth: priceBorderWidth + "px",
          borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
          borderColor: priceBorderColor,
          borderStyle: "solid",
        },
      };
    if (!priceInline) {
      priceStyle = {
        ...priceStyle,
        ...{
          height: priceSpace + "px",
          width: priceSpace + "px",
        },
      };
    } else {
      priceStyle = {
        ...priceStyle,
        ...{
          paddingTop: priceSpaceV + "px",
          paddingBottom: priceSpaceV + "px",
          paddingLeft: priceSpaceH + "px",
          paddingRight: priceSpaceH + "px",
        },
      };
    }
    let link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px",
    };
    link_style = linkBorder
      ? {
          ...{
            borderWidth: linkBorderWidth + "px",
            borderRadius: linkBorderRadius + "px",
            borderStyle: "solid",
            borderColor: linkBorderColor,
          },
          ...link_style,
        }
      : link_style;

    return (
      <div className="pricing-table-wrapper" style={containerBorderStyle}>
        <div
          style={{ backgroundColor: headerBackground }}
          className="pricing-table-top"
          style={{ backgroundColor: headerBackground }}
        >
          <RichText.Content
            tagName="h3"
            value={headingTxt}
            style={{
              fontSize: headingFontSize + "px",
              color: headingColor,
              fontFamily: headingFF,
            }}
          />
          {pricePosition == "top" && (
            <div
              className={`price_ ${priceInline ? "inline_" : "box_"}`}
              style={priceStyle}
            >
              <div
                style={{ color: priceColor }}
                className={currencyFormate ? "rasied" : ""}
              >
                <p style={{ fontSize: currencyFs }}>{currencyC}</p>
                <p style={{ fontSize: priceFontSize + "px" }}>{priceMonth}</p>
              </div>
              <p
                style={{
                  fontSize: priceMonthPriceFs + "px",
                  color: priceMonthPriceColor,
                }}
              >
                {priceMonthPrice}
              </p>
            </div>
          )}
          <RichText.Content
            tagName="p"
            style={{
              fontSize: descriptionFontSize + "px",
              color: descriptionColor,
              fontFamily: descriptionFF,
            }}
            value={headingDescription}
          />
        </div>
        <div
          className="pricing-table-middle"
          style={{ backgroundColor: middleBgColor }}
        >
          <RichText.Content
            tagName="div"
            multiline="p"
            style={{
              fontSize: pointsFontSize + "px",
              color: pointsColor,
              fontFamily: pointsFF,
              marginTop: pointsSpaceBw + "px",
              marginBottom: pointsSpaceBw + "px",
              textAlign: pointAlign,
            }}
            value={middleTxt}
          />
        </div>
        <div
          className="pricing-table-bottom"
          style={{ backgroundColor: footerBgColor }}
        >
          {pricePosition == "bottom" && (
            <div
              className={`price_ ${priceInline ? "inline_" : "box_"}`}
              style={priceStyle}
            >
              <div
                style={{ color: priceColor }}
                className={currencyFormate ? "rasied" : ""}
              >
                <p style={{ fontSize: currencyFs }}>{currencyC}</p>
                <p style={{ fontSize: priceFontSize + "px" }}>{priceMonth}</p>
              </div>
              <p
                style={{
                  fontSize: priceMonthPriceFs + "px",
                  color: priceMonthPriceColor,
                }}
              >
                {priceMonthPrice}
              </p>
            </div>
          )}
          <div className="link_button">
            <RichText.Content tagName="a" value={linkTxt} style={link_style} />
          </div>
          <RichText.Content
            className="bottom-text"
            tagName="p"
            value={bottomTxt}
            style={{
              color: bottomTxtColor,
              fontSize: bottomTxtFontSize + "px",
              fontFamily: bottomTxtFF,
            }}
          />
        </div>
      </div>
    );
  },
});
