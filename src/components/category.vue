<template>
  <!-- 底部footer -->
  <div class="classification">
    <van-sticky>
      <van-nav-bar title="分类" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <div class="Classification-list">
      <div class="Classification-list-ul">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="(item,index) in list" :key="index" :title="item.showText" />
        </van-sidebar>

        <!-- <ul>
          <li v-for="(item,index) in list" :key="index">{{item.showText}}</li>
        </ul>-->
      </div>
      <div class="Sample-classification" >
        <div class="Sample-classification-img">
          <img src="../assets/li-images/zhongcou.jpg" alt />
        </div>
        <div class="Sample-classification-lowerpart">
          <div class="Sample-classification-title">
            <span class="Sample-classification-title-span">手机</span>
          </div>
          <div class="Sample-classification-content">
            <div class="Sample-classification-content-title">
              <div
                class="Sample-classification-content-style"
                v-for="(item,index) in list2"
                :key="index"
              >
                <a href>
                  <img :src="item.pictureUrl" alt />
                  <div>{{item.name}}</div>
                </a>
              </div>
            </div>
          </div>

          <div class="Sample-classification-title">
            <span class="Sample-classification-title-span">智能</span>
          </div>
          <div class="Sample-classification-content">
            <div class="Sample-classification-content-title">
              <div
                class="Sample-classification-content-style"
                v-for="(item,index) in list3"
                :key="index"
              >
                <a href>
                  <img :src="item.pictureUrl" alt />
                  <div>{{item.name}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="Sample-classification-img">
          <img src="../assets/li-images/zhongcou.jpg" alt />
        </div>
         <div class="Sample-classification-title">
            <span class="Sample-classification-title-span">智能</span>
          </div>
          <div class="Sample-classification-content">
            <div class="Sample-classification-content-title">
              <div
                class="Sample-classification-content-style"
                v-for="(item,index) in list4"
                :key="index"
              >
                <a href>
                  <img :src="item.pictureUrl" alt />
                  <div>{{item.name}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        

    


    </div>

    <foot_bar></foot_bar>
  </div>
</template>

<script>
import foot_bar from "./foot_bar";
import { Notify } from "vant";
export default {
  name: "catagory",
  data() {
    return {
      activeKey: 0,
      list: [],
      list2: [],
      list3: [],
      list4:[]
    };
  },

  created() {
    let that = this;
    let url =
      "https://www.fastmock.site/mock/22d1e8b99790686f9dd9ef6569b75f2c/mimarket/category";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      console.log(JSON.parse(xhr.response).response.body.cateList);
      that.list = JSON.parse(xhr.response).response.body.cateList;
      that.list2 = JSON.parse(
        xhr.response
      ).response.body.cateList[0].data[0].mobile;

      that.list3 = JSON.parse(
        xhr.response
      ).response.body.cateList[0].data[1].AI;
      that.list4 = JSON.parse(
        xhr.response
      ).response.body.cateList[1].data[1].AI;
    };
  },
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  },
  components: {
    foot_bar
  }
};
</script>

<style scoped>
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
  width: 25%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
  flex-shrink: 0;
  overflow: auto;
  font-size: 18px;
  text-align: center;
}

.Classification-list-ul li {
  height: 40px;

  transition: all 1s;
  transform-origin: center center;
  transform: scale(0.76);
}
.Sample-classification {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 600px;
}
.Sample-classification-img {
  width: 100%;
}
.Sample-classification-img > img {
  width: 92%;
  padding: 15px;
}
.Sample-classification-title {
  background: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  margin-top: 30px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  position: relative;
}
.Sample-classification-title-span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 33%;
  width: 30px;
  border-top: 1px solid #e0e0e0;
}
.Sample-classification-title-span::after {
  content: "";
  position: absolute;
  top: 50%;

  width: 30px;
  border-top: 1px solid #e0e0e0;
}

.Sample-classification-content-title {
  display: flex;
  width: 100%;
  flex-direction: row;

  flex-wrap: wrap;
  flex: 1 1 auto;
  padding: 10px 10px;
  text-align: center;
}
.Sample-classification-content-style {
  width: 30%;
  height: 80px;
  padding-top: 15px;
  margin: 10px 0;
}
.Sample-classification-content-style img {
  width: 65%;

  margin: 0 auto;
}
.Sample-classification-content-style div {
  margin-top: 0.28rem;
  white-space: nowrap;
  font-size: 0.23rem;
  color: rgba(0, 0, 0, 0.54);
}
</style>