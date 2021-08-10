<template>
  
    <swiper class="banner"> 
      <swiper-item  v-for="(item,index) in topimg" :key="index"><img :src="item" alt=""></swiper-item>
    </swiper>
 
</template>

<script>
import {Swiper,SwiperItem} from "../../../components/common/swiper"


export default {
  name: 'DetailSwiper',
  components: {
  Swiper,
  SwiperItem,
  
    
  },
  props:{
      topimg:{
          type:Array,
          default(){
              return []
          }
      }
  },
  
}

</script>
<style>
.banner
 {height: 300px;overflow: hidden;}
</style>

