"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.play = exports.setCurSongId = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setCurSongId = function setCurSongId(songId) {
  return {
    type: _actionTypes["default"].SET_CUR_SONG_ID,
    songId: songId
  };
};

exports.setCurSongId = setCurSongId;

var play = function play(flag) {
  return {
    type: _actionTypes["default"].PLAY,
    flag: flag
  };
};

exports.play = play;