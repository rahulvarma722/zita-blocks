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
  PostNotfound,
  PostLoader,
} from "../block-assets/post-functions";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: [],
      totalPost: null,
    };
  }
  componentDidMount() {
    let { thumbnail } = this.props.attributes;
    let sendData = {};
    if (thumbnail[0].typeShow == "1") {
      sendData["featured_image"] = 1;
    }
    firstTimeInit(this, sendData);
  }
  updateObj = (parent_key, child_key, initialValue, value_) => {
    let newNewValue = [...initialValue];
    newNewValue[0][child_key] = value_;
    let setAttr_ = {};
    setAttr_[parent_key] = newNewValue;
    this.props.setAttributes(setAttr_);
  };
  render() {
    const { attributes, setAttributes } = this.props;
    const { posts, category, totalPost } = this.state;
    let {
      heading,
      author,
      numberOfPosts,
      thumbnail,
      // columnLayout,
      dimension,
      date,
      showTag,
      showCate,
      excerpt,
      postCategories,
      meta_style,
      title,
    } = attributes;
    let heading_ = heading[0];
    let thumbnail_ = thumbnail[0];
    let excerpt_ = excerpt[0];
    let date_ = date[0];
    let author_ = author[0];
    let meta_style_ = meta_style[0];
    let title_ = title[0];
    let showTag_ = showTag[0];
    let showCate_ = showCate[0];
    // category init
    let cateGory = [];
    if (!category) {
      cateGory = false;
    } else {
      cateGory = categoryList(category);
    }
    // block width
    let blockStyle = { backgroundColor: meta_style_.blockBgColor };
    if (dimension[0].width) {
      blockStyle = {
        ...blockStyle,
        ...{ maxWidth: dimension[0].custom_width + "px" },
      };
    }

    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__("Block Title", "zita-blocks")}
            initialOpen={false}
          >
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
                <p>
                  <strong>{__("Title Alignment", "zita-blocks")}</strong>
                </p>
                <div className="zita-alignment">
                  <div>
                    <span
                      onClick={() => {
                        this.updateObj("title", "align", title, "left");
                      }}
                      className={`dashicons dashicons-editor-alignleft ${
                        title_.align == "left" && "active"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.updateObj("title", "align", title, "center");
                      }}
                      className={`dashicons dashicons-editor-aligncenter ${
                        title_.align == "center" && "active"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.updateObj("title", "align", title, "flex-end");
                      }}
                      className={`dashicons dashicons-editor-alignright ${
                        title_.align == "flex-end" && "active"
                      }`}
                    ></span>
                  </div>
                </div>

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
                  color={title_.backgroundColor}
                  onChangeComplete={(colorBg) => {
                    let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                    this.updateObj("title", "backgroundColor", title, color);
                  }}
                />
                {/* font weight */}
                <div className="flex-section">
                  <p>{__("Font Weight", "zita-blocks")}</p>
                  <select
                    value={title_.fontWeight}
                    onChange={(e) => {
                      this.updateObj(
                        "title",
                        "fontWeight",
                        title,
                        e.target.value
                      );
                    }}
                  >
                    <option value="400">400</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                  </select>
                </div>
                {/* font weight */}
                <p>
                  <strong>{__("Max Width %", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={title_.width}
                  min={1}
                  max={100}
                  onChange={(e) => {
                    this.updateObj("title", "width", title, e);
                  }}
                />
              </>
            )}
          </PanelBody>
          <PanelBody title="Post Layout" initialOpen={false}>
            <p>
              <strong>{__("Block Width", "zita-blocks")}</strong>
            </p>
            <ToggleControl
              label={
                dimension[0].width
                  ? __("Custom Width", "zita-blocks")
                  : __("Auto Width", "zita-blocks")
              }
              checked={dimension[0].width}
              onChange={(e) =>
                this.updateObj("dimension", "width", dimension, e)
              }
            />
            {dimension[0].width && (
              <>
                <p>
                  <strong>{__("Max Width", "zita-blocks")}</strong>
                </p>
                <RangeControl
                  value={dimension[0].custom_width}
                  min={180}
                  max={1000}
                  onChange={(e) => {
                    this.updateObj("dimension", "custom_width", dimension, e);
                  }}
                />
              </>
            )}
            <p>
              <strong>{__("Image Alignment", "zita-blocks")}</strong>
            </p>
            <div className="zita-alignment">
              <div>
                <span
                  onClick={() => {
                    this.updateObj(
                      "meta_style",
                      "imageAlign",
                      meta_style,
                      "left"
                    );
                  }}
                  className={`dashicons dashicons-editor-alignleft ${
                    meta_style_.imageAlign == "left" && "active"
                  }`}
                ></span>
              </div>
              <div>
                <span
                  onClick={() => {
                    this.updateObj(
                      "meta_style",
                      "imageAlign",
                      meta_style,
                      "center"
                    );
                  }}
                  className={`dashicons dashicons-editor-aligncenter ${
                    meta_style_.imageAlign == "center" && "active"
                  }`}
                ></span>
              </div>
              <div>
                <span
                  onClick={() => {
                    this.updateObj(
                      "meta_style",
                      "imageAlign",
                      meta_style,
                      "right"
                    );
                  }}
                  className={`dashicons dashicons-editor-alignright ${
                    meta_style_.imageAlign == "right" && "active"
                  }`}
                ></span>
              </div>
            </div>

            <p>
              <strong>{__("Number of Post Display", "zita-blocks")}</strong>
            </p>
            <RangeControl
              value={numberOfPosts}
              min={1}
              max={20}
              onChange={(e) => {
                setAttributes({ numberOfPosts: e });
                filterPostInit(this, {
                  numberOfPosts: e,
                  featured_image: this.props.attributes.thumbnail[0].typeShow,
                });
              }}
            />
            <p>
              <strong>Block Background Color</strong>
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
          </PanelBody>
          <PanelBody
            title={__("Excerpt / Content", "zita-blocks")}
            initialOpen={false}
          >
            <ToggleControl
              label={
                excerpt_.enable
                  ? __("Show", "zita-blocks")
                  : __("Hide", "zita-blocks")
              }
              checked={excerpt_.enable}
              onChange={(e) => this.updateObj("excerpt", "enable", excerpt, e)}
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
          </PanelBody>
          <PanelBody
            title={__("Post Featured Image", "zita-blocks")}
            initialOpen={false}
          >
            <select
              value={thumbnail_.typeShow}
              className="zita-block-select"
              onChange={(e) => {
                let value_ = e.target.value;
                this.updateObj("thumbnail", "typeShow", thumbnail, value_);
                filterPostInit(this, { featured_image: value_ });
              }}
            >
              <option value="all">{__("All Post", "zita-blocks")}</option>
              <option value="1">
                {__("Only Featured Image Post", "zita-blocks")}
              </option>
              <option value="2">
                {__("Without Featured Image Post", "zita-blocks")}
              </option>
            </select>

            {(thumbnail_.typeShow == "all" || thumbnail_.typeShow == "1") && (
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
                      featured_image: this.props.attributes.thumbnail[0]
                        .typeShow,
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
            {/* show author */}
            <ToggleControl
              label={__("Author", "zita-blocks")}
              checked={author_.enable}
              onChange={(e) => this.updateObj("author", "enable", author, e)}
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
              onChange={(e) => this.updateObj("date", "last_modified", date, e)}
            />
            <ToggleControl
              label={__("Tag", "zita-blocks")}
              checked={showTag_.enable}
              onChange={(e) => this.updateObj("showTag", "enable", showTag, e)}
            />
            <p class="block-inside">{__("Meta Custom Style", "zita-blocks")}</p>
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
                      <strong>{__("Background Color", "zita-blocks")}</strong>
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
                  <strong>{__("Number Tags Per Post", "zita-blocks")}</strong>
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
          </PanelBody>
          {totalPost && totalPost > posts.length && (
            <PanelBody
              title={__("Next / Previous Button", "zita-blocks")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable", "zita-blocks")}
                checked={meta_style_.npEnable}
                onChange={(e) =>
                  this.updateObj("meta_style", "npEnable", meta_style, e)
                }
              />
              {meta_style_.npEnable && (
                <>
                  <p>
                    <strong>{__("Pagination Number", "zita-blocks")}</strong>
                  </p>
                  <ToggleControl
                    label={
                      meta_style_.npPagination
                        ? __("Pagination On", "zita-blocks")
                        : __("Next Previous On", "zita-blocks")
                    }
                    checked={meta_style_.npPagination}
                    onChange={(e) =>
                      this.updateObj(
                        "meta_style",
                        "npPagination",
                        meta_style,
                        e
                      )
                    }
                  />
                  <p>
                    <strong>{__("Font Size", "zita-blocks")}</strong>
                  </p>
                  <RangeControl
                    value={meta_style_.npBgfontSize}
                    min={1}
                    max={30}
                    onChange={(e) => {
                      this.updateObj(
                        "meta_style",
                        "npBgfontSize",
                        meta_style,
                        e
                      );
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
                      this.updateObj(
                        "meta_style",
                        "npBgColor",
                        meta_style,
                        color
                      );
                    }}
                  />
                </>
              )}
            </PanelBody>
          )}
        </InspectorControls>
        {posts && posts.length > 0 ? (
          <div className="zita-block-post list-layout" style={blockStyle}>
            {title_.enable && (
              <div
                className="zita-block-post-title"
                style={{
                  justifyContent: title_.align,
                  borderColor: title_.backgroundColor,
                }}
              >
                <RichText
                  key="editable"
                  tagName="h4"
                  placeholder={__("My block title", "zita-blocks")}
                  value={title_.value}
                  style={{
                    fontSize: title_.fontSize + "px",
                    color: title_.color,
                    backgroundColor: title_.backgroundColor,
                    fontWeight: title_.fontWeight,
                    width: title_.width + "%",
                  }}
                  onChange={(e) => this.updateObj("title", "value", title, e)}
                />
              </div>
            )}
            <div
              className={`column-count column-count-1 image-align-${meta_style_.imageAlign}`}
            >
              {posts.map((post) => {
                let postAuthor =
                  author_ && author_.enable ? post.author : false;
                return thumbnail_.typeShow == "1" ? (
                  <article className="block-post-article">
                    <div className="post-wrapper">
                      <div className="featured-image">
                        <img
                          style={{
                            borderRadius: thumbnail_.borderRadius + "px",
                          }}
                          src={post.feature_image}
                        />
                      </div>
                      <div className="post-content">
                        {showCate_.enable && (
                          <p className="post-category">
                            {showCateFn(
                              this.props,
                              post.post_categories,
                              showCate_
                            )}
                          </p>
                        )}
                        <RichText.Content
                          className="post-heading"
                          tagName={heading_.tag}
                          value={__(post.postTitle, "zita-blocks")}
                          style={{
                            fontSize: heading_.fontSize,
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
                              {(postAuthor || date_.enable) && (
                                <span
                                  style={{
                                    color: meta_style_.color,
                                    fontSize: meta_style_.fontSize,
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
                                <span>{__("Modified:", "zita-blocks")} </span>
                                <span>{post.post_modified_date}</span>
                              </p>
                            </>
                          )}
                        </div>
                        {excerpt_.enable && (
                          <p
                            style={{
                              color: excerpt_.color,
                              fontSize: excerpt_.fontSize + "px",
                            }}
                            className="post-excerpt"
                          >
                            {excerptWords(excerpt_.words, post.post_excerpt)}
                          </p>
                        )}
                        {showTag_.enable && (
                          <p className="post-tags">
                            {showTagsFn(post.post_tag, showTag_)}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                ) : thumbnail_.typeShow != "1" ? (
                  <article className="block-post-article">
                    <div className="post-wrapper">
                      {post.feature_image && thumbnail_.typeShow == "all" && (
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
                        {showCate_.enable && (
                          <p className="post-category">
                            {showCateFn(
                              this.props,
                              post.post_categories,
                              showCate_
                            )}
                          </p>
                        )}
                        <RichText.Content
                          className="post-heading"
                          tagName={heading_.tag}
                          value={__(post.postTitle, "zita-blocks")}
                          style={{
                            fontSize: heading_.fontSize,
                            color: heading_.color,
                          }}
                        />
                        <div className="post-meta-all">
                          {postAuthor && (
                            <p
                              style={{
                                color: meta_style_.color,
                                fontSize: meta_style_.fontSize,
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
                                    fontSize: meta_style_.fontSize,
                                  }}
                                  className="slash"
                                >
                                  /
                                </span>
                              )}
                              <p
                                style={{
                                  color: meta_style_.color,
                                  fontSize: meta_style_.fontSize,
                                }}
                                className="post-date"
                              >
                                <span>{post.post_date}</span>
                              </p>
                            </>
                          )}
                          {date_.last_modified && (
                            <>
                              {(postAuthor || date_.enable) && (
                                <span
                                  style={{
                                    color: meta_style_.color,
                                    fontSize: meta_style_.fontSize,
                                  }}
                                  className="slash"
                                >
                                  /
                                </span>
                              )}
                              <p
                                style={{
                                  color: meta_style_.color,
                                  fontSize: meta_style_.fontSize,
                                }}
                                className="post-date-last-modified"
                              >
                                <span>{__("Modified:", "zita-blocks")} </span>
                                <span>{post.post_modified_date}</span>
                              </p>
                            </>
                          )}
                        </div>
                        {excerpt_.enable && (
                          <p
                            style={{ color: excerpt_.color }}
                            className="post-excerpt"
                          >
                            {excerptWords(excerpt_.words, post.post_excerpt)}
                          </p>
                        )}
                        {showTag_.enable && (
                          <p className="post-tags">
                            {showTagsFn(post.post_tag, showTag_)}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                ) : (
                  ""
                );
              })}
            </div>
            {meta_style_.npEnable && totalPost && totalPost > posts.length ? (
              <div className="zita-two-post-wrapper-next-prev">
                {/* npBgfontSize npColor npBgColor */}
                <div
                  style={{
                    fontSize: meta_style_.npBgfontSize,
                    color: meta_style_.npColor,
                    backgroundColor: meta_style_.npBgColor,
                  }}
                >
                  <i class="fas fa-chevron-left"></i>
                </div>
                {meta_style_.npPagination && (
                  <section className="paginationNumbers">
                    {[1, 2, 3].map((pagiV) => {
                      return (
                        <div
                          className="zita-image-section-np  pagination"
                          style={{
                            fontSize: meta_style_.npBgfontSize,
                            color: meta_style_.npColor,
                            backgroundColor: meta_style_.npBgColor,
                          }}
                        >
                          {pagiV}
                        </div>
                      );
                    })}
                    <div class="dots pagination">
                      <span>...</span>
                    </div>
                    <div
                      className="zita-image-section-np  pagination"
                      style={{
                        fontSize: meta_style_.npBgfontSize,
                        color: meta_style_.npColor,
                        backgroundColor: meta_style_.npBgColor,
                      }}
                    >
                      4
                    </div>
                  </section>
                )}
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
            ) : (
              ""
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
