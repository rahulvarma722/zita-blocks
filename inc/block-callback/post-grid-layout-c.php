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
    $postThumbnail = $attr['thumbnail'][0]['typeShow'];
    if ($postThumbnail == "1") {
        $args['meta_key'] = '_thumbnail_id';
    }
    // typeShow
    $query = new WP_Query($args);
    $postHtml = '';
    if ($query->have_posts()) {
        $currentPage = $postSetting = "";
        $totalPosts = $query->found_posts;
        $pagesOfPost = ceil($totalPosts / $attr['numberOfPosts']);
        $currentPage = json_encode(array("current" => 1, "total" => $pagesOfPost));
        $postSetting = json_encode($attr);

        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postThumbnail = $attr['thumbnail'][0]['typeShow'];
        $metaLeftBorder = isset($attr['meta_style'][0]['left_border']) && $attr['meta_style'][0]['left_border']  ? "left-border" : "";
        $postHtml .= '<div class="zita-block-post zita-image-section" id="zita-block-post" style="background-color:' . $attr['meta_style'][0]['blockBgColor'] . '">';
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
        $gridColumn = $attr['numberOfColumn'];
        $postHtml .= "<div class='grid-layout-section column-count column-count-" . $gridColumn . " " . $metaLeftBorder . "' data-setting='" . $postSetting . "' data-currentpage='" . $currentPage . "'>";
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
            $postHtml .= "<div class='zita-two-post-wrapper-next-prev " . $keepDisable . "'>
                            <div data-section='grid-post' style='" . $nextPrevStyle . "' class='zita-image-section-np disable prev'>
                                <i class='fas fa-chevron-left'></i>
                            </div>
                            <div data-section='grid-post' style='" . $nextPrevStyle . "' class='zita-image-section-np next'>
                                <i class='fas fa-chevron-right'></i>
                            </div>
                        </div>";
        }
        $postHtml .= "</div>";
        // echo "</pre>";
        wp_reset_postdata();
        return $postChecker ? $postHtml : false;
    } else {
        return "<div>No post found.</div>";
    }
}
