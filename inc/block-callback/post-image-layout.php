<?php
wpgt_register_block_fn('zita-post-section',  [
    "render_callback" => "zita_section_block",
    'attributes' => [
        'numberOfPosts' => [
            'type' => "number",
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
                "borderRadius" => 10
            ]]
        ],
        'heading' => [
            'type' => "array",
            "default" => [[
                "tag" => 'h2',
                "fontSize" => 30,
                "color" => 'white',
            ]]
        ],
        "meta_style" => [
            "type" => "array",
            "default" => [[
                "color" => "white",
                "fontSize" => 14,
                // "left_border" => true
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
                "enable" => true,
                "customColor" => false,
                "color" => "white",
                "backgroundColor" => "black",
                "count" => 2,
                "fontSize" => 12
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "color" => "white",
                "backgroundColor" => "black",
                "fontSize" => 12,
                "count" => 2,
            ]]
        ],
        'excerpt' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 17,
                "color" => 'white',
                "fontSize" => 12
            ]]
        ],
        // secondary section
        "meta_style2" => [
            "type" => "array",
            "default" => [[
                "color" => "#8e8c8d",
                "fontSize" => 14
            ]]
        ],
        'heading2' => [
            'type' => "array",
            "default" => [[
                "tag" => 'h1',
                "fontSize" => 30,
                "color" => 'white',
            ]]
        ],
        'excerpt2' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 10,
                "color" => 'white',
                "fontSize" => 12
            ]]
        ],
        "author2" => [
            "type" => "array",
            "default" => [["enable" => true]]
        ],
        'date2' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "last_modified" => true
            ]]
        ],
        'showCate2' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "customColor" => false,
                "color" => "white",
                "backgroundColor" => "black",
                "count" => 2,
                "fontSize" => 12
            ]]
        ],
        'showTag2' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "color" => "white",
                "backgroundColor" => "black",
                "count" => 2,
                "fontSize" => 12
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ],
        "categorynav" => [
            "type" => "array",
            "default" => [["enable" => true,]]
        ]
    ]
]);
