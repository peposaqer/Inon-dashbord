$(document).ready(function () {
  $("#save").click(function () {
    var textinput = $(".testinput").val();
    $("ul").append(
      '<li><div class="question-div"><div class="between"><h1>' +
        textinput +
        '</h1><div class="d-flex"><a href="#!" data-toggle="modal" data-target="#myModal"><img src="img/pen-solid (1).svg" alt=""></a><a href="#!" class="trash-img" ><img src="img/trash-alt-solid.svg" alt=""></a></div></div></div></li>'
    );
    $(".trash-img").click(function () {
      $(".question-div").hide(2000);
    });
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


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInp").change(function () {
  readURL(this);
});


$("#input").change(function () {
  var color = $(this).val();
  //  $("#color-code").html(color);
  //  $("#color").css({ "background-color": color });
  $("#firstSelect").append(
    '<option value="' + color + '">' + color + '</option>'
  );
  $('select[name="colorpicker-option-selected"]').simplecolorpicker("destroy");
  $('select[name="colorpicker-option-selected"]').simplecolorpicker({
    theme: "regularfont",
  });
});

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

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
  var SimpleColorPicker = function (select, options) {
    this.init("simplecolorpicker", select, options);
  };
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

  $("#init").on("click", function () {
    $('select[name="colorpicker-option-selected"]').simplecolorpicker({
      theme: "regularfont",
    });
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
  $(".table a").click(function (e) {
    $(".table.active").removeClass("active");
    var $parent = $(this).parent();
    $parent.addClass("active");
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

