<template>
 <div class="about">
   <div class="about-left-top">
       <div class="top">会员中心</div>
       <div class="left-botton">提升淘气值</div>
       <img src="../../../assets/img/profile/huyuan.png" alt="">
   </div>
   <div class="about-rigth-top">
       <div class="top">购物省钱卡</div>
       <div class="right-botton">领通用红包</div>
       <img src="../../../assets/img/profile/hongbao.png" alt="">
   </div>
   <div class="about-left-botton">
       <div class="top">购物人生</div>
       <div class="botton">稀有装扮免费抽</div>
       <img src="../../../assets/img/profile/cartoon.png" alt="">
   </div>
   <div class="about-right-botton">
       <div class="top">红包签到</div>
       <div class="botton">立刻领取红包</div>
       <img src="../../../assets/img/profile/qianbao.png" alt="">
   </div>
 </div>
</template>

<script>


export default {
  name: 'About',
  components: {
  
  }
}
</script>
<style>
.about {
   background-color: #fff;
    height: 110px;
    width: 300px;
    position: relative;
    top: -30px;
    left: 10px;
    right: 10px;
    border-radius: 5px;
}
.about-left-top{
    height:50%;
    width: 50%;
    position: absolute;
    
}
.about-rigth-top{
    height:50%;
    width: 50%;
    position: absolute;
   
    left: 150px;
}
.about-left-botton{
    height:50%;
    width: 50%;
    position: absolute;
    
    top: 55px;
}

.about-right-botton{
    height:50%;
    width: 50%;
    position: absolute;
    
    top: 55px;
    left:150px;
}

.top{
    font-size: 15px;
    color:#111111;
    margin-left: 10px;
    margin-top: 10px;
}
.botton{
    color: red;
    margin-left: 10px;
    font-size:10px;
     margin-top: 5px;
    padding: 6px;
}
.left-botton{
     color: red;
    margin-left: 10px;
    font-size:10px;
     margin-top: 5px;
    padding: 6px;
    border-bottom:1px solid #F2F1F1;
}
.right-botton{
    color: red;
    margin-left: 10px;
    font-size:10px;
     margin-top: 5px;
    padding: 6px;
    border-bottom: 1px solid #F2F1F1;
}
.about img{
    height:40px;
    width: 40px;
    position: relative;
    z-index: 9;
    left: 110px;
    top: -49px;
}
</style>