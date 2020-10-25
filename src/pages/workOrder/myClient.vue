<template>
  <div class="myClient">
    <div class="topSearch">
      <cube-input
        class=""
        v-model="searchValue"
        placeholder="请输入店铺名称/联系人手机号"
        type="“text”"
        :clearable="true"
      ></cube-input>
      <cube-button class="cube-button-small" :inline="true"> 搜索</cube-button>
    </div>
    <div class="tabClient">
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
        </cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel
          v-for="item in tabs"
          :label="item.label"
          :key="item.label"
        >
          <div class="workList" @click="workDetail">
            <div class="leftText">
              <div>123123老百姓大药房</div>
              <div class="bottomText">
                <span class="reason">个人原因</span>
                <span>处理时长：23:34</span>
              </div>
            </div>
            <div class="rightText">
              <div>
                <i class="cubeic-arrow"></i>
              </div>
              <div>
                <span>9/24</span>
              </div>
            </div>
          </div>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "workOrder",
  components: {},
  data() {
    return {
      searchValue: "",
      selectedLabel: "洽谈中",
      tabs: [
        {
          label: "洽谈中",
          vulue: "1",
        },
        {
          label: "待打款",
          vulue: "2",
        },
        {
          label: "入驻中",
          vulue: "3",
        },
        {
          label: "审核中",
          vulue: "4",
        },
        {
          label: "建店中",
          vulue: "5",
        },
      ],
    };
  },
  methods: {
    workDetail() {
      this.$router.push("/clientDetails");
    },
  },
  mounted() {
    document.title = "我的客户";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
.myClient {
  padding: 20px 10px;
  .topSearch {
    display: flex;
    justify-content: space-between;
    .cube-input {
      flex: 4;
    }
    .cube-btn {
      flex: 1;
    }
    .cube-input{
      line-height: 1;
    }
  }
  .tabClient {
    margin-top: 20px;
    .cube-tab {
      font-size: 14px;
    }
    .workList {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: center;
      text-align: left;
      border-bottom: 1px solid #e5e5e5;
      margin: 10px 0;
      .leftText {
        .bottomText {
          font-size: 10px;
        }
        .reason{
          color: red;
          margin-left: 0;
        }
        > div {
          margin: 6px 0;
        }
      }
      .rightText {
        span {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
