<template>
        <swiper>
           <swiper-item :banners="banners">   

          </swiper-item>
        </swiper> 
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
export default {
    name: 'HomeSwiper',
    props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
      add(){
        console.log(this.banners)
      }
    }
    
}
</script>
<style>
 img {
   height:100%;
   width: 100%;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
