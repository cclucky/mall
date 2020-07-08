<template>
  <div class="SwiperItem">
      <el-carousel class="SwiperItem-el" indicator-position="outside">
      <el-carousel-item  v-for="(item,index) in banners" :key="index">
                 <a :herf="item.link"></a>
                <img :src="item.image"  alt=""/>
    </el-carousel-item>
    </el-carousel>
      </div>
    
</template>
<script>
import Swiper from 'components/common/swiper/Swiper.vue'
export default {
    name: 'SwiperItem',
     props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper
    },
}
</script>
<style>
 .el-carousel__item{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  },
  .SwiperItem img{
    width: 100%;
    
  }
  .SwiperItem-el{
    height: 300px;
  }
</style>