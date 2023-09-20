"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiSearch = exports.apiGetDetailPlaylist = exports.apiGetInfoSong = exports.apiGetSong = void 0;

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiGetSong = function apiGetSong(songId) {
  return new Promise(function _callee(resolve, reject) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              url: "song",
              method: "get",
              params: {
                id: songId
              }
            }));

          case 3:
            res = _context.sent;
            resolve(res);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

exports.apiGetSong = apiGetSong;

var apiGetInfoSong = function apiGetInfoSong(songId) {
  return new Promise(function _callee2(resolve, reject) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              url: "infosong",
              method: "get",
              params: {
                id: songId
              }
            }));

          case 3:
            res = _context2.sent;
            resolve(res);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

exports.apiGetInfoSong = apiGetInfoSong;

var apiGetDetailPlaylist = function apiGetDetailPlaylist(playlistId) {
  return new Promise(function _callee3(resolve, reject) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              url: "detailplaylist",
              method: "get",
              params: {
                id: playlistId
              }
            }));

          case 3:
            res = _context3.sent;
            resolve(res);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
}; //api search bài hát


exports.apiGetDetailPlaylist = apiGetDetailPlaylist;

var apiSearch = function apiSearch(keyword) {
  return new Promise(function _callee4(resolve, reject) {
    var res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              url: "search",
              method: "get",
              params: {
                keyword: keyword
              }
            }));

          case 3:
            res = _context4.sent;
            resolve(res);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

exports.apiSearch = apiSearch;