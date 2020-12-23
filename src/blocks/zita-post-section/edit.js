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
} from "@wordpress/components";
import { decodeEntities } from "@wordpress/html-entities";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <PanelBody title="Post Layout" initialOpen={false}>
            <p className="block-inside">Block Title</p>
            <ToggleControl
              label={title_.enable ? "Hide" : "Show"}
              checked={title_.enable}
              onChange={(e) => this.updateObj("title", "enable", title, e)}
            />
            {title_.enable && (
              <>
                <p>
                  <strong>Color</strong>
                </p>
                <ColorPalette
                  value={title_.color}
                  onChange={(color) =>
                    this.updateObj("title", "color", title, color)
                  }
                />
              </>
            )}
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
            {/* featured image */}
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
              onChange={(e) =>
                this.updateObj("showCate", "enable", showCate, e)
              }
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
                  onChange={(e) =>
                    this.updateObj("excerpt", "words", excerpt, e)
                  }
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
                          heading_,
                          author_,
                          date_,
                          meta_style_,
                          thumbnail_,
                          showCate_,
                          excerpt_,
                          showTag_
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>{!posts ? "No Post Found" : "Loding..."}</div>
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
                    <span>Modified: </span>
                    {this.dateFormate(post.modified)}
                  </p>
                </>
              )}
            </div>
            {excerpt_ && excerpt_.enable && (
              <p style={{ color: excerpt_.color }} className="post-excerpt">
                {this.excerptWords(excerpt_.words, post.excerpt.rendered)}
                <span className="read-more">...Read More</span>
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