<?php
/*
*Plugin Name: A zita-blocks
*slug: zita-blocks
* Text Domain: zita-blocks
*/
define('ZITA_BLOCKS_PLUGIN_URL', plugins_url('zita-blocks') . '/');
define('ZITA_BLOCKS_PLUGIN_PATH', plugin_dir_path(__FILE__));
include "inc/inc.php";
include "inc/fn.php";
function zita_blocks_register_block()
{
	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		ZITA_BLOCKS_PLUGIN_URL . 'dist/editor.js',
		array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-html-entities', "wp-i18n"),
		1
	);
	// Register JavasScript File src/script.js
	wp_register_script(
		'my-custom-block-script',
		ZITA_BLOCKS_PLUGIN_URL . 'dist/script.js',
	);
	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		ZITA_BLOCKS_PLUGIN_URL . 'dist/editor.css',
		array('wp-edit-blocks'),
		1
	);
	if (!is_admin()) {
		wp_register_style(
			'frontend-style',
			ZITA_BLOCKS_PLUGIN_URL . 'dist/script.css',
		);
	}
	wp_localize_script(
		'my-custom-block',
		'plugin_url',
		array(
			'url' => ZITA_BLOCKS_PLUGIN_URL
		)
	);
	include "inc/blocks.php";
}
add_action('init', 'zita_blocks_register_block');
// enque css icon file
function zita_blocks_script()
{
	wp_enqueue_style('fontawesom-css', ZITA_BLOCKS_PLUGIN_URL . 'assets/fontawesome/css/all.css', false);
	// wp_enqueue_style('google-font', FONT_FAMILY_LINK, false);
	wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700&display=swap', false);
	wp_enqueue_script('custom-query', ZITA_BLOCKS_PLUGIN_URL . 'src/custom-query.js', array('jquery'), 2);
	wp_localize_script('custom-query', 'zita_ajax_url', array('admin_ajax' => admin_url('admin-ajax.php')));
	// wp_enqueue_scripts( 'wp-utils' );

}
add_action('admin_enqueue_scripts', 'zita_blocks_script');
add_action('wp_enqueue_scripts', 'zita_blocks_script', 15);
function zita_blocks_mytheme_setup()
{
	add_theme_support('align-wide');
}
add_action('after_setup_theme', 'zita_blocks_mytheme_setup');
/*
 * 
 * 
 */
// load file important all file called here
add_action('plugins_loaded', 'zita_blocks_loaded');
function zita_blocks_loaded()
{
	include_once(ZITA_BLOCKS_PLUGIN_PATH . 'inc/ajax-fn/ajax.php');
}
