<template>
  <!-- 底部footer -->
  <div class="classification">
    <div class="classification-heart">
      <div class="classification-heart-return"></div>
      <div class="classification-heart-title">分类</div>
      <div class="classification-heart-icon"></div>
    </div>
    <div class="Classification-list">
      <div class="Classification-list-ul">
        <ul>
          <li>新品</li>
          <li>众筹</li>
          <li>小米手机</li>
          <li>Redmi</li>
          <li>黑鲨</li>
          <li>5G合约</li>
          <li>手机配件</li>
          <li>电视</li>
          <li>大家电</li>
          <li>电脑办公</li>
          <li>小爱智能</li>
          <li>路由器</li>
          <li>生活电器</li>
          <li>厨房电器</li>
          <li>智能穿戴</li>
          <li>智能家居</li>
          <li>车载出行</li>
          <li>个护健康</li>
        </ul>
      </div>
      <div class="Sample-classification"></div>
    </div>

    <foot_bar></foot_bar>
  </div>
</template>

<script>
import foot_bar from "./foot_bar";
export default {
  name: "catagory",
  data() {
    return {};
  },
  components: {
    foot_bar
  }
};
</script>

<style >
.classification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.classification-heart {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
  background-color: rgb(242, 242, 242);
}
.Classification-list {
  display: flex;
  flex-direction: row;
}
.Classification-list-ul {
  font-size: 14px;

  text-align: center;
}
.Classification-list-ul > li {
  height: 20px;
}
</style>