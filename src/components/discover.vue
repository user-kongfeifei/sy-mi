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
import foot_bar from "./foot_bar";
export default {
  name: "discover",
  data() {
    return {};
  },

  components: {
    foot_bar
  }
};
</script>

<style>
</style>