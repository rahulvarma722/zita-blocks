<?php
// add category 
function my_plugin_block_categories($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'zita-category',
                'title' => __('Zita Block', 'zita-blocks'),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter('block_categories', 'my_plugin_block_categories', 10, 2);
// register blocks common function
function wpgt_register_block_fn($blockName, $extraFeature = [])
{
    register_block_type(
        'zita-blocks/' . $blockName,
        array_merge(array(
            'editor_script' => 'my-custom-block',
            'editor_style'  => 'my-custom-block-editor-style',
            'script'  => 'my-custom-block-script',
            'style'         => 'frontend-style'
        ), $extraFeature)
    );
}
// zita post callback function
function mytheme_blocks_render_latest_post_block($attr)
{
    // echo "<pre>";
    // print_r($attr);
    $args = [
        "post_per_page" => $attr['numberOfPosts']
    ];
    $query = new WP_Query($args);
    $postHtml = '';
    if ($query->have_posts()) {
        $postHtml .= '<div class="zita-block-post">';
        $postHtml .= "<div class='column-count column-count-" . $attr['numberOfColumn'] . "'>";
        $postAuthor = isset($attr['author'][0]['enable']) && $attr['author'][0]['enable']  ? true : false;
        $postDate = isset($attr['date'][0]['enable']) && $attr['date'][0]['enable']  ? true : false;
        $postExcerpt = isset($attr['excerpt'][0]['enable']) && $attr['excerpt'][0]['enable']  ? true : false;
        $postExcerptColor = $postExcerpt && $attr['excerpt'][0]['color'] ? $attr['excerpt'][0]['color'] : "";
        $postThumbnail = isset($attr['thumbnail'][0]['enable']) && $attr['thumbnail'][0]['enable']  ? true : false;
        $metaStyleColor = isset($attr['meta_style'][0]['color']) && $attr['meta_style'][0]['color']  ? $attr['meta_style'][0]['color'] : "";
        while ($query->have_posts()) {
            $query->the_post();
            $postHtml .= "<article>";
            $postHtml .= "<div class='post-wrapper'>";
            if ($postThumbnail) {
                if (get_the_post_thumbnail_url()) {
                    $postThumbRadius = isset($attr['thumbnail'][0]['borderRadius']) && $attr['thumbnail'][0]['borderRadius']  ? $attr['thumbnail'][0]['borderRadius'] : false;
                    $postHtml .= '<div class="featured-image">';
                    $postHtml .= '<img style="border-radius:' . $postThumbRadius . 'px" src="' . get_the_post_thumbnail_url() . '"/>';
                    $postHtml .= '</div>';
                }
            }

            $postHtml .= "<div class='post-content'>";
            $postHtml .= "<" . $attr['heading'][0]['tag'] . " style='color:" . $attr['heading'][0]['color'] . "' class='post-heading'>";
            $postHtml .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
            $postHtml .= "</" . $attr['heading'][0]['tag'] . ">";
            if ($postAuthor) {
                $postHtml .= "<p style='color:" . $metaStyleColor . "' class='post-author'>";
                $postHtml .= "<a target='_blank' href='" . get_author_posts_url(get_the_author_meta('ID')) . "'>";
                $postHtml .=  get_the_author();
                $postHtml .= "</a></p>";
            }

            if ($postDate) {
                $dateYear =   get_the_date('Y');
                $dateMonth =   get_the_date('m');
                $dateDay =   get_the_date('j');
                $postHtml .= "<p style='color:" . $metaStyleColor . "' class='post-date'>";
                $postHtml .= "<a target='_blank' href='" . get_day_link($dateYear, $dateMonth, $dateDay) . "'>";
                $postHtml .=  get_the_date();
                $postHtml .= "</a></p>";
            }
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
            $postHtml .= "</div>";
            $postHtml .= "</div>";
            $postHtml .= "</article>";
        }
        $postHtml .= "</div>";
        $postHtml .= "</div>";
        // echo "</pre>";
        wp_reset_postdata();
        return $postHtml;
    } else {
        return "<div>No post found.</div>";
    }
}
