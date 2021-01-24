<?php
// zita post section callback function
function zita_section_block_five_post($attr)
{
    $args = [
        'post_type' => 'post',
        "posts_per_page" => $attr['numberOfPosts'],
        "meta_key" => '_thumbnail_id'
    ];
    if (is_array($attr["postCategories"])  && !empty($attr["postCategories"])) {
        $args['category__in'] = $attr["postCategories"];
    }
    $query = new WP_Query($args);

    $currentPage = $postSetting = "";
    $totalPosts = $query->found_posts;
    $pagesOfPost = ceil($totalPosts / $attr['numberOfPosts']);
    $currentPage = json_encode(array("current" => 1, "total" => $pagesOfPost));
    $postSetting = json_encode($attr);

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
        $postHtml = "<div class='zita-section-post zita-image-section' id='zita-section-post'>";
        // loader
        $postHtml .= "<div class='zita-block-loader linear-bubble'>";
        $postHtml .= "<div><span></span></div>";
        $postHtml .= "</div>";
        // loader
        // post title
        if (isset($attr['title'][0]['enable']) && $attr['title'][0]['enable']) {
            $titleHeadingStyle = "style='background-color:" . $attr['title'][0]['backgroundColor'] . ";color:" . $attr['title'][0]['color'] . ";font-size:" . $attr['title'][0]['fontSize'] . "px;font-weight:" . $attr['title'][0]['fontWeight'] . ";'";
            $postHtml .= '<div style="justify-content:' . $attr['title'][0]['align'] . ';border-color:' . $attr['title'][0]['backgroundColor'] . ';" class="zita-block-post-title" id="zita-block-post-title">';
            $postHtml .= '<h4 ' . $titleHeadingStyle . ' >';
            $postHtml .= $attr['title'][0]['value'];
            $postHtml .= '</h4>';
            $postHtml .= "</div>";
        }
        $postHtml .= "<div class='zita-post-five-post parent-column-two count-3 post-three-layout-" . $attr['layout'][0]['type'] . " content-align-" . $attr['layout'][0]['contentAlign'] . "'  data-setting='" . $postSetting . "' data-currentpage='" . $currentPage . "'>";
        $checkFirst = true;
        $CountTwoLayout = 1;
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
            } else {
                if ($checkFirst) {
                    $checkFirst = false;
                    $columnOne .= returnHtmlPost_three_post($attr['showCate'], $attr['heading'], $postAuthor, $attr['meta_style'], $postDate, $postExcerpt,  $attr['excerpt'], $postDateModify, $postExcerptColor, $attr['showTag'], $attr["postCategories"], $attr['layout'][0]);
                } else {
                    $columnTwo .= returnHtmlPost_three_post($attr['showCate2'], $attr['heading2'], $postAuthor2, $attr['meta_style'], $postDate2, $postExcerpt2,  $attr['excerpt2'], $postDateModify2, $postExcerpt2Color, $attr['showTag2'], $attr["postCategories"], $attr['layout'][0]);
                }
            }
        }
        $columnOne .= "</div></div>";
        $columnTwo .= "</div></div>";

        if ($attr['layout'][0]['type'] == 2) {
            $postHtml .= $columnTwo;
            $postHtml .= $columnOne;
        } else {
            $postHtml .= $columnOne;
            $postHtml .= $columnTwo;
        }

        $postHtml .= '</div>';

        if ($attr['meta_style'][0]['npEnable']) {
            $keepDisable = $totalPosts <= $attr['numberOfPosts'] ? "disable" : '';
            $nextPrevStyle = "font-size:" . $attr['meta_style'][0]['npBgfontSize'] . "px;color:" . $attr['meta_style'][0]['npColor'] . ";background-color:" . $attr['meta_style'][0]['npBgColor'] . ";";
            $postHtml .= "<div class='zita-two-post-wrapper-next-prev " . $keepDisable . "'>
                            <div data-section='five-post' style='" . $nextPrevStyle . "' class='zita-image-section-np disable prev'>
                                <i class='fas fa-chevron-left'></i>
                            </div>
                            <div data-section='five-post' style='" . $nextPrevStyle . "' class='zita-image-section-np next'>
                                <i class='fas fa-chevron-right'></i>
                            </div>
                        </div>";
        }

        $postHtml .= '</div>';

        wp_reset_postdata();
        return $postHtml;
    } else {
        return "<div>No post found.</div>";
    }
}
