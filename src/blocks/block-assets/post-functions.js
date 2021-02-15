import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";

const { apiFetch } = wp;
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const postDataInit = (data = {}) => {
  let sendData = data;
  return apiFetch({
    path: "/zita-blocks-post-api/v3/posts/",
    method: "POST",
    data: sendData,
  })
    .then((postsData) => {
      return postsData;
    })
    .catch((error) => console.error(error));
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const filterPostInit = async (this_, data_ = {}) => {
  let argData = data_;
  //number of post
  if (!("numberOfPosts" in argData)) {
    argData["numberOfPosts"] = this_.props.attributes.numberOfPosts;
  }
  // choose category
  let categoryIes =
    "postCategories" in argData
      ? argData.postCategories
      : this_.props.attributes.postCategories;
  if (categoryIes) {
    argData["postCategories"] = categoryIes.join(",");
  }
  // featured image
  if ("featured_image" in argData && argData.featured_image == "1") {
    argData["featured_image"] = 1;
  }
  let postData = await postDataInit(argData);
  if (postData) {
    // all posts
    if ("posts" in postData && postData.posts != "") {
      let posts_ = postData.posts;
      this_.setState({ posts: posts_ });
    } else {
      this_.setState({ posts: null });
    }
    //total post
    if ("totalPost" in postData && postData.totalPost != "") {
      let totalPost_ = postData.totalPost;
      this_.setState({ totalPost: totalPost_ });
    } else {
      this_.setState({ totalPost: null });
    }
  }
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const firstTimeInit = async (this_, data_ = {}) => {
  let { numberOfPosts, postCategories } = this_.props.attributes;
  let sendData = {
    initialize: 1,
    numberOfPosts: numberOfPosts,
  };
  // featured image
  if ("featured_image" in data_) {
    sendData["featured_image"] = 1;
  }
  // choose category
  if (postCategories) {
    sendData["postCategories"] = postCategories.join(",");
  }
  let postData = await postDataInit(sendData);
  if (postData) {
    // all posts
    if ("posts" in postData && postData.posts != "") {
      let posts_ = postData.posts;
      this_.setState({ posts: posts_ });
    } else {
      this_.setState({ posts: null });
    }
    //all categories
    if ("category" in postData && postData.category != "") {
      let category_ = postData.category;
      this_.setState({ category: category_ });
    } else {
      this_.setState({ category: null });
    }
    //total post
    if ("totalPost" in postData && postData.totalPost != "") {
      let totalPost_ = postData.totalPost;
      this_.setState({ totalPost: totalPost_ });
    } else {
      this_.setState({ totalPost: null });
    }
  }
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const categoryList = (category) => {
  if (
    (category && category.length) ||
    (category instanceof Object && Object.keys(category).length)
  ) {
    let cateGory = [{ value: "all", label: "All" }];
    if (category && category.length) {
      category.map((catt) => {
        let cate_Items = {
          value: catt.slug,
          label: catt.name,
        };
        cateGory.push(cate_Items);
      });
    } else if (category instanceof Object && Object.keys(category).length) {
      for (let keys_ in category) {
        let cate_Items = {
          value: category[keys_].slug,
          label: category[keys_].name,
        };
        cateGory.push(cate_Items);
      }
    }
    return cateGory;
  }
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const excerptWords = (words, words_) => {
  words_ = decodeEntities(words_);
  words_ = words_.replace(/<\/?[^>]+(>|$)/g, "");
  words_ = words_.split(" ");
  words_ = words_.slice(0, words);
  words_ = words_.join(" ");
  // words_ = decodeEntities(words_);
  return words_;
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const showCateFn = (this_props, categories, cate_) => {
  if (categories && categories instanceof Array && categories.length > 0) {
    let copiedCate = [...categories];
    let countCate = cate_.count;
    if (countCate < copiedCate.length) {
      let filterChoosen = this_props.attributes.postCategories;
      if (
        filterChoosen.length > 0 &&
        filterChoosen.length < copiedCate.length
      ) {
        filterChoosen.map((cateSlug) => {
          let getIndex = copiedCate.findIndex((slug_) => {
            if (slug_ && "slug" in slug_) {
              return slug_.slug == cateSlug;
            }
          });
          if (getIndex && getIndex + 1 > countCate) {
            delete copiedCate[getIndex];
            copiedCate.unshift({ name: cateSlug });
          }
        });
      }
    }
    let putCateStyle = { fontSize: cate_.fontSize + "px" };
    if (cate_.customColor) {
      putCateStyle["color"] = cate_.color;
      putCateStyle["backgroundColor"] = cate_.backgroundColor;
    }
    copiedCate.splice(countCate);
    return copiedCate.map((returnH) => (
      <span style={putCateStyle}>{returnH.name}</span>
    ));
  }
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const showTagsFn = (tags_, tag_r) => {
  if (tags_ && tags_ instanceof Array && tags_.length) {
    let putTagStyle = { color: tag_r.color };
    putTagStyle["color"] = tag_r.color;
    putTagStyle["backgroundColor"] = tag_r.backgroundColor;
    putTagStyle["fontSize"] = tag_r.fontSize + "px";
    let countTag = tag_r.count;
    let tagCopied = [...tags_];
    tagCopied.splice(countTag);
    return tagCopied.map((returnH) => (
      <span style={putTagStyle}>{returnH.name}</span>
    ));
  }
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const PostLoader = () => {
  return (
    <div className="post-loader">
      <div className="active linear-bubble zita-block-loader">
        {__("Post Loading...", "zita-blocks")}
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};
//<<<<<<<<<<<-------->>>>>>>>>>>>>>
export const PostNotfound = () => {
  return (
    <div className="no-post-found">
      <p>{__("No Post Found", "zita-blocks")}</p>
    </div>
  );
};
