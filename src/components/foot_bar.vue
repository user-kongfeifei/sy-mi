<template>
  <div>
    <van-tabbar v-model="indexactive">
      <div class="bottom-bar">
        <div class="bottom-button" :class="{active:$store. state.pageIndex==0}" @click="pageChange(0)">
          <img class="btn-img" v-if="$store. state.pageIndex==0" src="../assets/images/footer-1.png" />
          <img class="btn-img" v-else src="../assets/images/footer-11.png" />
          <div>首页</div>
        </div>
        <div class="bottom-button" :class="{active:$store. state.pageIndex==1}" @click="pageChange(1)">
          <img class="btn-img" v-if="$store. state.pageIndex==1" src="../assets/images/footer-22.png" />
          <img class="btn-img" v-else src="../assets/images/footer-2.png" />
          <div>分类</div>
        </div>
        <div class="bottom-button"  :class="{active:$store. state.pageIndex==2}" @click="pageChange(2)">
          <img class="btn-img" v-if="$store. state.pageIndex==2" src="../assets/images/footer-33.png" />
          <img class="btn-img" v-else src="../assets/images/footer-3.png" />
          <div>星球</div>
        </div>
        <div class="bottom-button" :class="{active:$store. state.pageIndex==3}" @click="pageChange(3)">
          <img class="btn-img" v-if="$store. state.pageIndex==3" src="../assets/images/footer-44.png" />
          <img class="btn-img" v-else src="../assets/images/footer-4.png" />
          <span class="floatnum" v-show="goodsCount!=0">{{goodsCount}}</span>
          <div>购物车</div>
        </div>
        <div class="bottom-button" :class="{active:$store. state.pageIndex==4}" @click="pageChange(4)">
          <img class="btn-img" v-if="$store. state.pageIndex==4" src="../assets/images/footer-55.png" />
          <img class="btn-img" v-else src="../assets/images/footer-5.png" />
          <div>我的</div>
        </div>
      </div>
    </van-tabbar>
  </div>
</template>
 <script>
import Foot_bar from "./Foot_bar";
export default {
  name: "Footer_bar",
  data() {
    return {
      indexactive: "",
      active:"",
      title:"首页",
    };
  },
  computed:{
    goodsCount(){
      let sum =0
      for(let i=0;i<this.$store.state.cartlist.length;i++){
        if(this.$store.state.cartlist[i].checked){
          sum +=this.$store.state.cartlist[i].count;
        }
      }
      return sum;
    },
  },
  components: {
    Foot_bar
  },
  methods:{
        pageChange(index){
            this.$store.state.pageIndex = index;
            if(index==0){
                this.$router.push({
                  path:"/"
                });
                this.title="首页";
                console.log(this.$store.state.pageIndex);
            }

            if(index==1){
                 this.$router.push({
                  path:"/category"
                });
                this.title="分类";
             
                 console.log(this.$store.state.pageIndex);
            }

            if(index==2){
                  this.$router.push({
                  path:"/discover"
                });
                this.title="星球";
            }

            if(index==3){
                   this.$router.push({
                  path:"/cart"
                });
                this.title="购物车";
            }

              if(index==4){
                   this.$router.push({
                  path:"/user"
                });
                this.title="我的";
            }
        }
    }
};
</script>
<style>
/* 购物车数量 */
.floatnum{
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background-color: #ed4d41;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 265px;
}

.van-tabbar{
  z-index: 99999;
}
.bottom-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.bottom-button a {
  color: #999;
}
.bottom-button {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  flex-shrink: 0;
  font-size: 13px;
  color: #999;
}
.btn-img {
  width: 20px;
  margin-bottom: 5px;
}
.active {
  color: #ff6700;
}



</style>