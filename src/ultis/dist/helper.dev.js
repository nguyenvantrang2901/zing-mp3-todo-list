"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrSlider = void 0;

var getArrSlider = function getArrSlider(start, end, number) {
  var limit = start > end ? number : end;
  var output = [];

  for (var i = start; i <= limit; i++) {
    output.push(i);
  }

  if (start > end) {
    for (var _i = 0; _i <= end; _i++) {
      output.push(_i);
    }
  }

  return output;
};

exports.getArrSlider = getArrSlider;