<?php
// zita post section callback function
function zita_section_block($attr)
{
    // echo "<pre>";
    // print_r($attr);
    // echo "</pre>";


    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    $query = new WP_Query($args);
    // echo $attr['numberOfPosts'];
    // return;
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
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        $metashowCate = isset($attr['showCate'][0]['enable']) && $attr['showCate'][0]['enable']  ? true : false;
        $metashowCate2 = isset($attr['showCate2'][0]['enable']) && $attr['showCate2'][0]['enable']  ? true : false;
        $metashowshowTag = isset($attr['showTag'][0]['enable']) && $attr['showTag'][0]['enable']  ? true : false;
        $postHtml = "<div class='zita-section-post' id='zita-section-post'>";
        if ($attr['numberOfPosts'] == 1 || $attr['numberOfPosts'] == 2 || $attr['numberOfPosts'] == 4 || $attr['numberOfPosts'] == 6) {
            $numberOfColumn = $attr['numberOfPosts'] == 2 || $attr['numberOfPosts'] == 4 ? 2 : 3;
            if ($attr['numberOfPosts'] == 1) {
                $numberOfColumn = 1;
            }
            $postHtml .= "<div class='column-count column-count-" . $numberOfColumn . "'>";
            while ($query->have_posts()) {
                $query->the_post();
                $postHtml .= returnHtmlPost($postThumbnail, $metashowCate, $attr['heading'], $postAuthor, $metaStyleColor, $postDate, $postExcerpt, $attr['excerpt'], $postDateModify, $postExcerptColor, $metashowshowTag);
            }
            $postHtml .= "</div>";
        } else if ($attr['numberOfPosts'] == 3 || $attr['numberOfPosts'] == 5) {
            $postHtml .= "<div class='parent-column-two count-" . $attr['numberOfPosts'] . "'>";
            $checkFirst = true;
            $numberOfColumn = $attr['numberOfPosts'] == 3  ? 1 : 2;
            $columnOne = '<div><div class="column-count column-count-1">';
            $columnTwo = '<div><div class="column-count column-count-' . $numberOfColumn . '">';
            while ($query->have_posts()) {
                $query->the_post();
                if ($checkFirst) {
                    $checkFirst = false;
                    $columnOne .= returnHtmlPost($postThumbnail, $metashowCate, $attr['heading'], $postAuthor, $metaStyleColor, $postDate, $postExcerpt,  $attr['excerpt'], $postDateModify, $postExcerptColor, $metashowshowTag);
                } else {
                    $columnTwo .= returnHtmlPost($postThumbnail, $metashowCate2, $attr['heading2'], $postAuthor2, $metaStyleColor, $postDate2, $postExcerpt2,  $attr['excerpt2'], $postDateModify2, $postExcerpt2Color, $metashowshowTag);
                }
            }
            $columnOne .= "</div></div>";
            $columnTwo .= "</div></div>";
            $postHtml .= $columnOne;
            $postHtml .= $columnTwo;
            $postHtml .= "</div>";
        }
        $postHtml .= '</div>';
        // echo "</pre>";
        wp_reset_postdata();
        return $postHtml;
    } else {
        return "<div>No post found.</div>";
    }
}

// echo 'hello'. $koooo;
// fnnn
function returnHtmlPost($postThumbnail, $metashowCate, $heading__, $postAuthor, $metaStyleColor, $postDate, $postExcerpt, $postExcerpt__, $postDateModify, $postExcerptColor, $metashowshowTag)
{
    $postHtmlCl1 = "<article class='block-post-article'>";
    $postHtmlCl1 .= "<div class='post-wrapper' id='post-wrapper'>";
    if ($postThumbnail) {
        if (get_the_post_thumbnail_url()) {
            $postHtmlCl1 .= '<div class="featured-image">';
            $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>";
            $postHtmlCl1 .= '<img src="' . get_the_post_thumbnail_url() . '"/>';
            $postHtmlCl1 .= '</a>';
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
    $postHtmlCl1 .= "<" . $heading__[0]['tag'] . " style='color:" . $heading__[0]['color'] . ";font-size:" . $heading__[0]['fontSize'] . "px;' class='post-heading'>";
    $postHtmlCl1 .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
    $postHtmlCl1 .= "</" . $heading__[0]['tag'] . ">";
    $postHtmlCl1 .= '<div class="post-meta-all">';
    if ($postAuthor) {
        $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . "' class='post-author'>";
        $postHtmlCl1 .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
        $postHtmlCl1 .=  get_the_author();
        $postHtmlCl1 .= "</a></p>";
    }
    if ($postDate) {
        $postHtmlCl1 .= $postAuthor ? '<span class="slash">/</span>' : '';
        $dateYear =   get_the_date('Y');
        $dateMonth =   get_the_date('m');
        $dateDay =   get_the_date('j');
        $postHtmlCl1 .= "<p style='color:" . $metaStyleColor . "' class='post-date'>";
        $postHtmlCl1 .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
        $postHtmlCl1 .=  get_the_date();
        $postHtmlCl1 .= "</a></p>";
    }
    if ($postDateModify) {
        $postHtmlCl1 .= ($postDate || $postAuthor) ? '<span class="slash">/</span>' : '';
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
        // echo "length ---->> ";
        // print_r($postExcerpt__);
        $exLength = isset($postExcerpt__[0]['words']) && $postExcerpt__[0]['words']  ? $postExcerpt__[0]['words'] : false;
        if ($exLength) {
            $postExcerpt = explode(" ", $postExcerpt);
            $postExcerpt = array_slice($postExcerpt, 0, $exLength);
            $postExcerpt = implode(" ", $postExcerpt);
        }
        $postHtmlCl1 .= "<p style='color:" . $postExcerptColor . "' class='post-excerpt'>";
        $postHtmlCl1 .= $postExcerpt;
        $postHtmlCl1 .= "<a class='read-more' href='" . esc_url(get_the_permalink()) . "'>Read More</a>";
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
    return $postHtmlCl1;
}
