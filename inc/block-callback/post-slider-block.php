<?php
if (!defined('ABSPATH')) exit;
// zita block post slider
zita_blocks_register_block_fn('zita-post-slider',  [
    "render_callback" => "zita_blocks_render_post_slider",
    'attributes' => array(
        'sliderSetting' => [
            'type' => "array",
            'default' => [
                [
                    "dimension" => [
                        "width" => false,
                        "custom_width" => 900,
                        "height" => false,
                        "custom_height" => 360,
                    ],
                    "sliderEffect" => "slideEffect",
                    "linearTrigger" => [
                        "enable" => true,
                        "fontSize" => 10,
                        "color" => "white",
                        "activeColor" => "#652efd",
                        "trigger" => "bullet",
                        "place" => "in"
                    ],
                    "leftRightTrigger" => [
                        "enable" => true,
                        "fontSize" => 14,
                        "color" => "#652efd",
                        "backgroundColor" => "transparent",
                    ],
                    "autoTrigger" => [
                        "enable" => true,
                        "delay" => 3,
                    ],
                    "overlayColor" => "rgba(112,112,112,0.35)",
                    "contentAlign" => "center"
                ],
            ],
        ],
        'numberOfPosts' => [
            'type' => "number",
            "default" => 2
        ],
        "title" => [
            "type" => "array",
            "default" => [[
                'enable' => false,
                "value" => "Add Block Title",
                "fontSize" => 16,
                "color" => "white",
                "backgroundColor" => "#652efd",
                "align" => "left",
                // "customWidth" => false,
                "width" => 10,
                "fontWeight" => 400
            ]]
        ],
        'heading' => [
            'type' => "array",
            "default" => [[
                "tag" => 'h2',
                "fontSize" => 32,
                "color" => '#fffff',
            ]]
        ],
        "meta_style" => [
            "type" => "array",
            "default" => [[
                "color" => "#ffffff",
                "left_border" => true,
                "fontSize" => 12
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
                "last_modified" => false
            ]]
        ],
        'showCate' => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "customColor" => true,
                "color" => "#ffffff",
                "backgroundColor" => "rgba(54,26,234,0.45)",
                "fontSize" => 12,
                "count" => 2,
            ]]
        ],
        'showTag' => [
            "type" => "array",
            "default" => [[
                "enable" => false,
                // "customColor" => false,
                "color" => "#dfdfdf",
                "backgroundColor" => "transparent",
                "fontSize" => 12,
                "count" => 2,
            ]]
        ],
        'excerpt' => [
            'type' => "array",
            "default" => [[
                "enable" => false,
                "words" => 25,
                "color" => '#E2E2E2',
                "fontSize" => 12
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    )
]);
