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
include "block-callback/post-fn.php";
include "block-callback/post-slider.php";
