<template>
  <div class="workOrder">
    <div class="workList" @click="workDetail">
      <div class="leftText">
        <div>123123老百姓大药房</div>
        <div class="bottomText">
          <span class="reason">个人原因</span>
          <span>处理时长：23:34</span>
        </div>
      </div>
      <div>
        <i class="cubeic-arrow"></i>
      </div>
    </div>
    <div class="workList">
      <div class="leftText">
        <div>123123老百姓大药房</div>
        <div class="bottomText">
          <span class="reason">个人原因</span>
          <span>处理时长：23:34</span>
        </div>
      </div>
      <div>
        <i class="cubeic-arrow"></i>
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
  methods: {
    workDetail() {
      this.$router.push("/workDetail");
    },
  },
  mounted() {
    document.title = "我的工单";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
.workOrder {
  padding: 10px;
  .workList {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
    .leftText {
      .bottomText {
        font-size: 10px;
      }
      > div {
        margin: 6px 0;
      }
      .reason {
        color: red;
        margin-right: 10px;
      }
    }
  }
}
</style>
