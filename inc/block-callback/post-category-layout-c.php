<?php
// zita post callback function
function zita_blocks_two_column_block($attr)
{
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
    ];
    if ($attr['thumbnail'][0]['enable']) {
        $args['meta_key'] = "_thumbnail_id";
    }
    $fourAndMoreNav = [];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
        $fourAndMoreNav = $attr["postCategories"];
    } else {
        $fourAndMoreNav = get_terms(
            array(
                'taxonomy' => 'category',
                'fields'   => 'ids',
                'hide_empty' => true,
            )
        );
        // echo "ress";
    }
    // inner and outer making
    $innerITem = $outerItem = [];
    if (isset($attr["categorynav"][0]['enable']) && $attr["categorynav"][0]['enable'] && count($fourAndMoreNav) > 0) {
        if (count($fourAndMoreNav) <= 4) {
            $innerITem = $fourAndMoreNav;
        } else {
            $innerITem = array_slice($fourAndMoreNav, 0, 4);
            $outerItem = array_slice($fourAndMoreNav, 4);
        }
    }
    $query = new WP_Query($args);
    $totalPosts = $query->found_posts;
    $pagesOfPost = ceil($totalPosts / $attr['numberOfPosts']);
    $currentPage = json_encode(array("current" => 1, "total" => $pagesOfPost));
    $postSetting = json_encode($attr);
    $postHtml = "<div class='zita-two-col-container' style='background-color:" . $attr['meta_style'][0]['blockBgColor'] . ";'>";
    // loader
    $postHtml .= "<div class='zita-block-loader linear-bubble'>";
    $postHtml .= "<div><span></span></div>";
    $postHtml .= "</div>";
    // loader

    if (count($innerITem) > 0 || $attr['title'][0]["enable"]) {
        $titleAttrs = $attr['title'][0];
        $borderStyle = $attr['meta_style'][0]['underLine'] ? "border-color:" . $attr['meta_style'][0]['underLineColor'] . ";" : '';
        $postHtml .= "<div class='navigation_' style='" . $borderStyle . "'>";
        if ($titleAttrs["enable"]) {
            $postHtml .= '<div class="nav-heading">';
            $postHtml .= '<h4 style="background-color: ' . $titleAttrs["bgColor"] . '; color:' . $titleAttrs["color"] . ';font-size:' . $titleAttrs["fontSize"] . 'px;">';
            $postHtml .= $titleAttrs['value'];
            $postHtml .= '</h4></div>';
        }
        if (count($innerITem) > 0) {
            $navItemStyle = 'font-size:' . $attr["categorynav"][0]['fontSize'] . 'px;color:' . $attr["categorynav"][0]['color'] . ';background-color:' . $attr["categorynav"][0]['backgroundColor'] . ';';
            // linear items
            $postHtml .= "<div class='zita-block-nav-items nav-linear-items'>";
            $postHtml .= "<ul>";
            $postHtml .= '<li class="cat-item cat-item-all"><a style="' . $navItemStyle . '" href="#">all</a></li>';
            foreach ($innerITem as $innerITem_value) {
                $postHtml .= '<li class="cat-item cat-item-' . $innerITem_value . '"><a style="' . $navItemStyle . '" href="#">' . get_cat_name($innerITem_value) . '</a></li>';
            }
            $postHtml .= "</ul>";
            $postHtml .= "</div>";
            // dropdown items
            if (!empty($outerItem)) {
                $postHtml .= "<div class='zita-block-nav-items nav-drop-items'>";
                $postHtml .= "<span style='" . $navItemStyle . "' class='more-opener'>More<i class='fas fa-chevron-down'></i></span>";
                $postHtml .= "<ul>";
                foreach ($outerItem as $outerItem_value) {
                    $postHtml .= '<li class="cat-item cat-item-' . $outerItem_value . '"><a style="' . $navItemStyle . '" href="#">' . get_cat_name($outerItem_value) . '</a></li>';
                }
                $postHtml .= "</ul>";
                $postHtml .= "</div>";
            }
        }
        // dropdown items
        $postHtml .= "</div>";
    }
    // category navigation
    $postHtml .= "<div class='zita-two-post-wrapper' data-setting='" . $postSetting . "' data-currentpage='" . $currentPage . "'><div class='zita-post-two-column column-layout-" . $attr['meta_style'][0]["layoutPosition"] . "'>";
    $postHtmlCl1 = '<div class="column-one">';
    $postHtmlCl2 = '<div class="column-two">';
    // echo "<pre>";
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postAuthor2 = isset($attr['author2'][0]['enable']) && $attr['author2'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postDate2 = isset($attr['date2'][0]['enable']) && $attr['date2'][0]['enable']  ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified']  ? true : false;
        $postDateModify2 = isset($attr['date2'][0]['last_modified']) && $attr['date2'][0]['last_modified']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postExcerpt2 = isset($attr['excerpt2'][0]['enable']) && $attr['excerpt2'][0]['enable']  ? true : false;
        $postExcerpt2Color = $postExcerpt2 && $attr['excerpt2'][0]['color'] ? $attr['excerpt2'][0]['color'] : "";
        $postThumbnail = isset($attr['thumbnail'][0]['enable']) && $attr['thumbnail'][0]['enable']  ? true : false;
        // $postThumbnail2 = isset($attr['thumbnail2'][0]['enable']) && $attr['thumbnail2'][0]['enable']  ? true : false;
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        $metaStyleFont = isset($attr['meta_style'][0]['fontSize']) && $attr['meta_style'][0]['fontSize']  ? $attr['meta_style'][0]['fontSize'] : "";
        $metaStyleColor2 = isset($attr['meta_style2'][0]['color']) && $attr['meta_style2'][0]['color']  ? $attr['meta_style2'][0]['color'] : "";
        $metaStyleFont2 = isset($attr['meta_style2'][0]['fontSize']) && $attr['meta_style2'][0]['fontSize']  ? $attr['meta_style2'][0]['fontSize'] : "";

        // $metaLeftBorder = isset($attr['meta_style'][0]['left_border']) && $attr['meta_style'][0]['left_border']  ? "left-border" : "";
        $metashowCate = isset($attr['showCate'][0]['enable']) && $attr['showCate'][0]['enable']  ? true : false;
        $metashowCate2 = isset($attr['showCate2'][0]['enable']) && $attr['showCate2'][0]['enable']  ? true : false;
        $metashowshowTag = isset($attr['showTag'][0]['enable']) && $attr['showTag'][0]['enable']  ? true : false;
        $checkFirst = true;
        while ($query->have_posts()) {
            $query->the_post();
            if ($checkFirst) {
                $checkFirst = false;
                $postHtmlCl1 .= "<article class='block-post-article'>";
                $postHtmlCl1 .= "<div class='post-wrapper' id='post-wrapper'>";
                if ($postThumbnail) {
                    if (get_the_post_thumbnail_url()) {
                        $postThumbRadius = isset($attr['thumbnail'][0]['borderRadius']) && $attr['thumbnail'][0]['borderRadius']  ? $attr['thumbnail'][0]['borderRadius'] : false;
                        $postHtmlCl1 .= '<div class="featured-image">';
                        $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>";
                        $postHtmlCl1 .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                        $postHtmlCl1 .= '</a>';
                        $postHtmlCl1 .= '</div>';
                    }
                }
                $postHtmlCl1 .= "<div class='post-content'>";
                // category
                if ($metashowCate) {
                    $postHtmlCl1 .= '<p class="post-category">';
                    $category_ = get_the_category();
                    $category_ = json_encode($category_);
                    $category_ = json_decode($category_, true);
                    if (!empty($category_)) {
                        $catestyle = 'font-size:' . $attr['showCate'][0]['fontSize'] . 'px;';
                        if ($attr['showCate'][0]['customColor'] == "true") {
                            $catestyle .= 'background-color:' . $attr['showCate'][0]['backgroundColor'] . ';color:' . $attr['showCate'][0]['color'] . ';';
                        }
                        if (isset($args['category__in'])) {
                            foreach ($args['category__in'] as $newArraycate) {
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
                            if ($attr['showCate'][0]['count'] == $countCate) break;
                            $postHtmlCl1 .= '<span style="' . $catestyle . '">';
                            $postHtmlCl1 .= "<a href='" . get_category_link($cateValue["term_id"]) . "'>" . $cateValue['name'] . "</a>";
                            $postHtmlCl1 .= '</span>';
                            $countCate++;
                        }
                    }
                    $postHtmlCl1 .= '</p>';
                }
                // category
                $postHtmlCl1 .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . ";font-size:" . $attr['heading'][0]['fontSize'] . "px;' class='post-heading'>";
                $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtmlCl1 .= "</" . $attr['heading'][0]['tag'] . ">";
                $postHtmlCl1 .= '<div class="post-meta-all">';
                if ($postAuthor) {
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFont . "px;' class='post-author'>";
                    $postHtmlCl1 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtmlCl1 .=  get_the_author();
                    $postHtmlCl1 .= "</a></p>";
                }
                if ($postDate) {
                    $postHtmlCl1 .= $postAuthor ? '<span style="color:' . $metaStyleColor . ';font-size:' . $metaStyleFont . 'px;" class="slash">/</span>' : '';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFont . "px;' class='post-date'>";
                    $postHtmlCl1 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl1 .=  get_the_date();
                    $postHtmlCl1 .= "</a></p>";
                }
                if ($postDateModify) {
                    $postHtmlCl1 .= ($postDate || $postAuthor) ? '<span style="color:' . $metaStyleColor . ';font-size:' . $metaStyleFont . 'px;" class="slash">/</span>' : '';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFont . "px;' class='post-date-last-modified'>";
                    $postHtmlCl1 .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl1 .=  get_the_modified_date();
                    $postHtmlCl1 .= "</a></p>";
                }
                $postHtmlCl1 .= '</div>';
                if ($postExcerpt) {
                    $postExcerpt = get_the_excerpt();
                    // exerpt length
                    $exLength = isset($attr['excerpt'][0]['words']) && $attr['excerpt'][0]['words']  ? $attr['excerpt'][0]['words'] : false;
                    if ($exLength) {
                        $postExcerpt = explode(" ", $postExcerpt);
                        $postExcerpt = array_slice($postExcerpt, 0, $exLength);
                        $postExcerpt = implode(" ", $postExcerpt);
                    }
                    $postHtmlCl1 .= "<p style='color:" . $postExcerptColor . ";font-size:" . $attr['excerpt'][0]['fontSize'] . "px;' class='post-excerpt'>";
                    $postHtmlCl1 .= $postExcerpt;
                    $postHtmlCl1 .= "<a class='read-more' href='" . esc_url(get_the_permalink()) . "'>Read More</a>";
                    $postHtmlCl1 .= "</p>";
                }
                // tags
                if ($metashowshowTag) {
                    $tags = get_the_tags(get_the_ID());
                    $postHtmlCl1 .= '<p class="post-tags">';
                    if (!empty($tags)) {
                        $Tagstyle = 'font-size:' . $attr['showTag'][0]['fontSize'] . 'px;background-color:' . $attr['showTag'][0]['backgroundColor'] . ';color:' . $attr['showTag'][0]['color'] . ';';
                        $tagCount = 0;
                        foreach ($tags as $tagValue) {
                            if ($attr['showTag'][0]['count'] == $tagCount) break;
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
            } else {
                $postHtmlCl2 .= "<article class='block-post-article'>";
                $postHtmlCl2 .= "<div class='post-wrapper' id='post-wrapper'>";
                if ($postThumbnail) {
                    if (get_the_post_thumbnail_url()) {
                        $postThumbRadius = isset($attr['thumbnail'][0]['borderRadius']) && $attr['thumbnail'][0]['borderRadius']  ? $attr['thumbnail'][0]['borderRadius'] : false;
                        $postHtmlCl2 .= '<div class="featured-image">';
                        $postHtmlCl2 .= "<a href='" . esc_url(get_the_permalink()) . "'>";
                        $postHtmlCl2 .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                        $postHtmlCl2 .= '</a>';
                        $postHtmlCl2 .= '</div>';
                    }
                }
                $postHtmlCl2 .= "<div class='post-content'>";
                // category
                if ($metashowCate2) {
                    $postHtmlCl2 .= '<p class="post-category">';
                    $category_ = get_the_category();
                    $category_ = json_encode($category_);
                    $category_ = json_decode($category_, true);
                    if (!empty($category_)) {
                        $catestyle2 = 'font-size:' . $attr['showCate2'][0]['fontSize'] . 'px;';
                        if ($attr['showCate2'][0]['customColor']) {
                            $catestyle2 .= 'background-color:' . $attr['showCate2'][0]['backgroundColor'] . ';color:' . $attr['showCate2'][0]['color'] . ';';
                        }
                        if (isset($args['category__in'])) {
                            foreach ($args['category__in'] as $newArraycate) {
                                foreach ($category_ as $cateKKey => $cateValue_) {
                                    if ($newArraycate == $cateValue_['term_id']) {
                                        unset($category_[$cateKKey]);
                                        array_unshift($category_, ['name' => $cateValue_['name'], 'term_id' => $cateValue_['term_id']]);
                                    }
                                }
                            }
                        }
                        // print_r($category_);
                        $countCate2 = 0;
                        foreach ($category_ as $cateValue) {
                            if ($attr['showCate2'][0]['count'] == $countCate2) break;
                            $postHtmlCl2 .= '<span style="' . $catestyle2 . '">';
                            $postHtmlCl2 .= "<a href='" . get_category_link($cateValue["term_id"]) . "'>" . $cateValue['name'] . "</a>";
                            $postHtmlCl2 .= '</span>';
                            $countCate2++;
                        }
                    }
                    $postHtmlCl2 .= '</p>';
                }
                // category
                $postHtmlCl2 .= "<" . $attr['heading2'][0]['tag'] . " style='color:" . $attr['heading2'][0]['color'] . ";font-size:" . $attr['heading2'][0]['fontSize'] . "px;' class='post-heading'>";
                $postHtmlCl2 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtmlCl2 .= "</" . $attr['heading2'][0]['tag'] . ">";
                $postHtmlCl2 .= '<div class="post-meta-all">';
                if ($postAuthor2) {
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor2 . ";font-size:" . $metaStyleFont2 . "px;' class='post-author'>";
                    $postHtmlCl2 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtmlCl2 .=  get_the_author();
                    $postHtmlCl2 .= "</a></p>";
                }
                if ($postDate2) {
                    $postHtmlCl2 .= $postAuthor2 ? '<span style="color:' . $metaStyleColor2 . ';font-size:' . $metaStyleFont2 . 'px;" class="slash">/</span>' : '';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor2 . ";font-size:" . $metaStyleFont2 . "px;' class='post-date'>";
                    $postHtmlCl2 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl2 .=  get_the_date();
                    $postHtmlCl2 .= "</a></p>";
                }
                if ($postDateModify2) {
                    $postHtmlCl2 .= ($postDate2 || $postAuthor2) ? '<span style="color:' . $metaStyleColor2 . ';font-size:' . $metaStyleFont2 . 'px;" class="slash">/</span>' : '';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor2 . ";font-size:" . $metaStyleFont2 . "px;' class='post-date-last-modified'>";
                    $postHtmlCl2 .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl2 .=  get_the_modified_date();
                    $postHtmlCl2 .= "</a></p>";
                }
                $postHtmlCl2 .= '</div>';
                if ($postExcerpt2) {
                    $postExcerpt2 = get_the_excerpt();
                    // exerpt length
                    $exLength2 = isset($attr['excerpt2'][0]['words']) && $attr['excerpt2'][0]['words']  ? $attr['excerpt2'][0]['words'] : false;
                    if ($exLength2) {
                        $postExcerpt2 = explode(" ", $postExcerpt2);
                        $postExcerpt2 = array_slice($postExcerpt2, 0, $exLength2);
                        $postExcerpt2 = implode(" ", $postExcerpt2);
                    }
                    $postHtmlCl2 .= "<p style='color:" . $postExcerpt2Color . ";font-size:" . $attr['excerpt2'][0]['fontSize'] . "px;' class='post-excerpt'>";
                    $postHtmlCl2 .= $postExcerpt2;
                    $postHtmlCl2 .= "<a class='read-more' href='" . esc_url(get_the_permalink()) . "'>Read More</a>";
                    $postHtmlCl2 .= "</p>";
                }
                // tags
                $postHtmlCl2 .= "</div>";
                $postHtmlCl2 .= "</div>";
                $postHtmlCl2 .= "</article>";
            }
        }
        $postHtmlCl1 .=  '</div>';
        $postHtmlCl2 .= '</div>';
        $postHtml .= $postHtmlCl1 . $postHtmlCl2;
        $postHtml .= '</div>';
        // if ($totalPosts > $attr['numberOfPosts']) {
        $keepDisable = $totalPosts <= $attr['numberOfPosts'] ? "disable" : '';
        $nextPrevStyle = "font-size:" . $attr['meta_style'][0]['npBgfontSize'] . "px;color:" . $attr['meta_style'][0]['npColor'] . ";background-color:" . $attr['meta_style'][0]['npBgColor'] . ";";
        $postHtml .= "<div class='zita-two-post-wrapper-next-prev " . $keepDisable . "'>
                            <div style='" . $nextPrevStyle . "' class='zita-post-NP-btn disable prev'>
                                <i class='fas fa-chevron-left'></i>
                            </div>
                            <div style='" . $nextPrevStyle . "' class='zita-post-NP-btn next'>
                                <i class='fas fa-chevron-right'></i>
                            </div>
                        </div>";
        // }
        $postHtml .= '</div>';
        $postHtml .= '</div>';

        // echo "</pre>";
        wp_reset_postdata();
        return $postHtml;
    } else {
        return "<div>No post found.</div>";
    }
}
