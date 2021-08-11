<template>
  <div id="detail">
   <detail-nav-bar class="detail-navbar"></detail-nav-bar>
   <scroll class="detail-content">
     <detail-swiper :topimg="topimage"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"></detail-shop-info>
   </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue"
import {getdetaildata} from "../../network/detail.js";
import DetailSwiper from './childComps/DetailSwiper.vue';
import {Goods,Shop} from "../../network/detail.js";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue"

export default {
  name: 'Detail',
  components: {
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll 
  },
  data(){
    return{
      iid:null,
      topimage:[],
      goods:{},
      shop:{}
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    getdetaildata(this.iid).then( res => {
      this.topimage = res.result.itemInfo.topImages
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)
      this.shop = new Shop(res.result.shopInfo)
    })
      
  },
  activated(){
 
    
  }
}
</script>
<style>
#detail{
  position: relative;
  z-index: 9;
  background-color:#fff;
  height:100vh;
}
.detail-content{
  height:calc(100% - 44px);
 
}
.detail-navbar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>