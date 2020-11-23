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
    $args = [
        "post_per_page" => $attr['numberOfPosts']
    ];
    $query = new WP_Query($args);
    $post = '';
    if ($query->have_posts()) {
        $post .= '<div class="zita-block-post"><ul>';
        while ($query->have_posts()) {
            $query->the_post();
            $post .= "<li>";
            $post .= "<a href='" . esc_url(get_the_permalink()) . "'>" . get_the_title() . "</a>";
            $post .= "</li>";
        }
        $post .= "</ul></div>";
        wp_reset_postdata();
        return $post;
    } else {
        return "<div>No post found.</div>";
    }
}
