<?php
function post_image_five_post()
{
    $pageNo = $_POST['trigger'] == "next" ? $_POST['page'] + 1 : $_POST['page'] - 1;
    $attr = $_POST['attr'];
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        'paged' => $pageNo,
        "meta_key" => '_thumbnail_id'
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    echo post_image_five_post_html($args, $attr) ? post_image_five_post_html($args, $attr) : 0;
    die();
}
add_action('wp_ajax_post_image_five_post', "post_image_five_post");
add_action('wp_ajax_nopriv_post_image_five_post', "post_image_five_post");
// return html function
function post_image_five_post_html($args, $attr)
{
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable'] == "true" ? true : false;
        $postAuthor2 = isset($attr['author2'][0]['enable']) && $attr['author2'][0]['enable'] == "true" ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable'] == "true" ? true : false;
        $postDate2 = isset($attr['date2'][0]['enable']) && $attr['date2'][0]['enable']  == "true" ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified'] == "true" ? true : false;
        $postDateModify2 = isset($attr['date2'][0]['last_modified']) && $attr['date2'][0]['last_modified'] == "true"  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable'] == "true" ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postExcerpt2 = isset($attr['excerpt2'][0]['enable']) && $attr['excerpt2'][0]['enable'] == "true" ? true : false;
        $postExcerpt2Color = $postExcerpt2 && $attr['excerpt2'][0]['color'] ? $attr['excerpt2'][0]['color'] : "";

        $checkFirst = true;
        $postHtml = '';
        $columnOne = '<div><div class="column-count column-count-1">';
        $columnTwo = '<div><div class="column-count column-count-2">';
        while ($query->have_posts()) {
            $query->the_post();
            if ($attr['layout'][0]['type'] == 2) {
                if ($CountTwoLayout > 4) {
                    $columnOne .= returnHtmlPost_three_post($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt,  $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $attr["postCategories"], $attr['layout'][0]);
                } else {
                    $CountTwoLayout++;
                    $columnTwo .= returnHtmlPost_three_post($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style'], $postDate2, $postExcerpt2,  $attr['excerpt2'], $postDateModify2, $postExcerpt2Color, $attr['showTag2'], $attr["postCategories"], $attr['layout'][0]);
                }
            } else if ($attr['layout'][0]['type'] == 3) {
                $postHtml .= returnHtmlPost_three_post($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt,  $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $attr["postCategories"], $attr['layout'][0]);
            } else {
                if ($checkFirst) {
                    $checkFirst = false;
                    $columnOne .= returnHtmlPost_three_post($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt,  $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $attr["postCategories"], $attr['layout'][0]);
                } else {
                    $columnTwo .= returnHtmlPost_three_post($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style'], $postDate2, $postExcerpt2,  $attr['excerpt2'], $postDateModify2, $postExcerpt2Color, $attr['showTag2'], $attr["postCategories"], $attr['layout'][0]);
                }
            }
        }
        if ($attr['layout'][0]['type'] != 3) {
            $columnOne .= "</div></div>";
            $columnTwo .= "</div></div>";

            if ($attr['layout'][0]['type'] == 2) {
                $postHtml .= $columnTwo;
                $postHtml .= $columnOne;
            } else {
                $postHtml .= $columnOne;
                $postHtml .= $columnTwo;
            }
        }
        $postHtml .= '</div>';

        wp_reset_postdata();
        return $postHtml;
    }
}
