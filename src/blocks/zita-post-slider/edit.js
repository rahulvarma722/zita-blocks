import {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload,
} from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ColorPicker,
  ToggleControl,
  SelectControl,
} from "@wordpress/components";
import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";

let bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0, trigger: "linear" };
  }
  dateFormate = (date, style_) => {
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
    return <RichText.Content style={style_} tag="span" value={dateArr} />;
  };
  excerptWords = (words, words_) => {
    words_ = decodeEntities(words_);
    words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
    words_ = words_.split(" ");
    words_ = words_.slice(0, words);
    return words_.join(" ");
  };
  showCateFn = (categories) => {
    let returR = [];
    if ("category" in this.props && this.props.category && categories.length) {
      let countCate = this.props.attributes.showCate[0].count;
      let postCate_ = this.props.attributes.postCategories;
      if (postCate_.length) {
        postCate_.map((ev) => {
          let MkInt = parseInt(ev);
          if (categories.includes(MkInt)) categories.unshift(MkInt);
        });
        categories = [...new Set(categories)];
      }
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
      let getCateStyle = this.props.attributes.showCate;
      let putCateStyle = { fontSize: getCateStyle[0].fontSize + "px" };
      if (getCateStyle[0].customColor) {
        putCateStyle["color"] = getCateStyle[0].color;
        putCateStyle["backgroundColor"] = getCateStyle[0].backgroundColor;
      }
      return returR.map((returnH) => (
        <span style={putCateStyle && putCateStyle}>{returnH}</span>
      ));
    }
  };

  showTagsFn = (tags_) => {
    let returR = [];
    if ("tags" in this.props && this.props.tags && tags_.length) {
      let countTag = this.props.attributes.showTag[0].count;
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
      let getTagStyle = this.props.attributes.showTag;
      let putTagStyle = { color: getTagStyle[0].color };
      putTagStyle["color"] = getTagStyle[0].color;
      putTagStyle["backgroundColor"] = getTagStyle[0].backgroundColor;
      return returR.map((returnH) => (
        <span style={putTagStyle && putTagStyle}>{returnH}</span>
      ));
    }
  };
  // autor
  authorFn = (author) => {
    // console.log("wordkinggg");
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
  updateObj = (parent_key, child_key, initialValue, value_) => {
    let newNewValue = [...initialValue];
    newNewValue[0][child_key] = value_;
    let setAttr_ = {};
    setAttr_[parent_key] = newNewValue;
    this.props.setAttributes(setAttr_);
  };
  updateGlobalSlide = (value, for_, type) => {
    let sliderSetting = this.props.attributes.sliderSetting;
    let newSetting = [...sliderSetting];
    if (type) {
      newSetting[0][for_][type] = value;
    } else {
      newSetting[0][for_] = value;
    }
    this.props.setAttributes({ sliderSetting: newSetting });
  };
  render() {
    let { attributes, setAttributes, posts, category } = this.props;
    let { slideIndex } = this.state;
    // console.log("zita slider this.props", this.props);
    let {
      heading,
      author,
      numberOfPosts,
      date,
      showTag,
      showCate,
      excerpt,
      postCategories,
      meta_style,
      title,
      sliderSetting,
    } = attributes;
    let heading_ = heading[0];
    let excerpt_ = excerpt[0];
    let date_ = date[0];
    let author_ = author[0];
    let meta_style_ = meta_style[0];
    let title_ = title[0];
    let showTag_ = showTag[0];
    let showCate_ = showCate[0];
    let cateGory = [{ value: "all", label: "All" }];
    if (category && category.length) {
      category.map((catt) => {
        cateGory.push({
          value: catt.id,
          label: catt.name,
        });
      });
    }
    sliderSetting = sliderSetting[0];
    let SlideulStyle = null;
    if (sliderSetting.dimension.height) {
      SlideulStyle = { minHeight: sliderSetting.dimension.custom_height };
    }
    let leftRightStyle = {
      color: sliderSetting.leftRightTrigger.color,
      backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
      fontSize: sliderSetting.leftRightTrigger.fontSize,
    };
    let triggerActive = this.state.trigger;
    let trigStyle = {
      height: sliderSetting.linearTrigger.fontSize + "px",
      width: sliderSetting.linearTrigger.fontSize + "px",
    };

    return [
      <InspectorControls>
        <PanelBody title="Block Title" initialOpen={false}>
          <ToggleControl
            label={
              title_.enable
                ? __("Hide", "zita-blocks")
                : __("Show", "zita-blocks")
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
          title={__("Post Slider Setting", "zita-blocks")}
          initialOpen={false}
        >
          <p>
            <strong>{__("Number Of Post Display", "zita-blocks")}</strong>
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
            <strong>{__("Image Overlay Color", "zita-blocks")}</strong>
          </p>
          <ColorPicker
            color={sliderSetting.overlayColor}
            onChangeComplete={(colorBg) => {
              let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
              this.updateGlobalSlide(color, "overlayColor");
            }}
          />
          <p>
            <strong>{__("Content Alignment", "zita-blocks")}</strong>
          </p>
          <div className="zita-alignment">
            <div>
              <span
                onClick={() => {
                  this.updateGlobalSlide("left", "contentAlign");
                }}
                className={`dashicons dashicons-editor-alignleft ${
                  sliderSetting.contentAlign == "left" && "active"
                }`}
              ></span>
            </div>
            <div>
              <span
                onClick={() => {
                  this.updateGlobalSlide("center", "contentAlign");
                }}
                className={`dashicons dashicons-editor-aligncenter ${
                  sliderSetting.contentAlign == "center" && "active"
                }`}
              ></span>
            </div>
            <div>
              <span
                onClick={() => {
                  this.updateGlobalSlide("right", "contentAlign");
                }}
                className={`dashicons dashicons-editor-alignright ${
                  sliderSetting.contentAlign == "right" && "active"
                }`}
              ></span>
            </div>
          </div>
          <p>
            <strong>
              {__("Slider Dimension ", "zita-blocks")}
              <small className="dull_grey">
                ({__("custom Height", "zita-blocks")}/
                {__("Width", "zita-blocks")})
              </small>
            </strong>
          </p>
          <ToggleControl
            label={
              sliderSetting.dimension.width ? "Custom Width" : "Auto Width"
            }
            checked={sliderSetting.dimension.width}
            onChange={(e) => {
              this.updateGlobalSlide(e, "dimension", "width");
            }}
          />
          {sliderSetting.dimension.width && (
            <RangeControl
              value={sliderSetting.dimension.custom_width}
              min={200}
              max={1400}
              onChange={(e) =>
                this.updateGlobalSlide(e, "dimension", "custom_width")
              }
            />
          )}
          <ToggleControl
            label={
              sliderSetting.dimension.height ? "Custom Height" : "Auto Height"
            }
            checked={sliderSetting.dimension.height}
            onChange={(e) => {
              this.updateGlobalSlide(e, "dimension", "height");
            }}
          />
          {sliderSetting.dimension.height && (
            <RangeControl
              value={sliderSetting.dimension.custom_height}
              min={360}
              max={1000}
              onChange={(e) =>
                this.updateGlobalSlide(e, "dimension", "custom_height")
              }
            />
          )}
          <p className="block-inside">Slider Effect</p>
          <div class="zita-switcher-button-section">
            <span
              onClick={() =>
                this.updateGlobalSlide("slideEffect", "sliderEffect")
              }
              className={
                sliderSetting.sliderEffect == "slideEffect" ? "selected" : ""
              }
            >
              Slide
            </span>
            <span
              onClick={() =>
                this.updateGlobalSlide("fadeEffect", "sliderEffect")
              }
              className={
                sliderSetting.sliderEffect == "fadeEffect" ? "selected" : ""
              }
            >
              Fade
            </span>
          </div>
          <p className="block-inside">Trigger</p>
          <div class="zita-switcher-button-section">
            <span
              onClick={() => this.setState({ trigger: "linear" })}
              className={triggerActive == "linear" ? "selected" : ""}
            >
              Linear
            </span>
            <span
              onClick={() => this.setState({ trigger: "left" })}
              className={triggerActive == "left" ? "selected" : ""}
            >
              Left Right
            </span>
            <span
              onClick={() => this.setState({ trigger: "auto" })}
              className={triggerActive == "auto" ? "selected" : ""}
            >
              Auto
            </span>
          </div>
          {triggerActive == "linear" && (
            <>
              <ToggleControl
                label={
                  sliderSetting.linearTrigger.enable ? "Enable" : "Disable"
                }
                checked={sliderSetting.linearTrigger.enable}
                onChange={(e) =>
                  this.updateGlobalSlide(e, "linearTrigger", "enable")
                }
              />
              <p>
                <strong>Position</strong>
              </p>
              <div class="zita-switcher-button-section">
                <span
                  onClick={() => {
                    this.updateGlobalSlide("in", "linearTrigger", "place");
                  }}
                  className={
                    sliderSetting.linearTrigger.place == "in" ? "selected" : ""
                  }
                >
                  In
                </span>
                <span
                  onClick={() => {
                    this.updateGlobalSlide("out", "linearTrigger", "place");
                  }}
                  className={
                    sliderSetting.linearTrigger.place == "out" ? "selected" : ""
                  }
                >
                  Out
                </span>
              </div>
              <p>
                <strong>Trigger Type</strong>
              </p>
              {sliderSetting.linearTrigger.enable && (
                <>
                  {/* dk */}
                  <div class="zita-switcher-button-section">
                    <span
                      onClick={() => {
                        this.updateGlobalSlide(
                          "bullet",
                          "linearTrigger",
                          "trigger"
                        );
                      }}
                      className={
                        sliderSetting.linearTrigger.trigger == "bullet"
                          ? "selected"
                          : ""
                      }
                    >
                      Bullets
                    </span>
                    <span
                      onClick={() => {
                        this.updateGlobalSlide(
                          "thumbnail",
                          "linearTrigger",
                          "trigger"
                        );
                      }}
                      className={
                        sliderSetting.linearTrigger.trigger == "thumbnail"
                          ? "selected"
                          : ""
                      }
                    >
                      Thumbnail
                    </span>
                  </div>
                  {/* dk */}
                  {sliderSetting.linearTrigger.trigger == "bullet" ? (
                    <>
                      <RangeControl
                        label="Size"
                        value={sliderSetting.linearTrigger.fontSize}
                        min={0}
                        max={70}
                        onChange={(e) =>
                          this.updateGlobalSlide(e, "linearTrigger", "fontSize")
                        }
                      />
                      <p>
                        <strong>Color</strong>
                      </p>
                      <ColorPicker
                        color={sliderSetting.linearTrigger.color}
                        onChangeComplete={(colorBg) => {
                          let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                          this.updateGlobalSlide(
                            color,
                            "linearTrigger",
                            "color"
                          );
                        }}
                      />
                      <p>
                        <strong>Active Color</strong>
                      </p>
                      <ColorPicker
                        color={sliderSetting.linearTrigger.activeColor}
                        onChangeComplete={(colorBg) => {
                          let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                          this.updateGlobalSlide(
                            color,
                            "linearTrigger",
                            "activeColor"
                          );
                        }}
                      />
                    </>
                  ) : (
                    <h1>thumbnail design</h1>
                  )}
                </>
              )}
            </>
          )}
          {triggerActive == "left" && (
            <>
              <ToggleControl
                label={
                  sliderSetting.leftRightTrigger.enable ? "Enable" : "Disable"
                }
                checked={sliderSetting.leftRightTrigger.enable}
                onChange={(e) =>
                  this.updateGlobalSlide(e, "leftRightTrigger", "enable")
                }
              />
              {sliderSetting.leftRightTrigger.enable && (
                <>
                  <RangeControl
                    label="Font Size"
                    value={sliderSetting.leftRightTrigger.fontSize}
                    min={0}
                    max={70}
                    onChange={(e) =>
                      this.updateGlobalSlide(e, "leftRightTrigger", "fontSize")
                    }
                  />
                  <p>
                    <strong>Color</strong>
                  </p>
                  <ColorPalette
                    value={sliderSetting.leftRightTrigger.color}
                    onChange={(color) =>
                      this.updateGlobalSlide(color, "leftRightTrigger", "color")
                    }
                  />
                  <p>
                    <strong>Background Color</strong>
                  </p>
                  <ColorPicker
                    color={sliderSetting.leftRightTrigger.backgroundColor}
                    onChangeComplete={(colorBg) => {
                      let color = `rgba(${colorBg.rgb.r},${colorBg.rgb.g},${colorBg.rgb.b},${colorBg.rgb.a})`;
                      this.updateGlobalSlide(
                        color,
                        "leftRightTrigger",
                        "backgroundColor"
                      );
                    }}
                  />
                </>
              )}
            </>
          )}
          {triggerActive == "auto" && (
            <>
              <ToggleControl
                label={sliderSetting.autoTrigger.enable ? "Enable" : "Disable"}
                checked={sliderSetting.autoTrigger.enable}
                onChange={(e) =>
                  this.updateGlobalSlide(e, "autoTrigger", "enable")
                }
              />
              {sliderSetting.autoTrigger.enable && (
                <RangeControl
                  label="Slide Delay"
                  value={sliderSetting.autoTrigger.delay}
                  min={0}
                  max={12}
                  onChange={(e) =>
                    this.updateGlobalSlide(e, "autoTrigger", "delay")
                  }
                />
              )}
            </>
          )}
        </PanelBody>
        <PanelBody title="Post Title" initialOpen={false}>
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
            onChange={(e) => this.updateObj("heading", "fontSize", heading, e)}
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
        </PanelBody>
        <PanelBody title="Excerpt" initialOpen={false}>
          <ToggleControl
            label={excerpt_.enable ? "Show" : "Hide"}
            checked={excerpt_.enable}
            onChange={(e) => this.updateObj("excerpt", "enable", excerpt, e)}
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
                onChange={(e) => this.updateObj("excerpt", "words", excerpt, e)}
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
        </PanelBody>
        <PanelBody title={"Post Meta"} initialOpen={false}>
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
          {/* show author */}
          <ToggleControl
            label="Author"
            checked={author_.enable}
            onChange={(e) => this.updateObj("author", "enable", author, e)}
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
            onChange={(e) => this.updateObj("showCate", "enable", showCate, e)}
          />
          {/* show last date */}
          <ToggleControl
            label="Last Modified Date"
            checked={date_.last_modified}
            onChange={(e) => this.updateObj("date", "last_modified", date, e)}
          />
          <ToggleControl
            label="Tag"
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
                <strong>{__("Number Category Per Post", "zita-blocks")}</strong>
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
                  this.updateObj("showTag", "backgroundColor", showTag, color);
                }}
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>,
      <div className="zita-block-slide-wrapper">
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
              tagName="h1"
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
        <div className="zita-slider-bullet">
          <ul className="zita-slider-ul-bullet">
            {posts &&
              posts.length > 0 &&
              "getMedia_" in posts[0] &&
              posts.map((val, index_) => {
                return (
                  "getMedia_" in val &&
                  val.getMedia_ &&
                  "guid" in val.getMedia_ && (
                    <li
                      key={index_}
                      className={slideIndex == index_ ? "selected_" : null}
                    >
                      <span
                        onClick={(e) => {
                          this.setState({ slideIndex: index_ });
                        }}
                      ></span>
                    </li>
                  )
                );
              })}
          </ul>
        </div>
        <div className="zita-slider-container">
          {/* next prev btn */}
          {sliderSetting.leftRightTrigger.enable && (
            <>
              <div className="zita-slider-bullet-next-prev next">
                <span style={leftRightStyle}>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </div>
              <div className="zita-slider-bullet-next-prev prev">
                <span style={leftRightStyle}>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </div>
            </>
          )}
          {/* next prev btn */}
          <ul className="zita-slider-ul-slides" style={SlideulStyle}>
            {posts && posts.length > 0 && "getMedia_" in posts[0] ? (
              posts.map((post, slideIndexCu) => {
                let postAuthor =
                  author_.enable && "name" in this.authorFn(post.author)
                    ? this.authorFn(post.author).name
                    : false;
                return (
                  "getMedia_" in post &&
                  post.getMedia_ &&
                  "guid" in post.getMedia_ && (
                    <li
                      key={post.id}
                      className={slideIndex == slideIndexCu && "selected_"}
                    >
                      <div class="zita-slider-wrapper">
                        <div class="zita-slider-container">
                          <div class="zita-slider-content-wrapper">
                            <div
                              class="zita-slider-image-container"
                              style={{
                                backgroundImage:
                                  "url(" + post.getMedia_.guid.rendered + ")",
                              }}
                            ></div>
                            <div
                              class="zita-slider-text"
                              style={{
                                backgroundColor: sliderSetting.overlayColor,
                              }}
                            >
                              <div className="slider-post-content">
                                <div
                                  className={`post-wrapper content-align-${sliderSetting.contentAlign}`}
                                >
                                  <div className="post-content">
                                    <RichText.Content
                                      className="post-heading"
                                      tagName={heading_.tag}
                                      value={post.title.rendered}
                                      style={{
                                        fontSize: heading_.fontSize,
                                        color: heading_.color,
                                      }}
                                    />
                                    {showCate_.enable && (
                                      <p className="post-category">
                                        {this.showCateFn(post.categories)}
                                      </p>
                                    )}
                                    <div className="post-meta-all">
                                      {postAuthor && (
                                        <p
                                          style={{
                                            color: meta_style_.color,
                                            fontSize:
                                              meta_style_.fontSize + "px",
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
                                                fontSize:
                                                  meta_style_.fontSize + "px",
                                              }}
                                              className="slash"
                                            >
                                              /
                                            </span>
                                          )}
                                          <p
                                            style={{
                                              color: meta_style_.color,
                                              fontSize:
                                                meta_style_.fontSize + "px",
                                            }}
                                            className="post-date"
                                          >
                                            {this.dateFormate(post.date, {
                                              color: meta_style_.color,
                                              fontSize:
                                                meta_style_.fontSize + "px",
                                            })}
                                          </p>
                                        </>
                                      )}
                                      {date_.last_modified && (
                                        <>
                                          {(postAuthor || date_.enable) && (
                                            <span
                                              style={{
                                                color: meta_style_.color,
                                                fontSize:
                                                  meta_style_.fontSize + "px",
                                              }}
                                              className="slash"
                                            >
                                              /
                                            </span>
                                          )}
                                          <p
                                            style={{
                                              color: meta_style_.color,
                                              fontSize:
                                                meta_style_.fontSize + "px",
                                            }}
                                            className="post-date-last-modified"
                                          >
                                            <span>Modified: </span>
                                            {this.dateFormate(post.modified, {
                                              color: meta_style_.color,
                                              fontSize:
                                                meta_style_.fontSize + "px",
                                            })}
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
                                        {this.excerptWords(
                                          excerpt_.words,
                                          post.excerpt.rendered
                                        )}
                                      </p>
                                    )}
                                    {showTag_.enable && (
                                      <p
                                        style={{ color: meta_style_.color }}
                                        className="post-tags"
                                      >
                                        {this.showTagsFn(post.tags)}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                );
              })
            ) : !posts ? (
              <h1>No Post Found </h1>
            ) : (
              <h1>Loading </h1>
            )}
          </ul>
          {/* slider trigger */}
          {sliderSetting.linearTrigger.enable &&
            posts &&
            posts.length > 0 &&
            "getMedia_" in posts[0] && (
              <ul
                className={`zita-slider-bullet-trigger thumbnail-image trigger_${sliderSetting.linearTrigger.place}`}
              >
                {posts.map((post, index_) => {
                  trigStyle =
                    index_ != slideIndex
                      ? {
                          ...trigStyle,
                          ...{
                            backgroundColor: sliderSetting.linearTrigger.color,
                          },
                        }
                      : {
                          ...trigStyle,
                          ...{
                            backgroundColor:
                              sliderSetting.linearTrigger.activeColor,
                          },
                        };
                  return (
                    "getMedia_" in post &&
                    post.getMedia_ &&
                    "guid" in post.getMedia_ &&
                    (sliderSetting.linearTrigger.trigger == "thumbnail" ? (
                      <li>
                        <div>
                          <img src={post.getMedia_.guid.rendered} />
                        </div>
                      </li>
                    ) : (
                      <li
                        className={`${index_ == slideIndex ? "selected_" : ""}`}
                      >
                        <span style={trigStyle}></span>
                      </li>
                    ))
                  );
                })}
              </ul>
            )}
        </div>
      </div>,
    ];
  }
}
export default withSelect((select, props) => {
  const { attributes } = props;
  let { numberOfPosts, postCategories } = attributes;
  const query = { per_page: numberOfPosts };
  if (postCategories && postCategories.length) {
    query["categories"] = postCategories.join(",");
  }
  const { getMedia, getEntityRecords, getAuthors } = select("core");
  let getAllPost = getEntityRecords("postType", "post", query);
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
