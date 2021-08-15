<template>
  <div class="car-nav">
   <nav-bar class="car"><template v-slot:center><div class="car-navbar">购物车({{$store.state.cartlist.length}})</div></template></nav-bar>
   <scroll class="car-content" >
    <car-list ></car-list>    
   </scroll>
  <cart-bot-bar></cart-bot-bar>
  </div>
   
  
   
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CarList from "./childCopms/CarList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartBotBar from "./childCopms/CartBotBar.vue"
export default {
  name: 'ShopCar',
  components: {
    NavBar,
    CarList,
    CartBotBar,
    Scroll
  }
}
</script>
<style>
.car-nav{
  padding-top: 44px;
  height:100vh; 
  position: relative;
}
.car{
  background-color:#FF8E96;
  color:#fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.car-content{
    /* height:calc(100% - 93);  */
     height: calc(100vh - 49px - 44px - 40px);
     overflow: hidden;
     position:absolute;
     top: 44px; 
     bottom: 49px;
      left: 0;
     right: 0;
  }
.car-navbar {
  margin-top:12px;
  color: #fff;
}
</style>
