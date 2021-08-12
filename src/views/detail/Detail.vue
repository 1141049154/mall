<template>
  <div id="detail">
   <detail-nav-bar class="detail-navbar"></detail-nav-bar>
   <scroll class="detail-content">
     <detail-swiper :topimg="topimage"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"></detail-shop-info>
     <detail-goods-info :detailInfo="detailinfo"></detail-goods-info>
     <detail-param-info :paramInfo="paramInfo"></detail-param-info>
     <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
     <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
   </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue"
import {getdetaildata} from "../../network/detail.js";
import DetailSwiper from './childComps/DetailSwiper.vue';
import {Goods,Shop,Param,getRecommend} from "../../network/detail.js";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/common/goods/GoodsList.vue"

export default {
  name: 'Detail',
  components: {
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  GoodsList,
  Scroll 
  },
  data(){
    return{
      iid:null,
      topimage:[],
      goods:{},
      shop:{},
      detailinfo:{},
      paramInfo:{},
      commentInfo: [],
      recommendInfo:[]
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    getdetaildata(this.iid).then( res => {
      // 1.获取轮播图信息
      this.topimage = res.result.itemInfo.topImages
      

      //2.获取商品信息
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)

      //3.获取商家信息
      this.shop = new Shop(res.result.shopInfo)
      

      //4.获取详细信息
      this.detailinfo = res.result.detailInfo
      


      //5.获取参数
      this.paramInfo = new Param(res.result.itemParams.info,res.result.itemParams.rule)


      //6.获取评论
      if(res.result.rate.cRate !== 0){
					this.commentInfo = res.result.rate.list
				}
      
    })
    //7.获取推荐信息
    getRecommend().then(res => {
    
				this.recommendInfo = res.data.list
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