<?php
if (!defined('ABSPATH')) exit;
// Register your block
// zita_blocks_register_block_fn('test-block', $extraFeature = []);
zita_blocks_register_block_fn('icon-image-content');
zita_blocks_register_block_fn('icon-block');
zita_blocks_register_block_fn('block-column');
zita_blocks_register_block_fn('block-column-parent');
zita_blocks_register_block_fn('pricing-table-section');
zita_blocks_register_block_fn('pricing-table-table');
zita_blocks_register_block_fn('progress-block');
zita_blocks_register_block_fn('progress-bar-pie');
zita_blocks_register_block_fn('slide');
// zita block dynamic blocks
include_once "block-callback/post-list-layout.php";
include_once "block-callback/post-slider-block.php";
include_once "block-callback/post-category-layout.php";
include_once "block-callback/post-grid-layout.php";
// post image layout
include_once "block-callback/post-image-layout.php";
include_once "block-callback/post-image-layout-two-post.php";
include_once "block-callback/post-image-layout-three-post.php";
include_once "block-callback/post-image-layout-four-post.php";
include_once "block-callback/post-image-layout-five-post.php";
include_once "block-callback/post-image-layout-six-post.php";
