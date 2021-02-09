<?php
include_once "blocks-demo.php";
add_action("rest_api_init", "zita_blocks_layout_url");
function zita_blocks_layout_url()
{
    register_rest_route("zita-blocks-layout/v2", "search", [
        'methods' => WP_REST_SERVER::READABLE,
        "callback" => "zita_blocks_layout_url_result",
        'permission_callback' => '__return_true',
    ]);
}
function zita_blocks_layout_url_result(\WP_REST_Request $request)
{
    $request_params  = $request->get_params();
    //first time initilize
    $firstTimeInit = isset($request_params['initilaize']) && intval($request_params['initilaize']) && intval($request_params['initilaize']) == 1 ? true : false;
    //filtering price and all categories
    $request_PriceAll = isset($request_params['price_send']) && $request_params['price'] != '' ? sanitize_text_field($request_params['price']) : false;
    // filtering category 
    $request_category = isset($request_params['category']) && $request_params['category'] != '' ? sanitize_text_field($request_params['category']) : false;
    $request_price = isset($request_params['price']) && $request_params['price'] != '' ? sanitize_text_field($request_params['price']) : false;
    // filter all type of data first time init
    if ($firstTimeInit || ($request_PriceAll && $request_PriceAll == 'all')) {
        return Zita_Blocks_firstTime_init();
    } else if ($request_PriceAll) {
        return Zita_Blocks_Price_all_cate($request_PriceAll);
    } else if ($request_category && $request_price) {
        return Zita_blocks_cate_price($request_category, $request_price);
    }
}
// first time initilize
function Zita_Blocks_Price_all_cate($price)
{
    $allTemplates = zita_blocks_layout_file();
    $sendTemplate = ['categories' => [], 'demos' => []];
    // check count category 
    foreach ($allTemplates['categories'] as $cate_value) {
        $countDemo = 0;
        foreach ($allTemplates['demos'] as $demo_value) {
            if ($demo_value['price'] == $price && $cate_value['id'] == $demo_value['category']) {
                $countDemo++;
                $sendTemplate['demos'][] = $demo_value;
            }
        }
        if ($countDemo >= 1) {
            $cate_value["count"] = $countDemo;
            $sendTemplate['categories'][] = $cate_value;
        }
    }
    return $sendTemplate;
}
// first time initilize
function Zita_Blocks_firstTime_init()
{
    $allTemplates = zita_blocks_layout_file();
    $sendTemplate = ['categories' => [], 'demos' => $allTemplates['demos']];
    // check count category 
    foreach ($allTemplates['categories'] as $cate_value) {
        $countDemo = 0;
        foreach ($allTemplates['demos'] as $demo_value) {
            if ($cate_value['id'] == $demo_value['category']) {
                $countDemo++;
            }
        }
        if ($countDemo >= 1) {
            $cate_value["count"] = $countDemo;
            $sendTemplate['categories'][] = $cate_value;
        }
    }
    return $sendTemplate;
}
//category and price will filter
function Zita_blocks_cate_price($request_category, $request_price)
{
    $allTemplates = zita_blocks_layout_file();
    $sendTemplate = [];
    foreach ($allTemplates['demos'] as $template_value) {
        // filter category 
        if ($request_category == 'all') {
            if ($request_price == 'all') {
                $sendTemplate[] = $template_value;
            } else if ($request_price == $template_value['price']) {
                $sendTemplate[] = $template_value;
            }
        } else if ($request_category == $template_value['category']) {
            if ($request_price == 'all') {
                $sendTemplate[] = $template_value;
            } else if ($request_price == $template_value['price']) {
                $sendTemplate[] = $template_value;
            }
        }
    }
    // send data filtered
    return !empty($sendTemplate) ? $sendTemplate : false;
}
