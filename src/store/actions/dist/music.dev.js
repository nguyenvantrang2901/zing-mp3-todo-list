"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingData = exports.setPlaylist = exports.playAlbum = exports.play = exports.setCurSongId = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var apis = _interopRequireWildcard(require("../../apis"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var playAlbum = function playAlbum(flag) {
  return {
    type: _actionTypes["default"].SET_ALBUM,
    flag: flag
  };
};

exports.playAlbum = playAlbum;

var setPlaylist = function setPlaylist(songs) {
  return {
    type: _actionTypes["default"].PLAY_LIST,
    songs: songs
  };
}; //Xử lý khi load data


exports.setPlaylist = setPlaylist;

var loadingData = function loadingData(flag) {
  return {
    type: _actionTypes["default"].LOADING_DATA,
    flag: flag
  };
}; // export const fetchDetailPlayList = (playListId) =>async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(playListId)
//         if(response?.data?.error === 0){
//             dispatch({
//                 type: actionTypes.PLAY_LIST,
//                 songs : actionTypes?.data?.data?.songs?.items
//             })
//         }
//     } catch (error) {
//         dispatch({
//             type: actionTypes?.PLAY_LIST,
//             sóng : null
//         })
//     }
// }


exports.loadingData = loadingData;