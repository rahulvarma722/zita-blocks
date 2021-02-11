import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import { __ } from "@wordpress/i18n";
registerBlockType("zita-blocks/zita-post-section-four-post", {
  title: __("Post Image Layout Four", "zita-blocks"),
  icon: "tagcloud",
  category: "zita-category",
  getEditWrapperProps(attributes) {
    let attr_ = { "data-align": "full" };
    return attr_;
  },
  keywords: ["post"],
  example: () => {},
  edit: Edit,
  save: () => {
    return null;
  },
});
