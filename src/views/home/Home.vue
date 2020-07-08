<template>
     <div class="home-nav">
      <nav-bar>
      <div slot="left">000</div>
      <div slot="center">购物街</div>
      <div slot="right">000</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
     </div>
</template>

<script>
SwiperItem
import NavBar from 'components/common/navbar/NavBar.vue'
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
import HomeSwiper from 'components/common/swiper/HomeSwiper.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    HomeSwiper
    },
  data(){
    return {
      banners: []
    }
  },
  created() {
    getHomeMultidata().then(res=>{
      // console.log(res)
        this.banners = res.data.banner.list;
    })
  },
}
</script>
<style>
.home-nav{
   background-color: pink;
}
</style>