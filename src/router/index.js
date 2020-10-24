import Vue from 'vue'
import Router from 'vue-router'
import Index from '@pages/index'//首页
import WorkOrder from '@pages/workOrder'//我的工单
import WorkDetail from '@pages/workOrder/workDetail.vue'//我的工单
import MyClient from '@pages/workOrder/myClient.vue'//我的客户

Vue.use(Router)
 
export default new Router({
  routes: [
    {//首页
      path: '/',
      name: '主页',
      component: Index
    },
    {//我的工单
      path: '/workOrder',
      name: '我的工单',
      component: WorkOrder
    },
    {//工单详情
      path: '/workDetail',
      name: '工单详情',
      component: WorkDetail
    },
     {//我的客户
      path: '/myClient',
      name: '我的客户',
      component: MyClient
    },
  ]
})