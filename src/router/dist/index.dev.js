"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("@pages/index"));

var _workOrder = _interopRequireDefault(require("@pages/workOrder"));

var _workDetail = _interopRequireDefault(require("@pages/workOrder/workDetail.vue"));

var _myClient = _interopRequireDefault(require("@pages/workOrder/myClient.vue"));

var _ClientDetails = _interopRequireDefault(require("@pages/workOrder/ClientDetails.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//首页
//我的工单
//我的工单
//我的客户
//我的客户
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    //首页
    path: '/',
    name: '主页',
    component: _index["default"]
  }, {
    //我的工单
    path: '/workOrder',
    name: '我的工单',
    component: _workOrder["default"]
  }, {
    //工单详情
    path: '/workDetail',
    name: '工单详情',
    component: _workDetail["default"]
  }, {
    //我的客户
    path: '/myClient',
    name: '我的客户',
    component: _myClient["default"]
  }, {
    //客户详情
    path: '/clientDetails',
    name: '客户详情',
    component: _ClientDetails["default"]
  }]
});

exports["default"] = _default;