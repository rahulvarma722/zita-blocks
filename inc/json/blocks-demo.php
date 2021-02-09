<?php
//write demos price free,premium
//and include category to appear in front 
function zita_blocks_layout_file()
{
    $zita_demos = array(
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/template-1.png',
            'category' => 'cate-1',
            'name' => 'Template 1',
            'content' => '<!-- wp:zita-blocks/progress-block --><div class="wp-block-zita-blocks-progress-block thk-progress-bar-wrapper"><div class="zita-linear-progress-bar front_" percent="40" delay="10"><div class="txt-section"><p>Percent title</p><span class="percent_"></span></div><div style="height:12px;border-radius:undefinedpx" class="line_"><div style="background-color:yellow" class="line-inner_"></div></div></div></div><!-- /wp:zita-blocks/progress-block --><!-- wp:zita-blocks/progress-bar-pie --><div class="wp-block-zita-blocks-progress-bar-pie thk-progress-bar-wrapper-pie"><div class="zita-block-pie-circle front_"><div class="pie-circle_"><div class="text-sction"><span class="title_" style="font-size:undefinedpx">Add Title</span><span class="percent_" style="font-size:18px;color:black"></span></div><svg height="175" width="175" data="{&quot;radius&quot;:80,&quot;strokeWidth&quot;:15,&quot;strokeColor&quot;:&quot;blue&quot;,&quot;strokeBgColor&quot;:&quot;grey&quot;,&quot;lineCap&quot;:false,&quot;animationDelay&quot;:10,&quot;text&quot;:50}"><circle cx="87.5" cy="87.5" r="80" fill="pink"></circle><circle cx="87.5" cy="87.5" r="80" fill="none" stroke-width="15" stroke="grey"></circle><circle class="percent-apply" r="80" cx="87.5" cy="87.5" fill="none" stroke-linecap="flat"></circle></svg></div></div></div><!-- /wp:zita-blocks/progress-bar-pie --><!-- wp:zita-blocks/zita-post-slider {"sliderSetting":[{"dimension":{"width":true,"custom_width":489,"height":false,"custom_height":360},"sliderEffect":"slideEffect","linearTrigger":{"enable":true,"fontSize":10,"color":"white","activeColor":"#652efd","trigger":"bullet","place":"in"},"leftRightTrigger":{"enable":true,"fontSize":14,"color":"#652efd","backgroundColor":"transparent"},"autoTrigger":{"enable":true,"delay":3},"overlayColor":"rgba(112,112,112,0.35)","contentAlign":"center"}]} /-->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/template-2.png',
            'category' => 'cate-1',
            'name' => 'Template 2',
            'content' => '<!-- wp:zita-blocks/icon-block --><div class="wp-block-zita-blocks-icon-block themehunk-icon-block" style="justify-content:center"><div style="flex-direction:column;background-color:#EEF6F9;padding-top:16px;padding-right:20px;padding-bottom:16px;padding-left:20px"><div class="icon-container"><i style="color:#0693e3;font-size:55px" class="fab fa-wordpress-simple"></i></div><div class="text-container"><p style="color:#0693e3;font-size:24px;margin-top:undefinedpx;margin-right:undefinedpx;margin-bottom:undefinedpx;margin-left:11px;font-family:Ubuntu Mono">Icon Title</p></div></div></div><!-- /wp:zita-blocks/icon-block -->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/three-post.png',
            'category' => 'cate-1',
            'name' => 'Three Post Layout',
            'content' => '<!-- wp:zita-blocks/progress-bar-pie {"circleRadius":128,"strokeWidth":39,"strokeColor":"#00d084","strokeBgColor":"#000000","fillBgColor":"#8ed1fc","lineCap":true,"text":66} -->
            <div class="wp-block-zita-blocks-progress-bar-pie thk-progress-bar-wrapper-pie"><div class="zita-block-pie-circle front_"><div class="pie-circle_"><div class="text-sction"><span class="title_" style="font-size:undefinedpx">Add Title</span><span class="percent_" style="font-size:18px;color:black"></span></div><svg height="295" width="295" data="{&quot;radius&quot;:128,&quot;strokeWidth&quot;:39,&quot;strokeColor&quot;:&quot;#00d084&quot;,&quot;strokeBgColor&quot;:&quot;#000000&quot;,&quot;lineCap&quot;:true,&quot;animationDelay&quot;:10,&quot;text&quot;:66}"><circle cx="147.5" cy="147.5" r="128" fill="#8ed1fc"></circle><circle cx="147.5" cy="147.5" r="128" fill="none" stroke-width="39" stroke="#000000"></circle><circle class="percent-apply" r="128" cx="147.5" cy="147.5" fill="none" stroke-linecap="round"></circle></svg></div></div></div>
            <!-- /wp:zita-blocks/progress-bar-pie -->
            <!-- wp:zita-blocks/zita-post-section-three-post {"layout":[{"type":1,"contentPlace":"inner","contentAlign":"bottom","overlayColor":"rgba(135,141,147,0.33)"}]} /-->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/pattern-1.png',
            'category' => 'cate-1',
            'name' => 'Pattern layout',
            'content' => '<!-- wp:zita-blocks/progress-block -->
			<div class="wp-block-zita-blocks-progress-block thk-progress-bar-wrapper"><div class="zita-linear-progress-bar front_" percent="40" delay="10"><div class="txt-section"><p>Percent title</p><span class="percent_"></span></div><div style="height:12px;border-radius:undefinedpx" class="line_"><div style="background-color:yellow" class="line-inner_"></div></div></div></div>
			<!-- /wp:zita-blocks/progress-block -->
			<!-- wp:zita-blocks/progress-bar-pie -->
			<div class="wp-block-zita-blocks-progress-bar-pie thk-progress-bar-wrapper-pie"><div class="zita-block-pie-circle front_"><div class="pie-circle_"><div class="text-sction"><span class="title_" style="font-size:undefinedpx">Add Title</span><span class="percent_" style="font-size:18px;color:black"></span></div><svg height="175" width="175" data="{&quot;radius&quot;:80,&quot;strokeWidth&quot;:15,&quot;strokeColor&quot;:&quot;blue&quot;,&quot;strokeBgColor&quot;:&quot;grey&quot;,&quot;lineCap&quot;:false,&quot;animationDelay&quot;:10,&quot;text&quot;:50}"><circle cx="87.5" cy="87.5" r="80" fill="pink"></circle><circle cx="87.5" cy="87.5" r="80" fill="none" stroke-width="15" stroke="grey"></circle><circle class="percent-apply" r="80" cx="87.5" cy="87.5" fill="none" stroke-linecap="flat"></circle></svg></div></div></div>
			<!-- /wp:zita-blocks/progress-bar-pie -->
			<!-- wp:zita-blocks/zita-post-slider {"sliderSetting":[{"dimension":{"width":true,"custom_width":489,"height":false,"custom_height":360},"sliderEffect":"slideEffect","linearTrigger":{"enable":true,"fontSize":10,"color":"white","activeColor":"#652efd","trigger":"bullet","place":"in"},"leftRightTrigger":{"enable":true,"fontSize":14,"color":"#652efd","backgroundColor":"transparent"},"autoTrigger":{"enable":true,"delay":3},"overlayColor":"rgba(112,112,112,0.35)","contentAlign":"center"}]} /-->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/pricing.png',
            'category' => 'cate-2',
            'name' => 'pricing layout',
            'content' => '<!-- wp:zita-blocks/pricing-table-section -->
            <div class="wp-block-zita-blocks-pricing-table-section alignwide  column-count-2"><!-- wp:zita-blocks/pricing-table-table -->
            <div class="wp-block-zita-blocks-pricing-table-table pricing-table-wrapper"><div style="background-color:#5f5f5f" class="pricing-table-top"><h3 style="font-size:29px;color:#ffffff">Basic</h3><div class="price_ inline_" style="padding-top:undefinedpx;padding-bottom:undefinedpx;padding-left:undefinedpx;padding-right:undefinedpx"><div style="color:#ffffff" class="rasied"><p style="font-size:16px">$</p><p style="font-size:50px">99</p></div><p style="font-size:undefinedpx;color:#c2c4c4">/ month</p></div><p style="font-size:undefinedpx;color:grey"></p></div><div class="pricing-table-middle" style="background-color:#2B2B2B"><div style="font-size:16px;color:white;margin-top:24px;margin-bottom:24px;text-align:center"><p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>2 User Free</p><p>Multiple Email Support</p></div></div><div class="pricing-table-bottom" style="background-color:#2B2B2B"><div class="link_button"><a style="background-color:#f1b426;font-size:undefinedpx;padding-left:45px;padding-right:45px;padding-top:14px;padding-bottom:14px">ORDER NOW</a></div><p class="bottom-text" style="color:white;font-size:undefinedpx">Terms & Conditions</p></div></div>
            <!-- /wp:zita-blocks/pricing-table-table -->
            
            <!-- wp:zita-blocks/pricing-table-table {"headingTxt":"Advance","middleTxt":"\u003cp\u003eEmail Marketing\u003c/p\u003e\u003cp\u003eEmail Builder\u003c/p\u003e\u003cp\u003eClient Testing\u003c/p\u003e\u003cp\u003e10 User Free\u003c/p\u003e\u003cp\u003eMultiple Email Support\u003c/p\u003e","priceMonth":"159"} -->
            <div class="wp-block-zita-blocks-pricing-table-table pricing-table-wrapper"><div style="background-color:#5f5f5f" class="pricing-table-top"><h3 style="font-size:29px;color:#ffffff">Advance</h3><div class="price_ inline_" style="padding-top:undefinedpx;padding-bottom:undefinedpx;padding-left:undefinedpx;padding-right:undefinedpx"><div style="color:#ffffff" class="rasied"><p style="font-size:16px">$</p><p style="font-size:50px">159</p></div><p style="font-size:undefinedpx;color:#c2c4c4">/ month</p></div><p style="font-size:undefinedpx;color:grey"></p></div><div class="pricing-table-middle" style="background-color:#2B2B2B"><div style="font-size:16px;color:white;margin-top:24px;margin-bottom:24px;text-align:center"><p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>10 User Free</p><p>Multiple Email Support</p></div></div><div class="pricing-table-bottom" style="background-color:#2B2B2B"><div class="link_button"><a style="background-color:#f1b426;font-size:undefinedpx;padding-left:45px;padding-right:45px;padding-top:14px;padding-bottom:14px">ORDER NOW</a></div><p class="bottom-text" style="color:white;font-size:undefinedpx">Terms & Conditions</p></div></div>
            <!-- /wp:zita-blocks/pricing-table-table --></div>
            <!-- /wp:zita-blocks/pricing-table-section -->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/grid-post-layout.png',
            'category' => 'cate-3',
            'name' => 'Grid post layout',
            'content' => '<!-- wp:zita-blocks/zita-post-grid /-->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/service-section.png',
            'category' => 'cate-3',
            'name' => 'Service Section layout',
            'content' => '<!-- wp:zita-blocks/block-column-parent -->
            <div class="wp-block-zita-blocks-block-column-parent alignwide  column-count-2"><!-- wp:zita-blocks/icon-image-content -->
            <div class="wp-block-zita-blocks-icon-image-content service-section-wrapper" style="background-color:#EEF6F9;padding-top:0px;padding-bottom:0px"><div class="service-image-icon icon_"><div class="icon-container" style="border-width:2px;border-style:solid;border-color:#ffa600;border-radius:50%;width:79px;height:79px"><i style="color:#ffa600;font-size:40px" class="fas fa-coffee"></i></div></div><div class="service-title-description"><div><h1 style="color:#ffa600;font-size:21px">Add Title</h1><p style="font-size:21px">Add Service Description</p></div></div></div>
            <!-- /wp:zita-blocks/icon-image-content -->
            
            <!-- wp:zita-blocks/icon-image-content -->
            <div class="wp-block-zita-blocks-icon-image-content service-section-wrapper" style="background-color:#EEF6F9;padding-top:0px;padding-bottom:0px"><div class="service-image-icon icon_"><div class="icon-container" style="border-width:2px;border-style:solid;border-color:#ffa600;border-radius:50%;width:79px;height:79px"><i style="color:#ffa600;font-size:40px" class="fas fa-coffee"></i></div></div><div class="service-title-description"><div><h1 style="color:#ffa600;font-size:21px">Add Title</h1><p style="font-size:21px">Add Service Description</p></div></div></div>
            <!-- /wp:zita-blocks/icon-image-content --></div>
            <!-- /wp:zita-blocks/block-column-parent -->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/slider-1.png',
            'category' => 'cate-2',
            'name' => 'Sider layout',
            'content' => '<!-- wp:zita-blocks/slide -->
            <div class="wp-block-zita-blocks-slide zita-block-slide-wrapper"><div class="zita-slider-container" sliderdelay="4"><ul class="zita-slider-bullet-trigger" active-color="rgba(68,222,68,1)" childstyle="height: 20px;width:20px;background-color: rgba(186,23,23,1);"><li class="selected_"><span style="height:20px;width:20px;background-color:rgba(186,23,23,1)"></span></li><li class=""><span style="height:20px;width:20px;background-color:rgba(186,23,23,1)"></span></li><li class=""><span style="height:20px;width:20px;background-color:rgba(186,23,23,1)"></span></li></ul><div class="zita-slider-bullet-next-prev next"><span style="color:#fcb900;background-color:rgba(59,59,59,1);font-size:19px"><i class="fas fa-arrow-right"></i></span></div><div class="zita-slider-bullet-next-prev prev"><span style="color:#fcb900;background-color:rgba(59,59,59,1);font-size:19px"><i class="fas fa-arrow-left"></i></span></div><ul class="zita-slider-ul-slides fadeEffect" slidersetting="{&quot;width&quot;:623}"><li class="slides selected_ "><div class="zita-slider-wrapper"><div class="zita-slider-container"><div class="zita-slider-content-wrapper"><div class="zita-slider-image-container" style="background-size:cover;background-image:url(http://localhost:8888/one/wp-content/uploads/2020/12/image8-scaled.jpg)"></div><div class="zita-slider-text center" style="background-color:"><div style="margin-top:2px;margin-bottom:2px"><h1 style="font-size:17px;color:red">This Is Title text</h1><h2 style="font-size:17px;color:red">Add Description</h2><div class="button-container"><a placeholder="Button One" style="font-size:15px;color:#fcb900;background-color:rgba(0,0,0,1)">Button One</a><a placeholder="Button One" style="font-size:15px;color:#000000;background-color:rgba(255,197,63,1)">Button Two</a></div></div></div></div></div></div></li><li class="slides  "><div class="zita-slider-wrapper"><div class="zita-slider-container"><div class="zita-slider-content-wrapper"><div class="zita-slider-image-container" style="background-size:cover;background-image:url(http://localhost:8888/one/wp-content/plugins/zita-blocks/assets/img/image2.jpg)"></div><div class="zita-slider-text center" style="background-color:"><div style="margin-top:2px;margin-bottom:2px"><h1 style="font-size:17px;color:red">This Is Title text</h1><h2 style="font-size:17px;color:red">Add Description</h2><div class="button-container"><a placeholder="Button One">Button One</a><a placeholder="Button One">Button Two</a></div></div></div></div></div></div></li><li class="slides  "><div class="zita-slider-wrapper"><div class="zita-slider-container"><div class="zita-slider-content-wrapper"><div class="zita-slider-image-container" style="background-size:cover;background-image:url(http://localhost:8888/one/wp-content/plugins/zita-blocks/assets/img/image2.jpg)"></div><div class="zita-slider-text left" style="background-color:"><div style="margin-top:2px;margin-bottom:2px"><h1 style="font-size:17px;color:red">This Is Title text</h1><h2 style="font-size:17px;color:red">Add Description</h2><div class="button-container"><a placeholder="Button One">Button One</a><a placeholder="Button One">Button Two</a></div></div></div></div></div></div></li></ul></div></div>
            <!-- /wp:zita-blocks/slide -->',
        ),
        array(
            'key' => '',
            'type' => '',
            'price' => 'free',
            'image' => ZITA_BLOCKS_PLUGIN_URL . 'assets/img/blocks-image/service-with-progress.png',
            'category' => 'cate-2',
            'name' => 'Service With Progress',
            'content' => '<!-- wp:zita-blocks/progress-block {"percent":41,"percentColor":"#fcb900","percentBgColor":"#000000"} -->
            <div class="wp-block-zita-blocks-progress-block thk-progress-bar-wrapper"><div class="zita-linear-progress-bar front_" percent="41" delay="10"><div class="txt-section"><p>Percent title</p><span class="percent_"></span></div><div style="background-color:#000000;height:12px;border-radius:undefinedpx" class="line_"><div style="background-color:#fcb900" class="line-inner_"></div></div></div></div>
            <!-- /wp:zita-blocks/progress-block -->
            
            <!-- wp:zita-blocks/block-column-parent -->
            <div class="wp-block-zita-blocks-block-column-parent alignwide  column-count-2"><!-- wp:zita-blocks/icon-image-content -->
            <div class="wp-block-zita-blocks-icon-image-content service-section-wrapper" style="background-color:#EEF6F9;padding-top:0px;padding-bottom:0px"><div class="service-image-icon icon_"><div class="icon-container" style="border-width:2px;border-style:solid;border-color:#ffa600;border-radius:50%;width:79px;height:79px"><i style="color:#ffa600;font-size:40px" class="fas fa-coffee"></i></div></div><div class="service-title-description"><div><h1 style="color:#ffa600;font-size:21px">Add Title</h1><p style="font-size:21px">Add Service Description</p></div></div></div>
            <!-- /wp:zita-blocks/icon-image-content -->
            
            <!-- wp:zita-blocks/icon-image-content -->
            <div class="wp-block-zita-blocks-icon-image-content service-section-wrapper" style="background-color:#EEF6F9;padding-top:0px;padding-bottom:0px"><div class="service-image-icon icon_"><div class="icon-container" style="border-width:2px;border-style:solid;border-color:#ffa600;border-radius:50%;width:79px;height:79px"><i style="color:#ffa600;font-size:40px" class="fas fa-coffee"></i></div></div><div class="service-title-description"><div><h1 style="color:#ffa600;font-size:21px">Add Title</h1><p style="font-size:21px">Add Service Description</p></div></div></div>
            <!-- /wp:zita-blocks/icon-image-content --></div>
            <!-- /wp:zita-blocks/block-column-parent -->',
        ),
    );
    $categories = [
        ['title' => 'Category 1', 'id' => 'cate-1'],
        ['title' => 'Category 2', 'id' => 'cate-2'],
        ['title' => 'Category 3', 'id' => 'cate-3'],
        ['title' => 'Category 4', 'id' => 'cate-4'],
        ['title' => 'Category 5', 'id' => 'cate-5'],
        ['title' => 'Category 6', 'id' => 'cate-6'],
        ['title' => 'Category 7', 'id' => 'cate-7'],
        ['title' => 'Category 8', 'id' => 'cate-8'],
    ];
    $returnDemosAndCate = ['demos' => $zita_demos, 'categories' => $categories];
    return $returnDemosAndCate;
}
