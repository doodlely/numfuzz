// NumFuzz.js
//
// Copyright (C) 2013 Ramon Torres <http://github.com/raymondjavaxx>
// Licenced under the MIT License <http://opensource.org/licenses/MIT>

(function () {
  "use strict";

  var NumFuzz = {};

  NumFuzz.fuzzy = function (number) {
    if (typeof number !== 'number') {
      number = parseInt(number, 10);
    }

    if (Math.abs(number) >= 1000000) {
      return this.round(number / 1000000.0, 1) + "M";
    }

    if (Math.abs(number) >= 1000) {
      return this.round(number / 1000.0, 1) + "k";
    }

    return number.toString();
  };

  NumFuzz.round = function (number, dec) {
    var truncated = Number((Math.floor(number * 10) / 10).toFixed(dec));
    if (truncated % 1 === 0) {
      return truncated.toFixed(0);
    }

    return truncated.toFixed(1);
  };

  window['NumFuzz'] = NumFuzz;
})();

// jQuery micro-pluggin
(function ($) {
  $.fn.numFuzz = function (method) {
    this.each(function (i, elem) {
      var num = parseInt($(elem).text(), 10);
      var fuzzy = NumFuzz.fuzzy(num);
      $(elem).attr('title', num).text(fuzzy).data('numfuzz-val', num);
    });
  };
})(jQuery);
