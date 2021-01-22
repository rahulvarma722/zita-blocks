import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
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

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metaChoose: "primary",
      excerpt: "primary",
      heading: "primary",
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
    return words_.join(" ");
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
  render() {
    // ++++++++++++++===============

    const { posts, attributes, setAttributes, category } = this.props;
    // console.log("this.props", this.props);
    // if number of post sum
    // if (numberOfPosts == 3 || numberOfPosts == 5) {
    //   this.setState({
    //     metaChoose: "primary",
    //     excerpt: "primary",
    //     heading: "primary",
    //   });
    // }
    // if number of post sum

    let {
      heading,
      author,
      layout,
      date,
      showTag,
      showCate,
      excerpt,
      postCategories,
      meta_style,
      meta_style2,
      title,
      // secondary
      heading2,
      excerpt2,
      showCate2,
      showTag2,
      date2,
      author2,
    } = attributes;
    let heading_ = heading[0];
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
    let showTag2_ = showTag2[0];
    let date2_ = date2[0];
    let author2_ = author2[0];
    // category init
    let layout_ = layout[0];
    let cateGory = [{ value: "all", label: "All" }];
    if (category && category.length) {
      category.map((catt) => {
        cateGory.push({
          value: catt.id,
          label: catt.name,
        });
      });
    }
    return (
      <>
        <InspectorControls>
          <PanelBody title="Block Title" initialOpen={false}>
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
                  <p>Font Weight</p>
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
          <PanelBody
            title={__("Post Layout", "zita-blocks")}
            initialOpen={false}
          >
            <div className="flex-section">
              <p>Choose Layout</p>
              <select
                value={layout_.type}
                onChange={(e) => {
                  let value_ = parseInt(e.target.value);
                  this.updateObj("layout", "type", layout, value_);
                }}
              >
                <option value="1">Layout One</option>
                <option value="2">Layout Two</option>
                <option value="3">Layout Three</option>
              </select>
            </div>
            {layout_.type == 3 && (
              <>
                <p>
                  <strong>{__("Content Placed", "zita-blocks")}</strong>
                </p>
                <div class="zita-switcher-button-section">
                  <span
                    onClick={() =>
                      this.updateObj("layout", "contentPlace", layout, "inner")
                    }
                    className={
                      layout_.contentPlace == "inner" ? "selected" : ""
                    }
                  >
                    {__("Inner", "zita-blocks")}
                  </span>
                  <span
                    onClick={() =>
                      this.updateObj("layout", "contentPlace", layout, "outer")
                    }
                    className={
                      layout_.contentPlace == "outer" ? "selected" : ""
                    }
                  >
                    {__("Outer", "zita-blocks")}
                  </span>
                </div>
              </>
            )}
            {(layout_.type == 2 ||
              layout_.type == 1 ||
              (layout_.type == 3 && layout_.contentPlace == "inner")) && (
              <>
                <p>
                  <strong>{__("Content Alignment", "zita-blocks")}</strong>
                </p>
                <div class="zita-switcher-button-section">
                  <span
                    onClick={() =>
                      this.updateObj("layout", "contentAlign", layout, "center")
                    }
                    className={
                      layout_.contentAlign == "center" ? "selected" : ""
                    }
                  >
                    {__("Center", "zita-blocks")}
                  </span>
                  <span
                    onClick={() =>
                      this.updateObj("layout", "contentAlign", layout, "bottom")
                    }
                    className={
                      layout_.contentAlign == "bottom" ? "selected" : ""
                    }
                  >
                    {__("Bottom", "zita-blocks")}
                  </span>
                </div>
              </>
            )}
            <p>
              <strong>{__("Image Overlay Color", "zita-blocks")}</strong>
            </p>
            <ColorPicker
              color={layout_.overlayColor}
              onChangeComplete={(colorBg) => {
                let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                this.updateObj("layout", "overlayColor", layout, color);
              }}
            />
          </PanelBody>
          <PanelBody
            title={__("Post Title", "zita-blocks")}
            initialOpen={false}
          >
            {layout_.type !== 3 && (
              <div class="zita-switcher-button-section">
                <span
                  onClick={() => this.setState({ heading: "primary" })}
                  className={this.state.heading == "primary" ? "selected" : ""}
                >
                  {__("Primary", "zita-blocks")}
                </span>
                <span
                  onClick={() => this.setState({ heading: "secondary" })}
                  className={
                    this.state.heading == "secondary" ? "selected" : ""
                  }
                >
                  {__("Secondary", "zita-blocks")}
                </span>
              </div>
            )}
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
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="p">P</option>
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
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="p">P</option>
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
            {layout_.type !== 3 && (
              <div className="zita-switcher-button-section">
                <span
                  onClick={() => this.setState({ excerpt: "primary" })}
                  className={this.state.excerpt == "primary" ? "selected" : ""}
                >
                  {__("Primary", "zita-blocks")}
                </span>
                <span
                  onClick={() => this.setState({ excerpt: "secondary" })}
                  className={
                    this.state.excerpt == "secondary" ? "selected" : ""
                  }
                >
                  {__("Secondary", "zita-blocks")}
                </span>
              </div>
            )}
            {this.state.excerpt == "primary" ? (
              <>
                <ToggleControl
                  label={
                    excerpt_.enable
                      ? __("Hide", "zita-blocks")
                      : __("Show", "zita-blocks")
                  }
                  checked={excerpt_.enable}
                  onChange={(e) =>
                    this.updateObj("excerpt", "enable", excerpt, e)
                  }
                />
                {excerpt_.enable && (
                  <>
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
                      ? __("Hide", "zita-blocks")
                      : __("Show", "zita-blocks")
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
          <PanelBody title={__("Post Meta", "zita-blocks")} initialOpen={false}>
            {/* category */}
            <p>
              <strong>{__("Choose Category", "zita-blocks")}</strong>
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
            {layout_.type !== 3 && (
              <div class="zita-switcher-button-section">
                <span
                  onClick={() => this.setState({ metaChoose: "primary" })}
                  className={
                    this.state.metaChoose == "primary" ? "selected" : ""
                  }
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
            )}
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
                <ToggleControl
                  label={__("Tag", "zita-blocks")}
                  checked={showTag2_.enable}
                  onChange={(e) =>
                    this.updateObj("showTag2", "enable", showTag2, e)
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
                {showTag2_.enable && (
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
                      value={showTag2_.count}
                      min={1}
                      max={10}
                      onChange={(e) => {
                        this.updateObj("showTag2", "count", showTag2, e);
                      }}
                    />
                    <p>
                      <strong>{__("Font Size", "zita-blocks")}</strong>
                    </p>
                    <RangeControl
                      value={showTag2_.fontSize}
                      min={1}
                      max={30}
                      onChange={(e) => {
                        this.updateObj("showTag2", "fontSize", showTag2, e);
                      }}
                    />
                    <p>
                      <strong>{__("Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPalette
                      value={showTag2_.color}
                      onChange={(color) =>
                        this.updateObj("showTag2", "color", showTag2, color)
                      }
                    />
                    <p>
                      <strong>{__("Background Color", "zita-blocks")}</strong>
                    </p>
                    <ColorPicker
                      color={showTag2_.backgroundColor}
                      onChangeComplete={(colorBg) => {
                        let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                        this.updateObj(
                          "showTag",
                          "backgroundColor",
                          showTag2,
                          color
                        );
                      }}
                    />
                  </>
                )}
              </>
            )}
            {/* secondary  */}
            <p>
              <strong>{__("Color", "zita-blocks")}</strong>
            </p>
            <ColorPalette
              value={"color" in meta_style_ ? meta_style_.color : ""}
              onChange={(color) =>
                this.updateObj("meta_style", "color", meta_style, color)
              }
            />
          </PanelBody>
          <PanelBody title="Next / Previous Button" initialOpen={false}>
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
              </>
            )}
          </PanelBody>
        </InspectorControls>
        {posts && posts.length > 0 && "getMedia_" in posts[0] ? (
          <div className="zita-section-post zita-post-four-post">
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
              className={`column-count column-count-2 post-four-layout-${layout_.type} content-align-${layout_.contentAlign} content-placed-${layout_.contentPlace}`}
            >
              {layout_.type == 3 ? (
                posts.map((post) => {
                  return (
                    "getMedia_" in post &&
                    post.getMedia_ &&
                    "guid" in post.getMedia_ &&
                    this.returnHtml(
                      post,
                      heading_,
                      author_,
                      date_,
                      meta_style_,
                      showCate_,
                      excerpt_,
                      showTag_,
                      layout_
                    )
                  );
                })
              ) : layout_.type == 2 ? (
                <>
                  <div className="column-one">
                    {posts.length &&
                      "getMedia_" in posts[0] &&
                      posts[0].getMedia_ &&
                      "guid" in posts[0].getMedia_ &&
                      this.returnHtml(
                        posts[0],
                        heading2_,
                        author2_,
                        date2_,
                        meta_style2_,
                        showCate2_,
                        excerpt2_,
                        showTag2_,
                        layout_
                      )}
                    <div>
                      {posts.length >= 2 &&
                        "getMedia_" in posts[1] &&
                        posts[1].getMedia_ &&
                        "guid" in posts[1].getMedia_ &&
                        posts.map((post, in_) => {
                          console.log("in_->", in_);
                          return (
                            in_ != 0 &&
                            in_ <= 2 &&
                            "getMedia_" in post &&
                            post.getMedia_ &&
                            "guid" in post.getMedia_ &&
                            this.returnHtml(
                              post,
                              heading2_,
                              author2_,
                              date2_,
                              meta_style2_,
                              showCate2_,
                              excerpt2_,
                              showTag2_,
                              layout_
                            )
                          );
                        })}
                    </div>
                  </div>
                  <div className="column-two">
                    {posts.length > 2 &&
                      "getMedia_" in posts[3] &&
                      posts[3].getMedia_ &&
                      "guid" in posts[3].getMedia_ &&
                      this.returnHtml(
                        posts[3],
                        heading_,
                        author_,
                        date_,
                        meta_style_,
                        showCate_,
                        excerpt_,
                        showTag_,
                        layout_
                      )}
                  </div>
                </>
              ) : (
                <>
                  <div className="column-one">
                    {"getMedia_" in posts[0] &&
                      posts[0].getMedia_ &&
                      "guid" in posts[0].getMedia_ &&
                      this.returnHtml(
                        posts[0],
                        heading_,
                        author_,
                        date_,
                        meta_style_,
                        showCate_,
                        excerpt_,
                        showTag_,
                        layout_
                      )}
                  </div>
                  <div className="column-two">
                    {posts.length >= 1 &&
                      "getMedia_" in posts[1] &&
                      posts[1].getMedia_ &&
                      "guid" in posts[1].getMedia_ &&
                      this.returnHtml(
                        posts[1],
                        heading2_,
                        author2_,
                        date2_,
                        meta_style2_,
                        showCate2_,
                        excerpt2_,
                        showTag2_,
                        layout_
                      )}
                    <div>
                      {posts.length >= 2 &&
                        "getMedia_" in posts[1] &&
                        posts[1].getMedia_ &&
                        "guid" in posts[1].getMedia_ &&
                        posts.map((post, in_) => {
                          return (
                            in_ >= 2 &&
                            "getMedia_" in post &&
                            post.getMedia_ &&
                            "guid" in post.getMedia_ &&
                            this.returnHtml(
                              post,
                              heading2_,
                              author2_,
                              date2_,
                              meta_style2_,
                              showCate2_,
                              excerpt2_,
                              showTag2_,
                              layout_
                            )
                          );
                        })}
                    </div>
                  </div>
                </>
              )}
            </div>
            {meta_style_.npEnable && (
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
              __("No Post Found", "zita-blocks")
            ) : (
              <div className="post-loader">
                <div className="active linear-bubble zita-block-loader">
                  {__("Post Loading...", "zita-blocks")}
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
    // ++++++++++++++===============
  }
  returnHtml = (
    post,
    heading_,
    author_,
    date_,
    meta_style_,
    showCate_,
    excerpt_,
    showTag_,
    layout_
  ) => {
    let postAuthor =
      author_ && author_.enable && "name" in this.authorFn(post.author)
        ? this.authorFn(post.author).name
        : false;
    return (
      <article className="block-post-article" key={post.id}>
        <div className="post-wrapper">
          <div className="featured-image">
            <img src={post.getMedia_.guid.rendered} />
          </div>
          <div
            className="post-content"
            style={{ backgroundColor: layout_.overlayColor }}
          >
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
                <span className="read-more">
                  {__("...Read More", "zita-blocks")}
                </span>
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
}
// export default Edit;
export default withSelect((select, props) => {
  const { attributes } = props;
  let { numberOfPosts, postCategories } = attributes;
  const query = { per_page: numberOfPosts };
  const query2 = { per_page: -1 };
  if (postCategories && postCategories.length) {
    let cateCh = postCategories.join(",");
    query["categories"] = cateCh;
    query2["categories"] = cateCh;
  }
  const { getMedia, getEntityRecords, getAuthors } = select("core");
  ////////////////////////////////////////////////////////////////////////////////////////////
  let getTotalPost = getEntityRecords("postType", "post", query2);
  let getAllPost =
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
    if (checkPost && checkPost instanceof Array && checkPost.length > 0) {
      let newPostArray = checkPost.filter((chv) => chv.featured_media > 0);
      if (
        newPostArray.length == numberOfPosts ||
        getTotalPost.length <= numberOfposts_
      ) {
        return newPostArray;
      } else {
        if (
          newPostArray.length < numberOfPosts &&
          numberOfposts_ <= getTotalPost.length
        ) {
          return returnPostFn(numberOfPosts, numberOfposts_ + 1);
        }
      }
    } else {
      return false;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  // let getAllPost = getEntityRecords("postType", "post", query);
  let cate_ = getEntityRecords("taxonomy", "category", { per_page: -1 });
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
