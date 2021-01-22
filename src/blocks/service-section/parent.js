import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl, ColorPicker } from "@wordpress/components";

const { useDispatch, useSelect } = wp.data;

registerBlockType("zita-blocks/block-column-parent", {
  title: "Service Section",
  icon: "grid-view",
  // description: "Parent Of all Column Member",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"],
  },
  attributes: {
    align: {
      type: "string",
      default: "wide",
    },
    columns: {
      type: "number",
      default: 2,
    },
    fullWidth: {
      type: "string",
      default: "",
    },
  },
  // example: () => {},
  edit: (props) => {
    const { className, attributes, setAttributes } = props;
    const { columns, fullWidth } = attributes;
    const MY_TEMPLATE = [
      ["zita-blocks/icon-image-content"],
      ["zita-blocks/icon-image-content"],
    ];
    return [
      <InspectorControls>
        <PanelBody>
          <RangeControl
            label="Number Of Column"
            value={columns}
            onChange={(v) => setAttributes({ columns: v })}
            min={1}
            max={4}
          />
          <p>
            <strong>Column Layout</strong>
          </p>
          <div className="column-layout-num-column">
            <div>
              <input
                type="radio"
                value=""
                name="column-layout"
                id="column-layout-box"
                onChange={() => setAttributes({ fullWidth: "" })}
              />
              <label for="column-layout-box">
                <img src={plugin_url.url + "assets/img/box-layout.png"} />
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="full-width"
                name="column-layout"
                id="column-layout-full"
                onChange={() => setAttributes({ fullWidth: "full-width" })}
              />
              <label for="column-layout-full">
                <img src={plugin_url.url + "assets/img/100percent.png"} />
              </label>
            </div>
          </div>
        </PanelBody>
      </InspectorControls>,
      <div className={`${className} ${fullWidth} column-count-${columns} `}>
        <InnerBlocks
          template={MY_TEMPLATE}
          allowedBlocks={["zita-blocks/icon-image-content"]}
        />
      </div>,
    ];
  },
  save: (props) => {
    const { attributes } = props;
    const { columns, fullWidth } = attributes;
    return (
      <div className={`${fullWidth} column-count-${columns} `}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
