<template>
  <div class="tab-control">
  <div class="tab-control-item" v-for="(item,index) in titles" :key=index :class="{active:index === currentindex}"  @click="itemClick(index)">
      <span>{{item}}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data(){
     return{
         currentindex:0
     }
  },
  methods:{
   itemClick(index){
   this.currentindex = index
   this.$emit('itemClick', index)
   }
  },
  props:{
    titles:{
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
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
    

}
.tab-control-item{
    flex:1;
}
.tab-control-item span{
    padding: 3px;  
}
.active{
   
   color: pink;
}
.active span{
    border-bottom: 3px solid pink;
}
</style>
