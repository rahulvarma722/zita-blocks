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
import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metaChoose: "primary",
      excerpt: "primary",
      heading: "primary",
      thumbnail: "primary",
      blockTitle: "title",
    };
  }
  updateObj = (parent_key, child_key, initialValue, value_) => {
    let newNewValue = [...initialValue];
    newNewValue[0][child_key] = value_;
    let setAttr_ = {};
    setAttr_[parent_key] = newNewValue;
    this.props.setAttributes(setAttr_);
  };
  dateFormate = (date) => {
    let date_ = date.split("T")[0];
    let dateObj = new Date(date_);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateArr =
      monthNames[dateObj.getMonth()] +
      " " +
      dateObj.getDate() +
      ", " +
      dateObj.getFullYear();
    return <RichText.Content tag="span" value={dateArr} />;
  };
  excerptWords = (words, words_) => {
    words_ = decodeEntities(words_);
    words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
    words_ = words_.split(" ");
    words_ = words_.slice(0, words);
    words_ = words_.join(" ");
    // words_ = decodeEntities(words_);
    return words_;
  };
  showCateFn = (categories, cate_) => {
    let returR = [];
    if ("category" in this.props && this.props.category && categories.length) {
      let countCate = cate_.count;
      let postCate_ = this.props.attributes.postCategories;
      if (postCate_.length) {
        postCate_.map((ev) => {
          let MkInt = parseInt(ev);
          if (categories.includes(MkInt)) categories.unshift(MkInt);
        });
      }
      categories = [...new Set(categories)];
      categories.forEach((cate) => {
        if (returR.length == countCate) {
          return;
        }
        this.props.category.forEach((searchCate) => {
          if (cate == searchCate.id) {
            returR.push(searchCate.name);
            return;
          }
        });
      });
    }
    if (returR.length) {
      // let getCateStyle = this.props.attributes.showCate;
      let putCateStyle = { fontSize: cate_.fontSize + "px" };
      if (cate_.customColor) {
        putCateStyle["color"] = cate_.color;
        putCateStyle["backgroundColor"] = cate_.backgroundColor;
      }
      return returR.map((returnH) => (
        <span style={putCateStyle}>{returnH}</span>
      ));
    }
  };
  showTagsFn = (tags_, tag_r) => {
    let returR = [];
    if ("tags" in this.props && this.props.tags && tags_.length) {
      let countTag = tag_r.count;
      tags_.forEach((tag) => {
        if (returR.length == countTag) {
          return;
        }
        this.props.tags.forEach((searchtag) => {
          if (tag == searchtag.id) {
            returR.push(searchtag.name);
            return;
          }
        });
      });
    }
    if (returR.length) {
      let putTagStyle = { color: tag_r.color };
      putTagStyle["color"] = tag_r.color;
      putTagStyle["backgroundColor"] = tag_r.backgroundColor;
      putTagStyle["fontSize"] = tag_r.fontSize + "px";
      return returR.map((returnH) => (
        <span style={putTagStyle}>{returnH}</span>
      ));
    }
  };
  // autor
  authorFn = (author) => {
    let retur = {};
    if ("authors" in this.props) {
      this.props.authors.map((authorDetail) => {
        if (authorDetail.id == author) {
          retur = authorDetail;
          return;
        }
      });
    }
    return retur;
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
    let postAuthor =
      author_ && author_.enable && "name" in this.authorFn(post.author)
        ? this.authorFn(post.author).name
        : false;
    return (
      <article className="block-post-article" key={post.id}>
        <div className="post-wrapper">
          {"getMedia_" in post &&
            post.getMedia_ &&
            "guid" in post.getMedia_ &&
            thumbnail_.enable && (
              <div className="featured-image">
                <img
                  style={{
                    borderRadius: thumbnail_.borderRadius + "px",
                  }}
                  src={post.getMedia_.guid.rendered}
                />
              </div>
            )}
          <div className="post-content">
            {showCate_ && showCate_.enable && (
              <p className="post-category">
                {this.showCateFn(post.categories, showCate_)}
              </p>
            )}
            <RichText.Content
              className="post-heading"
              tagName={heading_.tag}
              value={post.title.rendered}
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
                    {this.dateFormate(post.date)}
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
                    <span>Modified: </span>
                    {this.dateFormate(post.modified)}
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
                {this.excerptWords(excerpt_.words, post.excerpt.rendered)}
                <span className="read-more">...Read More</span>
              </p>
            )}
            {showTag_ && showTag_.enable && (
              <p style={{ color: meta_style_.color }} className="post-tags">
                {this.showTagsFn(post.tags, showTag_)}
              </p>
            )}
          </div>
        </div>
      </article>
    );
  };
  navCategory = (cateTrue, title_) => {
    let category_ = this.props.category;
    let makingCate = [];
    if ((category_ && category_.length) || title_.enable) {
      // choosen category only show in nav
      let mUnderLine = this.props.attributes.meta_style[0];
      let mUnderLineSt = mUnderLine.underLine
        ? { borderColor: mUnderLine.underLineColor }
        : null;
      // under line
      if (cateTrue.enable && category_ && category_.length) {
        if (this.props.attributes.postCategories.length) {
          this.props.attributes.postCategories.map((choosenCate) => {
            category_.map((existCate) => {
              if (existCate.id == choosenCate) {
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
          {cateTrue.enable && makingCate.length && (
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
                      all
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
                    More<i class="fas fa-chevron-down"></i>
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
    const {
      posts,
      attributes,
      setAttributes,
      category,
      totalPost,
    } = this.props;
    // console.log("two section", this.props);
    // return <h1>This is Two Column Block</h1>;
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
    let cateGory = [{ value: "all", label: "All" }];
    if (category && category.length) {
      category.map((catt) => {
        cateGory.push({
          value: catt.id,
          label: catt.name,
        });
      });
    }
    // console.log("category", category);
    // console.log("cateGory", cateGory);
    return (
      <>
        <InspectorControls>
          <PanelBody title="Block Title / Navigation" initialOpen={false}>
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ blockTitle: "title" })}
                className={this.state.blockTitle == "title" ? "selected" : ""}
              >
                Title
              </span>
              <span
                onClick={() => this.setState({ blockTitle: "nav" })}
                className={this.state.blockTitle == "nav" ? "selected" : ""}
              >
                Navigation
              </span>
            </div>
            {this.state.blockTitle == "title" ? (
              <>
                <ToggleControl
                  label={title_.enable ? "Show" : "Hide"}
                  checked={title_.enable}
                  onChange={(e) => this.updateObj("title", "enable", title, e)}
                />
                {title_.enable && (
                  <>
                    <RangeControl
                      label="Font Size"
                      value={title_.fontSize}
                      min={5}
                      max={50}
                      onChange={(e) => {
                        this.updateObj("title", "fontSize", title, e);
                      }}
                    />
                    <p>
                      <strong>Color</strong>
                    </p>
                    <ColorPalette
                      value={title_.color}
                      onChange={(color) =>
                        this.updateObj("title", "color", title, color)
                      }
                    />
                    <p>
                      <strong>Background Color</strong>
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
                  label={categorynav[0].enable ? "Show" : "Hide"}
                  checked={categorynav[0].enable}
                  onChange={(e) =>
                    this.updateObj("categorynav", "enable", categorynav, e)
                  }
                />
                {categorynav[0].enable && (
                  <>
                    <RangeControl
                      label="Font Size"
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
                      <strong>Color</strong>
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
                      <strong>Background Color</strong>
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
                  <strong>Under Line</strong>
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
                      <strong>Color</strong>
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
          <PanelBody title="Post Layout" initialOpen={false}>
            <p>
              <strong>Number of Post Display</strong>
            </p>
            <RangeControl
              value={numberOfPosts}
              min={1}
              max={20}
              onChange={(e) => {
                setAttributes({ numberOfPosts: e });
              }}
            />
            <p>
              <strong>Layout Position</strong>
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
                Left
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
                Right
              </span>
            </div>
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
          <PanelBody title="Post Title" initialOpen={false}>
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ heading: "primary" })}
                className={this.state.heading == "primary" ? "selected" : ""}
              >
                Primary
              </span>
              <span
                onClick={() => this.setState({ heading: "secondary" })}
                className={this.state.heading == "secondary" ? "selected" : ""}
              >
                Secondary
              </span>
            </div>
            {this.state.heading == "primary" ? (
              <>
                <p>
                  <strong>Post Title Tag</strong>
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
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="p">P</option>
                </select>
                <p>
                  <strong>Font Size</strong>
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
                  <strong>Color</strong>
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
                  <strong>Heading Tag</strong>
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
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="p">P</option>
                </select>
                <p>
                  <strong>Font Size</strong>
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
                  <strong>Color</strong>
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
          <PanelBody title="Excerpt / Content" initialOpen={false}>
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ excerpt: "primary" })}
                className={this.state.excerpt == "primary" ? "selected" : ""}
              >
                Primary
              </span>
              <span
                onClick={() => this.setState({ excerpt: "secondary" })}
                className={this.state.excerpt == "secondary" ? "selected" : ""}
              >
                Secondary
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
                      <strong>Number of words</strong>
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
                      <strong>Font Size</strong>
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
                      <strong>Color</strong>
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
                  label={excerpt2_.enable ? "Show" : "Hide"}
                  checked={excerpt2_.enable}
                  onChange={(e) =>
                    this.updateObj("excerpt2", "enable", excerpt2, e)
                  }
                />
                {excerpt2_.enable && (
                  <>
                    <p>
                      <strong>Number of words</strong>
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
                      <strong>Font Size</strong>
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
                      <strong>Color</strong>
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
          <PanelBody title="Featured Image" initialOpen={false}>
            <ToggleControl
              label={thumbnail_.enable ? "Show" : "Hide"}
              checked={thumbnail_.enable}
              onChange={(e) =>
                this.updateObj("thumbnail", "enable", thumbnail, e)
              }
            />
            {thumbnail_.enable && (
              <>
                <p>
                  <strong>Border Radius</strong>
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
            {/* <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ thumbnail: "primary" })}
                className={this.state.thumbnail == "primary" ? "selected" : ""}
              >
                Primary
              </span>
              <span
                onClick={() => this.setState({ thumbnail: "secondary" })}
                className={
                  this.state.thumbnail == "secondary" ? "selected" : ""
                }
              >
                Secondary
              </span>
            </div>
            {this.state.thumbnail == "primary" ? (
              <>
                <ToggleControl
                  label={thumbnail_.enable ? "Show" : "Hide"}
                  checked={thumbnail_.enable}
                  onChange={(e) =>
                    this.updateObj("thumbnail", "enable", thumbnail, e)
                  }
                />
                {thumbnail_.enable && (
                  <>
                    <p>
                      <strong>Border Radius</strong>
                    </p>
                    <RangeControl
                      value={thumbnail_.borderRadius}
                      min={0}
                      max={80}
                      onChange={(e) =>
                        this.updateObj(
                          "thumbnail",
                          "borderRadius",
                          thumbnail,
                          e
                        )
                      }
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <ToggleControl
                  label={thumbnail2_.enable ? "Show" : "Hide"}
                  checked={thumbnail2_.enable}
                  onChange={(e) =>
                    this.updateObj("thumbnail2", "enable", thumbnail2, e)
                  }
                />
                {thumbnail2_.enable && (
                  <>
                    <p>
                      <strong>Border Radius</strong>
                    </p>
                    <RangeControl
                      value={thumbnail2_.borderRadius}
                      min={0}
                      max={80}
                      onChange={(e) =>
                        this.updateObj(
                          "thumbnail2",
                          "borderRadius",
                          thumbnail2,
                          e
                        )
                      }
                    />
                  </>
                )}
              </>
            )} */}
          </PanelBody>
          <PanelBody title="Post Meta" initialOpen={false}>
            {/* category */}
            <p>
              <strong>Choose Category</strong>
            </p>
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
                }}
                options={cateGory}
              />
            </div>
            {/* category */}
            {/* primery and secondary */}
            <div class="zita-switcher-button-section">
              <span
                onClick={() => this.setState({ metaChoose: "primary" })}
                className={this.state.metaChoose == "primary" ? "selected" : ""}
              >
                Primary
              </span>
              <span
                onClick={() => this.setState({ metaChoose: "secondary" })}
                className={
                  this.state.metaChoose == "secondary" ? "selected" : ""
                }
              >
                Secondary
              </span>
            </div>

            {/* show author */}
            {this.state.metaChoose == "primary" ? (
              <>
                <ToggleControl
                  label="Author"
                  checked={author_.enable}
                  onChange={(e) =>
                    this.updateObj("author", "enable", author, e)
                  }
                />
                {/* show date */}
                <ToggleControl
                  label="Date"
                  checked={date_.enable}
                  onChange={(e) => this.updateObj("date", "enable", date, e)}
                />
                <ToggleControl
                  label="Categories"
                  checked={showCate_.enable}
                  onChange={(e) =>
                    this.updateObj("showCate", "enable", showCate, e)
                  }
                />
                {/* show last date */}
                <ToggleControl
                  label="Last Modified Date"
                  checked={date_.last_modified}
                  onChange={(e) =>
                    this.updateObj("date", "last_modified", date, e)
                  }
                />
                <ToggleControl
                  label="Tag"
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
                  label="Author"
                  checked={author2_.enable}
                  onChange={(e) =>
                    this.updateObj("author2", "enable", author2, e)
                  }
                />
                {/* show date */}
                <ToggleControl
                  label="Date"
                  checked={date2_.enable}
                  onChange={(e) => this.updateObj("date2", "enable", date2, e)}
                />
                <ToggleControl
                  label="Categories"
                  checked={showCate2_.enable}
                  onChange={(e) =>
                    this.updateObj("showCate2", "enable", showCate2, e)
                  }
                />
                {/* show last date */}
                <ToggleControl
                  label="Last Modified Date"
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
          {posts &&
            posts.length > 0 &&
            "getMedia_" in posts[0] &&
            totalPost > posts.length && (
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
                    this.updateObj(
                      "meta_style",
                      "npBgColor",
                      meta_style,
                      color
                    );
                  }}
                />
              </PanelBody>
            )}
        </InspectorControls>
        {posts && posts.length > 0 && "getMedia_" in posts[0] ? (
          <div
            className="zita-two-post-wrapper"
            style={{ backgroundColor: meta_style_.blockBgColor }}
          >
            {(categorynav[0].enable || title_.enable) &&
              this.navCategory(categorynav[0], title_)}
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
            {posts &&
              posts.length > 0 &&
              "getMedia_" in posts[0] &&
              totalPost > posts.length && (
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
          <div>
            {!posts ? (
              "No Post Found"
            ) : (
              <div className="post-loader">
                <div className="active linear-bubble zita-block-loader">
                  Post Loading...
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}
// export default Edit;
export default withSelect((select, props) => {
  const { attributes } = props;
  let { numberOfPosts, postCategories, thumbnail } = attributes;
  const query = { per_page: numberOfPosts };
  const query2 = { per_page: -1 };
  if (postCategories && postCategories.length) {
    let cateCh = postCategories.join(",");
    query["categories"] = cateCh;
    query2["categories"] = cateCh;
  }
  const { getMedia, getEntityRecords, getAuthors } = select("core");
  let getTotalPost = getEntityRecords("postType", "post", query2);
  /////////////////////////////////////////////////////////////////////////////
  let getAllPost = [];
  if (thumbnail[0].enable) {
    getAllPost =
      getTotalPost && getTotalPost.length ? returnPostFn(numberOfPosts) : false;
    function returnPostFn(numberOfPosts, check = false) {
      let numberOfposts_ = check ? check : numberOfPosts;
      let new_query = {
        per_page: numberOfposts_,
      };
      if (postCategories && postCategories.length) {
        new_query["categories"] = postCategories.join(",");
      }
      let checkPost = select("core").getEntityRecords(
        "postType",
        "post",
        new_query
      );
      if (checkPost && checkPost.length) {
        let newPostArray = checkPost.filter((chv) => chv.featured_media > 0);
        if (
          newPostArray.length == numberOfPosts ||
          getTotalPost.length == numberOfposts_
        ) {
          return newPostArray;
        } else {
          if (newPostArray.length < numberOfPosts && getTotalPost.length) {
            return returnPostFn(numberOfPosts, numberOfposts_ + 1);
          }
        }
      }
    }
  } else {
    getAllPost = getEntityRecords("postType", "post", query);
  }
  ///////////////////////////////////////////////////////////////////////////////
  // let getAllPost = getEntityRecords("postType", "post", query);
  let cate_ = getEntityRecords("taxonomy", "category", {
    per_page: -1,
    hide_empty: true,
  });
  let tags_ = getEntityRecords("taxonomy", "post_tag", { per_page: -1 });
  let arrayCatePost = { posts: true, category: cate_, tags: tags_ };
  if (getAllPost && getAllPost.length) {
    let returnArray = [];
    getAllPost.map((v, index_) => {
      if (v.featured_media) {
        getAllPost[index_]["getMedia_"] = getMedia(v.featured_media);
      } else {
        getAllPost[index_]["getMedia_"] = false;
      }
      returnArray.push(getAllPost[index_]);
    });
    arrayCatePost["posts"] = returnArray;
    arrayCatePost["totalPost"] = getTotalPost.length;
  } else if (getAllPost instanceof Array && getAllPost.length == 0) {
    arrayCatePost["posts"] = false;
  }
  // autohrs
  let authors = getAuthors();
  if (authors && authors.length) {
    let authors_ = [];
    authors.map((v) => {
      authors_.push({ id: v.id, name: v.name });
    });
    arrayCatePost["authors"] = authors_;
  }
  return arrayCatePost;
})(Edit);
