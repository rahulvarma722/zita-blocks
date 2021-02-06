<?php
// add category 
function zita_blocks_block_categories($categories, $post)
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
add_filter('block_categories', 'zita_blocks_block_categories', 10, 2);
// register blocks common function
function zita_blocks_register_block_fn($blockName, $extraFeature = [])
{
    register_block_type(
        'zita-blocks/' . $blockName,
        array_merge(array(
            'editor_script' => 'zita-blocks-editor-secript',
            'editor_style'  => 'zita-blocks-editor-style',
            'script'  => 'zita-blocks-script',
            'style'         => 'frontend-style'
        ), $extraFeature)
    );
}
// array value sanitize
function zita_blocks_array_sanitize($arr)
{
    $returnArray = [];
    if (is_array($arr)) {
        foreach ($arr as $key => $value) {
            $key = is_numeric($key) ? $key : sanitize_text_field($key);
            if (is_array($value)) {
                $returnArray[$key] = zita_blocks_array_sanitize($value);
            } else {
                $value = is_numeric($value) ? intval($value) : sanitize_text_field($value);
                $returnArray[$key] = $value;
            } //else
        } //foreach
    }
    return !empty($returnArray) ? $returnArray : false;
}
// block call back function
include "block-callback/post-slider.php";
include "block-callback/post-list-layout-c.php";
include "block-callback/post-category-layout-c.php";
include "block-callback/post-grid-layout-c.php";
include "block-callback/post-image-layout-c.php";
include "block-callback/post-image-layout-three-post-c.php";
include "block-callback/post-image-layout-four-post-c.php";
include "block-callback/post-image-layout-five-post-c.php";
//block api url function
include "json/block_layout.php";
