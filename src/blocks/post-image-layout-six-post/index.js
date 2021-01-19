import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-section-six-post", {
  title: "Post Image Layout Six Post",
  icon: "tagcloud",
  category: "zita-category",
  getEditWrapperProps(attributes) {
    let attr_ = { "data-align": "full" };
    return attr_;
  },
  keywords: ["post"],
  // attributes: attrSave,
  example: () => {},
  edit: Edit,
  save: () => {
    return null;
  },
});
