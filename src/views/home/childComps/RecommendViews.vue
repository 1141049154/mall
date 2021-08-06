<template>
  <div class="recommend" >
     <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="">
         </a>
         <div>{{item.title}}</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendViews',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
  
  }
}
</script>
<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0px 20px;
    font-size: 12px;
    border-bottom:10px solid #eee
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
}
</style>