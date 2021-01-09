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
// zita block dynamic blocks
include_once "block-callback/post-list-grid-layout.php";
include_once "block-callback/post-slider-block.php";
include_once "block-callback/post-category-layout.php";
include_once "block-callback/post-image-layout.php";