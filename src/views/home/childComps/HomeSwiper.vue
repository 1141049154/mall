<template>
 
    <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
  
</template>

<script>

import {Swiper,SwiperItem} from "../../../components/common/swiper";
export default {

  name: 'HomeSwiper',
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
    return{
      isload:false, 
    }
  },
  methods:{
    imgload(){
      if (!this.isload){  
        this.$emit('swiperimgload')  
        this.isload = true
    }
    }  
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>
