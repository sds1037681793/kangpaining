<template>
  <div class="hello">
    <Home></Home>
    <TabBar :selectedLabelDefault="selectedLabelDefault"></TabBar>
  </div>
</template>

<script>
import TabBar from "@components/tabBar.vue";
import Home from "@components/home/index.vue";

export default {
  name: "Index",
  components: { TabBar, Home },
  data() {
    return {
      selectedLabelDefault: 1,
    };
  },
  methods: {},
  mounted() {
    document.title = "首页";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
