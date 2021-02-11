$(document).ready(function () {
  $("#save").click(function () {
    var textinput = $(".testinput").val();
    $("ul").append(
      '<li><div class="question-div"><div class="between"><h1>' + textinput + '</h1><div class="d-flex"><a href="#!" data-toggle="modal" data-target="#myModal"><img src="img/pen-solid (1).svg" alt=""></a><img src="img/trash-alt-solid.svg" alt=""></div></div></div></li>'
    );
  });

$("#openApplayForm").on("click", function () {
  $(".cv").show();
  $("html, body").css({ overflow: "hidden" });
  // $("html, body").css({ "background-color": "rgba(0,0,0,0.1)" });
  $(".restOfScreen").css({ opacity: ".3" });
  $(".side-bar").css({ opacity: ".3" });
});

$(".apply a").on("click", function () {
  $(".cv").hide();
  $("html, body").css({ overflow: "visible" });
  // $("html, body").css({ "background-color": "rgba(0,0,0,0.0)" });
  $(".restOfScreen").css({ opacity: "1" });
  $(".side-bar").css({ opacity: "1" });
});

  $(".add-anthor a").click(function () {
    $(".live-apend").append(
      '<input type="text" class="input-img-1" placeholder="Url"><a href="#!" class="trash"><img src="img/trash-alt-solid.svg" alt=""></a>'
    );
  });

  $(".input-img input").focus(function () {
    $(".nav-span").css({ color: "#000" });
  });

  $(".trash").click(function () {
    $(".input-img-1").hide(1500);
    $(this).hide(1500);
  });

  $(".add-anthor-1 a").click(function () {
    $(".live-apend-1").append(
      '<input type="text" class="input-img-1" placeholder="Url">'
    );
  });

  $(".welcome-a").click(function () {
    $(".back").css("display", "none");
    $(".welcome").css("display", "block");
  });

  $(".back-a").click(function () {
    $(".back").css("display", "block");
    $(".welcome").css("display", "none");
  });

  $(".History-a").click(function () {
    $(".back").css("display", "none");
    $(".welcome").css("display", "none");
  });

  
$(".custom-go").on("change", function () {
  window.location.replace("ratting-2.html");
});

  $("#btn1").click(function () {
    $("#test3").text($("#test3").text() + "1");
  });
  $("#btn2").click(function () {
    $("#test3").text($("#test3").text() + "2");
  });
  $("#btn3").click(function () {
    $("#test3").text($("#test3").text() + "3");
  });
  $("#btn4").click(function () {
    $("#test3").text($("#test3").text() + "4");
  });
  $("#btn5").click(function () {
    $("#test3").text($("#test3").text() + "5");
  });
  $("#btn6").click(function () {
    $("#test3").text($("#test3").text() + "6");
  });
  $("#btn7").click(function () {
    $("#test3").text($("#test3").text() + "7");
  });
  $("#btn8").click(function () {
    $("#test3").text($("#test3").text() + "8");
  });
  $("#btn9").click(function () {
    $("#test3").text($("#test3").text() + "9");
  });
  $("#btn0").click(function () {
    $("#test3").text($("#test3").text() + "0");
  });
  $("#btnc").click(function () {
    $("#test3").empty();
  });
  $("#btnd").click(function () {
    $("#test3").text(function (_, txt) {
      return txt.slice(0, -1);
    });
  });

  
});

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer-1", {
    animationEnabled: true,
    title: {
      text: "EARNINGS",
    },
    toolTip: {
      shared: true,
    },
    // axisX: {
    //   title: "Time",
    //   suffix: " s",
    // },
    axisY: {
      // title: "Speed",
      titleFontColor: "#4F81BC",
      suffix: " m/s",
      lineColor: "#4F81BC",
      tickColor: "#4F81BC",
    },
    axisY2: {
      // title: "Distance",
      titleFontColor: "#C0504E",
      suffix: " m",
      lineColor: "#C0504E",
      tickColor: "#C0504E",
    },
    data: [
      {
        type: "spline",
        name: "speed",
        xValueFormatString: "#### sec",
        yValueFormatString: "#,##0.00 m/s",
        dataPoints: [
          { x: 0, y: 0 },
          { x: 11, y: 8.2 },
          { x: 47, y: 41.7 },
          { x: 56, y: 16.7 },
          { x: 120, y: 31.3 },
          { x: 131, y: 18.2 },
          { x: 171, y: 31.3 },
          { x: 189, y: 61.1 },
          { x: 221, y: 40.6 },
          { x: 232, y: 18.2 },
          { x: 249, y: 35.3 },
          { x: 253, y: 12.5 },
          { x: 264, y: 16.4 },
          { x: 280, y: 37.5 },
          { x: 303, y: 24.3 },
          { x: 346, y: 23.3 },
          { x: 376, y: 11.3 },
          { x: 388, y: 8.3 },
          { x: 430, y: 1.9 },
          { x: 451, y: 4.8 },
        ],
      },
      {
        type: "spline",
        axisYType: "secondary",
        name: "distance covered",
        yValueFormatString: "#,##0.# m",
        dataPoints: [
          { x: 0, y: 0 },
          { x: 11, y: 90 },
          { x: 47, y: 1590 },
          { x: 56, y: 1740 },
          { x: 120, y: 3740 },
          { x: 131, y: 3940 },
          { x: 171, y: 5190 },
          { x: 189, y: 6290 },
          { x: 221, y: 7590 },
          { x: 232, y: 7790 },
          { x: 249, y: 8390 },
          { x: 253, y: 8440 },
          { x: 264, y: 8620 },
          { x: 280, y: 9220 },
          { x: 303, y: 9780 },
          { x: 346, y: 10780 },
          { x: 376, y: 11120 },
          { x: 388, y: 11220 },
          { x: 430, y: 11300 },
          { x: 451, y: 11400 },
        ],
      },
    ],
  });
  chart.render();
};

// window.onload = function () {
//   //Better to construct options first and then pass it as a parameter
//   var options = {
//     title: {
//       text: "Spline Chart with Export as Image",
//     },
//     animationEnabled: true,
//     exportEnabled: true,
//     data: [
//       {
//         type: "spline", //change it to line, area, column, pie, etc
//         dataPoints: [
//           { x: 10, y: 10 },
//           { x: 20, y: 12 },
//           { x: 30, y: 8 },
//           { x: 40, y: 14 },
//           { x: 50, y: 6 },
//           { x: 60, y: 24 },
//           { x: 70, y: -4 },
//           { x: 80, y: 10 },
//         ],
//       },
//     ],
//   };
//   $("#chartContainer-1").CanvasJSChart(options);
// };

// window.onload = function () {
//   //Better to construct options first and then pass it as a parameter
//   var options = {
//     title: {
//       text: "Spline Chart with Export as Image",
//     },
//     animationEnabled: true,
//     exportEnabled: true,
//     data: [
//       {
//         type: "spline", //change it to line, area, column, pie, etc
//         dataPoints: [
//           { x: 10, y: 10 },
//           { x: 20, y: 12 },
//           { x: 30, y: 8 },
//           { x: 40, y: 14 },
//           { x: 50, y: 6 },
//           { x: 60, y: 24 },
//           { x: 70, y: -4 },
//           { x: 80, y: 10 },
//         ],
//       },
//     ],
//   };
//   $("#chartContainer").CanvasJSChart(options);
// };


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSolve(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

(function ($) {
  "use strict";

  /**
   * Constructor.
   */
  var SimpleColorPicker = function (select, options) {
    this.init("simplecolorpicker", select, options);
  };

  /**
   * SimpleColorPicker class.
   */
  SimpleColorPicker.prototype = {
    constructor: SimpleColorPicker,

    init: function (type, select, options) {
      var self = this;

      self.type = type;

      self.$select = $(select);
      self.$select.hide();

      self.options = $.extend({}, $.fn.simplecolorpicker.defaults, options);

      self.$colorList = null;

      if (self.options.picker === true) {
        var selectText = self.$select.find("> option:selected").text();
        self.$icon = $(
          '<span class="simplecolorpicker icon"' +
            ' title="' +
            selectText +
            '"' +
            ' style="background-color: ' +
            self.$select.val() +
            ';"' +
            ' role="button" tabindex="0">' +
            "</span>"
        ).insertAfter(self.$select);
        self.$icon.on("click." + self.type, $.proxy(self.showPicker, self));

        self.$picker = $(
          '<span class="simplecolorpicker picker ' +
            self.options.theme +
            '"></span>'
        ).appendTo(document.body);
        self.$colorList = self.$picker;

        // Hide picker when clicking outside
        $(document).on(
          "mousedown." + self.type,
          $.proxy(self.hidePicker, self)
        );
        self.$picker.on(
          "mousedown." + self.type,
          $.proxy(self.mousedown, self)
        );
      } else {
        self.$inline = $(
          '<span class="simplecolorpicker inline ' +
            self.options.theme +
            '"></span>'
        ).insertAfter(self.$select);
        self.$colorList = self.$inline;
      }

      // Build the list of colors
      // <span class="color selected" title="Green" style="background-color: #7bd148;" role="button"></span>
      self.$select.find("> option").each(function () {
        var $option = $(this);
        var color = $option.val();

        var isSelected = $option.is(":selected");
        var isDisabled = $option.is(":disabled");

        var selected = "";
        if (isSelected === true) {
          selected = " data-selected";
        }

        var disabled = "";
        if (isDisabled === true) {
          disabled = " data-disabled";
        }

        var title = "";
        if (isDisabled === false) {
          title = ' title="' + $option.text() + '"';
        }

        var role = "";
        if (isDisabled === false) {
          role = ' role="button" tabindex="0"';
        }

        var $colorSpan = $(
          '<span class="color"' +
            title +
            ' style="background-color: ' +
            color +
            ';"' +
            ' data-color="' +
            color +
            '"' +
            selected +
            disabled +
            role +
            ">" +
            "</span>"
        );

        self.$colorList.append($colorSpan);
        $colorSpan.on(
          "click." + self.type,
          $.proxy(self.colorSpanClicked, self)
        );

        var $next = $option.next();
        if ($next.is("optgroup") === true) {
          // Vertical break, like hr
          self.$colorList.append('<span class="vr"></span>');
        }
      });
    },

    /**
     * Changes the selected color.
     *
     * @param color the hexadecimal color to select, ex: '#fbd75b'
     */
    selectColor: function (color) {
      var self = this;

      var $colorSpan = self.$colorList.find("> span.color").filter(function () {
        return $(this).data("color").toLowerCase() === color.toLowerCase();
      });

      if ($colorSpan.length > 0) {
        self.selectColorSpan($colorSpan);
      } else {
        console.error("The given color '" + color + "' could not be found");
      }
    },

    showPicker: function () {
      var pos = this.$icon.offset();
      this.$picker.css({
        // Remove some pixels to align the picker icon with the icons inside the dropdown
        left: pos.left - 6,
        top: pos.top + this.$icon.outerHeight(),
      });

      this.$picker.show(this.options.pickerDelay);
    },

    hidePicker: function () {
      this.$picker.hide(this.options.pickerDelay);
    },

    /**
     * Selects the given span inside $colorList.
     *
     * The given span becomes the selected one.
     * It also changes the HTML select value, this will emit the 'change' event.
     */
    selectColorSpan: function ($colorSpan) {
      var color = $colorSpan.data("color");
      var title = $colorSpan.prop("title");

      // Mark this span as the selected one
      $colorSpan.siblings().removeAttr("data-selected");
      $colorSpan.attr("data-selected", "");

      if (this.options.picker === true) {
        this.$icon.css("background-color", color);
        this.$icon.prop("title", title);
        this.hidePicker();
      }

      // Change HTML select value
      this.$select.val(color);
    },

    /**
     * The user clicked on a color inside $colorList.
     */
    colorSpanClicked: function (e) {
      // When a color is clicked, make it the new selected one (unless disabled)
      if ($(e.target).is("[data-disabled]") === false) {
        this.selectColorSpan($(e.target));
        this.$select.trigger("change");
      }
    },

    /**
     * Prevents the mousedown event from "eating" the click event.
     */
    mousedown: function (e) {
      e.stopPropagation();
      e.preventDefault();
    },

    destroy: function () {
      if (this.options.picker === true) {
        this.$icon.off("." + this.type);
        this.$icon.remove();
        $(document).off("." + this.type);
      }

      this.$colorList.off("." + this.type);
      this.$colorList.remove();

      this.$select.removeData(this.type);
      this.$select.show();
    },
  };

  /**
   * Plugin definition.
   * How to use: $('#id').simplecolorpicker()
   */
  $.fn.simplecolorpicker = function (option) {
    var args = $.makeArray(arguments);
    args.shift();

    // For HTML element passed to the plugin
    return this.each(function () {
      var $this = $(this),
        data = $this.data("simplecolorpicker"),
        options = typeof option === "object" && option;
      if (data === undefined) {
        $this.data(
          "simplecolorpicker",
          (data = new SimpleColorPicker(this, options))
        );
      }
      if (typeof option === "string") {
        data[option].apply(data, args);
      }
    });
  };

  /**
   * Default options.
   */
  $.fn.simplecolorpicker.defaults = {
    // No theme by default
    theme: "",

    // Show the picker or make it inline
    picker: false,

    // Animation delay in milliseconds
    pickerDelay: 0,
  };
})(jQuery);

$(document).ready(function () {
  $('select[name="colorpicker-change-background-color"]').on(
    "change",
    function () {
      $(document.body).css(
        "background-color",
        $('select[name="colorpicker-change-background-color"]').val()
      );
    }
  );

  setTimeout(function () {
    $('select[name="colorpicker-selectColor-#fbd75b"]').simplecolorpicker(
      "selectColor",
      "#fbd75b"
    );
  }, 5000);

  setTimeout(function () {
    $('select[name="colorpicker-selectColor-#FBD75B"]').simplecolorpicker(
      "selectColor",
      "#FBD75B"
    );
  }, 5000);

  setTimeout(function () {
    $(
      'select[name="colorpicker-selectColor-#fbd75b-multiple"]'
    ).simplecolorpicker("selectColor", "#fbd75b");
  }, 5000);

  setTimeout(function () {
    // Generates a JavaScript error
    $('select[name="colorpicker-selectColor-unknown"]').simplecolorpicker(
      "selectColor",
      "unknown"
    );
  }, 5000);

  setTimeout(function () {
    $(
      'select[name="colorpicker-picker-selectColor-#fbd75b"]'
    ).simplecolorpicker("selectColor", "#fbd75b");
  }, 5000);

  setTimeout(function () {
    // Generates a JavaScript error
    $(
      'select[name="colorpicker-picker-selectColor-unknown"]'
    ).simplecolorpicker("selectColor", "unknown");
  }, 5000);

  $("#init").on("click", function () {
    $('select[name="colorpicker-shortlist"]').simplecolorpicker();
    $('select[name="colorpicker-longlist"]').simplecolorpicker();
    $('select[name="colorpicker-notheme"]').simplecolorpicker();
    $('select[name="colorpicker-regularfont"]').simplecolorpicker({
      theme: "regularfont",
    });
    $('select[name="colorpicker-glyphicons"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-fontawesome"]').simplecolorpicker({
      theme: "fontawesome",
    });
    $('select[name="colorpicker-bootstrap3-form"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-modal-inline"]').simplecolorpicker();
    $('select[name="colorpicker-modal-picker"]').simplecolorpicker({
      picker: true,
    });
    $('select[name="colorpicker-option-selected"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-options-disabled"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-option-selected-disabled"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-optgroups"]').simplecolorpicker();
    $('select[name="colorpicker-change-background-color"]').simplecolorpicker();
    $('select[name="colorpicker-selectColor-#fbd75b"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $('select[name="colorpicker-selectColor-#FBD75B"]').simplecolorpicker({
      theme: "glyphicons",
    });
    $(
      'select[name="colorpicker-selectColor-#fbd75b-multiple"]'
    ).simplecolorpicker({ theme: "glyphicons" });
    $('select[name="colorpicker-selectColor-unknown"]').simplecolorpicker({
      theme: "glyphicons",
    });

    $('select[name="colorpicker-picker-shortlist"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
    });
    $('select[name="colorpicker-picker-longlist"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
    });
    $('select[name="colorpicker-picker-delay"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
      pickerDelay: 1000,
    });
    $('select[name="colorpicker-picker-option-selected"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
    });
    $('select[name="colorpicker-picker-options-disabled"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
    });
    $(
      'select[name="colorpicker-picker-option-selected-disabled"]'
    ).simplecolorpicker({ picker: true, theme: "glyphicons" });
    $('select[name="colorpicker-picker-optgroups"]').simplecolorpicker({
      picker: true,
      theme: "glyphicons",
    });
    $(
      'select[name="colorpicker-picker-selectColor-#fbd75b"]'
    ).simplecolorpicker({ picker: true, theme: "glyphicons" });
    $(
      'select[name="colorpicker-picker-selectColor-unknown"]'
    ).simplecolorpicker({ picker: true, theme: "glyphicons" });
  });

  $("#destroy").on("click", function () {
    $("select").simplecolorpicker("destroy");
  });

  // By default, activate simplecolorpicker plugin on HTML selects
  $("#init").trigger("click");
});


// filterDiv
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("table");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
  $(".table").click(function (e) {
    $(".table.active").removeClass("active");
    // console.log(",fvds");
    var $parent = $(this).parent();
    $parent.addClass("active");
    // console.log(",jsgnvbjkldfnbj");
    e.preventDefault();
  });
}
// end filterDiv //


/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

