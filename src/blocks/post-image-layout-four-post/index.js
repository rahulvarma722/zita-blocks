import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-section-four-post", {
  title: "Post Image Layout Four Post",
  icon: "tagcloud",
  category: "zita-category",
  getEditWrapperProps(attributes) {
    let attr_ = { "data-align": "full" };
    return attr_;
  },
  keywords: ["post"],
  // attributes: attrSave,
  edit: Edit,
  save: () => {
    return null;
  },
});