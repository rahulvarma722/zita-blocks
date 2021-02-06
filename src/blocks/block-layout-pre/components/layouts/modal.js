/**
 * Layout modal window with tab panel.
 */
/**
 * WordPress dependencies.
 */
import Layoutlist from "./layout-list";
const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
const { Button, Modal } = wp.components;
const { useDispatch } = wp.data;
function LayoutModal(props) {
  //   const [currentTab, setCurrentTab] = useState("gb-layout-tab-sections");
  const [modalOpen, setModalOpen] = useState(true);
  //   preventing to close first time
  const [checkFirst, setcheckFirst] = useState(false);
  const { removeBlock } = useDispatch("core/block-editor");
  console.log("modal inside check props", props);
  return (
    <>
      <Fragment key={"layout-modal-fragment-" + props.clientId}>
        {/* Launch the layout modal window */}
        <Button
          key={"layout-modal-library-button-" + props.clientId}
          isPrimary
          className="gb-layout-modal-button"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {__("Zita Layout Library", "zita-blocks")}
        </Button>
        {modalOpen ? (
          <Modal
            key={"layout-modal-modal-component-" + props.clientId}
            className="zita-blocks-layout-modal"
            title={__("zita Layout Selector", "zita-blocks")}
            shouldCloseOnClickOutside={true}
            onRequestClose={() => {
              if (checkFirst) {
                setModalOpen(false);
                removeBlock(props.clientId);
              } else {
                setcheckFirst(true);
              }
            }}
          >
          {/* <Modal.aria.labelledby>
            <h1>hello</h1>
          </Modal.aria.labelledby> */}
            <Layoutlist clientId={props.clientId} />
          </Modal>
        ) : null}
      </Fragment>
    </>
  );
}
export default LayoutModal;
