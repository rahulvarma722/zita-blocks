import Edit from "./components/edit";
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
registerBlockType("zita-blocks/zita-blocks-layouts", {
  title: __("Zita Layouts", "genesis-blocks"),
  description: __("zita layout Description"),
  icon: "album",
  category: "zita-category",
  edit: (props) => {
    return <Edit {...props} />;
  },
  save: () => {
    return null;
  },
});

/**
 * Add a Layout button to the toolbar.
 */
let genesisBlocksLayoutButtonAdded = false;
wp.data.subscribe(() => {
  appendImportButton();
});
/**
 * Build the layout inserter button.
 */
function appendImportButton() {
  if (genesisBlocksLayoutButtonAdded) {
    return;
  }
  const toolbar = document.querySelector(".edit-post-header__toolbar");
  if (!toolbar) {
    return;
  }
  setTimeout(() => {
    if (!document.getElementById("zitaBlocksinsert")) {
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "zitaBlocksinsertWrap";
      let html = "";
      html += '<button id="zitaBlocksinsert">';
      // html += `<i class="dashicons dashicons-album"></i>`;
      // zita-transparent-img.png
      let imgUrl =
        plugin_url.url + "assets/img/blocks-image/zita-transparent-img.png";
      html += '<img src="' + imgUrl + '">';
      html += `${__("Zita Layouts", "zita-blocks")}`;
      html += "</button>";
      buttonDiv.innerHTML = html;
      toolbar.appendChild(buttonDiv);
      document
        .getElementById("zitaBlocksinsert")
        .addEventListener("click", gbInsertLayout);
      genesisBlocksLayoutButtonAdded = true;
    }
  }, 1000);
}
/**
 * Add the Layout block on click.
 */
function gbInsertLayout() {
  const block = wp.blocks.createBlock("zita-blocks/zita-blocks-layouts");
  wp.data.dispatch("core/block-editor").insertBlocks(block);
}
