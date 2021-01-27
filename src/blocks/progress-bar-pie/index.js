import "./editor.scss";
// import fontFamily from "../block-assets/font-family";

// import icons_ from "../block-assets/icons";
import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  ColorPalette,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const attrs_ = {
  circleRadius: { type: "number", default: 80 },
  strokeWidth: { type: "number", default: 15 },
  strokeColor: { type: "string", default: "blue" },
  strokeBgColor: { type: "string", default: "grey" },
  fillBgColor: { type: "string", default: "pink" },
  animationDelay: { type: "number", default: 10 },
  lineCap: { type: "boolean", default: false },
  alignment: { type: "string", default: "center" },
  text: { type: "number", default: 50 },
  textFs: { type: "number", default: 18 },
  textColor: { type: "string", default: "black" },
  percentTitleE: { type: "boolean", default: true },
  percentTitle: { type: "string", default: __("Add Title", "zita-blocks") },
  percentTitleFs: { type: "number" },
  percentTitleColor: { type: "string" },
};
registerBlockType("zita-blocks/progress-bar-pie", {
  title: __("Circular Progress Bar", "zita-blocks"),
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      fill="black"
      width="18px"
      height="18px"
    >
      <g>
        <rect fill="none" height="24" width="24" />
        <path d="M15.5,13.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5h0C13.93,10,15.5,11.57,15.5,13.5z M13,19.5h-2 V21h2V19.5z M19,13c0,1.68-0.59,3.21-1.58,4.42l1.42,1.42C20.18,17.27,21,15.23,21,13c0-2.74-1.23-5.19-3.16-6.84l-1.42,1.42 C17.99,8.86,19,10.82,19,13z M16,5l-4-4v3c0,0,0,0,0,0c-4.97,0-9,4.03-9,9c0,2.23,0.82,4.27,2.16,5.84l1.42-1.42 C5.59,16.21,5,14.68,5,13c0-3.86,3.14-7,7-7c0,0,0,0,0,0v3L16,5z" />
      </g>
    </svg>
  ),
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["circular progress", "circular progress bar"],
  attributes: attrs_,
  example: () => {},
  edit: ({ attributes, setAttributes }) => {
    const {
      circleRadius,
      strokeWidth,
      strokeColor,
      strokeBgColor,
      fillBgColor,
      lineCap,
      animationDelay,
      alignment,
      text,
      textFs,
      textColor,
      percentTitleE,
      percentTitle,
      percentTitleColor,
      percentTitleFs,
    } = attributes;
    let HW = circleRadius * 2 + strokeWidth;
    let cxCy = HW / 2;
    return [
      <InspectorControls>
        <PanelBody
          title={__("Circle Setting", "zita-blocks")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Percent", "zita-blocks")}
            value={text}
            min={1}
            max={100}
            onChange={(e) => setAttributes({ text: e })}
          />
          <RangeControl
            label={__("Width", "zita-blocks")}
            value={circleRadius}
            min={1}
            max={150}
            onChange={(e) => setAttributes({ circleRadius: e })}
          />
          <RangeControl
            label={__("Stroke Width", "zita-blocks")}
            value={strokeWidth}
            min={1}
            max={150}
            onChange={(e) => setAttributes({ strokeWidth: e })}
          />
          <RangeControl
            label={__("Animation Delay", "zita-blocks")}
            value={animationDelay}
            min={1}
            max={100}
            onChange={(e) => setAttributes({ animationDelay: e })}
          />
          <p>
            <strong>{__("Stroke Edges Type", "zita-blocks")}</strong>
          </p>
          <ToggleControl
            label={
              lineCap
                ? __("Flat", "zita-blocks")
                : __("Circular", "zita-blocks")
            }
            checked={lineCap}
            onChange={(e) => setAttributes({ lineCap: e })}
          />
          <p>
            <strong>{__("Stroke Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={strokeColor}
            onChange={(color) => setAttributes({ strokeColor: color })}
          />
          <p>
            <strong>{__("Stroke Background Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={strokeBgColor}
            onChange={(color) => setAttributes({ strokeBgColor: color })}
          />
          <p>
            <strong>{__("Fill Background Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={fillBgColor}
            onChange={(color) => setAttributes({ fillBgColor: color })}
          />
        </PanelBody>
        <PanelBody
          title={__("Text Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p className="block-inside">{__("Title Setting", "zita-blocks")}</p>
          <ToggleControl
            label={
              percentTitleE
                ? __("Hide", "zita-blocks")
                : __("Show", "zita-blocks")
            }
            checked={percentTitleE}
            onChange={(e) => setAttributes({ percentTitleE: e })}
          />
          {percentTitleE && (
            <>
              <RangeControl
                label={__("Font Size", "zita-blocks")}
                value={percentTitleFs}
                min={1}
                max={50}
                onChange={(e) => setAttributes({ percentTitleFs: e })}
              />
              <p>
                <strong>{__("Color", "zita-blocks")}</strong>
              </p>
              <ColorPalette
                value={percentTitleColor}
                onChange={(color) =>
                  setAttributes({ percentTitleColor: color })
                }
              />
            </>
          )}
          <p className="block-inside">{__("Percent Setting", "zita-blocks")}</p>
          <RangeControl
            label={__("Font Size", "zita-blocks")}
            value={textFs}
            min={1}
            max={50}
            onChange={(e) => setAttributes({ textFs: e })}
          />
          <p>
            <strong>{__("Color", "zita-blocks")}</strong>
          </p>
          <ColorPalette
            value={textColor}
            onChange={(color) => setAttributes({ textColor: color })}
          />
        </PanelBody>
      </InspectorControls>,
      <div className="thk-progress-bar-wrapper-pie">
        <div className="zita-block-pie-circle">
          <div className="pie-circle_">
            <div className="text-sction">
              {percentTitleE && (
                <RichText
                  className="title_"
                  key="editable"
                  tagName="span"
                  placeholder={__("Add Title", "zita-blocks")}
                  value={percentTitle}
                  onChange={(e) => setAttributes({ percentTitle: e })}
                  style={{
                    color: percentTitleColor,
                    fontSize: percentTitleFs + "px",
                  }}
                />
              )}
              <span
                className="percent_"
                style={{ fontSize: textFs + "px", color: textColor }}
              >
                {text}%
              </span>
            </div>
            <svg height={HW} width={HW}>
              <circle cx={cxCy} cy={cxCy} r={circleRadius} fill={fillBgColor} />
              <circle
                cx={cxCy}
                cy={cxCy}
                r={circleRadius}
                fill="none"
                stroke-width={strokeWidth}
                stroke={strokeBgColor}
              />
              <circle
                r={circleRadius}
                cx={cxCy}
                cy={cxCy}
                stroke-width={strokeWidth}
                fill="none"
                stroke={strokeColor}
                stroke-linecap={lineCap ? "round" : "flat"}
                stroke-dasharray={`${
                  text * ((Math.PI * (circleRadius * 2)) / 100)
                } ${Math.PI * (circleRadius * 2)}`}
              />
            </svg>
          </div>
        </div>
      </div>,
    ];
  },
  save: ({ attributes }) => {
    const {
      circleRadius,
      strokeWidth,
      strokeColor,
      strokeBgColor,
      fillBgColor,
      animationDelay,
      lineCap,
      alignment,
      text,
      textFs,
      textColor,
      percentTitleE,
      percentTitle,
      percentTitleColor,
      percentTitleFs,
    } = attributes;
    let circleData = {
      radius: circleRadius,
      strokeWidth: strokeWidth,
      strokeColor: strokeColor,
      strokeBgColor: strokeBgColor,
      lineCap: lineCap,
      animationDelay: animationDelay,
      text: text,
    };
    circleData = JSON.stringify(circleData);
    let HW = circleRadius * 2 + strokeWidth;
    let cxCy = HW / 2;
    return (
      <div className="thk-progress-bar-wrapper-pie">
        <div className="zita-block-pie-circle front_">
          <div className="pie-circle_">
            <div className="text-sction">
              {percentTitleE && (
                <RichText.Content
                  className="title_"
                  tagName="span"
                  value={percentTitle}
                  style={{
                    color: percentTitleColor,
                    fontSize: percentTitleFs + "px",
                  }}
                />
              )}
              <span
                className="percent_"
                style={{ fontSize: textFs + "px", color: textColor }}
              ></span>
            </div>

            <svg height={HW} width={HW} data={circleData}>
              <circle cx={cxCy} cy={cxCy} r={circleRadius} fill={fillBgColor} />
              <circle
                cx={cxCy}
                cy={cxCy}
                r={circleRadius}
                fill="none"
                stroke-width={strokeWidth}
                stroke={strokeBgColor}
              />
              <circle
                className="percent-apply"
                r={circleRadius}
                cx={cxCy}
                cy={cxCy}
                fill="none"
                stroke-linecap={lineCap ? "round" : "flat"}
              />
            </svg>
          </div>
        </div>
      </div>
    );
  },
});
