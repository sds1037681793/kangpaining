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
    <div class="remark">
      <div class="content">111111</div>
      <div class="imgList">
          <img src="https://www.cnblogs.com/skins/coffee/images/bg_title.gif" />
          <img src="https://www.cnblogs.com/skins/coffee/images/bg_title.gif" />
          <img src="https://www.cnblogs.com/skins/coffee/images/bg_title.gif" />
      </div>
      <div class="bottomText">
        <div><span>小记日期：</span></div>
        <div><span>记录人：</span></div>
      </div>
    </div>
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
  .creatTime {
    font-size: 12px;
    text-align: left;
    margin-top: 10px;
  }
  .workContent {
    background-color: #f1f1f1;
    text-align: left;
    font-size: 12px;
    padding: 4px 10px;
    margin-top: 10px;
    > div {
      margin: 8px 0;
    }
    span {
      font-weight: bold;
    }
  }
  .remark {
    font-size: 14px;
    padding: 10px;
    border: 1px solid #e9e9e9;
    margin-top: 10px;
    text-align: left;
    .bottomText {
      font-size: 12px;
      display: flex;
      justify-content: start;
      > div {
        margin-top: 10px;
        margin-right: 20px;
      }
      span {
        font-weight: bold;
      }
    }
    .imgList{
      overflow: hidden;
      img{
        width: 145px;
        margin: 10px;
        float: left;
        display: block;
      }
    }
  }
}
</style>
