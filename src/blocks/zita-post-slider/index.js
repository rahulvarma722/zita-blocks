import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-slider", {
  title: "Post Slider Layout",
  icon: "format-aside",
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
  keywords: ["post", "post slider"],
  // attributes: attrSave,
  example: () => {},
  edit: Edit,
  save: () => {
    return null;
  },
});
