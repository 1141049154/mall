<template>
  <div id="home">
  <nav-bar class="nav-home"><template v-slot:center><div>购物街</div></template></nav-bar> 
  <tab-control :titles="['流行','新款','精选']" v-show="isfixed" class="one-tab" ref="tabcontrolone" @itemClick="itemClick" :class="{fixed:isfixed}"/>
  <scroll class="content" :pullupload="true" ref="scroll" :probetype="3" @scroll="backscroll" @pullingUp="loadmore">
     <home-swiper :banners=banners @swiperimgload="swiperimgload"></home-swiper>
  <recommend-views :recommends=recommends  ></recommend-views>
  <feature-view></feature-view>
  <tab-control :titles="['流行','新款','精选']"  ref="tabcontroltwo" @itemClick="itemClick" :class="{fixed:isfixed}"></tab-control>
  <goods-list :goods="showtype" /> 
  </scroll>
  <back-top @click.native="backClick" v-show="isbackshow"></back-top>

  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";

import HomeSwiper from './childComps/HomeSwiper';
import RecommendViews from './childComps/RecommendViews';
import FeatureView from './childComps/FeatureView';
import TabControl from '../../components/common/tabcontrol/TabControl.vue';
import GoodsList from '../../components/common/goods/GoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';

import {getHomeMultidata,getHomegoods} from "../../network/Home";

import BackTop from '../../components/context/backtop/BackTop.vue'




export default {
  name: 'Home',
  components: {
    NavBar,

    HomeSwiper,
    RecommendViews,
    FeatureView,
    TabControl,

    GoodsList,
    Scroll,
    BackTop

    
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentitem:'pop',
      isbackshow:false,
      tabcontroltop:0,
      isfixed:false,
      saveY:0,
    }
  },
  
  computed:{
    showtype(){
      return this.goods[this.currentitem].list
    }
  },
  created(){
    this.getHomeMultidata();
    this.getHomegoods('pop')
    this.getHomegoods('new')
    this.getHomegoods('sell')
  },
  activated(){
   this.$refs.scroll.scroll.scrollTo(0,this.saveY)
   this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
  this.saveY = this.$refs.scroll.scroll.getScrollY
  },
  methods:{
    itemClick(index){
    switch(index){
      case 0:this.currentitem = 'pop';break;
      case 1:this.currentitem = 'new';break;
      case 2:this.currentitem = 'sell';break;
    }
    this.$refs.tabcontrolone.currentindex = index;
     this.$refs.tabcontroltwo.currentindex = index;
    },
    

    //
    getHomeMultidata(){
        getHomeMultidata().then( res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomegoods(type){
      const page = this.goods[type].page + 1
      getHomegoods(type,page).then(res => {
           this.goods[type].list.push(...res.data.list)
           this.goods[type].page += 1
           this.$refs.scroll.scroll.finishPullUp()
      })
    },
    backClick(){
           this.$refs.scroll.scroll.scrollTo(0,0,1000);
          
    },
    backscroll(position){     
        this.isbackshow = (-position.y)>1000;
        this.isfixed = (-position.y) > this.tabcontroltop  
    },
    swiperimgload(){
      this.tabcontroltop = this.$refs.tabcontroltwo.$el.offsetTop;
      
    },
    loadmore(){
      this.getHomegoods(this.currentitem);
      this.$refs.scroll.scroll.refresh()
    }
  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  height:100vh; 
  position: relative;
}
.nav-home{
  background-color:#FF8E96;
  color:#fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
  }

  .content{
    /* height:calc(100%-93);  */
     height: 100%;
     overflow: hidden;
     position:absolute;
     top: 44px;
     bottom: 49px;
     left: 0;
     right: 0;
  }
  .one-tab{
    position: relative;
    z-index: 9;
  }
 

</style>
