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
                "bgColor" => "#f1f1f1",
                "fontSize" => 14,
                "color" => "#757575",
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
                "fontSize" => 14,
                "layoutPosition" => 'left',
                "underLine" => true,
                "underLineColor" => "black",
                "blockBgColor" => "white",
                "npColor" => '#adadad',
                "npBgColor" => 'white',
                "npBgfontSize" => '16',
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
                "fontSize" => 12
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
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
        // secondary section
        "thumbnail2" => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "borderRadius" => 10
            ]]
        ],
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
                "color" => '#616161',
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
                "fontSize" => 12
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ],
        "categorynav" => [
            "type" => "array",
            "default" => [["enable" => true, "color" => "#757575", "backgroundColor" => "#f1f1f1", "fontSize" => 14]]
        ]
    ]
]);