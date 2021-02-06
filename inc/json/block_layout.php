<?php
include_once "blocks_layouts.php";
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
    $req_category = isset($request_params['category']) && $request_params['category'] != '' ? $request_params['category'] : false;
    $allTemplates = zita_blocks_layout_file();
    $sendTemplate = [];
    // filter all type of data
    if ($req_category && $req_category != "all") {
        foreach ($allTemplates as $template_value) {
            // filter category 
            if ($template_value['category'] == $req_category) {
                $sendTemplate[] = $template_value;
            }
        }
        // send data filtered
        return !empty($sendTemplate) ? $sendTemplate : false;
    } else {
        // send data without filtered
        return $allTemplates;
    }
    // $layouts = zita_blocks_layout_file();
    // $layouts = array_merge($layouts, [["category-comes" => $req_category], ["category-comes" => $request_params]]);
    // return $layouts;
}
