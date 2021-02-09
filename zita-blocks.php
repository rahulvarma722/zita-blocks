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
// /////////////////+++++++++++++++++++
add_action('init', 'zita_blocks_pattern');

function zita_blocks_pattern()
{
	register_block_pattern_category(
		'zita-blocks-pattern',
		array('label' => __('Zita block PAttern', 'zita-blocks'))
	);
	register_block_pattern(
		'zita-blocks-pattern/zita-blocks-pattern2e',
		array(
			'title'       => __('zita Blocks -> Two buttons', 'zita-blocks'),
			'description' => __('zita blocks pattern exccc 1st', 'zita blocks pattern exccc 2st', 'zita-blocks'),
			'content'     => '<!-- wp:zita-blocks/progress-block -->
			<div class="wp-block-zita-blocks-progress-block thk-progress-bar-wrapper"><div class="zita-linear-progress-bar front_" percent="40" delay="10"><div class="txt-section"><p>Percent title</p><span class="percent_"></span></div><div style="height:12px;border-radius:undefinedpx" class="line_"><div style="background-color:yellow" class="line-inner_"></div></div></div></div>
			<!-- /wp:zita-blocks/progress-block -->
			
			<!-- wp:zita-blocks/progress-bar-pie -->
			<div class="wp-block-zita-blocks-progress-bar-pie thk-progress-bar-wrapper-pie"><div class="zita-block-pie-circle front_"><div class="pie-circle_"><div class="text-sction"><span class="title_" style="font-size:undefinedpx">Add Title</span><span class="percent_" style="font-size:18px;color:black"></span></div><svg height="175" width="175" data="{&quot;radius&quot;:80,&quot;strokeWidth&quot;:15,&quot;strokeColor&quot;:&quot;blue&quot;,&quot;strokeBgColor&quot;:&quot;grey&quot;,&quot;lineCap&quot;:false,&quot;animationDelay&quot;:10,&quot;text&quot;:50}"><circle cx="87.5" cy="87.5" r="80" fill="pink"></circle><circle cx="87.5" cy="87.5" r="80" fill="none" stroke-width="15" stroke="grey"></circle><circle class="percent-apply" r="80" cx="87.5" cy="87.5" fill="none" stroke-linecap="flat"></circle></svg></div></div></div>
			<!-- /wp:zita-blocks/progress-bar-pie -->
			
			<!-- wp:zita-blocks/zita-post-slider {"sliderSetting":[{"dimension":{"width":true,"custom_width":489,"height":false,"custom_height":360},"sliderEffect":"slideEffect","linearTrigger":{"enable":true,"fontSize":10,"color":"white","activeColor":"#652efd","trigger":"bullet","place":"in"},"leftRightTrigger":{"enable":true,"fontSize":14,"color":"#652efd","backgroundColor":"transparent"},"autoTrigger":{"enable":true,"delay":3},"overlayColor":"rgba(112,112,112,0.35)","contentAlign":"center"}]} /-->',
			"categories" => ['zita-blocks-pattern']
		)
	);
}
// /////////////////+++++++++++++++++++


function zita_blocks_register_block()
{
	// Register JavasScript File build/index.js
	wp_register_script(
		'zita-blocks-editor-secript',
		ZITA_BLOCKS_PLUGIN_URL . 'dist/editor.js',
		array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-html-entities', "wp-i18n"),
		1
	);
	// Register JavasScript File src/script.js
	wp_register_script(
		'zita-blocks-script',
		ZITA_BLOCKS_PLUGIN_URL . 'dist/script.js',
	);
	// Register editor style src/editor.css
	wp_register_style(
		'zita-blocks-editor-style',
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
		'zita-blocks-editor-secript',
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
