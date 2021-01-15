<?php
// zita post callback function
function zita_post_grid_block($attr)
{
    $args = [
        "posts_per_page" => $attr['numberOfPosts'],
        'meta_key' => '_thumbnail_id'
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    // typeShow
    $query = new WP_Query($args);
    $postHtml = '';
    // echo "<pre>";
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";

        $postThumbnail = $attr['thumbnail'][0]['typeShow'];
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        $metaStyleFontSize = isset($attr['meta_style'][0]['fontSize']) && $attr['meta_style'][0]['fontSize']  ? $attr['meta_style'][0]['fontSize'] : "";
        $metaLeftBorder = isset($attr['meta_style'][0]['left_border']) && $attr['meta_style'][0]['left_border']  ? "left-border" : "";
        $metashowCate = isset($attr['showCate'][0]['enable']) && $attr['showCate'][0]['enable']  ? true : false;
        $metashowshowTag = isset($attr['showTag'][0]['enable']) && $attr['showTag'][0]['enable']  ? true : false;

        $postHtml .= '<div class="zita-block-post" id="zita-block-post" style="background-color:' . $attr['meta_style'][0]['blockBgColor'] . '">';
        // post title
        if (isset($attr['title'][0]['enable']) && $attr['title'][0]['enable']) {
            $titleHeadingStyle = "style='background-color:" . $attr['title'][0]['backgroundColor'] . ";color:" . $attr['title'][0]['color'] . ";font-size:" . $attr['title'][0]['fontSize'] . "px;font-weight:" . $attr['title'][0]['fontWeight'] . ";'";
            $postHtml .= '<div style="justify-content:' . $attr['title'][0]['align'] . ';border-color:' . $attr['title'][0]['backgroundColor'] . ';" class="zita-block-post-title" id="zita-block-post-title">';
            $postHtml .= '<h4 ' . $titleHeadingStyle . ' >';
            $postHtml .= $attr['title'][0]['value'];
            $postHtml .= '</h4>';
            $postHtml .= "</div>";
        }
        $gridColumn = $attr['numberOfColumn'];
        $postHtml .= "<div class='column-count column-count-" . $gridColumn . " " . $metaLeftBorder . "'>";
        $postChecker = false;
        while ($query->have_posts()) {
            // echo "count 1<br>";
            $query->the_post();
            if ($postThumbnail == "1") {
                if (get_the_post_thumbnail_url()) {
                    if (!$postChecker) {
                        $postChecker = true;
                    }
                    $postHtml .= "<article>";
                    $postHtml .= "<div class='post-wrapper' id='post-wrapper'>";
                    $postThumbRadius = isset($attr['thumbnail'][0]['borderRadius']) && $attr['thumbnail'][0]['borderRadius']  ? $attr['thumbnail'][0]['borderRadius'] : false;
                    $postHtml .= '<div class="featured-image">';
                    $postHtml .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                    $postHtml .= '</div>';

                    $postHtml .= "<div class='post-content'>";

                    // category
                    if ($metashowCate) {
                        $postHtml .= '<p class="post-category">';
                        $category_ = get_the_category();
                        $category_ = json_encode($category_);
                        $category_ = json_decode($category_, true);
                        if (!empty($category_)) {
                            $catestyle = 'font-size:' . $attr['showCate'][0]['fontSize'] . 'px;';
                            if ($attr['showCate'][0]['customColor']) {
                                $catestyle .= 'background-color:' . $attr['showCate'][0]['backgroundColor'] . ';color:' . $attr['showCate'][0]['color'] . ';';
                            }
                            // 
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
                                $postHtml .= '<span style="' . $catestyle . '">';
                                $postHtml .= "<a href='" . get_category_link($cateValue['term_id']) . "'>" . $cateValue['name'] . "</a>";
                                $postHtml .= '</span>';
                                $countCate++;
                            }
                        }
                        $postHtml .= '</p>';
                    }
                    // category
                    $postHtml .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . ";font-size:" . $attr['heading'][0]['fontSize'] . "px' class='post-heading'>";
                    $postHtml .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                    $postHtml .= "</" . $attr['heading'][0]['tag'] . ">";

                    $postHtml .= '<div class="post-meta-all">';
                    if ($postAuthor) {
                        $postHtml .= "<p style='font-size:" . $metaStyleFontSize . "px;color:" . $metaStyleColor . ";' class='post-author'>";
                        $postHtml .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                        $postHtml .=  get_the_author();
                        $postHtml .= "</a></p>";
                    }

                    if ($postDate) {
                        $postHtml .= $postAuthor ? '<span style="font-size:' . $metaStyleFontSize . ';color:' . $metaStyleColor . ';" class="slash">/</span>' : '';
                        $dateYear =   get_the_date('Y');
                        $dateMonth =   get_the_date('m');
                        $dateDay =   get_the_date('j');
                        $postHtml .= "<p style='font-size:" . $metaStyleFontSize . "px;color:" . $metaStyleColor . ";' class='post-date'>";
                        $postHtml .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                        $postHtml .=  get_the_date();
                        $postHtml .= "</a></p>";
                    }
                    if ($postDateModify) {
                        $postHtml .= $postAuthor || $postDate ? '<span style="font-size:' . $metaStyleFontSize . ';color:' . $metaStyleColor . ';" class="slash">/</span>' : '';
                        $dateYear =   get_the_modified_date('Y');
                        $dateMonth =   get_the_modified_date('m');
                        $dateDay =   get_the_modified_date('j');
                        $postHtml .= "<p style='font-size:" . $metaStyleFontSize . "px;color:" . $metaStyleColor . ";' class='post-date-last-modified'>";
                        $postHtml .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                        $postHtml .=  get_the_modified_date();
                        $postHtml .= "</a></p>";
                    }
                    $postHtml .= '</div>';

                    if ($postExcerpt) {
                        $postExcerpt = get_the_excerpt();
                        // exerpt length
                        $exLength = isset($attr['excerpt'][0]['words']) && $attr['excerpt'][0]['words']  ? $attr['excerpt'][0]['words'] : false;
                        if ($exLength) {
                            $postExcerpt = explode(" ", $postExcerpt);
                            $postExcerpt = array_slice($postExcerpt, 0, $exLength);
                            $postExcerpt = implode(" ", $postExcerpt);
                        }
                        $postHtml .= "<p style='color:" . $postExcerptColor . ";font-size:" . $attr['excerpt'][0]['fontSize'] . "px;' class='post-excerpt'>";
                        $postHtml .= $postExcerpt;
                        $postHtml .= "</p>";
                    }
                    // tags
                    if ($metashowshowTag) {
                        $tags = get_the_tags(get_the_ID());
                        $postHtml .= '<p class="post-tags">';
                        if (!empty($tags)) {
                            $Tagstyle = 'font-size:' . $attr['showTag'][0]['fontSize'] . 'px;background-color:' . $attr['showTag'][0]['backgroundColor'] . ';color:' . $attr['showTag'][0]['color'] . ';';
                            $tagCount = 0;
                            foreach ($tags as $tagValue) {
                                if ($attr['showTag'][0]['count'] == $tagCount) break;
                                $postHtml .= '<span style="' . $Tagstyle . '">';
                                $postHtml .= "<a href='" . get_category_link($tagValue->term_id) . "'>" . $tagValue->name . "</a>";
                                $postHtml .= '</span>';
                                $tagCount++;
                            }
                        }
                        $postHtml .= '</p>';
                    }
                    // tags
                    $postHtml .= "</div>";
                    $postHtml .= "</div>";
                    $postHtml .= "</article>";
                }
            } else {
                if (!$postChecker) {
                    $postChecker = true;
                }
                $postHtml .= "<article>";
                $postHtml .= "<div class='post-wrapper' id='post-wrapper'>";
                if ($postThumbnail == "all" && get_the_post_thumbnail_url()) {
                    $postThumbRadius = isset($attr['thumbnail'][0]['borderRadius']) && $attr['thumbnail'][0]['borderRadius']  ? $attr['thumbnail'][0]['borderRadius'] : false;
                    $postHtml .= '<div class="featured-image">';
                    $postHtml .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                    $postHtml .= '</div>';
                }

                $postHtml .= "<div class='post-content'>";

                // category
                if ($metashowCate) {
                    $postHtml .= '<p class="post-category">';
                    $category_ = get_the_category();
                    $category_ = json_encode($category_);
                    $category_ = json_decode($category_, true);
                    if (!empty($category_)) {
                        $catestyle = 'font-size:' . $attr['showCate'][0]['fontSize'] . 'px;';
                        if ($attr['showCate'][0]['customColor']) {
                            $catestyle .= 'background-color:' . $attr['showCate'][0]['backgroundColor'] . ';color:' . $attr['showCate'][0]['color'] . ';';
                        }
                        // 
                        if (isset($args['category__in'])) {
                            foreach ($args['category__in'] as $cateKKey => $newArraycate) {
                                foreach ($category_ as $cateValue_) {
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
                            $postHtml .= '<span style="' . $catestyle . '">';
                            $postHtml .= "<a href='" . get_category_link($cateValue['term_id']) . "'>" . $cateValue['name'] . "</a>";
                            $postHtml .= '</span>';
                            $countCate++;
                        }
                    }
                    $postHtml .= '</p>';
                }
                // category
                $postHtml .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . ";font-size:" . $attr['heading'][0]['fontSize'] . "px' class='post-heading'>";
                $postHtml .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtml .= "</" . $attr['heading'][0]['tag'] . ">";

                $postHtml .= '<div class="post-meta-all">';
                if ($postAuthor) {
                    $postHtml .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFontSize . "px;' class='post-author'>";
                    $postHtml .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtml .=  get_the_author();
                    $postHtml .= "</a></p>";
                }

                if ($postDate) {
                    $postHtml .= $postAuthor ? '<span style="font-size:' . $metaStyleFontSize . 'color:' . $metaStyleColor . ';;" class="slash">/</span>' : '';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtml .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFontSize . "px;' class='post-date'>";
                    $postHtml .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtml .=  get_the_date();
                    $postHtml .= "</a></p>";
                }
                if ($postDateModify) {
                    $postHtml .= $postAuthor || $postDate ? '<span style="font-size:' . $metaStyleFontSize . ';color:' . $metaStyleColor . ';" class="slash">/</span>' : '';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtml .= "<p style='color:" . $metaStyleColor . ";font-size:" . $metaStyleFontSize . "px;' class='post-date-last-modified'>";
                    $postHtml .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtml .=  get_the_modified_date();
                    $postHtml .= "</a></p>";
                }
                $postHtml .= '</div>';

                if ($postExcerpt) {
                    $postExcerpt = get_the_excerpt();
                    // exerpt length
                    $exLength = isset($attr['excerpt'][0]['words']) && $attr['excerpt'][0]['words']  ? $attr['excerpt'][0]['words'] : false;
                    if ($exLength) {
                        $postExcerpt = explode(" ", $postExcerpt);
                        $postExcerpt = array_slice($postExcerpt, 0, $exLength);
                        $postExcerpt = implode(" ", $postExcerpt);
                    }
                    $postHtml .= "<p style='color:" . $postExcerptColor . ";font-size:" . $attr['excerpt'][0]['fontSize'] . "px;' class='post-excerpt'>";
                    $postHtml .= $postExcerpt;
                    $postHtml .= "</p>";
                }
                // tags
                if ($metashowshowTag) {
                    $tags = get_the_tags(get_the_ID());
                    $postHtml .= '<p class="post-tags">';
                    if (!empty($tags)) {
                        $Tagstyle = 'font-size:' . $attr['showTag'][0]['fontSize'] . 'px;background-color:' . $attr['showTag'][0]['backgroundColor'] . ';color:' . $attr['showTag'][0]['color'] . ';';
                        $tagCount = 0;
                        foreach ($tags as $tagValue) {
                            if ($attr['showTag'][0]['count'] == $tagCount) break;
                            $postHtml .= '<span style="' . $Tagstyle . '">';
                            $postHtml .= "<a href='" . get_category_link($tagValue->term_id) . "'>" . $tagValue->name . "</a>";
                            $postHtml .= '</span>';
                            $tagCount++;
                        }
                    }
                    $postHtml .= '</p>';
                }
                // tags
                $postHtml .= "</div>";
                $postHtml .= "</div>";
                $postHtml .= "</article>";
            }
        }
        $postHtml .= "</div>";
        $postHtml .= "</div>";
        // echo "</pre>";
        wp_reset_postdata();
        return $postChecker ? $postHtml : false;
    } else {
        return "<div>No post found.</div>";
    }
}
