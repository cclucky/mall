<template>
  <div id="app">
     <router-view></router-view>
     <tab-bar>
     <tab-bar-item path="/home">
     <img slot="item-icon" src="~assets/img/home.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/home1.svg" alt="">
     <div slot="item-test">首页</div>
     </tab-bar-item>
      <tab-bar-item path="/share">
     <img slot="item-icon" src="~assets/img/share.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/share1.svg" alt="">
     <div slot="item-test">分类</div>
     </tab-bar-item>
      <tab-bar-item path="/shopcart">
     <img slot="item-icon" src="~assets/img/shoppingcart.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/shoppingcart1.svg" alt="">
     <div slot="item-test">购物车</div>
     </tab-bar-item>
      <tab-bar-item path="/about">
     <img slot="item-icon" src="~assets/img/user.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/user1.svg" alt="">
     <div slot="item-test">我的</div>
     </tab-bar-item>
     </tab-bar>
   </div>
</template>
 <script>
 import TabBar from 'components/tabbar/TabBar.vue';
 import tabBarItem from 'components/tabbar/tabbaritem.vue'
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
</style>
