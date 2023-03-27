"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rootReducer = _interopRequireDefault(require("./store/reducers/rootReducer"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxPersist = require("redux-persist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reduxConfig = function reduxConfig() {
  var store = (0, _redux.createStore)(_rootReducer["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
  var persistor = (0, _reduxPersist.persistStore)(store);
  return {
    store: store,
    persistor: persistor
  };
};

var _default = reduxConfig;
exports["default"] = _default;