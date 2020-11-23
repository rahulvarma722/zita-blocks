import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
const attrSave = {};
registerBlockType("zita-blocks/zita-post", {
  title: "Post",
  icon: "format-aside",
  category: "zita-category",
  getEditWrapperProps(attributes) {},
  keywords: ["post"],
  // attributes: attrSave,
  edit: Edit,
  save: () => {
    return null;
  },
});
