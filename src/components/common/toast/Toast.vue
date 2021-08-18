<template>
   <div v-show="show">
       <div>{{message}}</div>
   </div>
</template>

<script>


export default {
  name: 'Toast',
  components: {
  
  },
  props: {
      message:{
       type:String,
      default(){
          return ''
      }
       },
       show:{
           type:Boolean,
           default(){
               return false
           }
       }
  },

}
</script>
<style>
</style>