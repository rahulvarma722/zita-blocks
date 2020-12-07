<?php
function post_tc_block()
{
    // echo "<pre>";
    // print_r($_POST);
    // echo "</pre>";
    $pageNo = $_POST['trigger'] == "next" ? $_POST['page'] + 1 : $_POST['page'] - 1;
    $attr = $_POST['attr'];
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        'paged' => $pageNo,
    ];
    $query = new WP_Query($args);
    $postHtml = "<div class='zita-post-two-column'>";
    $postHtmlCl1 = '<div class="column-one">';
    $postHtmlCl2 = '<div class="column-two">';
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postThumbnail = isset($attr['thumbnail'][0]['enable']) && $attr['thumbnail'][0]['enable']  ? true : false;
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        $metashowCate = isset($attr['showCate'][0]['enable']) && $attr['showCate'][0]['enable']  ? true : false;
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
                        $postHtmlCl1 .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                        $postHtmlCl1 .= '</div>';
                    }
                }
                $postHtmlCl1 .= "<div class='post-content'>";
                // category
                if ($metashowCate) {
                    $postHtmlCl1 .= '<p class="post-category">';
                    $category_ = get_the_category();
                    if (!empty($category_)) {
                        foreach ($category_ as $cateValue) {
                            $postHtmlCl1 .= '<span>';
                            $postHtmlCl1 .= "<a href='" . get_category_link($cateValue->term_id) . "'>" . $cateValue->name . "</a>";
                            $postHtmlCl1 .= '</span>';
                        }
                    }
                    $postHtmlCl1 .= '</p>';
                }
                // category
                $postHtmlCl1 .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . "' class='post-heading'>";
                $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtmlCl1 .= "</" . $attr['heading'][0]['tag'] . ">";
                $postHtmlCl1 .= '<div class="post-meta-all">';
                if ($postAuthor) {
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . "' class='post-author'>";
                    $postHtmlCl1 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtmlCl1 .=  get_the_author();
                    $postHtmlCl1 .= "</a></p>";
                }
                if ($postDate) {
                    $postHtmlCl1 .= '<span class="slash">/</span>';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . "' class='post-date'>";
                    $postHtmlCl1 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl1 .=  get_the_date();
                    $postHtmlCl1 .= "</a></p>";
                }
                if ($postDateModify) {
                    $postHtmlCl1 .= '<span class="slash">/</span>';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . "' class='post-date-last-modified'>";
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
                    $postHtmlCl1 .= "<p style='color:" . $postExcerptColor . "' class='post-excerpt'>";
                    $postHtmlCl1 .= $postExcerpt;
                    $postHtmlCl1 .= "</p>";
                }
                // tags
                if ($metashowshowTag) {
                    $tags = get_the_tags(get_the_ID());
                    $postHtmlCl1 .= '<p class="post-tags">';
                    if (!empty($tags)) {
                        foreach ($tags as $tagValue) {
                            $postHtmlCl1 .= '<span>';
                            $postHtmlCl1 .= "<a href='" . get_category_link($tagValue->term_id) . "'>" . $tagValue->name . "</a>";
                            $postHtmlCl1 .= '</span>';
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
                        $postHtmlCl2 .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                        $postHtmlCl2 .= '</div>';
                    }
                }
                $postHtmlCl2 .= "<div class='post-content'>";
                // category
                $postHtmlCl2 .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . "' class='post-heading'>";
                $postHtmlCl2 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtmlCl2 .= "</" . $attr['heading'][0]['tag'] . ">";
                $postHtmlCl2 .= '<div class="post-meta-all">';
                if ($postAuthor) {
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor . "' class='post-author'>";
                    $postHtmlCl2 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtmlCl2 .=  get_the_author();
                    $postHtmlCl2 .= "</a></p>";
                }
                if ($postDate) {
                    $postHtmlCl2 .= '<span class="slash">/</span>';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor . "' class='post-date'>";
                    $postHtmlCl2 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl2 .=  get_the_date();
                    $postHtmlCl2 .= "</a></p>";
                }
                if ($postDateModify) {
                    $postHtmlCl2 .= '<span class="slash">/</span>';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtmlCl2 .= "<p style='color:" . $metaStyleColor . "' class='post-date-last-modified'>";
                    $postHtmlCl2 .= "Modified:<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtmlCl2 .=  get_the_modified_date();
                    $postHtmlCl2 .= "</a></p>";
                }
                $postHtmlCl2 .= '</div>';
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
        // echo "</pre>";
        wp_reset_postdata();
        echo $postHtml;
    }
    die();
}
add_action('wp_ajax_post_tc_block', "post_tc_block");
