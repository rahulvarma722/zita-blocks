const { Component } = wp.element;
const { apiFetch } = wp;
const { useDispatch, withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { Button } = wp.components;
const { rawHandler } = wp.blocks;
const { __ } = wp.i18n;

class Layoutlist extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl:
        "https://wpzita.com/zitademo/zita-blocks/wp-json/zita-blocks-layout/v2/search/",
      templateLoading: true,
      activeCatePage: "all",
      activePricePage: "free",
      templateCategory: "",
      templatePrice: "all",
      block_templates_category: [
        { name: "cate-1", title: "Category 1" },
        { name: "cate-2", title: "Category 2" },
        { name: "cate-3", title: "Category 3" },
        { name: "cate-4", title: "Category 4" },
        { name: "cate-6", title: "Category 6" },
        { name: "cate-7", title: "Category 7" },
        { name: "cate-8", title: "Category 8" },
      ],
      block_templates: [],
      // blockPage: 1,
    };
  }
  //   get all blocks first time
  getAllRetrived() {
    let url = this.state.apiUrl + "?initilaize=1";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ block_templates: json });
      });
  }
  // get all blocks with argument
  getAllTemplatesRetrived(object_parem = {}) {
    const urlParams = new URLSearchParams(object_parem);
    let putUrl = urlParams && urlParams != "" ? "?" + urlParams : "";
    let apiUrl = this.state.apiUrl + putUrl;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ block_templates: json });
      });
  }
  //component did mount
  async componentDidMount() {
    await this.getAllRetrived();
  }
  //choose category,
  async getTemplateChooseCategory(category) {
    this.setState({ templateCategory: category });
    await this.getAllTemplatesRetrived({
      category: category,
      price: this.state.templatePrice,
    });
  }
  //show all data from
  render() {
    console.log("state props api->", this.state);
    const {
      block_templates,
      block_templates_category,
      activeCatePage,
      activePricePage,
    } = this.state;
    const { clientId } = this.props;
    return (
      <div className="zita-blocks-layout-wrapper">
        <div className="container_">
          <div className="left-section_">
            <nav>
              <span
                key={"all"}
                className={activePricePage == "all" ? "active" : null}
                onClick={() => {
                  if (activePricePage != "all") {
                    this.setState({ activePricePage: "all" });
                  }
                }}
              >
                All
              </span>
              <span
                key={"free"}
                className={activePricePage == "free" ? "active" : null}
                onClick={() => {
                  if (activePricePage != "free") {
                    this.setState({ activePricePage: "free" });
                  }
                }}
              >
                Free
              </span>
              <span
                key={"premium"}
                className={activePricePage == "premium" ? "active" : null}
                onClick={() => {
                  if (activePricePage != "premium") {
                    this.setState({ activePricePage: "premium" });
                  }
                }}
              >
                Premium
              </span>
            </nav>
            <div className="cate-container-">
              <div>
                <span>CATEGORIES</span>
                <div className="list_">
                  <span
                    className={activeCatePage == "all" ? "active" : null}
                    onClick={() => {
                      if (activeCatePage != "all") {
                        this.setState({ activeCatePage: "all" });
                        this.getTemplateChooseCategory("all");
                      }
                    }}
                  >
                    all
                  </span>
                  {block_templates_category.map((template_v, template_key) => {
                    return (
                      <span
                        key={template_key}
                        className={
                          activeCatePage == template_key ? "active" : null
                        }
                        onClick={() => {
                          if (activeCatePage != template_key) {
                            this.setState({ activeCatePage: template_key });
                            this.getTemplateChooseCategory(template_v.name);
                          }
                        }}
                      >
                        {template_v.title}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="main-section_">
            {block_templates && block_templates.length ? (
              <div className="template-itemes_">
                {block_templates.map((template) => {
                  console.log("template", template);
                  return (
                    <div>
                      <div className="template-content">
                        <div className="image_">
                          <img src={template.image} />
                        </div>
                        <div className="title_">
                          <span>{template.name}</span>
                        </div>
                      </div>
                      <div className="template-btn_">
                        <button>Preview</button>
                        <Button
                          className="zita-blocks-layout-imp-btn"
                          onClick={() => {
                            this.props.import(template.content);
                          }}
                        >
                          <i className="fas fa-download"></i>
                          <span>import</span>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1>Zita Loading Template........</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// export default Layoutlist;
export default compose(
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
)(Layoutlist);
