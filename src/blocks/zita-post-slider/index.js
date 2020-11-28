import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-slider", {
  title: "Post Slider",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps(attributes) {},
  keywords: ["post", "post slider"],
  // attributes: attrSave,
  edit: Edit,
  save: () => {
    return null;
  },
});
