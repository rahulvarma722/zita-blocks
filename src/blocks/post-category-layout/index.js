import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-tc", {
  title: "Post Category Layout",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps(attributes) {
    let attr_ = { "data-align": "full" };
    return attr_;
  },
  keywords: ["post two section"],
  // attributes: attrSave,
  edit: Edit,
  save: () => {
    return null;
  },
});
