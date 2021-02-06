/**
 * BLOCK: Layout
 */

/**
 * Import dependencies.
 */
import Edit from "./components/edit";
import LayoutsProvider from "./components/layouts-provider";
import "./styles/style.scss";
import "./styles/editor.scss";

/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Register the Layout block
 */
registerBlockType("zita-blocks/zita-blocks-layouts", {
  title: __("Zita Layouts", "genesis-blocks"),
  description: __("zita layout Description"),
  icon: "album",
  category: "zita-category",
  /* Render the block components. */
  edit: (props) => {
    console.log("genesis-blocks block props", props);
    return (
      <LayoutsProvider>
        <Edit {...props} />
      </LayoutsProvider>
    );
  },

  /* Save the block markup. */
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
  const buttonDiv = document.createElement("div");
  let html = '<div class="gb-toolbar-insert-layout">';
  html += `<button id="gbLayoutInsertButton" class="components-button components-icon-button" aria-label="${__(
    "Insert Layout",
    "zita-blocks"
  )}">`;
  html += `<i class="dashicons dashicons-album gb-toolbar-insert-layout-button"></i> ${__(
    "Zita Layouts",
    "zita-blocks"
  )}`;
  html += `</button>`;
  html += "</div>";
  buttonDiv.innerHTML = html;
  toolbar.appendChild(buttonDiv);
  document
    .getElementById("gbLayoutInsertButton")
    .addEventListener("click", gbInsertLayout);
  genesisBlocksLayoutButtonAdded = true;
}
/**
 * Add the Layout block on click.
 */
function gbInsertLayout() {
  const block = wp.blocks.createBlock("zita-blocks/zita-blocks-layouts");
  wp.data.dispatch("core/block-editor").insertBlocks(block);
}
