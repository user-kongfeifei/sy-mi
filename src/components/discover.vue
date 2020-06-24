<template>
  <!-- 底部footer -->
  <div>
    <van-row>
      <van-col class="kff-swiper-container">
        <img src="../assets/images/discover.jpg" alt />
      </van-col>
    </van-row>
    <foot_bar></foot_bar>
  </div>
</template>
<script>
import Foot_bar from "./Foot_bar";
export default {
  name: "Discover",
  data() {
    return {};
  },
  components: {
    Foot_bar
  },
    created() {
    this.$store.commit("myindex", 2);
  },
  activated() {
    this.$store.commit("myindex", 2);
  },
};
</script>

<style>
</style>