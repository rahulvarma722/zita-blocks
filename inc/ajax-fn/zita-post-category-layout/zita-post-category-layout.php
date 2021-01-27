<?php
function zita_blocks_post_tc()
{
    $pageNo = $_POST['trigger'] == "next" ? $_POST['page'] + 1 : $_POST['page'] - 1;
    $attr = $_POST['attr'];
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        'paged' => $pageNo,
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    echo zita_blocks_post_tc_html($args, $attr) ? zita_blocks_post_tc_html($args, $attr) : 0;
    die();
}
add_action('wp_ajax_post_category_layout_block', "zita_blocks_post_tc");
add_action('wp_ajax_nopriv_post_category_layout_block', "zita_blocks_post_tc");
function zita_blocks_choose_cate()
{
    $attr = $_POST['attr'];
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        'paged' => 1,
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    echo zita_blocks_post_tc_html($args, $attr) ? json_encode(zita_blocks_post_tc_html($args, $attr, true)) : 0;
    die();
}
add_action('wp_ajax_post_category_layout_choose_category', "zita_blocks_choose_cate");
add_action('wp_ajax_nopriv_post_category_layout_choose_category', "zita_blocks_choose_cate");

// return html function
function zita_blocks_post_tc_html($args, $attr, $showNextPrev = false)
{
    if ($attr['thumbnail'][0]['enable'] == "true") {
        $args['meta_key'] = "_thumbnail_id";
    }
    $query = new WP_Query($args);
    $postHtml = "<div class='zita-post-two-column column-layout-" . $attr['meta_style'][0]["layoutPostion"] . "'>";
    $postHtmlCl1 = '<div class="column-one">';
    $postHtmlCl2 = '<div class="column-two">';
    if ($query->have_posts()) {
        $postAuthor = $attr['author'][0]['enable'] == "true"  ? true : false;
        $postAuthor2 = $attr['author2'][0]['enable']  == "true" ? true : false;
        $postDate = $attr['date'][0]['enable']  == "true"  ? true : false;
        $postDate2 = $attr['date2'][0]['enable']  == "true" ? true : false;
        $postDateModify = $attr['date'][0]['last_modified']  == "true" ? true : false;
        $postDateModify2 = $attr['date2'][0]['last_modified']  == "true" ? true : false;
        $postExcerpt = $attr['excerpt'][0]['enable']  == "true"  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postExcerpt2 = $attr['excerpt2'][0]['enable'] == "true"  ? true : false;
        $postExcerpt2Color = $postExcerpt2 && $attr['excerpt2'][0]['color'] ? $attr['excerpt2'][0]['color'] : "";
        $checkFirst = true;
        while ($query->have_posts()) {
            $query->the_post();
            if ($checkFirst) {
                $checkFirst = false;
                $postHtmlCl1 .= zita_blocks_returnHtmlPost($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt, $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $attr["postCategories"], $attr['thumbnail']);
            } else {
                $postHtmlCl2 .= zita_blocks_returnHtmlPost($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style'], $postDate2, $postExcerpt2,  $attr['excerpt2'], $postDateModify2, $postExcerpt2Color, $attr['showTag2'], $attr["postCategories"], $attr['thumbnail']);
            }
        }
        $postHtmlCl1 .=  '</div>';
        $postHtmlCl2 .= '</div>';
        $postHtml .= $postHtmlCl1 . $postHtmlCl2;
        $postHtml .= '</div>';

        // for category click 
        if ($showNextPrev === true) {
            $totalPosts = $query->found_posts;
            $currentPage = null;
            if ($totalPosts > $attr['numberOfPosts']) {
                $pagesOfPost = ceil($totalPosts / $attr['numberOfPosts']);
                $currentPage = json_encode(array("current" => 1, "total" => $pagesOfPost));
            }
            $returnObj = ["nextprev" => $currentPage];
        }
        // echo "</pre>";
        wp_reset_postdata();
        if ($showNextPrev === false) {
            return $postHtml;
        } else {
            $returnObj['html'] = $postHtml;
            return $returnObj;
        }
    }
}
