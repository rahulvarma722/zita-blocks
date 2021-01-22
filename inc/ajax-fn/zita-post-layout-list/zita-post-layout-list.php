<?php
function zita_post_layout_list()
{
    $attr = $_POST['attr'];
    $pageNo = $_POST['trigger'] == "next" ? $_POST['page'] + 1 : $_POST['page'] - 1;

    if(isset($_POST['page_no'])){
        $pageNo = $_POST['page_no'];
    }
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        'paged' => $pageNo,
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    echo zita_post_layout_list_html($args, $attr) ? zita_post_layout_list_html($args, $attr) : 0;
    die();
}
add_action('wp_ajax_zita_post_layout_list', "zita_post_layout_list");
add_action('wp_ajax_nopriv_zita_post_layout_list', "zita_post_layout_list");
// return html function
function zita_post_layout_list_html($args, $attr)
{
    $postThumbnail = $attr['thumbnail'][0]['typeShow'];
    if ($postThumbnail == "1") {
        $args['meta_key'] = '_thumbnail_id';
    }
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable'] == "true" ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable'] == "true" ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified'] == "true" ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable'] == "true" ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postChecker = false;
        $postHtml = '';
        while ($query->have_posts()) {
            $query->the_post();
            if ($postThumbnail == "1") {
                if (!$postChecker) {
                    $postChecker = true;
                }
                $postHtml .= returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt, $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $args, $attr['thumbnail']);
            } else {
                if (!$postChecker) {
                    $postChecker = true;
                }
                $postHtml .= returnHtmlListPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt, $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $args, $attr['thumbnail']);
            }
        }
        wp_reset_postdata();
        return $postChecker ? $postHtml : false;
    }
}
