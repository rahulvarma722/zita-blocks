import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

registerBlockType("zita-blocks/pricing-table-section", {
  title: __("Pricing Table", "zita-blocks"),
  icon: "table-col-before",
  // description: "Pricing Table",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"],
  },
  getEditWrapperProps(attributes) {
    // return { "data-align": "wide" };
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
  edit: (props) => {
    // console.log(props);

    const { className, attributes, setAttributes } = props;
    const { columns, fullWidth } = attributes;
    const MY_TEMPLATE = [
      ["zita-blocks/pricing-table-table"],
      [
        "zita-blocks/pricing-table-table",
        {
          headingTxt: "Advance",
          priceMonth: "159",
          middleTxt:
            "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>10 User Free</p><p>Multiple Email Support</p>",
        },
      ],
    ];

    return [
      <InspectorControls>
        <PanelBody>
          <RangeControl
            label={__("Number Of Column", "zita-blocks")}
            value={columns}
            onChange={(v) => {
              setAttributes({ columns: v });
            }}
            min={1}
            max={4}
          />
          <p>
            <strong>{__("Column Layout", "zita-blocks")}</strong>
          </p>
          <div className="column-layout-num-column">
            <div>
              <input
                type="radio"
                value="box"
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
                value="full"
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
          allowedBlocks={["zita-blocks/pricing-table-table"]}
        />
      </div>,
    ];
  },
  save: (props) => {
    // const { attributes } = props;
    const { columns, fullWidth } = props.attributes;
    // console.log(columns);
    return (
      <div className={`${fullWidth} column-count-${columns} `}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
