<?php
// zita block post slider
wpgt_register_block_fn('zita-post-slider',  [
    "render_callback" => "mytheme_blocks_render_post_slider",
    'attributes' => array(
        'sliderSetting' => [
            'type' => "array",
            'default' => [
                [
                    "dimension" => [
                        "width" => false,
                        "custom_width" => 580,
                        "height" => false,
                        "custom_height" => 360,
                    ],
                    "sliderEffect" => "fadeEffect",
                    "linearTrigger" => [
                        "enable" => true,
                        "fontSize" => 20,
                        "color" => "rgba(231,192,192,1)",
                        "activeColor" => "rgba(68,222,68,1)",
                        "trigger" => "bullet",
                        "place" => "in"
                    ],
                    "leftRightTrigger" => [
                        "enable" => true,
                        "fontSize" => 20,
                        "color" => "rgba(231,192,192,1)",
                        "backgroundColor" => "rgb(128, 128, 128)",
                    ],
                    "autoTrigger" => [
                        "enable" => true,
                        "delay" => 4,
                    ],
                    "overlayColor" => "#717167c7",
                    "contentAlign" => "left"
                ],
            ],
        ],
        'numberOfPosts' => [
            'type' => "number",
            "default" => 3
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
                "color" => "white",
                "left_border" => true,
                "fontSize" => 14
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
                "fontSize" => 12,
                "count" => 2,
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                // "customColor" => false,
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
                "color" => '',
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    )
]);
