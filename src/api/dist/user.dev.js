"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

var _request = _interopRequireDefault(require("@utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//登录授权  取jwt
function query() {
  return regeneratorRuntime.async(function query$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _request["default"])('/api/auth/user/login', {}, {
            method: 'get'
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}