<?php
function zita_blocks_post_image_five_post()
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
    echo zita_blocks_post_image_five_post_html($args, $attr) ? zita_blocks_post_image_five_post_html($args, $attr) : 0;
    die();
}
add_action('wp_ajax_post_image_five_post', "zita_blocks_post_image_five_post");
add_action('wp_ajax_nopriv_post_image_five_post', "zita_blocks_post_image_five_post");
// return html function
function zita_blocks_post_image_five_post_html($args, $attr)
{
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable'] == "true" ? true : false;
        $postAuthor2 = isset($attr['author2'][0]['enable']) && $attr['author2'][0]['enable'] == "true" ? true : false;
        // $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable'] == "true" ? true : false;
        // $postDate2 = isset($attr['date2'][0]['enable']) && $attr['date2'][0]['enable']  == "true" ? true : false;
        // $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified'] == "true" ? true : false;
        // $postDateModify2 = isset($attr['date2'][0]['last_modified']) && $attr['date2'][0]['last_modified'] == "true"  ? true : false;
        // $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable'] == "true" ? true : false;
        // $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        // $postExcerpt2 = isset($attr['excerpt2'][0]['enable']) && $attr['excerpt2'][0]['enable'] == "true" ? true : false;
        // $postExcerpt2Color = $postExcerpt2 && $attr['excerpt2'][0]['color'] ? $attr['excerpt2'][0]['color'] : "";

        $checkFirst = true;
        $postHtml = '';
        $columnOne = '<div><div class="column-count column-count-1">';
        $columnTwo = '<div><div class="column-count column-count-2">';
        while ($query->have_posts()) {
            $query->the_post();
            if ($attr['layout'][0]['type'] == 2) {
                if ($CountTwoLayout > 4) {
                    $columnOne .= zita_blocks_returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $attr['date'], $attr['excerpt'], $attr['showTag'], $args, [["enable" => true]], $attr['layout'][0]);
                } else {
                    $CountTwoLayout++;
                    $columnTwo .= zita_blocks_returnHtmlListPost($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style2'], $attr['date2'], $attr['excerpt2'], $attr['showTag2'], $args, [["enable" => true]], $attr['layout'][0]);
                }
            } else if ($attr['layout'][0]['type'] == 3) {
                $postHtml .= zita_blocks_returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $attr['date'], $attr['excerpt'], $attr['showTag'], $args, [["enable" => true]], $attr['layout'][0]);
            } else {
                if ($checkFirst) {
                    $checkFirst = false;
                    $columnOne .= zita_blocks_returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $attr['date'], $attr['excerpt'], $attr['showTag'], $args, [["enable" => true]], $attr['layout'][0]);
                } else {
                    $columnTwo .= zita_blocks_returnHtmlListPost($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style2'], $attr['date2'], $attr['excerpt2'], $attr['showTag2'], $args, [["enable" => true]], $attr['layout'][0]);
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
