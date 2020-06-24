<template>
  <!-- 底部footer -->
  <div class="classification">
    <transition name="fade">
    <div class="classification-heart">
        <van-sticky class="fade-heart" >
        <van-nav-bar title="分类" >
          <template #left>
            <van-icon name="arrow-left" color="#ccc" size="25" @click="myreturn" />
          </template>
          <template #right>
            <van-icon name="search"   color="#ccc" size="25" />
          </template>
        </van-nav-bar>
      </van-sticky>
     
      
    </div>
     </transition>

    <div class="Classification-list" >
      <div class="Classification-list-ul-l"></div>
      <div class="Classification-list-ul">
       
            <li :class="{Classificationlistli :mun==1}" @click="myphone" > 新品</li>

            <li :class="{Classificationlistli :mun==2}" @click="myzhineng"> 众筹</li>

            <li :class="{Classificationlistli :mun==3}" @click="myxiaomi" > 小米手机</li>

            <li :class="{Classificationlistli :mun==4}" @click="myRedmi" > Redmi</li>

            <li :class="{Classificationlistli :mun==5}" @click="myheisha" >黑鲨</li>

            <li :class="{Classificationlistli :mun==6}" @click="myheyue" >5G合约</li>

            <li :class="{Classificationlistli :mun==7}" @click="mypeijian" >手机配件</li>

            <li :class="{Classificationlistli :mun==8}" @click="mydianshi">电视</li>
            <li :class="{Classificationlistli :mun==9}" @click="mydajiadian">大家电</li>
            <li :class="{Classificationlistli :mun==10}" @click="mydiannao"> 电脑办公</li>
            <li :class="{Classificationlistli :mun==11}" @click="myxiaoai">小爱智能</li>
            <li :class="{Classificationlistli :mun==12}" @click="mychuandai">智能穿戴</li>
            <li :class="{Classificationlistli :mun==13}" @click="myluyou">路由器</li>
            <li :class="{Classificationlistli :mun==14}" @click="myshenghuo">生活电器</li>
            <li >厨房电器</li>
         
        
      </div>
      <div class="Sample-classification" @scroll="myscroll">

        <a id="phone"></a>
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
                @click="myclick(index)"
              >
                <a>
                  <img :src="item.pictureUrl" alt />
                  <div>{{item.name}}</div>
                </a>
              </div>
            </div>
          </div>
          <a id="zhineng"></a>
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
        <a id="xiaomi"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner1.jpg" alt />
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
        <a id="Redmi"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner2.jpg" alt />
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
          <a id="heisha"></a>
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
        <a id="heyue"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner3.jpg" alt />
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
          <a id="peijian"></a>
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


        <a id="dianshi"></a>
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
                @click="myclick(index)"
              >
                <a>
                  <img :src="item.pictureUrl" alt />
                  <div>{{item.name}}</div>
                </a>
              </div>
            </div>
          </div>
          <a id="dajiadian"></a>
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
        <a id="diannao"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner1.jpg" alt />
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
        <a id="xiaoai"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner2.jpg" alt />
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
          <a id="chuandai"></a>
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
        <a id="luyou"></a>
        <div class="Sample-classification-img">
          <img src="../assets/li-images/banner3.jpg" alt />
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
          <a id="shenghuo"></a>
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
      </div>
    </div>

    <foot_bar></foot_bar>
  </div>
</template>

<script>
import foot_bar from "./foot_bar";

export default {
  name: "catagory",
  data() {
    return {
      activeKey: 0,
      list: [],
      list2: [],
      list3: [],
      list4: [],
      mun: 1
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
    myscroll() {
      if(event.target.scrollTop<100){
        this.mun=1
       
      }
      if(event.target.scrollTop>400){
        this.mun=2
      }
       if(event.target.scrollTop>800){
        this.mun=3
      }
       if(event.target.scrollTop>1200){
        this.mun=4
      }
      if(event.target.scrollTop>1600){
        this.mun=5
      }
      if(event.target.scrollTop>2000){
        this.mun=6
      }
      if(event.target.scrollTop>2400){
        this.mun=7
      }
      if(event.target.scrollTop>2800){
        this.mun=8
      }
      if(event.target.scrollTop>3200){
        this.mun=9
      }
      if(event.target.scrollTop>3600){
        this.mun=10
      }
        if(event.target.scrollTop>4000){
        this.mun=11
      }
        if(event.target.scrollTop>4400){
        this.mun=12
      }
        if(event.target.scrollTop>4800){
        this.mun=13
      }
        if(event.target.scrollTop>5200){
        this.mun=14
      }
        if(event.target.scrollTop>5600){
        this.mun=15
      }
    },
    myclick(index) {
      this.$store.commit("myproductStore", index);
      this.$router.push("product");
    },
    myphone(mun) {
      document.querySelector("#phone").scrollIntoView(true);
      this.mun=1
    },
    myzhineng(mun) {
      document.querySelector("#zhineng").scrollIntoView(true);
      this.mun=2
    },
    myxiaomi() {
      document.querySelector("#xiaomi").scrollIntoView(true);
      this.mun=3
    },
    myRedmi() {
      document.querySelector("#Redmi").scrollIntoView(true);
       this.mun=4
    },
    myheisha() {
      document.querySelector("#heisha").scrollIntoView(true);
       this.mun=5
    },
    myheyue() {
      document.querySelector("#heyue").scrollIntoView(true);
       this.mun=6
    },
    mypeijian() {
      document.querySelector("#peijian").scrollIntoView(true);
       this.mun=7
    },
     mydianshi() {
      document.querySelector("#dianshi").scrollIntoView(true);
       this.mun=8
    },
     mydajiadian() {
      document.querySelector("#dajiadian").scrollIntoView(true);
       this.mun=9
    },
     mydiannao() {
      document.querySelector("#diannao").scrollIntoView(true);
       this.mun=10
    },
     myxiaoai() {
      document.querySelector("#xiaoai").scrollIntoView(true);
       this.mun=11
    },
     mychuandai() {
      document.querySelector("#chuandai").scrollIntoView(true);
       this.mun=12
    },
     myluyou() {
      document.querySelector("#luyou").scrollIntoView(true);
       this.mun=13
    },
    myshenghuo() {
      document.querySelector("#shenghuo").scrollIntoView(true);
       this.mun=14
    },
    mychufang() {
      document.querySelector("#chufang").scrollIntoView(true);
       this.mun=15
    },
    
    myreturn(){
      this.$router.go(-1);
    }
  },
  
  components: {
    foot_bar
  }
};
</script>

<style scoped>
.fade-heart{
  background: red;
  -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
}
.classification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Classificationlistli{
  color: #fb7d34 !important; 
  font-size: 20px !important;
      
  
}
.classification-heart {
  align-items: center;
  transition: all .3s;
 
  

  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
  background-color: rgb(242, 242, 242);
}
.Classification-list {
  display: flex;
  flex-direction: row;
  height: 1000px;
  overflow: scroll;
}
.Classification-list-ul-l {
  width: 22%;
  height: 80%;
  display: flex;

  flex-direction: column;
  border-right: 1px solid #eee;
  flex-shrink: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(50px);
}
.Classification-list-ul {
  width: 22%;
  height: 85%;
  display: flex;
  position: fixed;
  left: 0;
  flex-direction: column;
  border-right: 1px solid #eee;
  flex-shrink: 0;
  overflow: auto;
}
.Classification-list-ul::-webkit-scrollbar{
  display: none;
}
.Classification-list-ul li{
  height: 40px;
  text-align: center;
  font-size: 14px;
 list-style-type: none;
  color: #3c3c3c;
  margin-top: 15px;
  flex-shrink: 0;
  

}
.Sample-classification {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.Sample-classification-img {
  width: 100%;
}
.Sample-classification-img > img {
  width: 92%;
  padding: 15px;
  margin-top: 35px;
}
.Sample-classification-title {
  background: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  margin-top: 50px;
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