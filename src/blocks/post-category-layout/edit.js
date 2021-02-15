import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import {
  InspectorControls,
  RichText,
  ColorPalette,
} from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  SelectControl,
  ColorPicker,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  showCateFn,
  showTagsFn,
  excerptWords,
  filterPostInit,
  firstTimeInit,
  categoryList,
  PostLoader,
  PostNotfound,
} from "../block-assets/post-functions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metaChoose: "primary",
      excerpt: "primary",
      heading: "primary",
      thumbnail: "primary",
      blockTitle: "title",
      // pages state from post
      posts: [],
      category: [],
      totalPost: null,
    };
  }
  componentDidMount() {
    let sendData = { featured_image: 1 };
    firstTimeInit(this, sendData);
  }
  updateObj = (parent_key, child_key, initialValue, value_) => {
    let newNewValue = [...initialValue];
    newNewValue[0][child_key] = value_;
    let setAttr_ = {};
    setAttr_[parent_key] = newNewValue;
    this.props.setAttributes(setAttr_);
  };

  returnHtml = (
    post,
    heading_,
    author_,
    date_,
    meta_style_,
    thumbnail_,
    showCate_,
    excerpt_,
    showTag_
  ) => {
    let postAuthor = author_ && author_.enable ? post.author : false;
    return (
      <article className="block-post-article">
        <div className="post-wrapper">
          {post.feature_image && post.feature_image != "" && thumbnail_.enable && (
            <div className="featured-image">
              <img
                style={{
                  borderRadius: thumbnail_.borderRadius + "px",
                }}
                src={post.feature_image}
              />
            </div>
          )}
          <div className="post-content">
            {showCate_ && showCate_.enable && (
              <p className="post-category">
                {showCateFn(this.props, post.post_categories, showCate_)}
              </p>
            )}
            <RichText.Content
              className="post-heading"
              tagName={heading_.tag}
              value={post.postTitle}
              style={{
                fontSize: heading_.fontSize + "px",
                color: heading_.color,
              }}
            />
            <div className="post-meta-all">
              {postAuthor && (
                <p
                  style={{
                    color: meta_style_.color,
                    fontSize: meta_style_.fontSize + "px",
                  }}
                  className="post-author"
                >
                  {postAuthor}
                </p>
              )}
              {date_.enable && (
                <>
                  {postAuthor && (
                    <span
                      style={{
                        color: meta_style_.color,
                        fontSize: meta_style_.fontSize + "px",
                      }}
                      className="slash"
                    >
                      /
                    </span>
                  )}
                  <p
                    style={{
                      color: meta_style_.color,
                      fontSize: meta_style_.fontSize + "px",
                    }}
                    className="post-date"
                  >
                    <span>{post.post_date}</span>
                  </p>
                </>
              )}
              {date_.last_modified && (
                <>
                  {(date_.enable || postAuthor) && (
                    <span
                      style={{
                        color: meta_style_.color,
                        fontSize: meta_style_.fontSize + "px",
                      }}
                      className="slash"
                    >
                      /
                    </span>
                  )}
                  <p
                    style={{
                      color: meta_style_.color,
                      fontSize: meta_style_.fontSize + "px",
                    }}
                    className="post-date-last-modified"
                  >
                    <span>{__("Modified", "zita-blocks")}: </span>
                    <span>{post.post_modified_date}</span>
                  </p>
                </>
              )}
            </div>
            {excerpt_ && excerpt_.enable && (
              <p
                style={{
                  color: excerpt_.color,
                  fontSize: excerpt_.fontSize + "px",
                }}
                className="post-excerpt"
              >
                {excerptWords(excerpt_.words, post.post_excerpt)}
                <span className="read-more">
                  ...{__("Read More", "zita-blocks")}
                </span>
              </p>
            )}
            {showTag_ && showTag_.enable && (
              <p style={{ color: meta_style_.color }} className="post-tags">
                {showTagsFn(post.post_tag, showTag_)}
              </p>
            )}
          </div>
        </div>
      </article>
    );
  };
  navCategory = (cateTrue, title_) => {
    let category_ = this.state.category;
    let makingCate = [];
    if ((category_ && category_.length) || title_.enable) {
      // under line
      let mUnderLine = this.props.attributes.meta_style[0];
      let mUnderLineSt = mUnderLine.underLine
        ? { borderColor: mUnderLine.underLineColor }
        : null;
      // choosen category only show in nav
      if (cateTrue.enable && category_ && category_.length) {
        if (this.props.attributes.postCategories.length) {
          this.props.attributes.postCategories.map((choosenCate) => {
            category_.map((existCate) => {
              if (existCate.slug == choosenCate) {
                makingCate.push(existCate);
                return;
              }
            });
          });
        } else {
          makingCate = category_;
        }
      }
      return (
        <div className="navigation_" style={mUnderLineSt}>
          {title_.enable && (
            <div className="nav-heading">
              <RichText
                key="editable"
                onChange={(e) =>
                  this.updateObj(
                    "title",
                    "value",
                    this.props.attributes.title,
                    e
                  )
                }
                className="post-heading"
                tagName="h4"
                value={title_.value}
                style={{
                  backgroundColor: title_.bgColor,
                  color: title_.color,
                  fontSize: title_.fontSize + "px",
                }}
              />
            </div>
          )}
          {cateTrue.enable && makingCate.length != 0 && (
            <>
              <div class="nav-linear-items">
                <ul>
                  <li class="cat-item cat-item-all">
                    <a
                      style={{
                        fontSize: cateTrue.fontSize + "px",
                        color: cateTrue.color,
                        backgroundColor: cateTrue.backgroundColor,
                      }}
                      href="#"
                    >
                      {__("all", "zita-blocks")}
                    </a>
                  </li>
                  {makingCate.map((cateV, cKey) => {
                    return (
                      cKey <= 3 && (
                        <li class="cat-item">
                          <a
                            style={{
                              fontSize: cateTrue.fontSize + "px",
                              color: cateTrue.color,
                              backgroundColor: cateTrue.backgroundColor,
                            }}
                            href="#"
                          >
                            {cateV.name}
                          </a>
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
              {makingCate.length >= 5 && (
                <div class="nav-drop-items">
                  <span
                    style={{
                      fontSize: cateTrue.fontSize + "px",
                      color: cateTrue.color,
                      backgroundColor: cateTrue.backgroundColor,
                    }}
                    class="more-opener"
                  >
                    {__("More", "zita-blocks")}
                    <i class="fas fa-chevron-down"></i>
                  </span>
                  <ul>
                    {makingCate.map((cateV, cKey) => {
                      return (
                        cKey >= 4 && (
                          <li class="cat-item">
                            <a
                              style={{
                                fontSize: cateTrue.fontSize + "px",
                                color: cateTrue.color,
                                backgroundColor: cateTrue.backgroundColor,
                              }}
                              href="#"
                            >
                              {cateV.name}
                            </a>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      );
    }
  };
  render() {
    const { attributes, setAttributes } = this.props;
    // console.log("category props->", this.props);
    const { posts, category, totalPost } = this.state;
    // console.log("state props posts->", this.state);
    let {
      heading,
      author,
      numberOfPosts,
      thumbnail,
      date,
      showTag,
      showCate,
      excerpt,
      heading2,
      excerpt2,
      author2,
      date2,
      showCate2,
      postCategories,
      meta_style,
      meta_style2,
      thumbnail2,
      title,
      categorynav,
    } = attributes;
    let heading_ = heading[0];
    let thumbnail_ = thumbnail[0];
    let thumbnail2_ = thumbnail2[0];
    let excerpt_ = excerpt[0];
    let date_ = date[0];
    let author_ = author[0];
    let meta_style_ = meta_style[0];
    let meta_style2_ = meta_style2[0];
    let title_ = title[0];
    let showTag_ = showTag[0];
    let showCate_ = showCate[0];
    // secondary

    let heading2_ = heading2[0];
    let excerpt2_ = excerpt2[0];
    let showCate2_ = showCate2[0];
    let date2_ = date2[0];
    let author2_ = author2[0];
    // category init
    let cateGory = [];
    if (!category) {
      cateGory = false;
    } else {
      cateGory = categoryList(category);
    }
    return (
      <>
        <InspectorControls>
          <PanelBody title="Block Title / Navigation" initialOpen={false}>
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ blockTitle: "title" })}
                className={this.state.blockTitle == "title" ? "selected" : ""}
              >
                {__("Title", "zita-blocks")}
              </span>
              <span
                onClick={() => this.setState({ blockTitle: "nav" })}
                className={this.state.blockTitle == "nav" ? "selected" : ""}
              >
                {__("Navigation", "zita-blocks")}
              </span>
            </div>
            {this.state.blockTitle == "title" ? (
              <>
                <ToggleControl
                  label={
                    title_.enable
                      ? __("Show", "zita-blocks")
                      : __("Hide", "zita-blocks")
                  }
                  checked={title_.enable}
                  onChange={(e) => this.updateObj("title", "enable", title, e)}
                />
                {title_.enable && (
                  <>
                    <RangeControl
                      label={__("Font Size", "zita-blocks")}
                      value={title_.fontSize}
                      min={5}
                      max={50}
                      onChange={(e) => {
                        this.updateObj("title", "fontSize", title, e);
                      }}
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={title_.color}
                      onChange={(color) =>
                        this.updateObj("title", "color", title, color)
                      }
                    />
                    <p>
                      <strong>{__("Background Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPicker
                      color={title_.bgColor}
                      onChangeComplete={(colorBg) => {
                        let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                        this.updateObj("title", "bgColor", title, color);
                      }}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <ToggleControl
                  label={
                    categorynav[0].enable
                      ? __("Show", "zita-blocks")
                      : __("Hide", "zita-blocks")
                  }
                  checked={categorynav[0].enable}
                  onChange={(e) =>
                    this.updateObj("categorynav", "enable", categorynav, e)
                  }
                />
                {categorynav[0].enable && (
                  <>
                    <RangeControl
                      label={__("Font Size", "zita-blocks")}
                      value={categorynav[0].fontSize}
                      min={5}
                      max={50}
                      onChange={(e) => {
                        this.updateObj(
                          "categorynav",
                          "fontSize",
                          categorynav,
                          e
                        );
                      }}
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={categorynav[0].color}
                      onChange={(color) =>
                        this.updateObj(
                          "categorynav",
                          "color",
                          categorynav,
                          color
                        )
                      }
                    />
                    <p>
                      <strong>{__("Background Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPicker
                      color={categorynav[0].bgColor}
                      onChangeComplete={(colorBg) => {
                        let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                        this.updateObj(
                          "categorynav",
                          "backgroundColor",
                          categorynav,
                          color
                        );
                      }}
                    />
                  </>
                )}
              </>
            )}
            {/* under line */}
            {(title_.enable || categorynav[0].enable) && (
              <>
                <p>
                  <strong>{__("Under Line", "zita-blocks")}</strong>
                </p>
                <ToggleControl
                  label={meta_style_.underLine ? "Show" : "Hide"}
                  checked={meta_style_.underLine}
                  onChange={(e) =>
                    this.updateObj("meta_style", "underLine", meta_style, e)
                  }
                />
                {meta_style_.underLine && (
                  <>
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPicker
                      color={meta_style_.underLineColor}
                      onChangeComplete={(colorBg) => {
                        let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                        this.updateObj(
                          "meta_style",
                          "underLineColor",
                          meta_style,
                          color
                        );
                      }}
                    />
                  </>
                )}
              </>
            )}
          </PanelBody>
          <PanelBody
            title={__("Post Layout", "zita-blocks")}
            initialOpen={false}
          >
            <p>
              <strong>{__("Number of Post Display", "zita-blocks")}</strong>
            </p>
            <RangeControl
              value={numberOfPosts}
              min={1}
              max={20}
              onChange={(e) => {
                setAttributes({ numberOfPosts: e });
                filterPostInit(this, { numberOfPosts: e, featured_image: 1 });
              }}
            />
            <p>
              <strong>{__("Layout Position", "zita-blocks")}</strong>
            </p>
            <div class="zita-switcher-button-section">
              <span
                onClick={() =>
                  this.updateObj(
                    "meta_style",
                    "layoutPosition",
                    meta_style,
                    "left"
                  )
                }
                className={
                  meta_style_.layoutPosition == "left" ? "selected" : ""
                }
              >
                {__("Left", "zita-blocks")}
              </span>
              <span
                onClick={() =>
                  this.updateObj(
                    "meta_style",
                    "layoutPosition",
                    meta_style,
                    "right"
                  )
                }
                className={
                  meta_style_.layoutPosition == "right" ? "selected" : ""
                }
              >
                {__("Right", "zita-blocks")}
              </span>
            </div>
            <p>
              <strong>{__("Block Background Color", "zita-blocks")}</strong>
            </p>
            <ColorPicker
              color={meta_style_.blockBgColor}
              onChangeComplete={(colorBg) => {
                let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                this.updateObj("meta_style", "blockBgColor", meta_style, color);
              }}
            />
          </PanelBody>
          <PanelBody
            title={__("Post Title", "zita-blocks")}
            initialOpen={false}
          >
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ heading: "primary" })}
                className={this.state.heading == "primary" ? "selected" : ""}
              >
                {__("Primary", "zita-blocks")}
              </span>
              <span
                onClick={() => this.setState({ heading: "secondary" })}
                className={this.state.heading == "secondary" ? "selected" : ""}
              >
                {__("Secondary", "zita-blocks")}
              </span>
            </div>
            {this.state.heading == "primary" ? (
              <>
                <p>
                  <strong>{__("Post Title Tag", "zita-blocks")}</strong>
                </p>
                <select
                  value={heading_.tag}
                  className="zita-block-select"
                  onChange={(e) => {
                    let value_ = e.target.value;
                    let font_ =
                      value_ == "h1"
                        ? 30
                        : value_ == "h2"
                        ? 25
                        : value_ == "h3"
                        ? 20
                        : 17;
                    let newHeading = [...heading];
                    newHeading[0]["tag"] = value_;
                    newHeading[0]["fontSize"] = font_;
                    setAttributes({ heading: newHeading });
                  }}
                >
                  <option value="h1">{__("H1", "zita-blocks")}</option>
                  <option value="h2">{__("H2", "zita-blocks")}</option>
                  <option value="h3">{__("H3", "zita-blocks")}</option>
                  <option value="p">{__("P", "zita-blocks")}</option>
                </select>
                <p>
                  <strong>{__("Font Size", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={heading_.fontSize}
                  min={1}
                  max={50}
                  onChange={(e) =>
                    this.updateObj("heading", "fontSize", heading, e)
                  }
                />
                <p>
                  <strong>{__("Color", "zita-blocks")}</strong>
                </p>
                <ColorPalette
                  value={heading_.color}
                  onChange={(color) =>
                    this.updateObj("heading", "color", heading, color)
                  }
                />
              </>
            ) : (
              <>
                <p>
                  <strong>{__("Heading Tag", "zita-blocks")}</strong>
                </p>
                <select
                  value={heading2_.tag}
                  className="zita-block-select"
                  onChange={(e) => {
                    let value_ = e.target.value;
                    let font_ =
                      value_ == "h1"
                        ? 30
                        : value_ == "h2"
                        ? 25
                        : value_ == "h3"
                        ? 20
                        : 17;
                    let newHeading = [...heading2];
                    newHeading[0]["tag"] = value_;
                    newHeading[0]["fontSize"] = font_;
                    setAttributes({ heading2: newHeading });
                  }}
                >
                  <option value="h1">{__("H1", "zita-blocks")}</option>
                  <option value="h2">{__("H2", "zita-blocks")}</option>
                  <option value="h3">{__("H3", "zita-blocks")}</option>
                  <option value="p">{__("P", "zita-blocks")}</option>
                </select>
                <p>
                  <strong>{__("Font Size", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={heading2_.fontSize}
                  min={1}
                  max={50}
                  onChange={(e) =>
                    this.updateObj("heading2", "fontSize", heading2, e)
                  }
                />
                <p>
                  <strong>{__("Color", "zita-blocks")}</strong>
                </p>
                <ColorPalette
                  value={heading2_.color}
                  onChange={(color) =>
                    this.updateObj("heading2", "color", heading2, color)
                  }
                />
              </>
            )}
          </PanelBody>
          <PanelBody
            title={__("Excerpt / Content", "zita-blocks")}
            initialOpen={false}
          >
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ excerpt: "primary" })}
                className={this.state.excerpt == "primary" ? "selected" : ""}
              >
                {__("Primary", "zita-blocks")}
              </span>
              <span
                onClick={() => this.setState({ excerpt: "secondary" })}
                className={this.state.excerpt == "secondary" ? "selected" : ""}
              >
                {__("Secondary", "zita-blocks")}
              </span>
            </div>
            {this.state.excerpt == "primary" ? (
              <>
                <ToggleControl
                  label={excerpt_.enable ? "Show" : "Hide"}
                  checked={excerpt_.enable}
                  onChange={(e) =>
                    this.updateObj("excerpt", "enable", excerpt, e)
                  }
                />
                {excerpt_.enable && (
                  <>
                    <p>
                      <strong>{__("Number of words", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={excerpt_.words}
                      min={1}
                      max={200}
                      onChange={(e) =>
                        this.updateObj("excerpt", "words", excerpt, e)
                      }
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={excerpt_.fontSize}
                      min={1}
                      max={25}
                      onChange={(e) =>
                        this.updateObj("excerpt", "fontSize", excerpt, e)
                      }
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={excerpt_.color}
                      onChange={(color) =>
                        this.updateObj("excerpt", "color", excerpt, color)
                      }
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <ToggleControl
                  label={
                    excerpt2_.enable
                      ? __("Show", "zita-blocks")
                      : __("Hide", "zita-blocks")
                  }
                  checked={excerpt2_.enable}
                  onChange={(e) =>
                    this.updateObj("excerpt2", "enable", excerpt2, e)
                  }
                />
                {excerpt2_.enable && (
                  <>
                    <p>
                      <strong>{__("Number of words", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={excerpt2_.words}
                      min={1}
                      max={200}
                      onChange={(e) =>
                        this.updateObj("excerpt2", "words", excerpt2, e)
                      }
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={excerpt2_.fontSize}
                      min={1}
                      max={25}
                      onChange={(e) =>
                        this.updateObj("excerpt2", "fontSize", excerpt2, e)
                      }
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={excerpt2_.color}
                      onChange={(color) =>
                        this.updateObj("excerpt2", "color", excerpt2, color)
                      }
                    />
                  </>
                )}
              </>
            )}
          </PanelBody>
          <PanelBody
            title={__("Featured Image", "zita-blocks")}
            initialOpen={false}
          >
            <ToggleControl
              label={
                thumbnail_.enable
                  ? __("Show", "zita-blocks")
                  : __("Hide", "zita-blocks")
              }
              checked={thumbnail_.enable}
              onChange={(e) =>
                this.updateObj("thumbnail", "enable", thumbnail, e)
              }
            />
            {thumbnail_.enable && (
              <>
                <p>
                  <strong>{__("Border Radius", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={thumbnail_.borderRadius}
                  min={0}
                  max={80}
                  onChange={(e) =>
                    this.updateObj("thumbnail", "borderRadius", thumbnail, e)
                  }
                />
              </>
            )}
          </PanelBody>
          <PanelBody title={__("Post Meta", "zita-blocks")} initialOpen={false}>
            {/* category */}
            <p>
              <strong>{__("Choose Category", "zita-blocks")}</strong>
            </p>
            {cateGory && cateGory.length > 0 ? (
              <div className="zita-multiple-select">
                <SelectControl
                  multiple
                  value={postCategories.length ? postCategories : ["all"]}
                  onChange={(choosen) => {
                    let chooseAll = choosen.filter((choose) => {
                      if (choose == "all") return true;
                    });
                    if (chooseAll.length) choosen = [];
                    setAttributes({ postCategories: choosen });
                    filterPostInit(this, {
                      postCategories: choosen,
                      featured_image: 1,
                    });
                  }}
                  options={cateGory}
                />
              </div>
            ) : (
              <p className="category-blank">
                {__("No Categories Found", "zita-blocks")}
              </p>
            )}

            {/* category */}
            {/* primery and secondary */}
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ metaChoose: "primary" })}
                className={this.state.metaChoose == "primary" ? "selected" : ""}
              >
                {__("Primary", "zita-blocks")}
              </span>
              <span
                onClick={() => this.setState({ metaChoose: "secondary" })}
                className={
                  this.state.metaChoose == "secondary" ? "selected" : ""
                }
              >
                {__("Secondary", "zita-blocks")}
              </span>
            </div>

            {/* show author */}
            {this.state.metaChoose == "primary" ? (
              <>
                <ToggleControl
                  label={__("Author", "zita-blocks")}
                  checked={author_.enable}
                  onChange={(e) =>
                    this.updateObj("author", "enable", author, e)
                  }
                />
                {/* show date */}
                <ToggleControl
                  label={__("Date", "zita-blocks")}
                  checked={date_.enable}
                  onChange={(e) => this.updateObj("date", "enable", date, e)}
                />
                <ToggleControl
                  label={__("Categories", "zita-blocks")}
                  checked={showCate_.enable}
                  onChange={(e) =>
                    this.updateObj("showCate", "enable", showCate, e)
                  }
                />
                {/* show last date */}
                <ToggleControl
                  label={__("Last Modified Date", "zita-blocks")}
                  checked={date_.last_modified}
                  onChange={(e) =>
                    this.updateObj("date", "last_modified", date, e)
                  }
                />
                <ToggleControl
                  label={__("Tag", "zita-blocks")}
                  checked={showTag_.enable}
                  onChange={(e) =>
                    this.updateObj("showTag", "enable", showTag, e)
                  }
                />
                <p class="block-inside">
                  {__("Meta Custom Style", "zita-blocks")}
                </p>
                <p>
                  <strong>{__("Author/Dates Font Size", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={meta_style_.fontSize}
                  min={1}
                  max={25}
                  onChange={(e) => {
                    this.updateObj("meta_style", "fontSize", meta_style, e);
                  }}
                />
                <p>
                  <strong>{__("Author/Dates Color", "zita-blocks")}</strong>
                </p>
                <ColorPalette
                  value={"color" in meta_style_ ? meta_style_.color : ""}
                  onChange={(color) =>
                    this.updateObj("meta_style", "color", meta_style, color)
                  }
                />
                {showCate_.enable && (
                  <>
                    <p class="block-inside">
                      {__("Category Custom Style", "zita-blocks")}
                    </p>
                    <p>
                      <strong>
                        {__("Number Category Per Post", "zita-blocks")}
                      </strong>
                    </p>
                    <RangeControl
                      value={showCate_.count}
                      min={1}
                      max={10}
                      onChange={(e) => {
                        this.updateObj("showCate", "count", showCate, e);
                      }}
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={showCate_.fontSize}
                      min={1}
                      max={30}
                      onChange={(e) => {
                        this.updateObj("showCate", "fontSize", showCate, e);
                      }}
                    />
                    <ToggleControl
                      label={
                        showCate_.customColor
                          ? __("Custom Style", "zita-blocks")
                          : __("Default Style", "zita-blocks")
                      }
                      checked={showCate_.customColor}
                      onChange={(e) =>
                        this.updateObj("showCate", "customColor", showCate, e)
                      }
                    />
                    {showCate_.customColor && (
                      <>
                        <p>
                          <strong>{__("Color", "zita-blocks")}</strong>
                        </p>
                        <ColorPalette
                          value={showCate_.color}
                          onChange={(color) =>
                            this.updateObj("showCate", "color", showCate, color)
                          }
                        />
                        <p>
                          <strong>
                            {__("Background Color", "zita-blocks")}
                          </strong>
                        </p>
                        <ColorPicker
                          color={showCate_.backgroundColor}
                          onChangeComplete={(colorBg) => {
                            let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                            this.updateObj(
                              "showCate",
                              "backgroundColor",
                              showCate,
                              color
                            );
                          }}
                        />
                      </>
                    )}
                  </>
                )}
                {showTag_.enable && (
                  <>
                    <p class="block-inside">
                      {__("Tags Custom Style", "zita-blocks")}
                    </p>
                    <p>
                      <strong>
                        {__("Number Tags Per Post", "zita-blocks")}
                      </strong>
                    </p>
                    <RangeControl
                      value={showTag_.count}
                      min={1}
                      max={10}
                      onChange={(e) => {
                        this.updateObj("showTag", "count", showTag, e);
                      }}
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={showTag_.fontSize}
                      min={1}
                      max={30}
                      onChange={(e) => {
                        this.updateObj("showTag", "fontSize", showTag, e);
                      }}
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={showTag_.color}
                      onChange={(color) =>
                        this.updateObj("showTag", "color", showTag, color)
                      }
                    />
                    <p>
                      <strong>{__("Background Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPicker
                      color={showTag_.backgroundColor}
                      onChangeComplete={(colorBg) => {
                        let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                        this.updateObj(
                          "showTag",
                          "backgroundColor",
                          showTag,
                          color
                        );
                      }}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                {/* secondary  */}
                {/* show author */}
                <ToggleControl
                  label={__("Author", "zita-blocks")}
                  checked={author2_.enable}
                  onChange={(e) =>
                    this.updateObj("author2", "enable", author2, e)
                  }
                />
                {/* show date */}
                <ToggleControl
                  label={__("Date", "zita-blocks")}
                  checked={date2_.enable}
                  onChange={(e) => this.updateObj("date2", "enable", date2, e)}
                />
                <ToggleControl
                  label={__("Categories", "zita-blocks")}
                  checked={showCate2_.enable}
                  onChange={(e) =>
                    this.updateObj("showCate2", "enable", showCate2, e)
                  }
                />
                {/* show last date */}
                <ToggleControl
                  label={__("Last Modified Date", "zita-blocks")}
                  checked={date2_.last_modified}
                  onChange={(e) =>
                    this.updateObj("date2", "last_modified", date2, e)
                  }
                />
                <p class="block-inside">
                  {__("Meta Custom Style", "zita-blocks")}
                </p>
                <p>
                  <strong>{__("Author/Dates Font Size", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={meta_style2_.fontSize}
                  min={1}
                  max={25}
                  onChange={(e) => {
                    this.updateObj("meta_style2", "fontSize", meta_style2, e);
                  }}
                />
                <p>
                  <strong>{__("Author/Dates Color", "zita-blocks")}</strong>
                </p>
                <ColorPalette
                  value={"color" in meta_style2_ ? meta_style2_.color : ""}
                  onChange={(color) =>
                    this.updateObj("meta_style2", "color", meta_style2, color)
                  }
                />
                {showCate2_.enable && (
                  <>
                    <p class="block-inside">
                      {__("Category Custom Style", "zita-blocks")}
                    </p>
                    <p>
                      <strong>
                        {__("Number Category Per Post", "zita-blocks")}
                      </strong>
                    </p>
                    <RangeControl
                      value={showCate2_.count}
                      min={1}
                      max={10}
                      onChange={(e) => {
                        this.updateObj("showCate2", "count", showCate2, e);
                      }}
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={showCate2_.fontSize}
                      min={1}
                      max={30}
                      onChange={(e) => {
                        this.updateObj("showCate2", "fontSize", showCate2, e);
                      }}
                    />
                    <ToggleControl
                      label={
                        showCate2_.customColor
                          ? __("Custom Style", "zita-blocks")
                          : __("Default Style", "zita-blocks")
                      }
                      checked={showCate2_.customColor}
                      onChange={(e) =>
                        this.updateObj("showCate2", "customColor", showCate2, e)
                      }
                    />
                    {showCate2_.customColor && (
                      <>
                        <p>
                          <strong>{__("Color", "zita-blocks")}</strong>
                        </p>
                        <ColorPalette
                          value={showCate2_.color}
                          onChange={(color) =>
                            this.updateObj(
                              "showCate2",
                              "color",
                              showCate2,
                              color
                            )
                          }
                        />
                        <p>
                          <strong>
                            {__("Background Color", "zita-blocks")}
                          </strong>
                        </p>
                        <ColorPicker
                          color={showCate2_.backgroundColor}
                          onChangeComplete={(colorBg) => {
                            let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                            this.updateObj(
                              "showCate2",
                              "backgroundColor",
                              showCate2,
                              color
                            );
                          }}
                        />
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </PanelBody>
          {posts && posts.length > 0 && posts.length < totalPost && (
            <PanelBody title="Next / Previous Button" initialOpen={false}>
              <p>
                <strong>{__("Font Size", "zita-blocks")}</strong>
              </p>
              <RangeControl
                value={meta_style_.npBgfontSize}
                min={1}
                max={30}
                onChange={(e) => {
                  this.updateObj("meta_style", "npBgfontSize", meta_style, e);
                }}
              />
              <p>
                <strong>{__("Color", "zita-blocks")}</strong>
              </p>
              <ColorPalette
                value={meta_style_.npColor}
                onChange={(color) =>
                  this.updateObj("meta_style", "npColor", meta_style, color)
                }
              />
              <p>
                <strong>{__("Background Color", "zita-blocks")}</strong>
              </p>
              <ColorPicker
                color={meta_style_.npBgColor}
                onChangeComplete={(colorBg) => {
                  let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                  this.updateObj("meta_style", "npBgColor", meta_style, color);
                }}
              />
            </PanelBody>
          )}
        </InspectorControls>
        {posts && posts.length > 0 ? (
          <div
            className="zita-two-post-wrapper"
            style={{ backgroundColor: meta_style_.blockBgColor }}
          >
            {this.navCategory(categorynav[0], title_)}
            <div
              className={`zita-post-two-column column-layout-${meta_style_.layoutPosition}`}
            >
              <div className="column-one">
                {this.returnHtml(
                  posts[0],
                  heading_,
                  author_,
                  date_,
                  meta_style_,
                  thumbnail_,
                  showCate_,
                  excerpt_,
                  showTag_
                )}
              </div>
              <div className="column-two">
                {posts.length > 1 &&
                  posts.map((post, index__) => {
                    return (
                      index__ != 0 &&
                      this.returnHtml(
                        post,
                        heading2_,
                        author2_,
                        date2_,
                        meta_style2_,
                        thumbnail_,
                        showCate2_,
                        excerpt2_,
                        false
                      )
                    );
                  })}
              </div>
            </div>
            {posts && posts.length > 0 && posts.length < totalPost && (
              <div className="zita-two-post-wrapper-next-prev">
                <div
                  style={{
                    fontSize: meta_style_.npBgfontSize,
                    color: meta_style_.npColor,
                    backgroundColor: meta_style_.npBgColor,
                  }}
                >
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div
                  style={{
                    fontSize: meta_style_.npBgfontSize,
                    color: meta_style_.npColor,
                    backgroundColor: meta_style_.npBgColor,
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>{!posts ? <PostNotfound /> : <PostLoader />}</div>
        )}
      </>
    );
  }
}
export default Edit;
