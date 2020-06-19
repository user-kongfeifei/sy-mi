<template>
  <footer class="footer">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{active:index == num}"
        @click="addClassName(index)"
      >
        <router-link :to="item.path">
          <span v-show="num!=index" :class="item.icon"></span>
          <span v-show="num==index" :class="item.active"></span>
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
 
<script>
export default {
  data() {
    return {
      num: 0,
      tabName: "",
      list: [
        {
          icon: "iconfont icon-wode",
          active: "iconfont icon-shouye", 
          name: "首页",
          path: "/home"
        },
        {
          icon: "iconfont icon-icon",
          active: "iconfont icon-gouwuche",
          name: "分类",
          path: "/kind"
        },
        {
          icon: "iconfont icon-gouwuche",
          active: "iconfont icon-icon",
          name: "购物车",
          path: "/cart"
        },
        {
          icon: "iconfont icon-wode",
          active: "iconfont icon-shouye",
          name: "我的",
          path: "/user"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    addClassName: function(index) {
      console.log(index);
      this.num = index;
    }
  }
};
</script>
 

