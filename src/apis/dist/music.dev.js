"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInfoSong = exports.getSong = void 0;

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSong = function getSong(songId) {
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

exports.getSong = getSong;

var getInfoSong = function getInfoSong(songId) {
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

exports.getInfoSong = getInfoSong;