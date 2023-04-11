"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("../actions/actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  curSongId: null,
  isPlaying: false,
  // atAlbum dùng để xử lý khi type của bài hát để chuyển đổi bài hát qua lại
  atAlbum: false,
  songs: null
};

var musicReducer = function musicReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes["default"].SET_CUR_SONG_ID:
      return _objectSpread({}, state, {
        curSongId: action.songId || null
      });

    case _actionTypes["default"].PLAY:
      return _objectSpread({}, state, {
        isPlaying: action.flag
      });

    case _actionTypes["default"].SET_ALBUM:
      return _objectSpread({}, state, {
        atAlbum: action.flag
      });

    case _actionTypes["default"].PLAY_LIST:
      return _objectSpread({}, state, {
        songs: action.songs || null
      });

    default:
      return state;
  }
};

var _default = musicReducer;
exports["default"] = _default;