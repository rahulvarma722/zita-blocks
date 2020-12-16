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

let bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0, trigger: "linear" };
  }
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
  showCateFn = (categories) => {
    let returR = [];
    if ("category" in this.props && this.props.category && categories.length) {
      categories.forEach((cate) => {
        this.props.category.forEach((searchCate) => {
          if (cate == searchCate.id) {
            returR.push(searchCate.name);
            return;
          }
        });
      });
    }
    if (returR.length) {
      return returR.map((returnH) => <span>{returnH}</span>);
    }
  };
  showTagsFn = (tags_) => {
    let returR = [];
    if ("tags" in this.props && this.props.tags && tags_.length) {
      tags_.forEach((tag) => {
        this.props.tags.forEach((searchtag) => {
          if (tag == searchtag.id) {
            returR.push(searchtag.name);
            return;
          }
        });
      });
    }
    if (returR.length) {
      return returR.map((returnH) => <span>{returnH}</span>);
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
        <PanelBody title={"Slider Setting"} initialOpen={false}>
          <p className="block-inside">Slider Dimension</p>
          <p>
            <strong>Width</strong>
          </p>
          <ToggleControl
            label={
              sliderSetting.dimension.width ? "Full Width" : "Custom Width"
            }
            checked={sliderSetting.dimension.width}
            onChange={(e) => {
              this.updateGlobalSlide(e, "dimension", "width");
            }}
          />
          {sliderSetting.dimension.width && (
            <RangeControl
              label="Width"
              value={sliderSetting.dimension.custom_width}
              min={200}
              max={1400}
              onChange={(e) =>
                this.updateGlobalSlide(e, "dimension", "custom_width")
              }
            />
          )}
          <p>
            <strong>Height</strong>
          </p>
          <ToggleControl
            label={sliderSetting.dimension.width ? "Auto" : "Custom Height"}
            checked={sliderSetting.dimension.height}
            onChange={(e) => {
              this.updateGlobalSlide(e, "dimension", "height");
            }}
          />
          {sliderSetting.dimension.height && (
            <RangeControl
              label="Height"
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
                  sliderSetting.linearTrigger.enable ? "Disable" : "Enable"
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
                  sliderSetting.leftRightTrigger.enable ? "Disable" : "Enable"
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
                label={sliderSetting.autoTrigger.enable ? "Disable" : "Enable"}
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
        <PanelBody title={"Post Setting"} initialOpen={false}>
          <p>
            <strong>No of Post Display</strong>
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
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={"color" in meta_style_ ? meta_style_.color : ""}
            onChange={(color) =>
              this.updateObj("meta_style", "color", meta_style, color)
            }
          />
        </PanelBody>
        <PanelBody title="Excerpt" initialOpen={false}>
          <ToggleControl
            label={excerpt_.enable ? "Hide" : "Show"}
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
            </>
          )}
          <p>
            <strong>Color</strong>
          </p>
          <ColorPalette
            value={excerpt_.color}
            onChange={(color) =>
              this.updateObj("excerpt", "color", excerpt, color)
            }
          />
        </PanelBody>
        <PanelBody title="Heading" initialOpen={false}>
          <p>
            <strong>Heading Tag</strong>
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
      </InspectorControls>,
      <div className="zita-block-slide-wrapper">
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
                            <div class="zita-slider-text">
                              <div className="slider-post-content">
                                <div className="post-wrapper">
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
                                          style={{ color: meta_style_.color }}
                                          className="post-author"
                                        >
                                          {postAuthor}
                                        </p>
                                      )}
                                      {date_.enable && (
                                        <>
                                          <span className="slash">/</span>
                                          <p
                                            style={{ color: meta_style_.color }}
                                            className="post-date"
                                          >
                                            {this.dateFormate(post.date)}
                                          </p>
                                        </>
                                      )}
                                      {date_.last_modified && (
                                        <>
                                          <span className="slash">/</span>
                                          <p
                                            style={{ color: meta_style_.color }}
                                            className="post-date-last-modified"
                                          >
                                            <span>Modified: </span>
                                            {this.dateFormate(post.modified)}
                                          </p>
                                        </>
                                      )}
                                    </div>
                                    {excerpt_.enable && (
                                      <p
                                        style={{ color: excerpt_.color }}
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
