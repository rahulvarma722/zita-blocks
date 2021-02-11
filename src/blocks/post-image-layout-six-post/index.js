import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-section-six-post", {
  title: __("Post Image Layout Six", "zita-blocks"),
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
