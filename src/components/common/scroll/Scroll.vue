<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
 
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'scroll',
  props:{
    probetype:{
        type:Number,
        default:0,
    },
    pullupload:{
      type:Boolean,
      default:false,
    }
  },
  components: {
  
  },
  data(){
      return{
          scroll:null
      }
  },
  mounted(){
   this.scroll = new Bscroll(this.$refs.wrapper,{
     mouseWheel:true,
     click:true,
     observeDOM:true,
     observeImage:true,
     probeType:this.probetype,
     pullUpLoad:this.pullupload,
   })
   this.scroll.on('scroll',position => {
    
     this.$emit('scroll',position)
   }),
   this.scroll.on('pullingUp', () => {
     this.$emit('pullingUp')
   })
  }
}
</script>
