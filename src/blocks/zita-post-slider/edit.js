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
    this.state = { slideIndex: 0 };
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
  render() {
    let { attributes, setAttributes, posts, category } = this.props;
    let { slideIndex } = this.state;
    console.log("this.props", this.props);
    let {
      heading,
      author,
      numberOfPosts,
      thumbnail,
      numberOfColumn,
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
    let cateGory = [{ value: "all", label: "All" }];
    if (category && category.length) {
      category.map((catt) => {
        cateGory.push({
          value: catt.id,
          label: catt.name,
        });
      });
    }
    return [
      <InspectorControls>
        <PanelBody title={"Slider Setting"} initialOpen={false}></PanelBody>
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
          <ul
            className="zita-slider-ul-slides"
            style={{ minHeight: 500 + "px" }}
          >
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
