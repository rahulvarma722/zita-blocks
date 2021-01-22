<?php
// zita post callback function
function mytheme_blocks_render_latest_post_block($attr)
{
    $args = [
        "posts_per_page" => $attr['numberOfPosts']
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    $postThumbnail = $attr['thumbnail'][0]['typeShow'];
    if ($postThumbnail == "1") {
        $args['meta_key'] = '_thumbnail_id';
    }
    $query = new WP_Query($args);
    $postHtml = '';
    $currentPage = $postSetting = "";
    $totalPosts = $query->found_posts;
    $pagesOfPost = ceil($totalPosts / $attr['numberOfPosts']);
    $currentPage = json_encode(array("current" => 1, "total" => $pagesOfPost));
    $postSetting = json_encode($attr);
    // echo "<pre>";
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable'] == "true" ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable'] == "true" ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified'] == "true" ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable'] == "true" ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $blockStyle = "background-color:" . $attr['meta_style'][0]['blockBgColor'] . ";";
        if ($attr['dimension'][0]['width']) {
            $blockStyle .= "max-width:" . $attr['dimension'][0]['custom_width'] . "px;";
        }
        $postHtml .= '<div class="zita-block-post list-layout zita-image-section" id="zita-block-post" style="' . $blockStyle . '">';
        // post title
        // loader
        $postHtml .= "<div class='zita-block-loader linear-bubble'>";
        $postHtml .= "<div><span></span></div>";
        $postHtml .= "</div>";
        // loader
        if (isset($attr['title'][0]['enable']) && $attr['title'][0]['enable']) {
            $titleHeadingStyle = "style='background-color:" . $attr['title'][0]['backgroundColor'] . ";color:" . $attr['title'][0]['color'] . ";font-size:" . $attr['title'][0]['fontSize'] . "px;font-weight:" . $attr['title'][0]['fontWeight'] . ";'";
            $postHtml .= '<div style="justify-content:' . $attr['title'][0]['align'] . ';border-color:' . $attr['title'][0]['backgroundColor'] . ';" class="zita-block-post-title" id="zita-block-post-title">';
            $postHtml .= '<h4 ' . $titleHeadingStyle . ' >';
            $postHtml .= $attr['title'][0]['value'];
            $postHtml .= '</h4>';
            $postHtml .= "</div>";
        }
        $postHtml .= "<div class='list-layout-section column-count column-count-1 image-align-" . $attr['meta_style'][0]['imageAlign'] . "' data-setting='" . $postSetting . "' data-currentpage='" . $currentPage . "'>";
        $postChecker = false;
        while ($query->have_posts()) {
            $query->the_post();
            if (!$postChecker) {
                $postChecker = true;
            }
            $postHtml .= returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt, $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $args, $attr['thumbnail']);
        }
        $postHtml .= "</div>";
        if ($attr['meta_style'][0]['npEnable']) {
            $keepDisable = $totalPosts <= $attr['numberOfPosts'] ? "disable" : '';
            $nextPrevStyle = "font-size:" . $attr['meta_style'][0]['npBgfontSize'] . "px;color:" . $attr['meta_style'][0]['npColor'] . ";background-color:" . $attr['meta_style'][0]['npBgColor'] . ";";

            $paginationLink = '';
            if ($attr['meta_style'][0]['npPagination']) {
                $paginationLink .= '<section class="paginationNumbers">';
                $pagesOfPost = $pagesOfPost < 4 ? $pagesOfPost : 4;
                for ($it = 1; $it < $pagesOfPost; $it++) {
                    $disabled_ = "";
                    if ($it == 1) {
                        $disabled_ = "disable";
                    }
                    $paginationLink .= '<div class="zita-image-section-np ' . $disabled_ . ' pagination" data-page="' . $it . '" style="' . $nextPrevStyle . '">' . $it . '</div>';
                }
                if ($pagesOfPost >= 4) {
                    $paginationLink .= '<div class="dots pagination" ><span>...</span></div>';
                    $paginationLink .= '<div class="zita-image-section-np pagination" data-page="' . $pagesOfPost . '" style="' . $nextPrevStyle . '">' . $pagesOfPost . '</div>';
                }
                $paginationLink .= '</section>';
            }
            $postHtml .= "<div class='zita-two-post-wrapper-next-prev " . $keepDisable . "'>
                            <div data-section='list-post' style='" . $nextPrevStyle . "' class='zita-image-section-np disable prev'>
                                <i class='fas fa-chevron-left'></i>
                            </div>";
            $postHtml .= $paginationLink;
            $postHtml .= "<div data-section='list-post' style='" . $nextPrevStyle . "' class='zita-image-section-np next'>
                                <i class='fas fa-chevron-right'></i>
                            </div>
                        </div>";
        }
        $postHtml .= "</div>";
        wp_reset_postdata();
        return $postChecker ? $postHtml : false;
    } else {
        return "<div>No post found.</div>";
    }
}

function returnHtmlListPost($cate_, $heading__, $postAuthor, $meta_, $postDate, $postExcerpt, $postExcerpt__, $postDateModify, $postExcerptColor, $tags_, $category__in, $thumbnail = false)
{
    $postHtmlCl1 = "<article class='block-post-article'>";
    $postHtmlCl1 .= "<div class='post-wrapper' id='post-wrapper'>";
    if (($thumbnail[0]['typeShow'] == 1 || $thumbnail[0]['typeShow'] == 'all') && $thumbnail[0]['enable'] && get_the_post_thumbnail_url()) {
        $thumbnailStyle = isset($thumbnail[0]['borderRadius']) ? "border-radius:" . $thumbnail[0]['borderRadius'] . "px;" : '';
        $postHtmlCl1 .= '<div class="featured-image">';
        $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>";
        $postHtmlCl1 .= '<img style="' . $thumbnailStyle . '" src="' . get_the_post_thumbnail_url() . '"/>';
        $postHtmlCl1 .= '</a>';
        $postHtmlCl1 .= '</div>';
    }
    $postHtmlCl1 .= "<div class='post-content'>";
    // category
    if ($cate_[0]['enable']) {
        $postHtmlCl1 .= '<p class="post-category">';
        $category_ = get_the_category();
        $category_ = json_encode($category_);
        $category_ = json_decode($category_, true);
        if (!empty($category_)) {
            $catestyle = 'font-size:' . $cate_[0]['fontSize'] . 'px;';
            if ($cate_[0]['customColor'] == "true") {
                $catestyle .= 'background-color:' . $cate_[0]['backgroundColor'] . ';color:' . $cate_[0]['color'] . ';';
            }
            if (isset($category__in['category__in']) && empty($category__in)) {
                $category__in = $category__in['category__in'];
                foreach ($category__in as $newArraycate) {
                    foreach ($category_ as $cateKKey => $cateValue_) {
                        if ($newArraycate == $cateValue_['term_id']) {
                            unset($category_[$cateKKey]);
                            array_unshift($category_, ['name' => $cateValue_['name'], 'term_id' => $cateValue_['term_id']]);
                        }
                    }
                }
            }
            $countCate = 0;
            foreach ($category_ as $cateValue) {
                if ($cate_[0]['count'] == $countCate) break;
                $postHtmlCl1 .= '<span style="' . $catestyle . '">';
                $postHtmlCl1 .= "<a href='" . get_category_link($cateValue['term_id']) . "'>" . $cateValue['name'] . "</a>";
                $postHtmlCl1 .= '</span>';
                $countCate++;
            }
        }
        $postHtmlCl1 .= '</p>';
    }
    // category
    $postHtmlCl1 .= "<" . $heading__[0]['tag'] . " style='color:" . $heading__[0]['color'] . ";font-size:" . $heading__[0]['fontSize'] . "px;' class='post-heading'>";
    $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
    $postHtmlCl1 .= "</" . $heading__[0]['tag'] . ">";
    $postHtmlCl1 .= '<div class="post-meta-all">';
    $metaStyle = "color:" . $meta_[0]['color'] . ";font-size:" . $meta_[0]['fontSize'] . ";";
    if ($postAuthor) {
        $postHtmlCl1 .= "<p style='" . $metaStyle . "' class='post-author'>";
        $postHtmlCl1 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
        $postHtmlCl1 .=  get_the_author();
        $postHtmlCl1 .= "</a></p>";
    }
    if ($postDate) {
        $postHtmlCl1 .= $postAuthor ? '<span style="' . $metaStyle . '" class="slash">/</span>' : '';
        $dateYear =   get_the_date('Y');
        $dateMonth =   get_the_date('m');
        $dateDay =   get_the_date('j');
        $postHtmlCl1 .= "<p style='" . $metaStyle . "' class='post-date'>";
        $postHtmlCl1 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
        $postHtmlCl1 .=  get_the_date();
        $postHtmlCl1 .= "</a></p>";
    }
    if ($postDateModify) {
        $postHtmlCl1 .= ($postDate || $postAuthor) ? '<span style="' . $metaStyle . '" class="slash">/</span>' : '';
        $dateYear =   get_the_modified_date('Y');
        $dateMonth =   get_the_modified_date('m');
        $dateDay =   get_the_modified_date('j');
        $postHtmlCl1 .= "<p style='" . $metaStyle . "' class='post-date-last-modified'>";
        $postHtmlCl1 .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
        $postHtmlCl1 .=  get_the_modified_date();
        $postHtmlCl1 .= "</a></p>";
    }
    $postHtmlCl1 .= '</div>';
    if ($postExcerpt) {
        $postExcerpt = get_the_excerpt();
        $exLength = isset($postExcerpt__[0]['words']) && $postExcerpt__[0]['words']  ? $postExcerpt__[0]['words'] : false;
        if ($exLength) {
            $postExcerpt = explode(" ", $postExcerpt);
            $postExcerpt = array_slice($postExcerpt, 0, $exLength);
            $postExcerpt = implode(" ", $postExcerpt);
        }
        $postHtmlCl1 .= "<p style='color:" . $postExcerptColor . ";font-size:" . $postExcerpt__[0]['fontSize'] . "px;' class='post-excerpt'>";
        $postHtmlCl1 .= $postExcerpt;
        $postHtmlCl1 .= "<a class='read-more' href='" . esc_url(get_the_permalink()) . "'>Read More</a>";
        $postHtmlCl1 .= "</p>";
    }
    // tags
    if (isset($tags_[0]['enable']) && $tags_[0]['enable'] == "true") {
        $tags = get_the_tags(get_the_ID());
        $postHtmlCl1 .= '<p class="post-tags">';
        if (!empty($tags)) {
            $Tagstyle = 'font-size:' . $tags_[0]['fontSize'] . 'px;background-color:' . $tags_[0]['backgroundColor'] . ';color:' . $tags_[0]['color'] . ';';
            $tagCount = 0;
            foreach ($tags as $tagValue) {
                if ($tags_[0]['count'] == $tagCount) break;
                $postHtmlCl1 .= '<span style="' . $Tagstyle . '">';
                $postHtmlCl1 .= "<a href='" . get_category_link($tagValue->term_id) . "'>" . $tagValue->name . "</a>";
                $postHtmlCl1 .= '</span>';
                $tagCount++;
            }
        }
        $postHtmlCl1 .= '</p>';
    }
    // tags
    $postHtmlCl1 .= "</div>";
    $postHtmlCl1 .= "</div>";
    $postHtmlCl1 .= "</article>";
    return $postHtmlCl1;
}
