<template>
     <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>     
    </div>   
</template>
<script>
export default {
  name: 'TabBarItem',
  data(){
      return{
        //   isActive:true
       
      }
  },
  computed:{
     isActive(){
        return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle(){
         return this.isActive?{color:this.classActive}:{}
     }
  },
  props:{
      path:String,
       classActive:{
            type:String,
            default:"red"

        }
  },
  methods:{
      itemclick(){
           this.$router.replace(this.path).catch(err=>err)
      }
  },
  components: {
    
  }
}
</script>
 <style>
  .tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
}

 
 </style>