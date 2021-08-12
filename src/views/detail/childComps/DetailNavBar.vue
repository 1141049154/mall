<template>
  
    <nav-bar >
        <template v-slot:left>
          <div class="detail-item" @click="imgclick"><img src="../../../assets/img/detail/back.png" alt=""></div>
        </template>
        <template v-slot:center>
            <div  class="title">
          <div  class="title-item" 
          v-for="(item,index) in data" 
          :key="index" 
          :class="{titlecolor:currentIndex === index }" @click="titleclick(index)" >{{item}}</div></div>
        </template>
    </nav-bar>
  
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue"


export default {
  name: 'DetailNavBar',
  components: {
  NavBar
  },
  data(){
      return {
          data:['商品','参数','评论','推荐'],
          currentIndex:0,
      }
  },
  
  methods: {
      titleclick(index){
          this.currentIndex = index;
          this.$emit('titleclick', index);
      },
      imgclick(){
          this.$router.back();
      },
     

  }
}
</script>
<style scoped>
.detail-item img{
     height:24px;
     width: 24px;
     margin-top: 11px;
}
.title{
    display:flex;
    margin-top:11px;
}
.title-item{
    flex:1;
}
.titlecolor{
    color:pink;
}
</style>