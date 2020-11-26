<?php
/*
Plugin Name: A zita-blocks
slug: zita-blocks
*/
define('WPPB_PLUGIN_URL', plugins_url('zita-blocks') . '/');
define('WPPB_PLUGIN_PATH', plugin_dir_path(__FILE__));
include "inc/inc.php";
include "inc/fn.php";
function zita_register_block()
{
	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		WPPB_PLUGIN_URL . 'dist/editor.js',
		array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
		1
	);
	// Register JavasScript File src/script.js
	wp_register_script(
		'my-custom-block-script',
		WPPB_PLUGIN_URL . 'dist/script.js'
	);
	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		WPPB_PLUGIN_URL . 'dist/editor.css',
		array('wp-edit-blocks'),
		1
	);
	if (!is_admin()) {
		wp_register_style(
			'frontend-style',
			WPPB_PLUGIN_URL . 'dist/script.css',
		);
	}
	wp_localize_script(
		'my-custom-block',
		'plugin_url',
		array(
			'url' => WPPB_PLUGIN_URL
		)
	);
	include "inc/blocks.php";
}
add_action('init', 'zita_register_block');
// enque css icon file
function zita_blocks_script()
{
	wp_enqueue_style('fontawesom-css', WPPB_PLUGIN_URL . 'assets/fontawesome/css/all.css', false);
	// wp_enqueue_style('google-font', FONT_FAMILY_LINK, false);
	wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700&display=swap', false);
}
add_action('admin_enqueue_scripts', 'zita_blocks_script');
add_action('wp_enqueue_scripts', 'zita_blocks_script');
function mytheme_setup()
{
	add_theme_support('align-wide');
}
add_action('after_setup_theme', 'mytheme_setup');
