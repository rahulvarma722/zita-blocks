import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import { __ } from "@wordpress/i18n";
const attrSave = {};
registerBlockType("zita-blocks/zita-post-grid", {
  title: __("Post Grid Layout", "zita-blocks"),
  icon: "text-page",
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
