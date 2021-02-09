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
      apiUrl: "http://localhost:8888/one/wp-json/zita-blocks-layout/v2/search/",
      // "https://wpzita.com/zitademo/zita-blocks/wp-json/zita-blocks-layout/v2/search/",
      templateLoading: true,
      templateCategory: "all",
      templatePrice: "all",
      block_templates_category: [],
      block_templates: [],
    };
  }
  //component did mount
  async componentDidMount() {
    await this.getAllRetrived();
  }
  //   get all blocks first time
  getAllRetrived() {
    let url = this.state.apiUrl + "?initilaize=1";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log("first time json", json);
        this.setState({
          block_templates: json.demos,
          block_templates_category: json.categories,
        });
      });
  }
  // get all blocks with argument
  getDemosByFilter(object_parem = {}) {
    const urlParams = new URLSearchParams(object_parem);
    let putUrl = urlParams && urlParams != "" ? "?" + urlParams : "";
    let apiUrl = this.state.apiUrl + putUrl;
    console.log("apiUrl", apiUrl);
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("json cate", json);
        if (
          "price_send" in object_parem &&
          json &&
          "categories" in json &&
          "demos" in json
        ) {
          this.setState({
            block_templates: json.demos,
            block_templates_category: json.categories,
          });
        } else if (json) {
          this.setState({ block_templates: json });
        } else {
          console.log("no json data found json -> ", json);
        }
      });
  }
  //choose category,
  async getDemosFilterCategory(category) {
    this.setState({ templateCategory: category });
    await this.getDemosByFilter({
      category: category,
      price: this.state.templatePrice,
    });
  }
  //choose price,
  async getDemosFilterPrice(price) {
    this.setState({ templateCategory: "all", templatePrice: price });
    await this.getDemosByFilter({
      category: "all",
      price: price,
      price_send: "1",
    });
  }

  //show all data from
  render() {
    // console.log("state props api->", this.state);
    const {
      block_templates,
      block_templates_category,
      templateCategory,
      templatePrice,
    } = this.state;
    const { clientId } = this.props;
    return (
      <div className="zita-blocks-layout-wrapper">
        <div className="container_">
          <div className="left-section_">
            <nav>
              <span
                key={"all"}
                className={templatePrice == "all" ? "active" : null}
                onClick={() => {
                  if (templatePrice != "all") {
                    this.getDemosFilterPrice("all");
                  }
                }}
              >
                All
              </span>
              <span
                key={"free"}
                className={templatePrice == "free" ? "active" : null}
                onClick={() => {
                  if (templatePrice != "free") {
                    this.getDemosFilterPrice("free");
                  }
                }}
              >
                Free
              </span>
              <span
                key={"premium"}
                className={templatePrice == "premium" ? "active" : null}
                onClick={() => {
                  if (templatePrice != "premium") {
                    this.getDemosFilterPrice("premium");
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
                  {block_templates_category.length ? (
                    <>
                      <span
                        className={templateCategory == "all" ? "active" : null}
                        onClick={() => {
                          if (templateCategory != "all") {
                            this.getDemosFilterCategory("all");
                          }
                        }}
                      >
                        all
                      </span>
                      {block_templates_category.map((template_v) => {
                        return (
                          <span
                            key={template_v.id}
                            className={
                              templateCategory == template_v.id
                                ? "active"
                                : null
                            }
                            onClick={() => {
                              if (templateCategory != template_v.id) {
                                this.getDemosFilterCategory(template_v.id);
                              }
                            }}
                          >
                            {template_v.title}
                          </span>
                        );
                      })}
                    </>
                  ) : (
                    <h1>loading</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="main-section_">
            {block_templates && block_templates.length ? (
              <div className="template-itemes_">
                {block_templates.map((template) => {
                  {
                    /* console.log("template", template); */
                  }
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
