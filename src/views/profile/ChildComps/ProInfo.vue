<template>
 <div class="proinfo">
     <div class="proinfo-img"><img src="../../../assets/img/profile/tx.png" alt=""></div>
     <div class="proinfo-right">
         <div class="name">了不起的人</div> 
         <div class="person">点击这里修改个性签名 <img src="../../../assets/img/profile/xg.png" alt=""> </div>
         <div class="left"><span>3关注</span></div>
         <div class="right">0粉丝</div>
     </div>
 </div>
</template>

<script>


export default {
  name: 'ProInfo',
  components: {
  
  },
  data() {
      return {
         text:"点击这里修改个性签名"
      }
  },
  methods:{
      inputclick(){
          this.text = ""
      }
  }
}
</script>
<style>
.proinfo{
    height:150px;
    width: 300px;
    position: relative;  
    border-radius: 5px;
    border-bottom: 7px solid #EAE1E4;
    top: 15px;
    left:15px;
    right: 15px;
}

 .proinfo-img{    
    height:70px;
    width: 70px;
    border-radius: 60px;
    
    position: absolute;
    left:10px;
    top: 20px;
    z-index: 9;
}  
.proinfo-img img{
    height:80px;
    width: 80px;
    position:absolute;
    border-radius: 60px;
    
}
.proinfo-right{
    position: absolute;
    height:100px;
    width: 140px;
    left: 100px;
    top: 20px;
}
.name{
    font-size:17px;
    color:black;
    padding:5px;
}
.person{
    font-size: 12px;
    padding:5px;
    
    
}
.person img{
    position: absolute;
    height:20px;
    width:20px;
    left: 125px;
    top: 32px;
}
.left{
    float: left;
    
    padding:5px;
    position: relative;
    border-right: 1px solid black;
}

.right{      
    padding:5px;
    left:55px;
    position: absolute;
    
}


</style>