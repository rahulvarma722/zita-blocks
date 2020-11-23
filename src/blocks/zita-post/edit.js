import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import {
  InspectorControls,
  RichText,
  ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
class Edit extends Component {
  render() {
    const { posts, attributes, setAttributes } = this.props;
    console.log("this.props", this.props);
    let {
      heading,
      numberOfPosts,
      thumbnail,
      numberOfColumn,
      excerpt,
    } = attributes;
    let heading_ = heading[0];
    let thumbnail_ = thumbnail[0];
    let excerpt_ = excerpt[0];
    return (
      <>
        <InspectorControls>
          <PanelBody title="Post Layout" initialOpen={false}>
            {/* featured image */}
            <p className="block-inside">Featured Image</p>
            <ToggleControl
              label={thumbnail_.enable ? "Hide" : "Show"}
              checked={thumbnail_.enable}
              onChange={(e) => {
                let newThumbnail = [...thumbnail];
                newThumbnail[0]["enable"] = e;
                this.props.setAttributes({ thumbnail: newThumbnail });
              }}
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
                  onChange={(e) => {
                    let newThumbnail = [...thumbnail];
                    newThumbnail[0]["borderRadius"] = e;
                    this.props.setAttributes({ thumbnail: newThumbnail });
                  }}
                />
              </>
            )}
            <p>
              <strong>Excerpt</strong>
            </p>
            <ToggleControl
              label={excerpt_.enable ? "Hide" : "Show"}
              checked={excerpt_.enable}
              onChange={(e) => {
                let newexcerpt_ = [...excerpt];
                newexcerpt_[0]["enable"] = e;
                this.props.setAttributes({ excerpt: newexcerpt_ });
              }}
            />
            {/* featured image */}
            <p>
              <strong>Layout</strong>
            </p>
            <select
              value={numberOfColumn < 2 ? "list" : "grid"}
              className="zita-block-select"
              onChange={(e) => {
                let value_ = e.target.value == "grid" ? 2 : 1;
                this.props.setAttributes({ numberOfColumn: value_ });
              }}
            >
              <option value="list">List</option>
              <option value="grid">Grid</option>
            </select>
            {numberOfColumn >= 2 && (
              <>
                <p>
                  <strong>Column</strong>
                </p>
                <RangeControl
                  value={numberOfColumn}
                  min={2}
                  max={4}
                  onChange={(e) => {
                    this.props.setAttributes({ numberOfColumn: e });
                  }}
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
                this.props.setAttributes({ numberOfPosts: e });
              }}
            />
          </PanelBody>
          <PanelBody title="Setting" initialOpen={false}>
            <p className="block-inside">Heading</p>
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
                this.props.setAttributes({ heading: newHeading });
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
              onChange={(e) => {
                let newHeading = [...heading];
                newHeading[0]["fontSize"] = e;
                this.props.setAttributes({ heading: newHeading });
              }}
            />
            <p>
              <strong>Color</strong>
            </p>
            <ColorPalette
              value={heading_.color}
              onChange={(color) => {
                let newHeading = [...heading];
                newHeading[0]["color"] = color;
                this.props.setAttributes({ heading: newHeading });
              }}
            />
          </PanelBody>
        </InspectorControls>
        {posts && posts.length > 0 && "getMedia_" in posts[0] ? (
          <div className="zita-block-post">
            <div className={`column-count column-count-${numberOfColumn}`}>
              {posts.map((post) => {
                return (
                  <article key={post.id}>
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
                        <RichText.Content
                          className="post-heading"
                          tagName={heading_.tag}
                          value={post.title.rendered}
                          style={{
                            fontSize: heading_.fontSize,
                            color: heading_.color,
                          }}
                        />
                        {excerpt_.enable && (
                          <p
                            className="post-excerpt"
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          ></p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : (
          <div>{posts ? "No Post Found" : "Loding..."}</div>
        )}
      </>
    );
  }
}
// export default Edit;
export default withSelect((select, props) => {
  const { attributes } = props;
  let { numberOfPosts } = attributes;
  const query = { per_page: numberOfPosts };
  const { getMedia, getEntityRecords } = select("core");
  let getAllPost = getEntityRecords("postType", "post", query);
  let returnArray = [];
  if (getAllPost && getAllPost.length) {
    getAllPost.map((v, index_) => {
      if (v.featured_media) {
        getAllPost[index_]["getMedia_"] = getMedia(v.featured_media);
      } else {
        getAllPost[index_]["getMedia_"] = false;
      }
      returnArray.push(getAllPost[index_]);
    });
    return { posts: returnArray };
  }
})(Edit);

// "2020-11-17T06:57:40"
//November 17, 2020
