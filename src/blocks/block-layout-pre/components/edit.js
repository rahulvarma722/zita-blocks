/**
 * Edit component.
 */

/**
 * Import dependencies.
 */
import LayoutModal from "./layouts/modal";
// import { LayoutsContext } from "./layouts-provider";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const { attributes, setAttributes, clientId } = this.props;
    /* Placeholder with layout modal */
    return [
      <Fragment key={clientId}>
        <Placeholder
          key="placeholder"
          label={__("Layout Selector", "zita-blocks")}
          instructions={__(
            "Launch the layout library to browse pre-designed sections.",
            "zita-blocks"
          )}
          className={"gb-layout-selector-placeholder"}
          icon="layout"
        >
          <LayoutModal clientId={clientId} />
        </Placeholder>
      </Fragment>,
    ];
  }
}
