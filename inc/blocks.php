<?php
// Register your block
// wpgt_register_block_fn('test-block', $extraFeature = []);
wpgt_register_block_fn('icon-image-content');
wpgt_register_block_fn('icon-block');
wpgt_register_block_fn('block-column');
wpgt_register_block_fn('block-column-parent');
wpgt_register_block_fn('pricing-table-section');
wpgt_register_block_fn('pricing-table-table');
wpgt_register_block_fn('progress-block');
wpgt_register_block_fn('progress-bar-pie');
wpgt_register_block_fn('slide');
// zita block post
wpgt_register_block_fn('zita-post',  [
    "render_callback" => "mytheme_blocks_render_latest_post_block",
    'attributes' => [
        'numberOfPosts' => [
            'type' => "number",
            "default" => 3
        ],
        "numberOfColumn" => [
            "type" => "number",
            "default" => 2
        ],
        "title" => [
            "type" => "array",
            "default" => [[
                'enable' => true,
                "value" => "My block title",
                "color" => "black",
                "fontSize" => 30
            ]]
        ],
        "thumbnail" => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "borderRadius" => 10
            ]]
        ],
        'heading' => [
            'type' => "array",
            "default" => [[
                "tag" => 'h1',
                "fontSize" => 30,
                "color" => '#616161',
            ]]
        ],
        "meta_style" => [
            "type" => "array",
            "default" => [[
                "color" => "#8e8c8d",
                "left_border" => true
            ]]
        ],
        "author" => [
            "type" => "array",
            "default" => [["enable" => false]]
        ],
        'date' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "last_modified" => true
            ]]
        ],
        'showCate' => [
            "type" => "array",
            "default" => [[
                "enable" => true
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => true
            ]]
        ],
        'excerpt' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 17,
                "color" => '#7d7d7d',
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    ]
]);
// zita block post slider
wpgt_register_block_fn('zita-post-slider',  [
    "render_callback" => "mytheme_blocks_render_post_slider",
    'attributes' => [
        'numberOfPosts' => [
            'type' => "number",
            "default" => 3
        ],
        "numberOfColumn" => [
            "type" => "number",
            "default" => 2
        ],
        "title" => [
            "type" => "array",
            "default" => [[
                'enable' => true,
                "value" => "My block title",
                "color" => "black",
                "fontSize" => 30
            ]]
        ],
        "thumbnail" => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "borderRadius" => 10
            ]]
        ],
        'heading' => [
            'type' => "array",
            "default" => [[
                "tag" => 'h1',
                "fontSize" => 30,
                "color" => '',
            ]]
        ],
        "meta_style" => [
            "type" => "array",
            "default" => [[
                "color" => "",
                "left_border" => true
            ]]
        ],
        "author" => [
            "type" => "array",
            "default" => [["enable" => true]]
        ],
        'date' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "last_modified" => true
            ]]
        ],
        'showCate' => [
            "type" => "array",
            "default" => [[
                "enable" => true
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => true
            ]]
        ],
        'excerpt' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 17,
                "color" => '',
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    ]
]);
