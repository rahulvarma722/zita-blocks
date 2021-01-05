<?php
wpgt_register_block_fn('zita-post',  [
    "render_callback" => "mytheme_blocks_render_latest_post_block",
    'attributes' => [
        'numberOfPosts' => [
            'type' => "number",
            "default" => 3
        ],
        "columnLayout" => [
            "type" => "string",
            "default" => "grid"
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
                "fontSize" => 30,
                "color" => "white",
                "backgroundColor" => "black",
                "align" => "left",
                // "customWidth" => false,
                "width" => 10,
                "fontWeight" => 600
            ]]
        ],
        "thumbnail" => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "typeShow" => 'all',
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
                "left_border" => true,
                "fontSize" => 14
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
                "enable" => true,
                "customColor" => false,
                "color" => "white",
                "backgroundColor" => "black",
                "fontSize" => 12
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
