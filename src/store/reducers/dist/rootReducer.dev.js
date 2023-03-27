"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _appReducer = _interopRequireDefault(require("./appReducer"));

var _musicReducer = _interopRequireDefault(require("./musicReducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonConfig = {
  storage: _storage["default"],
  stateReconclier: _autoMergeLevel["default"]
}; //Lưu dưới LocalStorage

var musicConfig = _objectSpread({}, commonConfig, {
  key: 'music',
  // Muốn lưu 1 vài [key] reducer ở dưới localStorage
  whiteList: ['curSongId']
});

var rootReducer = (0, _redux.combineReducers)({
  app: _appReducer["default"],
  music: (0, _reduxPersist.persistReducer)(musicConfig, _musicReducer["default"])
});
var _default = rootReducer;
exports["default"] = _default;