<template>
    <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isShow"> <slot name="item-icon"></slot>       </div>
     <div v-else> <slot name="item-icon-active"></slot></div>
     <div :class="{isActive:isShow}"> <slot name="item-test"></slot>       </div>
    </div>
</template>


<script>
export default {
    name: 'tabBarItem',
    props: {
      path: String
    },
    data() {
      return {
        // isShow: true
      }
    },
    computed:{
        isShow(){
          // npm i vue-router@3.0 -S 
          return this.$route.path.indexOf(this.path) !== -1
          // console.log(this.path)
        }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    }
}
</script>
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size:12px;
}
.tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
}
.isActive{
  color:red;
}
</style>