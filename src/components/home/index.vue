<template>
  <div class="homePage">
    <div class="firstLine">
      <div>
        <div class="number">1111</div>
        <div class="name">我的客户</div>
      </div>
      <div>
        <div class="number">1111</div>
        <div class="name">我的工单</div>
      </div>
    </div>
    <div class="firstLine">
      <div>
        <div class="number">1111</div>
        <div class="name">洽谈中</div>
      </div>
      <div>
        <div class="number">1111</div>
        <div class="name">待打款</div>
      </div>
      <div>
        <div class="number">1111</div>
        <div class="name">入驻中</div>
      </div>
    </div>
    <div class="firstLine">
      <div>
        <div class="number">1111</div>
        <div class="name">审核中</div>
      </div>
      <div>
        <div class="number">1111</div>
        <div class="name">建店中</div>
      </div>
      <div>
        <div class="number">1111</div>
        <div class="name">已完成</div>
      </div>
    </div>
    <div class="clientList">
      <div class="hearder">
        <div class="title">新客户</div>
        <div><i class="cubeic-search"></i></div>
      </div>
      <div></div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scope>
.homePage {
  padding: 5px;
  padding-top: 15px;
  .firstLine {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 20px;

    > div {
      // width: 33%;
      background-color: #c1c1c1;
      flex: 1;
      margin: 0 10px;
      padding: 20px;
    }
    .number {
      font-size: 24px;
      color: chartreuse;
      margin-bottom: 10px;
    }
    .name {
      font-size: 16px;
      color: #ffffff;
    }
  }
  .clientList {
    padding: 10px;
    .hearder {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-weight: bold;
        font-size: 16px;
      }
      .cubeic-search {
        font-size: 20px;
      }
    }
  }
}
</style>