<template>
  <div class="workDetail">
    <div class="header">
      <div class="name">健康大药房</div>
      <div class="reson">个人原因</div>
    </div>
    <div class="creatTime">创建时间：2020/09/03 14:00</div>
    <div class="workContent">
      <div><span>工单内容：</span></div>
      <div><span>关联人员：</span>市场-无双，运营-无双，售后-一笑</div>
      <div><span>处理时长：</span></div>
    </div>
    <div class="remark"></div>
  </div>
</template>

<script>
export default {
  name: "workOrder",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.title = "工单详情";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
.workDetail {
  padding: 20px 10px;
  .header {
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 16px;
    }
    .reson {
      color: red;
      font-size: 12px;
    }
  }
  .creatTime{
    font-size: 12px;
    text-align: left;
    margin-top: 10px;
  }
  .workContent{
    background-color: #f1f1f1;
    text-align: left;
    font-size: 12px;
    padding: 10px;
    margin-top: 10px;
    >div{
      margin: 8px 0;
    }
    span{
      font-weight: bold;
    }
  }
}
</style>
