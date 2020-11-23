import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
const attrs_ = {
  percentTitle: { type: "string", default: "Percent title" },
  titleFs: { type: "number" },
  titleFf: { type: "string" },
  titleIn: { type: "boolean", default: false },
  titleColor: { type: "string" },
  progressHeight: { type: "number", default: 12 },
  percent: { type: "number", default: 40 },
  animationDelay: { type: "number", default: 10 },
  percentColor: { type: "string", default: "yellow" },
  percentBgColor: { type: "string" },
  borderRadius: { type: "number" },
};
registerBlockType("zita-blocks/progress-block", {
  title: "Linear Progress Bar",
  icon: "update",
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["progress", "progress bar"],
  attributes: attrs_,
  edit: ({ attributes, setAttributes }) => {
    const {
      percent,
      progressHeight,
      percentTitle,
      titleIn,
      titleFs,
      titleFf,
      animationDelay,
      titleColor,
      percentColor,
      percentBgColor,
      borderRadius,
    } = attributes;
    return [
      <InspectorControls>
        <PanelBody title={"Title Setting"} initialOpen={false}>
          <ToggleControl
            label={titleIn ? "Outside" : "Inside"}
            checked={titleIn}
            onChange={(e) => setAttributes({ titleIn: e })}
          />
          <RangeControl
            label="Font Size"
            value={titleFs}
            min={1}
            max={100}
            onChange={(e) => setAttributes({ titleFs: e })}
          />
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={titleColor}
            onChange={(color) => setAttributes({ titleColor: color })}
          />
        </PanelBody>
        <PanelBody title={"Progress Bar Setting"} initialOpen={false}>
          <RangeControl
            label="Height"
            value={progressHeight}
            min={1}
            max={50}
            onChange={(e) => setAttributes({ progressHeight: e })}
          />
          <RangeControl
            label="Percent"
            value={percent}
            min={1}
            max={100}
            onChange={(e) => setAttributes({ percent: e })}
          />

          <RangeControl
            label="Border Radius"
            value={borderRadius}
            min={1}
            max={60}
            onChange={(e) => setAttributes({ borderRadius: e })}
          />
          <RangeControl
            label="Animation Delay"
            value={animationDelay}
            min={1}
            max={100}
            onChange={(e) => setAttributes({ animationDelay: e })}
          />
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={percentColor}
            onChange={(color) => setAttributes({ percentColor: color })}
          />
          <p>
            <strong>Background Color</strong>
          </p>
          <ColorPalette
            value={percentBgColor}
            onChange={(color) => setAttributes({ percentBgColor: color })}
          />
        </PanelBody>
      </InspectorControls>,
      <div className="thk-progress-bar-wrapper">
        <div className="zita-linear-progress-bar">
          <div
            className="txt-section"
            style={{ fontSize: titleFs, color: titleColor }}
          >
            <RichText
              value={percentTitle}
              tagName="p"
              onChange={(e) => setAttributes({ percentTitle: e })}
            />
            {!titleIn && <span className="percent_">{percent}%</span>}
          </div>
          <div
            style={{
              backgroundColor: percentBgColor,
              height: progressHeight + "px",
              borderRadius: borderRadius + "px",
            }}
            className="line_"
          >
            <div
              style={{ width: percent + "%", backgroundColor: percentColor }}
              className="line-inner_"
            >
              {titleIn && <span className="percent_">{percent}%</span>}
            </div>
          </div>
        </div>
      </div>,
    ];
  },
  save: ({ attributes }) => {
    const {
      progressHeight,
      percent,
      percentTitle,
      titleIn,
      titleFs,
      titleFf,
      titleColor,
      percentColor,
      percentBgColor,
      borderRadius,
      animationDelay,
    } = attributes;
    return (
      <div className="thk-progress-bar-wrapper">
        <div className="zita-linear-progress-bar front_" percent={percent} delay={animationDelay}>
          <div
            className="txt-section"
            style={{ fontSize: titleFs, color: titleColor }}
          >
            <RichText.Content value={percentTitle} tagName="p" />
            {!titleIn && <span className="percent_"></span>}
          </div>
          <div
            style={{
              backgroundColor: percentBgColor,
              height: progressHeight + "px",
              borderRadius: borderRadius + "px",
            }}
            className="line_"
          >
            <div
              style={{ backgroundColor: percentColor }}
              className="line-inner_"
            >
              {titleIn && <span className="percent_"></span>}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
