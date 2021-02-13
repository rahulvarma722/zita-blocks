<?php
add_action("rest_api_init", "zita_blocks_post_apis");
function zita_blocks_post_apis()
{
    register_rest_route("zita-blocks-post-api/v3", "posts", [
        'methods' => WP_REST_SERVER::CREATABLE,
        "callback" => "zita_blocks_post_apis_result",
        'permission_callback' => '__return_true',
    ]);
}
function zita_blocks_post_apis_result(\WP_REST_Request $request)
{
    $request_params  = $request->get_params();
    // first time initillize
    $firstTimeInit = isset($request_params['initialize']) && intval($request_params['initialize']) ? true : false;
    // number of post 
    $numberOfPost = isset($request_params['numberOfPosts']) && intval($request_params['numberOfPosts']) ? intval($request_params['numberOfPosts']) : false;
    //post category
    $postCategories = isset($request_params['postCategories']) && $request_params['postCategories'] != '' ? sanitize_text_field($request_params['postCategories']) : false;
    //featured image
    $featured_image = isset($request_params['featured_image']) && intval($request_params['featured_image']) ? intval($request_params['featured_image']) : false;

    if ($numberOfPost) {
        $sendArgument = ['posts_per_page' => $numberOfPost];
        // category filter by slug
        if ($postCategories) {
            $sendArgument['category_name'] = $postCategories;
        }
        // category filter by slug
        if ($featured_image) {
            $sendArgument['meta_key'] = '_thumbnail_id';
        }
        // =======++++++++data retrived++++++++========
        if ($firstTimeInit) {
            return Zita_blocks_Post_Api_firstTimeIntilize($sendArgument);
        } else {
            return Zita_blocks_Post_Filter($sendArgument);
        }
    }
}
// post filter time init function 
function Zita_blocks_Post_Filter($sendArgument)
{
    $args = array('post_type' => 'post');
    $args = array_merge($args, $sendArgument);
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        $returnPostData = [
            'posts' => [],
            "totalPost" => $query->found_posts,
        ];
        while ($query->have_posts()) {
            $query->the_post();
            $singlePost = [];
            $singlePost['author'] = get_the_author();
            $singlePost['postTitle'] = get_the_title();
            if (get_the_permalink()) {
                $singlePost['feature_image'] = get_the_post_thumbnail_url();
            }
            $singlePost['post_categories'] = get_the_category();
            $singlePost['post_date'] = get_the_date();
            $singlePost['post_modified_date'] = get_the_modified_date();
            $singlePost['post_excerpt'] = get_the_excerpt();
            $singlePost['post_tag'] = get_the_tags(get_the_ID());
            $returnPostData['posts'][] = $singlePost;
        }
    }
    return isset($returnPostData) && !empty($returnPostData) ? $returnPostData : false;
}
// first time init function 
function Zita_blocks_Post_Api_firstTimeIntilize($sendArgument)
{
    $args = array('post_type' => 'post');
    $args = array_merge($args, $sendArgument);
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        $allCategory = get_terms(
            array(
                'taxonomy' => 'category',
                'fields'   => 'all',
                'hide_empty' => true,
            )
        );
        $allCategory = wp_json_encode($allCategory);
        $allCategory = json_decode($allCategory, true);
        $returnPostData = [
            'posts' => [],
            "totalPost" => $query->found_posts,
            "category" => $allCategory
        ];
        while ($query->have_posts()) {
            $query->the_post();
            $singlePost = [];
            $singlePost['author'] = get_the_author();
            $singlePost['postTitle'] = get_the_title();
            if (get_the_permalink()) {
                $singlePost['feature_image'] = get_the_post_thumbnail_url();
            }
            $singlePost['post_categories'] = get_the_category();
            $singlePost['post_date'] = get_the_date();
            $singlePost['post_modified_date'] = get_the_modified_date();
            $singlePost['post_excerpt'] = get_the_excerpt();
            $singlePost['post_tag'] = get_the_tags(get_the_ID());
            $returnPostData['posts'][] = $singlePost;
        }
    }
    return isset($returnPostData) && !empty($returnPostData) ? $returnPostData : false;
}
