/**
 * Layout modal window with tab panel.
 */
import LayoutLibrary from "./layout-library";
/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment, useState, Component } = wp.element;
const { Button, Dashicon, Modal, TabPanel } = wp.components;
const { useDispatch, withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { rawHandler } = wp.blocks;

function LayoutModal(props) {
  const [currentTab, setCurrentTab] = useState("gb-layout-tab-sections");
  const [modalOpen, setModalOpen] = useState(true);
  //   preventing to close first time
  const [checkFirst, setcheckFirst] = useState(false);
  const { removeBlock } = useDispatch("core/block-editor");
  //   const tabs = [];
  const tabs = [
    {
      name: "tab1",
      title: "Tab 1",
      className: "tab-one",
      content:
        '<!-- wp:zita-blocks/progress-block --><div class="wp-block-zita-blocks-progress-block thk-progress-bar-wrapper"><div class="zita-linear-progress-bar front_" percent="40" delay="10"><div class="txt-section"><p>Percent title</p><span class="percent_"></span></div><div style="height:12px;border-radius:undefinedpx" class="line_"><div style="background-color:yellow" class="line-inner_"></div></div></div></div><!-- /wp:zita-blocks/progress-block --><!-- wp:zita-blocks/progress-bar-pie --><div class="wp-block-zita-blocks-progress-bar-pie thk-progress-bar-wrapper-pie"><div class="zita-block-pie-circle front_"><div class="pie-circle_"><div class="text-sction"><span class="title_" style="font-size:undefinedpx">Add Title</span><span class="percent_" style="font-size:18px;color:black"></span></div><svg height="175" width="175" data="{&quot;radius&quot;:80,&quot;strokeWidth&quot;:15,&quot;strokeColor&quot;:&quot;blue&quot;,&quot;strokeBgColor&quot;:&quot;grey&quot;,&quot;lineCap&quot;:false,&quot;animationDelay&quot;:10,&quot;text&quot;:50}"><circle cx="87.5" cy="87.5" r="80" fill="pink"></circle><circle cx="87.5" cy="87.5" r="80" fill="none" stroke-width="15" stroke="grey"></circle><circle class="percent-apply" r="80" cx="87.5" cy="87.5" fill="none" stroke-linecap="flat"></circle></svg></div></div></div><!-- /wp:zita-blocks/progress-bar-pie --><!-- wp:zita-blocks/zita-post-slider {"sliderSetting":[{"dimension":{"width":true,"custom_width":489,"height":false,"custom_height":360},"sliderEffect":"slideEffect","linearTrigger":{"enable":true,"fontSize":10,"color":"white","activeColor":"#652efd","trigger":"bullet","place":"in"},"leftRightTrigger":{"enable":true,"fontSize":14,"color":"#652efd","backgroundColor":"transparent"},"autoTrigger":{"enable":true,"delay":3},"overlayColor":"rgba(112,112,112,0.35)","contentAlign":"center"}]} /-->',
      image:
        "https://themehunk.com/wp-content/uploads/2021/01/open-mart-new.png",
    },
    {
      name: "tab2",
      title: "Tab 2",
      className: "tab-two",
      image:
        "https://themehunk.com/wp-content/uploads/2020/05/openshop-pro.png",

      content:
        '<!-- wp:zita-blocks/icon-block --><div class="wp-block-zita-blocks-icon-block themehunk-icon-block" style="justify-content:center"><div style="flex-direction:column;background-color:#EEF6F9;padding-top:16px;padding-right:20px;padding-bottom:16px;padding-left:20px"><div class="icon-container"><i style="color:#0693e3;font-size:55px" class="fab fa-wordpress-simple"></i></div><div class="text-container"><p style="color:#0693e3;font-size:24px;margin-top:undefinedpx;margin-right:undefinedpx;margin-bottom:undefinedpx;margin-left:11px;font-family:Ubuntu Mono">Icon Title</p></div></div></div><!-- /wp:zita-blocks/icon-block -->',
    },
  ];

  console.log("modal inside check props", props);

  return (
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
          className="gb-layout-modal"
          //   className="zita-blocks-layout-modal"
          title={__("zita Layout Selector", "zita-blocks")}
          shouldCloseOnClickOutside={true}
          onRequestClose={() => {
            if (checkFirst) {
              setModalOpen(false);
              setCurrentTab(null);
              removeBlock(props.clientId);
            } else {
              setcheckFirst(true);
            }
          }}
        >
          {/* <h1>hello inside modal text</h1> */}
          <TabPanel
            key={"layout-modal-tabpanel-" + props.clientId}
            className="gb-layout-modal-panel"
            activeClass="gb-layout-modal-active-tab"
            onSelect={(tabName) => setCurrentTab(tabName)}
            tabs={tabs}
          >
            {(tab) => {
              {
                /* console.log(tab); */
              }
              const tabContent = __("Default tab content", "genesis-blocks");
              return (
                <div>
                  {tabContent}
                  <img src={tab.image} />
                  <Button
                    key={"layout-modal-library-button-" + tab.name}
                    isPrimary
                    className="gb-layout-modal-button"
                    onClick={() => {
                      props.import(tab.content);
                    }}
                  >
                    {__(tab.title, "zita-blocks")}
                  </Button>
                </div>
              );
            }}
          </TabPanel>
        </Modal>
      ) : null}
    </Fragment>
  );
}

export default compose(
  /**
   * Use rawHandler to parse html layouts to blocks
   * See https://git.io/fjqGc for details
   */
  withSelect((select, { clientId }) => {
    const { getBlock } = select("core/block-editor");
    const { canUserUseUnfilteredHTML } = select("core/editor");
    const block = getBlock(clientId);
    return {
      block,
      canUserUseUnfilteredHTML: canUserUseUnfilteredHTML(),
    };
  }),
  withDispatch((dispatch, { block, canUserUseUnfilteredHTML }) => ({
    import: (blockLayout) =>
      dispatch("core/block-editor").replaceBlocks(
        block.clientId,
        rawHandler({
          HTML: blockLayout,
          mode: "BLOCKS",
          canUserUseUnfilteredHTML,
        })
      ),
  }))
)(LayoutModal);
