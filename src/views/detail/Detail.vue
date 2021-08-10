<template>
  <div >
   <detail-nav-bar ></detail-nav-bar>
   <detail-swiper :topimg=topimage></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue"
import {getdetaildata} from "../../network/detail.js";
import DetailSwiper from './childComps/DetailSwiper.vue';

export default {
  name: 'Detail',
  components: {
  DetailNavBar,
  DetailSwiper
  },
  data(){
    return{
      iid:null,
      topimage:[]
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    getdetaildata(this.iid).then( res => {
      this.topimage = res.result.itemInfo.topImages
      
    })
      
  },
  activated(){
 
    
  }
}
</script>
<style>
</style>