<?php
// zita post slider callback function
function mytheme_blocks_render_post_slider($attr)
{
    $args = [
        "post_per_page" => $attr['numberOfPosts']
    ];
    $query = new WP_Query($args);
    $postHtml = '';
    // echo "<pre>";
    // print_r($attr);
    // echo "</pre>";
    if ($query->have_posts()) {
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postDateModify = isset($attr['date'][0]['last_modified']) && $attr['date'][0]['last_modified']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        $metashowCate = isset($attr['showCate'][0]['enable']) && $attr['showCate'][0]['enable']  ? true : false;
        $metashowshowTag = isset($attr['showTag'][0]['enable']) && $attr['showTag'][0]['enable']  ? true : false;
        // height and width
        $sliderPara = isset($attr['sliderSetting'][0])  ? $attr['sliderSetting'][0] : false;
        $slidersetting = [];
        if (isset($sliderPara["dimension"]['width']) && $sliderPara["dimension"]['width']) {
            $slidersetting["width"] = $sliderPara["dimension"]['custom_width'];
        }
        if (isset($sliderPara["dimension"]['height']) && $sliderPara["dimension"]['height']) {
            $slidersetting["height"] = $sliderPara["dimension"]['custom_height'];
        }
        // slider delay
        // autoTrigger
        $sliderDelay = isset($sliderPara['autoTrigger']["enable"]) && $sliderPara['autoTrigger']["enable"] && $sliderPara['autoTrigger']["delay"] > 0 ? $sliderPara['autoTrigger']["delay"] : 0;
        // effect 
        $sliderEffect = isset($sliderPara["sliderEffect"]) ? $sliderPara["sliderEffect"] : "fadeEffect";
        $slidersetting = json_encode($slidersetting);
        $postHtml .= '<div class="zita-block-slide-wrapper" id="zita-block-slide-wrapper">';
        $postHtml .= "<div class='zita-slider-container' sliderDelay='" . $sliderDelay . "'>";
        // next previous
        if (isset($sliderPara["leftRightTrigger"]['enable']) && $sliderPara["leftRightTrigger"]['enable']) {
            $LRfontSize = $sliderPara["leftRightTrigger"]['fontSize'];
            $LRcolor = $sliderPara["leftRightTrigger"]['color'];
            $LRbGColor = $sliderPara["leftRightTrigger"]['backgroundColor'];
            $LRstyle = 'font-size:' . $LRfontSize . 'px;' . 'color:' . $LRcolor . ';background-color:' . $LRbGColor . ';';
            $postHtml .= "<div class='zita-slider-bullet-next-prev next'>";
            $postHtml .= '<span style="' . $LRstyle . '"><i class="fas fa-arrow-right"></i></span>';
            $postHtml .= "</div>";
            $postHtml .= "<div class='zita-slider-bullet-next-prev prev'>";
            $postHtml .= '<span style="' . $LRstyle . '"><i class="fas fa-arrow-left"></i></span>';
            $postHtml .= "</div>";
        }
        // next previous
        // slider bullet

        // linear bullet 
        if (isset($sliderPara["linearTrigger"]['enable']) && $sliderPara["linearTrigger"]['enable']) {
            $LfontSize = $sliderPara["linearTrigger"]['fontSize'];
            $Lcolor = $sliderPara["linearTrigger"]['color'];
            $LactiveColor = $sliderPara["linearTrigger"]['activeColor'];
            $postHtml .= '<ul class="zita-slider-bullet-trigger" active-color="' . $LactiveColor . '" childstyle="height: ' . $LfontSize . 'px;width:20px;background-color: ' . $Lcolor . ';">';
            while ($query->have_posts()) {
                $query->the_post();
                if (get_the_post_thumbnail_url()) {
                    $postHtml .= '<li><span style="height: ' . $LfontSize . 'px;width:20px;background-color: ' . $Lcolor . ';"></span></li>';
                }
            }
            $postHtml .= '</ul>';
        }
        // slider bullet
        $postHtml .= "<ul class='zita-slider-ul-slides " . $sliderEffect . "' slidersetting='" . $slidersetting . "'>";
        while ($query->have_posts()) {
            $query->the_post();
            if (get_the_post_thumbnail_url()) {
                $postHtml .= "<li class='slides'>";
                $postHtml .= "<div class='zita-slider-wrapper' id='zita-slider-wrapper'>";
                $postHtml .= "<div class='zita-slider-container'>";
                $postHtml .= "<div class='zita-slider-content-wrapper'>";
                // three divs
                $postHtml .= '<div class="zita-slider-image-container" style="background-image: url(' . get_the_post_thumbnail_url() . ');"></div>';
                $postHtml .= "<div class='zita-slider-text'>";
                $postHtml .= "<div class='slider-post-content'>";
                $postHtml .= "<div class='post-wrapper'>";
                $postHtml .= "<div class='post-content'>";

                $postHtml .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . "' class='post-heading'>";
                $postHtml .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
                $postHtml .= "</" . $attr['heading'][0]['tag'] . ">";
                // category
                if ($metashowCate) {
                    $postHtml .= '<p class="post-category">';
                    $category_ = get_the_category();
                    if (!empty($category_)) {
                        foreach ($category_ as $cateValue) {
                            $postHtml .= '<span>';
                            $postHtml .= "<a href='" . get_category_link($cateValue->term_id) . "'>" . $cateValue->name . "</a>";
                            $postHtml .= '</span>';
                        }
                    }
                    $postHtml .= '</p>';
                }
                // category
                $postHtml .= '<div class="post-meta-all">';
                if ($postAuthor) {
                    $postHtml .= "<p style='color:" . $metaStyleColor . "' class='post-author'>";
                    $postHtml .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                    $postHtml .=  get_the_author();
                    $postHtml .= "</a></p>";
                }

                if ($postDate) {
                    $postHtml .= '<span class="slash">/</span>';
                    $dateYear =   get_the_date('Y');
                    $dateMonth =   get_the_date('m');
                    $dateDay =   get_the_date('j');
                    $postHtml .= "<p style='color:" . $metaStyleColor . "' class='post-date'>";
                    $postHtml .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                    $postHtml .=  get_the_date();
                    $postHtml .= "</a></p>";
                }
                if ($postDateModify) {
                    $postHtml .= '<span class="slash">/</span>';
                    $dateYear =   get_the_modified_date('Y');
                    $dateMonth =   get_the_modified_date('m');
                    $dateDay =   get_the_modified_date('j');
                    $postHtml .= "<p style='color:" . $metaStyleColor . "' class='post-date-last-modified'>";
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
                    $postHtml .= "<p style='color:" . $postExcerptColor . "' class='post-excerpt'>";
                    $postHtml .= $postExcerpt;
                    $postHtml .= "</p>";
                }
                // tags
                if ($metashowshowTag) {
                    $tags = get_the_tags(get_the_ID());
                    $postHtml .= '<p class="post-tags">';
                    if (!empty($tags)) {
                        foreach ($tags as $tagValue) {
                            $postHtml .= '<span>';
                            $postHtml .= "<a href='" . get_category_link($tagValue->term_id) . "'>" . $tagValue->name . "</a>";
                            $postHtml .= '</span>';
                        }
                    }
                    $postHtml .= '</p>';
                }

                $postHtml .= "</div>";
                $postHtml .= "</div>";
                $postHtml .= "</div>";
                $postHtml .= "</div>";
                // three divs
                $postHtml .= "</div>";
                $postHtml .= "</div>";
                $postHtml .= "</div>";
            }
        }
        $postHtml .= "</ul>";
        $postHtml .= "</div>";
        $postHtml .= "</div>";
        // echo "</pre>";
        wp_reset_postdata();
        return $postHtml;
    } else {
        return "<div>No post found.</div>";
    }
    // block code *******************
}
