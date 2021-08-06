<template> 
     <tab-bar>
      <tab-bar-item path='/home' classActive="yellow">
         <template v-slot:item-icon ><img  src="../../../assets/img/tabbar/shouye.png" alt=""></template> 
         <template v-slot:item-icon-active ><img  src="../../../assets/img/tabbar/shouyel.png" alt=""></template>
         <template v-slot:item-text> <div >首页</div> </template>
      </tab-bar-item>
      <tab-bar-item path='/fenlei' classActive="yellow">
       <template v-slot:item-icon ><img  src="../../../assets/img/tabbar/fenlei.png" alt=""></template> 
         <template v-slot:item-icon-active ><img  src="../../../assets/img/tabbar/fenleil.png" alt=""></template>
         <template v-slot:item-text> <div >分类</div> </template>
      </tab-bar-item>
      <tab-bar-item path='/shopcar' classActive="yellow">
         <template v-slot:item-icon ><img  src="../../../assets/img/tabbar/gouwuche.png" alt=""></template> 
         <template v-slot:item-icon-active ><img  src="../../../assets/img/tabbar/gouwuchel.png" alt=""></template>
         <template v-slot:item-text> <div >购物车</div> </template>
      </tab-bar-item>
      <tab-bar-item path='/profile' classActive="yellow">
        <template v-slot:item-icon ><img  src="../../../assets/img/tabbar/wode.png" alt=""></template> 
         <template v-slot:item-icon-active ><img  src="../../../assets/img/tabbar/wodel.png" alt=""></template>
         <template v-slot:item-text> <div >我的</div> </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from  '../../common/tabbar/TabBar.vue';
import TabBarItem from '../../common/tabbar/TabBarItem.vue';
export default {
  name:'MainTabBar',
  components: {
    TabBar,TabBarItem
  }
}
</script>
