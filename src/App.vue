<template>
  <div id="app">
     <router-view></router-view>
     <tab-bar>
     <tab-bar-item path="/home">
     <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
     <div slot="item-test">首页</div>
     </tab-bar-item>
      <tab-bar-item path="/share">
     <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
     <div slot="item-test">分类</div>
     </tab-bar-item>
      <tab-bar-item path="/shopcart">
     <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
     <div slot="item-test">购物车</div>
     </tab-bar-item>
      <tab-bar-item path="/about">
     <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
     <div slot="item-test">我的</div>
     </tab-bar-item>
     </tab-bar>
   </div>
</template>
 <script>
 import TabBar from 'components/common/tabbar/TabBar.vue';
 import tabBarItem from 'components/common/tabbar/tabbaritem.vue'
 export default {
  name: 'app',
  components: {
     TabBar,
     tabBarItem
  }
}
</script>
<style>
@import 'assets/css/base.css';
@import 'assets/css/normalize.css';
</style>
