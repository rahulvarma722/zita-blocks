(function ($) {
  let fns = {
    int: function () {
      fns.bind();
    },
    zita_post_next_prev: function () {
      let thisBtn = $(this);
      let getDataWrapper = thisBtn.closest(".zita-two-post-wrapper");
      let getData = getDataWrapper.data("setting");
      let trigger = thisBtn.hasClass("next") ? "next" : "prev";
      let currentPage = getDataWrapper.attr("data-currentpage");
      //   console.log(getData);
      console.log(trigger);
      //   return;
      let data_ = {
        action: "post_tc_block",
        attr: getData,
        trigger: trigger,
      };
      currentPage = JSON.parse(currentPage);
      if (currentPage && "current" in currentPage && currentPage.current > 0) {
        data_["page"] = currentPage.current;
        let returnData = fns._ajaxFunction(data_);
        returnData.success(function (response) {
          console.log("res");
          let string_fy =
            trigger == "next"
              ? currentPage.current + 1
              : currentPage.current - 1;
          string_fy = JSON.stringify({ current: string_fy });
          getDataWrapper.attr("data-currentpage", string_fy);
          getDataWrapper.find(".zita-post-two-column").html(response);
        });
      }
    },
    _ajaxFunction: function (data_) {
      return jQuery.ajax({
        method: "post",
        url: zita_ajax_url.admin_ajax,
        data: data_,
      });
    },
    bind: function () {
      $(document).on("click", ".zita-post-NP-btn", fns.zita_post_next_prev);
    },
  };
  fns.int();
})(jQuery);
