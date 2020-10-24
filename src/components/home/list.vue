<template>
  <div class="clientLi">
    <div class="leftText">
      <div>
        <div>王先生</div>
        <div>洽谈中</div>
      </div>
      <div class="adree">
        <div><i class="cubeic-location"></i></div>
        <div>老百姓大药房</div>
      </div>
    </div>
    <div class="rightIcon">
      <i class="cubeic-phone"></i>
      <i class="cubeic-add"></i>
    </div>
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
.clientLi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-bottom: 1px solid #e6e6e6;

  .cubeic-location {
    font-size: 16px;
  }
}
.leftText {
  text-align: left;
  > div {
    display: flex;
    font-size: 14px;
    margin: 8px 0;
  }
}
.rightIcon {
  i {
    font-size: 16px;
    margin-left: 10px;
  }
}
</style>