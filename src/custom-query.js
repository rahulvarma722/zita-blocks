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
      let data_ = {
        action: "post_tc_block",
        attr: getData,
        trigger: trigger,
      };
      currentPage = JSON.parse(currentPage);
      //   console.log("currentPage", currentPage.current);
      //   console.log("currentPage total", currentPage.total);
      if (
        currentPage &&
        "current" in currentPage &&
        currentPage.current > 0 &&
        (trigger == "prev" || currentPage.total >= currentPage.current + 1)
      ) {
        data_["page"] = currentPage.current;
        let loader_ = thisBtn
          .closest(".zita-two-col-container")
          .find(".zita-block-loader");
        loader_.addClass("active");
        let returnData = fns._ajaxFunction(data_);
        returnData.success(function (response) {
          loader_.removeClass("active");
          let nxtPrev = thisBtn.closest(".zita-two-post-wrapper-next-prev");
          nxtPrev.find(".zita-post-NP-btn").removeClass("disable");
          let string_fy =
            currentPage.current == 1 && trigger == "prev"
              ? 1
              : trigger == "next"
              ? currentPage.current + 1
              : currentPage.current - 1;
          if (string_fy == 1) {
            nxtPrev.find(".zita-post-NP-btn.prev").addClass("disable");
          } else if (string_fy == currentPage.total) {
            nxtPrev.find(".zita-post-NP-btn.next").addClass("disable");
          }
          string_fy = JSON.stringify({
            current: string_fy,
            total: currentPage.total,
          });
          getDataWrapper.attr("data-currentpage", string_fy);
          getDataWrapper.find(".zita-post-two-column").html(response);
        });
      }
    },
    _ajaxFunction: function (data_) {
      return jQuery.ajax({
        method: "POST",
        url: zita_ajax_url.admin_ajax,
        data: data_,
      });
    },
    bind: function () {
      $(document).on(
        "click",
        ".zita-post-NP-btn:not('.disable')",
        fns.zita_post_next_prev
      );
    },
  };
  fns.int();
})(jQuery);
