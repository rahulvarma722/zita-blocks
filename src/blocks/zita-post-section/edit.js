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
    if (numberOfPosts == 3 || numberOfPosts == 5) {
      this.setState({
        metaChoose: "primary",
        excerpt: "primary",
        heading: "primary",
      });
    }
    // if number of post sum

    let {
      heading,
      author,
      numberOfPosts,
      thumbnail,
      date,
      showTag,
      showCate,
      excerpt,
      postCategories,
      meta_style,
      title,
      // secondary
      heading2,
      excerpt2,
      showCate2,
      date2,
      author2,
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
    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__("Post Layout", "zita-blocks")}
            initialOpen={false}
          >
            <p>
              <strong>{__("No of Post Display", "zita-blocks")}</strong>
            </p>
            <RangeControl
              value={numberOfPosts}
              min={1}
              max={6}
              onChange={(e) => {
                setAttributes({ numberOfPosts: e });
              }}
            />
            {/* featured image */}
            {/* <p className="block-inside">Featured Image</p>
            <ToggleControl
              label={thumbnail_.enable ? "Hide" : "Show"}
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
            )} */}
            {/* featured image */}
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
            {(numberOfPosts == 3 || numberOfPosts == 5) && (
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
          <PanelBody title={__("Excerpt", "zita-blocks")} initialOpen={false}>
            {(numberOfPosts == 3 || numberOfPosts == 5) && (
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
                  label={excerpt2_.enable ? __("Hide", "zita-blocks") : __("Show", "zita-blocks")}
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
          <PanelBody title={__("Heading", "zita-blocks")} initialOpen={false}>
            {(numberOfPosts == 3 || numberOfPosts == 5) && (
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
                  <strong>{__("Heading Tag", "zita-blocks")}</strong>
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
        </InspectorControls>
        {posts && posts.length > 0 && "getMedia_" in posts[0] ? (
          <div className="zita-section-post">
            {(posts.length == 1 ||
              posts.length == 2 ||
              posts.length == 4 ||
              posts.length == 6) && (
              <div
                className={`column-count column-count-${
                  posts.length == 2 || posts.length == 4
                    ? 2
                    : posts.length == 6
                    ? 3
                    : 1
                }`}
              >
                {posts.map((post) => {
                  return this.returnHtml(
                    post,
                    heading_,
                    author_,
                    date_,
                    meta_style_,
                    thumbnail_,
                    showCate_,
                    excerpt_,
                    showTag_
                  );
                })}
              </div>
            )}
            {(posts.length == 3 || posts.length == 5) && (
              <div
                className={`parent-column-two count-${
                  posts.length == 3 ? 3 : 5
                }`}
              >
                <div>
                  <div className="column-count column-count-1">
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
                </div>
                <div>
                  <div
                    className={`column-count column-count-${
                      posts.length == 3 ? 1 : 2
                    }`}
                  >
                    {posts.map((post, in_) => {
                      return (
                        in_ != 0 &&
                        this.returnHtml(
                          post,
                          heading2_,
                          author2_,
                          date2_,
                          meta_style_,
                          thumbnail_,
                          showCate2_,
                          excerpt2_,
                          false
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>{!posts ? __("No Post Found", "zita-blocks") : __("Loding...", "zita-blocks")}</div>
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
                <img src={post.getMedia_.guid.rendered} />
              </div>
            )}
          <div className="post-content">
            {showCate_ && showCate_.enable && (
              <p className="post-category">
                {this.showCateFn(post.categories)}
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
                <p style={{ color: meta_style_.color }} className="post-author">
                  {postAuthor}
                </p>
              )}
              {date_.enable && (
                <>
                  {postAuthor && <span className="slash">/</span>}
                  <p style={{ color: meta_style_.color }} className="post-date">
                    {this.dateFormate(post.date)}
                  </p>
                </>
              )}
              {date_.last_modified && (
                <>
                  {(date_.enable || postAuthor) && (
                    <span className="slash">/</span>
                  )}
                  <p
                    style={{ color: meta_style_.color }}
                    className="post-date-last-modified"
                  >
                    <span>{__("Modified:", "zita-blocks")} </span>
                    {this.dateFormate(post.modified)}
                  </p>
                </>
              )}
            </div>
            {excerpt_ && excerpt_.enable && (
              <p style={{ color: excerpt_.color }} className="post-excerpt">
                {this.excerptWords(excerpt_.words, post.excerpt.rendered)}
                <span className="read-more">{__("...Read More", "zita-blocks")}</span>
              </p>
            )}
            {showTag_ && showTag_.enable && (
              <p style={{ color: meta_style_.color }} className="post-tags">
                {this.showTagsFn(post.tags)}
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
