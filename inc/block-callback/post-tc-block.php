<?php
wpgt_register_block_fn('zita-post-tc',  [
    "render_callback" => "zita_two_column_block",
    'attributes' => [
        'numberOfPosts' => [
            'type' => "number",
            "default" => 3
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
                // "left_border" => true
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
        'excerpt2' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 10,
                "color" => 'grey',
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    ]
]);
