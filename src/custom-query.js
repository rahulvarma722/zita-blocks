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
          // response
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
          // response
        });
      }
    },
    _ajaxFunction: function (data_, datatyle_ = false) {
      let ajaxObj = {
        method: "POST",
        url: zita_ajax_url.admin_ajax,
        data: data_,
      };
      if (datatyle_ == "json") {
        ajaxObj["dataType"] = "json";
        ajaxObj["async"] = false;
      }
      return jQuery.ajax(ajaxObj);
    },
    chooseCate: function (e) {
      e.preventDefault();
      let thisButton = $(this);
      if (!thisButton.parent("li").hasClass("active")) {
        // has class active li
        let classList = thisButton.parent("li").attr("class");
        if (classList) {
          let ind_dex = classList.indexOf("cat-item-");
          let getNumVAlue = false;
          if (classList.substr(ind_dex + 9, 1) === "a") {
            getNumVAlue = "all";
          } else {
            let getSepClass = classList.split(" ");
            getSepClass.map((v) => {
              if (v.includes("cat-item-")) {
                let getIddd = v.replace("cat-item-", "");
                getNumVAlue = parseInt(getIddd);
              }
              return;
            });
          }
          if (getNumVAlue) {
            let getDataWrapper = thisButton
              .closest(".zita-two-col-container")
              .find(".zita-two-post-wrapper");
            let getData = getDataWrapper.data("setting");
            if (typeof getData === "object") {
              if (getNumVAlue === "all") {
                delete getData["postCategories"];
              } else {
                getData["postCategories"] = [getNumVAlue];
              }
              let data_ = {
                action: "post_tc_block_choose_cate",
                attr: getData,
              };
              // loader and active btn
              thisButton
                .closest(".navigation_")
                .find("li.cat-item")
                .removeClass("active");
              thisButton.parent().addClass("active");
              let loader_ = thisButton
                .closest(".zita-two-col-container")
                .find(".zita-block-loader");
              loader_.addClass("active");
              let returnData = fns._ajaxFunction(data_, "json");
              // replace data setting after result success
              returnData.success(function (response) {
                console.log(response);

                if (typeof response == "object" && "html" in response) {
                  loader_.removeClass("active");
                  getDataWrapper
                    .find(".zita-post-two-column")
                    .html(response.html);
                  getDataWrapper.attr("data-currentpage", response.nextprev);
                  getDataWrapper.attr("data-setting", JSON.stringify(getData));
                  if (response.nextprev == null) {
                    getDataWrapper
                      .find(".zita-two-post-wrapper-next-prev")
                      .addClass("disable");
                  } else {
                    getDataWrapper
                      .find(".zita-two-post-wrapper-next-prev")
                      .removeClass("disable");
                  }
                }
              });
            }
          }
        }
        // has class active li
      }
    },
    bind: function () {
      $(document).on(
        "click",
        ".zita-two-post-wrapper-next-prev:not('.disable') .zita-post-NP-btn:not('.disable')",
        fns.zita_post_next_prev
      );
      $(document).on(
        "click",
        ".zita-block-nav-items:not('.active') .cat-item a",
        fns.chooseCate
      );
    },
  };
  fns.int();
})(jQuery);
