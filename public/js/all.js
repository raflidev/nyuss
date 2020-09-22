import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.min.css";

// Template JS File
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as jQuery from "jquery";
import "jqvmap/dist/jqvmap.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

// Template
window.jQuery = jQuery;
window.$ = jQuery;

require("popper.js/dist/popper.min");
require("bootstrap/dist/js/bootstrap.min");
require("jquery.nicescroll/dist/jquery.nicescroll.min");
require("select2/dist/js/select2.full");
require("bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min");
require("bootstrap-select/dist/js/bootstrap-select");
require("bootstrap-tagsinput/dist/bootstrap-tagsinput");
require("bootstrap-daterangepicker/daterangepicker");
require("bootstrap-timepicker/js/bootstrap-timepicker.min");
require("bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min");
require("bootstrap-datepicker/dist/js/bootstrap-datepicker.min");

require("datatables.net-bs4");
require("datatables.net-buttons-bs4");
require("datatables.net-buttons/js/buttons.html5");
require("datatables.net-buttons/js/buttons.print");
require("datatables.net-buttons/js/buttons.colVis");
require("pdfmake/build/pdfmake.min");
require("pdfmake/build/vfs_fonts");
require("datatables.net-responsive");
require("datatables.net-responsive-bs4");
require("datatables.net-select");
require("datatables.net-select-bs4");

window.Swal = require("sweetalert2");
window.moment = require("moment");

// JS Libraies
require("jquery-sparkline/jquery.sparkline.min");
require("simpleweather/jquery.simpleWeather.min");
require("chart.js/dist/Chart");
require("jqvmap/dist/jquery.vmap.min");
require("jqvmap/dist/maps/jquery.vmap.world");
require("owl.carousel/dist/owl.carousel.min");
require("summernote/dist/summernote-bs4");
require("chocolat/dist/js/jquery.chocolat.min");
require("@/assets/js/page/index.js");
require("@/assets/js/stisla.js");
require("@/assets/css/style.css");
require("@/assets/js/bundle.js");
require("@/assets/js/scripts.js");

// import "@/assets/js/page/index.js";
// import "@/assets/js/bundle.js";
// import "@/assets/js/scripts.js";

"use strict";

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [{
      label: 'Sales',
      data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
    },
    {
      label: 'Budget',
      data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0 ,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          // display: false,
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1500,
          callback: function(value, index, values) {
            return '$' + value;
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15,
        }
      }]
    },
  }
});

var balance_chart = document.getElementById("balance-chart").getContext('2d');

var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(balance_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [{
      label: 'Balance',
      data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(63,82,227,1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var sales_chart = document.getElementById("sales-chart").getContext('2d');

var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(63,82,227,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(63,82,227,0)');

var myChart = new Chart(sales_chart, {
  type: 'line',
  data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [{
      label: 'Sales',
      data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(63,82,227,1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

$("#products-carousel").owlCarousel({
  items: 3,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/index.js":
/*!**************************!*\
  !*** ./sources/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./sources/index.js?");

/***/ })

/******/ });
"use strict";
import $ from "jquery";
import Chart from "chart.js";
import Dropzone from "dropzone";
import { CodeMirror } from "codemirror";
// import Chocolat from 'chocolat';

// ChartJS
if (window.Chart) {
  Chart.defaults.global.defaultFontFamily = "'Nunito', 'Segoe UI', 'Arial'";
  Chart.defaults.global.defaultFontSize = 11;
  Chart.defaults.global.defaultFontStyle = 500;
  Chart.defaults.global.defaultFontColor = "#999";
  Chart.defaults.global.tooltips.backgroundColor = "#000";
  Chart.defaults.global.tooltips.titleFontFamily =
    "'Nunito', 'Segoe UI', 'Arial'";
  Chart.defaults.global.tooltips.titleFontColor = "#fff";
  Chart.defaults.global.tooltips.titleFontSize = 20;
  Chart.defaults.global.tooltips.xPadding = 10;
  Chart.defaults.global.tooltips.yPadding = 10;
  Chart.defaults.global.tooltips.cornerRadius = 3;
}

// DropzoneJS
if (window.Dropzone) {
  Dropzone.autoDiscover = false;
}

// Basic confirm box
// $("[data-confirm]").each(function() {
//   var me = $(this),
//     me_data = me.data("confirm");

//   me_data = me_data.split("|");
//   me.fireModal({
//     title: me_data[0],
//     body: me_data[1],
//     buttons: [
//       {
//         text: me.data("confirm-text-yes") || "Yes",
//         class: "btn btn-danger btn-shadow",
//         handler: function() {
//           eval(me.data("confirm-yes"));
//         },
//       },
//       {
//         text: me.data("confirm-text-cancel") || "Cancel",
//         class: "btn btn-secondary",
//         handler: function(modal) {
//           $.destroyModal(modal);
//           eval(me.data("confirm-no"));
//         },
//       },
//     ],
//   });
// });

// Global
$(function() {
  let sidebar_nicescroll_opts = {
      cursoropacitymin: 0,
      cursoropacitymax: 0.8,
      zindex: 892,
    },
    now_layout_class = null;

  var sidebar_sticky = function() {
    if ($("body").hasClass("layout-2")) {
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({
        parent: $("body"),
      });
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({
        recalc_every: 1,
      });
    }
  };
  sidebar_sticky();

  var sidebar_nicescroll;
  var update_sidebar_nicescroll = function() {
    let a = setInterval(function() {
      if (sidebar_nicescroll != null) sidebar_nicescroll.resize();
    }, 10);

    setTimeout(function() {
      clearInterval(a);
    }, 600);
  };

  var sidebar_dropdown = function() {
    if ($(".main-sidebar").length) {
      $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
      sidebar_nicescroll = $(".main-sidebar").getNiceScroll();

      $(".main-sidebar .sidebar-menu li a.has-dropdown")
        .off("click")
        .on("click", function() {
          var me = $(this);

          me.parent()
            .find("> .dropdown-menu")
            .slideToggle(500, function() {
              update_sidebar_nicescroll();
              return false;
            });
          return false;
        });
    }
  };
  sidebar_dropdown();

  if ($("#top-5-scroll").length) {
    $("#top-5-scroll")
      .css({
        height: 315,
      })
      .niceScroll();
  }

  $(".main-content").css({
    minHeight: $(window).outerHeight() - 95,
  });

  $(".nav-collapse-toggle").click(function() {
    $(this)
      .parent()
      .find(".navbar-nav")
      .toggleClass("show");
    return false;
  });

  $(document).on("click", function() {
    $(".nav-collapse .navbar-nav").removeClass("show");
  });

  var toggle_sidebar_mini = function(mini) {
    let body = $("body");

    if (!mini) {
      body.removeClass("sidebar-mini");
      $(".main-sidebar").css({
        overflow: "hidden",
      });
      setTimeout(function() {
        $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }, 500);
      $(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove();
      $(".main-sidebar .sidebar-menu > li > a").removeAttr("data-toggle");
      $(".main-sidebar .sidebar-menu > li > a").removeAttr(
        "data-original-title"
      );
      $(".main-sidebar .sidebar-menu > li > a").removeAttr("title");
    } else {
      body.addClass("sidebar-mini");
      body.removeClass("sidebar-show");
      sidebar_nicescroll.remove();
      sidebar_nicescroll = null;
      $(".main-sidebar .sidebar-menu > li").each(function() {
        let me = $(this);

        if (me.find("> .dropdown-menu").length) {
          me.find("> .dropdown-menu").hide();
          me.find("> .dropdown-menu").prepend(
            '<li class="dropdown-title pt-3">' + me.find("> a").text() + "</li>"
          );
        } else {
          me.find("> a").attr("data-toggle", "tooltip");
          me.find("> a").attr("data-original-title", me.find("> a").text());
          $("[data-toggle='tooltip']").tooltip({
            placement: "right",
          });
        }
      });
    }
  };

  $("[data-toggle='sidebar']").click(function() {
    var body = $("body"),
      w = $(window);

    if (w.outerWidth() <= 1024) {
      body.removeClass("search-show search-gone");
      if (body.hasClass("sidebar-gone")) {
        body.removeClass("sidebar-gone");
        body.addClass("sidebar-show");
      } else {
        body.addClass("sidebar-gone");
        body.removeClass("sidebar-show");
      }

      update_sidebar_nicescroll();
    } else {
      body.removeClass("search-show search-gone");
      if (body.hasClass("sidebar-mini")) {
        toggle_sidebar_mini(false);
      } else {
        toggle_sidebar_mini(true);
      }
    }

    return false;
  });

  var toggleLayout = function() {
    var w = $(window),
      layout_class = $("body").attr("class") || "",
      layout_classes =
        layout_class.trim().length > 0 ? layout_class.split(" ") : "";

    if (layout_classes.length > 0) {
      layout_classes.forEach(function(item) {
        if (item.indexOf("layout-") != -1) {
          now_layout_class = item;
        }
      });
    }

    if (w.outerWidth() <= 1024) {
      if ($("body").hasClass("sidebar-mini")) {
        toggle_sidebar_mini(false);
        $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }

      $("body").addClass("sidebar-gone");
      $("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show");
      $("body")
        .off("click")
        .on("click", function(e) {
          if (
            $(e.target).hasClass("sidebar-show") ||
            $(e.target).hasClass("search-show")
          ) {
            $("body").removeClass("sidebar-show");
            $("body").addClass("sidebar-gone");
            $("body").removeClass("search-show");

            update_sidebar_nicescroll();
          }
        });

      update_sidebar_nicescroll();

      if (now_layout_class == "layout-3") {
        let nav_second_classes = $(".navbar-secondary").attr("class"),
          nav_second = $(".navbar-secondary");

        nav_second.attr("data-nav-classes", nav_second_classes);
        nav_second.removeAttr("class");
        nav_second.addClass("main-sidebar");

        let main_sidebar = $(".main-sidebar");
        main_sidebar
          .find(".container")
          .addClass("sidebar-wrapper")
          .removeClass("container");
        main_sidebar
          .find(".navbar-nav")
          .addClass("sidebar-menu")
          .removeClass("navbar-nav");
        main_sidebar.find(".sidebar-menu .nav-item.dropdown.show a").click();
        main_sidebar.find(".sidebar-brand").remove();
        main_sidebar.find(".sidebar-menu").before(
          $("<div>", {
            class: "sidebar-brand",
          }).append(
            $("<a>", {
              href: $(".navbar-brand").attr("href"),
            }).html($(".navbar-brand").html())
          )
        );
        setTimeout(function() {
          sidebar_nicescroll = main_sidebar.niceScroll(sidebar_nicescroll_opts);
          sidebar_nicescroll = main_sidebar.getNiceScroll();
        }, 700);

        sidebar_dropdown();
        $(".main-wrapper").removeClass("container");
      }
    } else {
      $("body").removeClass("sidebar-gone sidebar-show");
      if (now_layout_class) $("body").addClass(now_layout_class);

      let nav_second_classes = $(".main-sidebar").attr("data-nav-classes"),
        nav_second = $(".main-sidebar");

      if (
        now_layout_class == "layout-3" &&
        nav_second.hasClass("main-sidebar")
      ) {
        nav_second.find(".sidebar-menu li a.has-dropdown").off("click");
        nav_second.find(".sidebar-brand").remove();
        nav_second.removeAttr("class");
        nav_second.addClass(nav_second_classes);

        let main_sidebar = $(".navbar-secondary");
        main_sidebar
          .find(".sidebar-wrapper")
          .addClass("container")
          .removeClass("sidebar-wrapper");
        main_sidebar
          .find(".sidebar-menu")
          .addClass("navbar-nav")
          .removeClass("sidebar-menu");
        main_sidebar.find(".dropdown-menu").hide();
        main_sidebar.removeAttr("style");
        main_sidebar.removeAttr("tabindex");
        main_sidebar.removeAttr("data-nav-classes");
        $(".main-wrapper").addClass("container");
        // if(sidebar_nicescroll != null)
        //   sidebar_nicescroll.remove();
      } else if (now_layout_class == "layout-2") {
        $("body").addClass("layout-2");
      } else {
        update_sidebar_nicescroll();
      }
    }
  };
  toggleLayout();
  $(window).resize(toggleLayout);

  $("[data-toggle='search']").click(function() {
    var body = $("body");

    if (body.hasClass("search-gone")) {
      body.addClass("search-gone");
      body.removeClass("search-show");
    } else {
      body.removeClass("search-gone");
      body.addClass("search-show");
    }
  });

  // tooltip
  $("[data-toggle='tooltip']").tooltip();

  // popover
  $('[data-toggle="popover"]').popover({
    container: "body",
  });

  // Select2
  // if (jQuery().select2) {
  //   $(".select2").select2();
  // }

  // Selectric
  // if (jQuery().selectric) {
  //   $(".selectric").selectric({
  //     disableOnMobile: false,
  //     nativeOnMobile: false,
  //   });
  // }

  $(".notification-toggle").dropdown();
  $(".notification-toggle")
    .parent()
    .on("shown.bs.dropdown", function() {
      $(".dropdown-list-icons").niceScroll({
        cursoropacitymin: 0.3,
        cursoropacitymax: 0.8,
        cursorwidth: 7,
      });
    });

  $(".message-toggle").dropdown();
  $(".message-toggle")
    .parent()
    .on("shown.bs.dropdown", function() {
      $(".dropdown-list-message").niceScroll({
        cursoropacitymin: 0.3,
        cursoropacitymax: 0.8,
        cursorwidth: 7,
      });
    });

  if ($(".chat-content").length) {
    $(".chat-content").niceScroll({
      cursoropacitymin: 0.3,
      cursoropacitymax: 0.8,
    });
    $(".chat-content")
      .getNiceScroll(0)
      .doScrollTop($(".chat-content").height());
  }

  // if (jQuery().summernote) {
  //   $(".summernote").summernote({
  //     dialogsInBody: true,
  //     minHeight: 250,
  //   });
  //   $(".summernote-simple").summernote({
  //     dialogsInBody: true,
  //     minHeight: 150,
  //     toolbar: [
  //       ["style", ["bold", "italic", "underline", "clear"]],
  //       ["font", ["strikethrough"]],
  //       ["para", ["paragraph"]],
  //     ],
  //   });
  // }

  if (window.CodeMirror) {
    $(".codeeditor").each(function() {
      let editor = CodeMirror.fromTextArea(this, {
        lineNumbers: true,
        theme: "duotone-dark",
        mode: "javascript",
        height: 200,
      });
      editor.setSize("100%", 200);
    });
  }

  // Follow function
  $(".follow-btn, .following-btn").each(function() {
    var me = $(this),
      follow_text = "Follow",
      unfollow_text = "Following";

    me.click(function() {
      if (me.hasClass("following-btn")) {
        me.removeClass("btn-danger");
        me.removeClass("following-btn");
        me.addClass("btn-primary");
        me.html(follow_text);

        eval(me.data("unfollow-action"));
      } else {
        me.removeClass("btn-primary");
        me.addClass("btn-danger");
        me.addClass("following-btn");
        me.html(unfollow_text);

        eval(me.data("follow-action"));
      }
      return false;
    });
  }),
    // Dismiss function
    $("[data-dismiss]").each(function() {
      var me = $(this),
        target = me.data("dismiss");

      me.click(function() {
        $(target).fadeOut(function() {
          $(target).remove();
        });
        return false;
      });
    }),
    // Collapsable
    $("[data-collapse]").each(function() {
      var me = $(this),
        target = me.data("collapse");

      me.click(function() {
        $(target).collapse("toggle");
        $(target).on("shown.bs.collapse", function() {
          me.html('<i class="fas fa-minus"></i>');
        });
        $(target).on("hidden.bs.collapse", function() {
          me.html('<i class="fas fa-plus"></i>');
        });
        return false;
      });
    }),
    // Gallery
    $(".gallery .gallery-item").each(function() {
      var me = $(this);

      me.attr("href", me.data("image"));
      me.attr("title", me.data("title"));
      if (me.parent().hasClass("gallery-fw")) {
        me.css({
          height: me.parent().data("item-height"),
        });
        me.find("div").css({
          lineHeight: me.parent().data("item-height") + "px",
        });
      }
      me.css({
        backgroundImage: 'url("' + me.data("image") + '")',
      });
    }),
    // Background
    $("[data-background]").each(function() {
      var me = $(this);
      me.css({
        backgroundImage: "url(" + me.data("background") + ")",
      });
    }),
    // Custom Tab
    $("[data-tab]").each(function() {
      var me = $(this);

      me.click(function() {
        if (!me.hasClass("active")) {
          // var tab_group = $('[data-tab-group="' + me.data("tab") + '"]'),
          var tab_group_active = $(
              '[data-tab-group="' + me.data("tab") + '"].active'
            ),
            target = $(me.attr("href")),
            links = $('[data-tab="' + me.data("tab") + '"]');

          links.removeClass("active");
          me.addClass("active");
          target.addClass("active");
          tab_group_active.removeClass("active");
        }
        return false;
      });
    }),
    // Bootstrap 4 Validation
    $(".needs-validation").submit(function() {
      var form = $(this);
      if (form[0].checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.addClass("was-validated");
    }),
    // alert dismissible
    $(".alert-dismissible").each(function() {
      var me = $(this);

      me.find(".close").click(function() {
        me.alert("close");
      });
    }),
    // if ($(".main-navbar").length) {
    // }

    // Image cropper
    $("[data-crop-image]").each(function() {
      $(this).css({
        overflow: "hidden",
        position: "relative",
        height: $(this).data("crop-image"),
      });
    }),
    // Slide Toggle
    $("[data-toggle-slide]").click(function() {
      let target = $(this).data("toggle-slide");

      $(target).slideToggle();
      return false;
    }),
    // Dismiss modal
    $("[data-dismiss=modal]").click(function() {
      $(this)
        .closest(".modal")
        .modal("hide");

      return false;
    }),
    // Width attribute
    $("[data-width]").each(function() {
      $(this).css({
        width: $(this).data("width"),
      });
    }),
    // Height attribute
    $("[data-height]").each(function() {
      $(this).css({
        height: $(this).data("height"),
      });
    });

  // Chocolat
  // if ($(".chocolat-parent").length && jQuery().Chocolat) {
  //   $(".chocolat-parent").Chocolat();
  // }

  // Sortable card
  // if ($(".sortable-card").length && jQuery().sortable) {
  //   $(".sortable-card").sortable({
  //     handle: ".card-header",
  //     opacity: 0.8,
  //     tolerance: "pointer",
  //   });
  // }

  // Daterangepicker
  // if (jQuery().daterangepicker) {
  //   if ($(".datepicker").length) {
  //     $(".datepicker").daterangepicker({
  //       locale: { format: "YYYY-MM-DD" },
  //       singleDatePicker: true,
  //     });
  //   }
  //   if ($(".datetimepicker").length) {
  //     $(".datetimepicker").daterangepicker({
  //       locale: { format: "YYYY-MM-DD hh:mm" },
  //       singleDatePicker: true,
  //       timePicker: true,
  //       timePicker24Hour: true,
  //     });
  //   }
  //   if ($(".daterange").length) {
  //     $(".daterange").daterangepicker({
  //       locale: { format: "YYYY-MM-DD" },
  //       drops: "down",
  //       opens: "right",
  //     });
  //   }
  // }

  // Timepicker
  // if (jQuery().timepicker && $(".timepicker").length) {
  //   $(".timepicker").timepicker({
  //     icons: {
  //       up: "fas fa-chevron-up",
  //       down: "fas fa-chevron-down",
  //     },
  //   });
  // }
});