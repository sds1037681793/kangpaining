"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("./apiConfig/index.js"));

var _auth = _interopRequireDefault(require("./auth.js"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var instance = _axios["default"].create({
  method: 'post',
  withCredentials: true,
  timeout: 60000,
  headers: {
    'Accept': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
});
instance.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  return Promise.reject(err);
});

var normalHandler = function normalHandler(resolve, res) {
  var r = res.data;

  if (r && typeof r === 'string') {
    // 处理安卓4.4.4以下 返回数据
    r = JSON.parse(r);
  }

  if (r) {
    if (r.status === 1) {
      r && resolve(r.data);
    } else {
      // 错误处理
      var code = r.code;

      if (code === 3090320000) {// Toast({
        //   message: r.message,
        //   duration: 1000
        // })
      } else if (code === 3090320001 || code === 3090310006) {
        _auth["default"].login();
      }

      res && resolve(false);
    }
  } else {
    // 未知错误
    res && resolve(false);
  }
};

var errorHandler = function errorHandler(reject, err) {
  console.error(err);
  reject({
    status: 0,
    code: 500,
    error: err.message || err
  });
};

var _callee = function _callee() {
  var url,
      data,
      option,
      method,
      prefixName,
      prefix,
      config,
      _args = arguments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          option = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          method = option.method || 'post';
          prefixName = option.prefixName || 'api';

          if (url.indexOf('http') !== 0) {
            prefix = _index["default"][prefixName];
            url = prefix + url;
          }

          config = _objectSpread({
            url: url
          }, option, {
            method: method
          });

          if (method.toLocaleLowerCase() === 'get') {
            config['params'] = data;
          } else {
            config['data'] = data;
          }

          if (option.headers && option.headers['Content-Type'] === 'multipart/form-data') {
            instance.defaults.transformRequest = [function (data) {
              return data;
            }];
          } else if (option.headers && option.headers['Content-Type'] === 'application/json') {
            instance.defaults.transformRequest = [function (data) {
              return JSON.stringify(data);
            }];
          } else {
            instance.defaults.transformRequest = [function (data) {
              data = _qs["default"].stringify(data);
              return data;
            }];
          }

          return _context.abrupt("return", new Promise(function (resolve, reject) {
            instance.request(config).then(function (res) {
              normalHandler(resolve, res);
            })["catch"](function (err) {
              errorHandler(reject, err);
            });
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports["default"] = _callee;