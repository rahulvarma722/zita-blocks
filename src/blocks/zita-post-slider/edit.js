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
} from "@wordpress/components";
import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

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
    let { attributes, setAttributes, posts } = this.props;
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

    return [
      <InspectorControls>
        <PanelBody title={"Slider Setting"} initialOpen={false}></PanelBody>
        <PanelBody title={"Slide Setting"} initialOpen={false}></PanelBody>
      </InspectorControls>,
      <div className="zita-block-slide-wrapper">
        <div className="zita-slider-bullet">
          <ul className="zita-slider-ul-bullet">
            {posts &&
              posts.length > 0 &&
              "getMedia_" in posts[0] &&
              posts.map((val, index_) => {
                return (
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
                                    {showCate_.enable && (
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
