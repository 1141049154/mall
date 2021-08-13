<template>
  <div class="nav">
   <nav-bar class="car"><template v-slot:center><div class="car-nav">购物车({{$store.state.cartlist.length}})</div></template></nav-bar>
   <scroll class="content" >
    <car-list ></car-list>
    
  </scroll>
  </div>
   
  
   
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CarList from "./childCopms/CarList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
export default {
  name: 'ShopCar',
  components: {
    NavBar,
    CarList,
    Scroll
  }
}
</script>
<style>
.car {
  background-color:pink;}
 
  
.car-nav {
  margin-top:12px;
  color: #fff;
}
.nav{
  
  height:100vh;
}
.content{
  height:calc(100vh - 44px - 49px);
  overflow: hidden;
  
 
}
</style>
