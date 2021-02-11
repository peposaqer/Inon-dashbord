// filterSelection("all");
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }



// $("#trash").click(function () {
//   $("#trash").hide("slow", function () {
//     alert("Animation complete.");
//   });
// });

$(document).ready(function () {
  $("#btn1").click(function () {
    $("#test3").text($("#test3").text()+"1");
  });
  $("#btn2").click(function () {
    $("#test3").text($("#test3").text()+"2");
  });
  $("#btn3").click(function () {
    $("#test3").text($("#test3").text()+"3");
  });
  $("#btn4").click(function () {
    $("#test3").text($("#test3").text()+"4");
  });
  $("#btn5").click(function () {
    $("#test3").text($("#test3").text()+"5");
  });
  $("#btn6").click(function () {
    $("#test3").text($("#test3").text()+"6");
  });
  $("#btn7").click(function () {
    $("#test3").text($("#test3").text()+"7");
  });
  $("#btn8").click(function () {
    $("#test3").text($("#test3").text()+"8");
  });
  $("#btn9").click(function () {
    $("#test3").text($("#test3").text()+"9");
  });
  // $("#btn3").click(function () {
  //   $("#test3").val("1");
  // });
  // $("#btn3").click(function () {
  //   $("#test3").val("Dolly Duck");
  // });
  // $("#btn3").click(function () {
  //   $("#test3").val("Dolly Duck");
  // });
});

// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });



/*
 * Very simple jQuery Color Picker
 * https://github.com/tkrotoff/jquery-simplecolorpicker
 *
 * Copyright (C) 2012-2013 Tanguy Krotoff <tkrotoff@gmail.com>
 *
 * Licensed under the MIT license
 */

// (function($) {
//   'use strict';

//   /**
//    * Constructor.
//    */
//   var SimpleColorPicker = function(select, options) {
//     this.init('simplecolorpicker', select, options);
//   };

//   /**
//    * SimpleColorPicker class.
//    */
//   SimpleColorPicker.prototype = {
//     constructor: SimpleColorPicker,

//     init: function(type, select, options) {
//       var self = this;

//       self.type = type;

//       self.$select = $(select);
//       self.$select.hide();

//       self.options = $.extend({}, $.fn.simplecolorpicker.defaults, options);

//       self.$colorList = null;

//       if (self.options.picker === true) {
//         var selectText = self.$select.find('> option:selected').text();
//         self.$icon = $('<span class="simplecolorpicker icon"'
//                      + ' title="' + selectText + '"'
//                      + ' style="background-color: ' + self.$select.val() + ';"'
//                      + ' role="button" tabindex="0">'
//                      + '</span>').insertAfter(self.$select);
//         self.$icon.on('click.' + self.type, $.proxy(self.showPicker, self));

//         self.$picker = $('<span class="simplecolorpicker picker ' + self.options.theme + '"></span>').appendTo(document.body);
//         self.$colorList = self.$picker;

//         // Hide picker when clicking outside
//         $(document).on('mousedown.' + self.type, $.proxy(self.hidePicker, self));
//         self.$picker.on('mousedown.' + self.type, $.proxy(self.mousedown, self));
//       } else {
//         self.$inline = $('<span class="simplecolorpicker inline ' + self.options.theme + '"></span>').insertAfter(self.$select);
//         self.$colorList = self.$inline;
//       }

//       // Build the list of colors
//       // <span class="color selected" title="Green" style="background-color: #7bd148;" role="button"></span>
//       self.$select.find('> option').each(function() {
//         var $option = $(this);
//         var color = $option.val();

//         var isSelected = $option.is(':selected');
//         var isDisabled = $option.is(':disabled');

//         var selected = '';
//         if (isSelected === true) {
//           selected = ' data-selected';
//         }

//         var disabled = '';
//         if (isDisabled === true) {
//           disabled = ' data-disabled';
//         }

//         var title = '';
//         if (isDisabled === false) {
//           title = ' title="' + $option.text() + '"';
//         }

//         var role = '';
//         if (isDisabled === false) {
//           role = ' role="button" tabindex="0"';
//         }

//         var $colorSpan = $('<span class="color"'
//                          + title
//                          + ' style="background-color: ' + color + ';"'
//                          + ' data-color="' + color + '"'
//                          + selected
//                          + disabled
//                          + role + '>'
//                          + '</span>');

//         self.$colorList.append($colorSpan);
//         $colorSpan.on('click.' + self.type, $.proxy(self.colorSpanClicked, self));

//         var $next = $option.next();
//         if ($next.is('optgroup') === true) {
//           // Vertical break, like hr
//           self.$colorList.append('<span class="vr"></span>');
//         }
//       });
//     },

//     /**
//      * Changes the selected color.
//      *
//      * @param color the hexadecimal color to select, ex: '#fbd75b'
//      */
//     selectColor: function(color) {
//       var self = this;

//       var $colorSpan = self.$colorList.find('> span.color').filter(function() {
//         return $(this).data('color').toLowerCase() === color.toLowerCase();
//       });

//       if ($colorSpan.length > 0) {
//         self.selectColorSpan($colorSpan);
//       } else {
//         console.error("The given color '" + color + "' could not be found");
//       }
//     },

//     showPicker: function() {
//       var pos = this.$icon.offset();
//       this.$picker.css({
//         // Remove some pixels to align the picker icon with the icons inside the dropdown
//         left: pos.left - 6,
//         top: pos.top + this.$icon.outerHeight()
//       });

//       this.$picker.show(this.options.pickerDelay);
//     },

//     hidePicker: function() {
//       this.$picker.hide(this.options.pickerDelay);
//     },

//     /**
//      * Selects the given span inside $colorList.
//      *
//      * The given span becomes the selected one.
//      * It also changes the HTML select value, this will emit the 'change' event.
//      */
//     selectColorSpan: function($colorSpan) {
//       var color = $colorSpan.data('color');
//       var title = $colorSpan.prop('title');

//       // Mark this span as the selected one
//       $colorSpan.siblings().removeAttr('data-selected');
//       $colorSpan.attr('data-selected', '');

//       if (this.options.picker === true) {
//         this.$icon.css('background-color', color);
//         this.$icon.prop('title', title);
//         this.hidePicker();
//       }

//       // Change HTML select value
//       this.$select.val(color);
//     },

//     /**
//      * The user clicked on a color inside $colorList.
//      */
//     colorSpanClicked: function(e) {
//       // When a color is clicked, make it the new selected one (unless disabled)
//       if ($(e.target).is('[data-disabled]') === false) {
//         this.selectColorSpan($(e.target));
//         this.$select.trigger('change');
//       }
//     },

//     /**
//      * Prevents the mousedown event from "eating" the click event.
//      */
//     mousedown: function(e) {
//       e.stopPropagation();
//       e.preventDefault();
//     },

//     destroy: function() {
//       if (this.options.picker === true) {
//         this.$icon.off('.' + this.type);
//         this.$icon.remove();
//         $(document).off('.' + this.type);
//       }

//       this.$colorList.off('.' + this.type);
//       this.$colorList.remove();

//       this.$select.removeData(this.type);
//       this.$select.show();
//     }
//   };

//   /**
//    * Plugin definition.
//    * How to use: $('#id').simplecolorpicker()
//    */
//   $.fn.simplecolorpicker = function(option) {
//     var args = $.makeArray(arguments);
//     args.shift();

//     // For HTML element passed to the plugin
//     return this.each(function() {
//       var $this = $(this),
//         data = $this.data('simplecolorpicker'),
//         options = typeof option === 'object' && option;
//       if (data === undefined) {
//         $this.data('simplecolorpicker', (data = new SimpleColorPicker(this, options)));
//       }
//       if (typeof option === 'string') {
//         data[option].apply(data, args);
//       }
//     });
//   };

//   /**
//    * Default options.
//    */
//   $.fn.simplecolorpicker.defaults = {
//     // No theme by default
//     theme: '',

//     // Show the picker or make it inline
//     picker: false,

//     // Animation delay in milliseconds
//     pickerDelay: 0
//   };

// })(jQuery);

// $(document).ready(function () {
//   $('select[name="colorpicker-change-background-color"]').on(
//     "change",
//     function () {
//       $(document.body).css(
//         "background-color",
//         $('select[name="colorpicker-change-background-color"]').val()
//       );
//     }
//   );

//   setTimeout(function () {
//     $('select[name="colorpicker-selectColor-#fbd75b"]').simplecolorpicker(
//       "selectColor",
//       "#fbd75b"
//     );
//   }, 5000);

//   setTimeout(function () {
//     $('select[name="colorpicker-selectColor-#FBD75B"]').simplecolorpicker(
//       "selectColor",
//       "#FBD75B"
//     );
//   }, 5000);

//   setTimeout(function () {
//     $(
//       'select[name="colorpicker-selectColor-#fbd75b-multiple"]'
//     ).simplecolorpicker("selectColor", "#fbd75b");
//   }, 5000);

//   setTimeout(function () {
//     // Generates a JavaScript error
//     $('select[name="colorpicker-selectColor-unknown"]').simplecolorpicker(
//       "selectColor",
//       "unknown"
//     );
//   }, 5000);

//   setTimeout(function () {
//     $(
//       'select[name="colorpicker-picker-selectColor-#fbd75b"]'
//     ).simplecolorpicker("selectColor", "#fbd75b");
//   }, 5000);

//   setTimeout(function () {
//     // Generates a JavaScript error
//     $(
//       'select[name="colorpicker-picker-selectColor-unknown"]'
//     ).simplecolorpicker("selectColor", "unknown");
//   }, 5000);

//   $("#init").on("click", function () {
//     $('select[name="colorpicker-shortlist"]').simplecolorpicker();
//     $('select[name="colorpicker-longlist"]').simplecolorpicker();
//     $('select[name="colorpicker-notheme"]').simplecolorpicker();
//     $('select[name="colorpicker-regularfont"]').simplecolorpicker({
//       theme: "regularfont",
//     });
//     $('select[name="colorpicker-glyphicons"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-fontawesome"]').simplecolorpicker({
//       theme: "fontawesome",
//     });
//     $('select[name="colorpicker-bootstrap3-form"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-modal-inline"]').simplecolorpicker();
//     $('select[name="colorpicker-modal-picker"]').simplecolorpicker({
//       picker: true,
//     });
//     $('select[name="colorpicker-option-selected"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-options-disabled"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-option-selected-disabled"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-optgroups"]').simplecolorpicker();
//     $('select[name="colorpicker-change-background-color"]').simplecolorpicker();
//     $('select[name="colorpicker-selectColor-#fbd75b"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-selectColor-#FBD75B"]').simplecolorpicker({
//       theme: "glyphicons",
//     });
//     $(
//       'select[name="colorpicker-selectColor-#fbd75b-multiple"]'
//     ).simplecolorpicker({ theme: "glyphicons" });
//     $('select[name="colorpicker-selectColor-unknown"]').simplecolorpicker({
//       theme: "glyphicons",
//     });

//     $('select[name="colorpicker-picker-shortlist"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-picker-longlist"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-picker-delay"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//       pickerDelay: 1000,
//     });
//     $('select[name="colorpicker-picker-option-selected"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//     });
//     $('select[name="colorpicker-picker-options-disabled"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//     });
//     $(
//       'select[name="colorpicker-picker-option-selected-disabled"]'
//     ).simplecolorpicker({ picker: true, theme: "glyphicons" });
//     $('select[name="colorpicker-picker-optgroups"]').simplecolorpicker({
//       picker: true,
//       theme: "glyphicons",
//     });
//     $(
//       'select[name="colorpicker-picker-selectColor-#fbd75b"]'
//     ).simplecolorpicker({ picker: true, theme: "glyphicons" });
//     $(
//       'select[name="colorpicker-picker-selectColor-unknown"]'
//     ).simplecolorpicker({ picker: true, theme: "glyphicons" });
//   });

//   $("#destroy").on("click", function () {
//     $("select").simplecolorpicker("destroy");
//   });

//   // By default, activate simplecolorpicker plugin on HTML selects
//   $("#init").trigger("click");
// });