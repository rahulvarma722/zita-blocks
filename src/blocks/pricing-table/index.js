import "./parent";
import "./editor.scss";
import fontFamily from "../block-assets/font-family";
import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

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
    default: __("Basic", "zita-blocks"),
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
    default: __("ORDER NOW", "zita-blocks"),
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
    default: __("Terms & Conditions", "zita-blocks"),
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
  title: __("Price Table Colomn", "zita-blocks"),
  icon: "table-col-before",
  category: "zita-category",
  parent: ["zita-blocks/pricing-table-section"],
  keywords: ["price", "pricebox"],
  attributes: attrS,
  example: () => {},
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
        <PanelBody
          title={__("Header Section", "zita-blocks")}
          initialOpen={false}
        >
          <p className="block-inside">{__("Header Setting", "zita-blocks")}</p>
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
            <strong>{__("Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={headingColor}
            onChange={(color) => setAttributes({ headingColor: color })}
          />
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={headingFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ headingFontSize: e })}
          />
          <p className="block-inside">
            {__("Short Description", "zita-blocks")}
          </p>

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
            label={__("Font Size", "zita-blocks")}
            value={descriptionFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ descriptionFontSize: e })}
          />
          <p>
            <strong>{__("Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={descriptionColor}
            onChange={(color) => setAttributes({ descriptionColor: color })}
          />
          <p className="block-inside">
            {__("Background Color", "zita-blocks")}
          </p>
          <ColorPicker
            color={headerBackground}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ headerBackground: color });
            }}
          />
        </PanelBody>
        <PanelBody title={"Price Setting"} initialOpen={false}>
          <p className="block-inside">{__("Position", "zita-blocks")}</p>
          <div className="column-layout-num-column text_">
            <div>
              <input
                type="radio"
                name="price-position"
                id="price-position-top"
                checked={pricePosition == "top" ? true : false}
                onChange={() => setAttributes({ pricePosition: "top" })}
              />
              <label for="price-position-top">{__("Top", "zita-blocks")}</label>
            </div>
            <div>
              <input
                type="radio"
                name="price-position"
                id="price-position-bottom"
                checked={pricePosition == "bottom" ? true : false}
                onChange={() => setAttributes({ pricePosition: "bottom" })}
              />
              <label for="price-position-bottom">
                {__("Bottom", "zita-blocks")}
              </label>
            </div>
          </div>
          <p className="block-inside">{__("Price", "zita-blocks")}</p>
          <div className="flex-section">
            <p>{__("Price", "zita-blocks")}</p>
            <input
              type="number"
              value={priceMonth}
              onChange={(e) => {
                setAttributes({ priceMonth: e.target.value });
              }}
            />
          </div>
          <p>{__("Color", "zita-blocks")}</p>
          <ColorPalette
            value={priceColor}
            onChange={(color) => setAttributes({ priceColor: color })}
          />
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={priceFontSize}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ priceFontSize: e })}
          />
          <p className="block-inside">{__("Currency", "zita-blocks")}</p>

          <div className="flex-section">
            <p>{__("Currency", "zita-blocks")}</p>
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
            label={__("Font Size", "zita-blocks")}
            value={currencyFs}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ currencyFs: e })}
          />
          <div className="flex-section">
            <p>{__("Formate", "zita-blocks")}</p>
            <select
              value={currencyFormate}
              onChange={(e) => {
                let raised = e.target.value == 1 ? true : false;
                setAttributes({ currencyFormate: raised });
                if (raised) setAttributes({ currencyFs: 8 });
              }}
            >
              <option value="0">{__("Normal", "zita-blocks")}</option>
              <option value="1">{__("Rasied", "zita-blocks")}</option>
            </select>
          </div>
          <p className="block-inside">{__("Text", "zita-blocks")}</p>

          <div className="flex-section">
            <p>{__("Enter Text", "zita-blocks")}</p>
            <input
              type="text"
              value={priceMonthPrice}
              onChange={(e) => {
                setAttributes({ priceMonthPrice: e.target.value });
              }}
            />
          </div>
          <p>{__("Color", "zita-blocks")}</p>
          <ColorPalette
            value={priceMonthPriceColor}
            onChange={(color) => setAttributes({ priceMonthPriceColor: color })}
          />
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={priceMonthPriceFs}
            min={0}
            max={100}
            onChange={(e) => setAttributes({ priceMonthPriceFs: e })}
          />

          <p className="block-inside">{__("Advance Setting", "zita-blocks")}</p>
          <p>{__("Layout", "zita-blocks")}</p>
          <div className="column-layout-num-column text_">
            <div>
              <input
                type="radio"
                id="price-layout-rounded"
                name="price-layout"
                checked={!priceInline ? true : false}
                onChange={() => setAttributes({ priceInline: false })}
              />
              <label for="price-layout-rounded">
                {__("Rounded", "zita-blocks")}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="price-layout-box"
                name="price-layout"
                checked={priceInline ? true : false}
                onChange={() => setAttributes({ priceInline: true })}
              />
              <label for="price-layout-box">{__("Box", "zita-blocks")}</label>
            </div>
          </div>

          {!priceInline && (
            <RangeControl
              label={__("Price Space", "zita-blocks")}
              value={priceSpace}
              min={0}
              max={200}
              onChange={(e) => setAttributes({ priceSpace: e })}
            />
          )}
          {priceInline && (
            <>
              <RangeControl
                label={__("Top/Bottom", "zita-blocks")}
                value={priceSpaceV}
                min={0}
                max={200}
                onChange={(e) => setAttributes({ priceSpaceV: e })}
              />
              <RangeControl
                label={__("Left/Right", "zita-blocks")}
                value={priceSpaceH}
                min={0}
                max={200}
                onChange={(e) => setAttributes({ priceSpaceH: e })}
              />
            </>
          )}

          <p>
            <strong>{__("Border", "zita-blocks")}</strong>
          </p>

          <ToggleControl
            label={
              priceBorder
                ? __("Disable", "zita-blocks")
                : __("Enable", "zita-blocks")
            }
            checked={priceBorder}
            onChange={(e) => setAttributes({ priceBorder: e })}
          />
          {priceBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label={__("Border Width", "zita-blocks")}
                value={priceBorderWidth}
                min={0}
                max={20}
                onChange={(e) => setAttributes({ priceBorderWidth: e })}
              />
              <RangeControl
                label={__("Border Radius", "zita-blocks")}
                value={priceBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ priceBorderRadius: e })}
              />
              <p>{__("Border Color", "zita-blocks")}</p>
              <ColorPalette
                value={priceBorderColor}
                onChange={(color) => setAttributes({ priceBorderColor: color })}
              />
            </div>
          )}
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
                ref={familyRef}
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: priceFF }}>
                  {priceFF ? priceFF : __("Choose Family", "zita-blocks")}
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
            <p>{__("Font Weight", "zita-blocks")}</p>
            <select
              value={currencyFontWeight}
              onChange={(e) => {
                setAttributes({ currencyFontWeight: e.target.value });
              }}
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
            <strong>{__("Background Color", "zita-blocks")}</strong>
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
              <strong>{__("Font Family", "zita-blocks")}</strong>
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
                  {pointsFF ? pointsFF : __("Choose Family", "zita-blocks")}
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
            label={__("Font Size", "zita-blocks")}
            value={pointsFontSize}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ pointsFontSize: e })}
          />
          <RangeControl
            label={__("Space Between Text", "zita-blocks")}
            value={pointsSpaceBw}
            min={0}
            max={60}
            onChange={(e) => setAttributes({ pointsSpaceBw: e })}
          />
          <p>
            <strong>{__("Text Align", "zita-blocks")}</strong>
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
              <label for="points-align-top">{__("Left", "zita-blocks")}</label>
            </div>
            <div>
              <input
                type="radio"
                name="points-align"
                id="points-align-bottom"
                checked={pointAlign == "center" ? true : false}
                onChange={() => setAttributes({ pointAlign: "center" })}
              />
              <label for="points-align-bottom">
                {__("Center", "zita-blocks")}
              </label>
            </div>
          </div>

          <p>
            <strong>{__("Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={pointsColor}
            onChange={(color) => setAttributes({ pointsColor: color })}
          />
          <p>
            <strong>{__("Background Color", "zita-blocks")}</strong>
          </p>
          <ColorPicker
            color={middleBgColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ middleBgColor: color });
            }}
          />
        </PanelBody>

        <PanelBody
          title={__("Button Section", "zita-blocks")}
          initialOpen={false}
        >
          <p className="block-inside">{__("Button", "zita-blocks")}</p>
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={linkFontSize}
            min={0}
            max={70}
            onChange={(e) => setAttributes({ linkFontSize: e })}
          />
          <p>{__("Color", "zita-blocks")}</p>
          <ColorPalette
            value={linkColor}
            onChange={(color) => setAttributes({ linkColor: color })}
          />
          <p>{__("Background Color", "zita-blocks")}</p>
          <ColorPalette
            value={linkBgColor}
            onChange={(color) => setAttributes({ linkBgColor: color })}
          />
          <RangeControl
            label={__("Height", "zita-blocks")}
            value={linkSpaceV}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ linkSpaceV: e })}
          />
          <RangeControl
            label={__("Width", "zita-blocks")}
            value={linkSpaceH}
            min={0}
            max={200}
            onChange={(e) => setAttributes({ linkSpaceH: e })}
          />
          <p>
            <strong>{__("Border", "zita-blocks")}</strong>
          </p>
          <ToggleControl
            label={
              linkBorder
                ? __("Disable", "zita-blocks")
                : __("Enable", "zita-blocks")
            }
            checked={linkBorder}
            onChange={(e) => setAttributes({ linkBorder: e })}
          />
          {linkBorder && (
            <div className="icon-border-setting">
              <RangeControl
                label={__("Border Width", "zita-blocks")}
                value={linkBorderWidth}
                min={0}
                max={100}
                onChange={(e) => setAttributes({ linkBorderWidth: e })}
              />
              <RangeControl
                label={__("Border Radius", "zita-blocks")}
                value={linkBorderRadius}
                min={0}
                max={50}
                onChange={(e) => setAttributes({ linkBorderRadius: e })}
              />
              <p>{__("Border Color", "zita-blocks")}</p>
              <ColorPalette
                value={linkBorderColor}
                onChange={(color) => setAttributes({ linkBorderColor: color })}
              />
            </div>
          )}

          <p className="block-inside">{__("Small Text", "zita-blocks")}</p>
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={bottomTxtFontSize}
            min={0}
            max={70}
            onChange={(e) => setAttributes({ bottomTxtFontSize: e })}
          />
          <p>{__("Color", "zita-blocks")}</p>
          <ColorPalette
            value={bottomTxtColor}
            onChange={(color) => setAttributes({ bottomTxtColor: color })}
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
                ref={familyRef}
                onClick={() => {
                  let applyActive = !activeFamilyContainer;
                  activeFamilyDrop(applyActive);
                }}
                className="font-family-show"
              >
                <span style={{ fontFamily: bottomTxtFF }}>
                  {bottomTxtFF
                    ? bottomTxtFF
                    : __("Choose Family", "zita-blocks")}
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
          <p className="block-inside">
            {__("Background Color", "zita-blocks")}
          </p>
          <ColorPicker
            color={footerBgColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ footerBgColor: color });
            }}
          />
        </PanelBody>

        <PanelBody
          title={__("Container Settings", "zita-blocks")}
          initialOpen={false}
        >
          {/* <ColorPicker
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              setAttributes({ containerBgColor: color });
            }}
          /> */}
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
            placeholder={__("Pricing Table", "zita-blocks")}
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
            placeholder={__("Pricing Description", "zita-blocks")}
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
              placeholder={__("Click Me", "zita-blocks")}
              value={linkTxt}
              onChange={(e) => setAttributes({ linkTxt: e })}
              style={link_style}
            />
          </div>
          <RichText
            className="bottom-text"
            key="editable"
            tagName="p"
            placeholder={__("Price", "zita-blocks")}
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
