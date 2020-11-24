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
        'heading' => [
            'type' => "array",
            "default" => [[
                "tag" => 'p',
                "fontSize" => 15,
                "color" => 'green',
            ]]
        ],
        "author" => [
            "type" => "array",
            "default" => [["enable" => false]]
        ],
        'date' => [
            "type" => "array",
            "default" => [[
                "enable" => true
            ]]
        ],
        'excerpt' => [
            'type' => "array",
            "default" => [[
                "enable" => true,
                "words" => 50
            ]]
        ],
        "thumbnail" => [
            "type" => "array",
            "default" => [[
                "enable" => true,
                "borderRadius" => 0
            ]]
        ],
        "postCategories" => [
            "type" => "array",
            "default" => []
        ]
    ]
]);
