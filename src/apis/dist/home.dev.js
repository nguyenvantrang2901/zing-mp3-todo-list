"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = void 0;

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getHome = function getHome() {
  return new Promise(function _callee(resolve, reject) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              url: "home",
              method: "get"
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

exports.getHome = getHome;