<template>
 <div class="wl">
     <div class="wl-top">
         <div><img src="../../../assets/img/profile/shouchang.png" alt=""><span>收藏</span></div>
         <div><img src="../../../assets/img/profile/dy.png" alt=""><span>订阅店铺</span></div>
         <div><img src="../../../assets/img/profile/zj.png" alt=""><span>足迹</span></div>
     </div>
     <div class="wl-center">
       <span>我的订单</span>                 
       <span class="wl-right">查看全部</span>
     </div>
     <div class="wl-botton">
     <div> <img src="../../../assets/img/profile/daifukuan.png"><div>待付款</div></div>
     <div> <img src="../../../assets/img/profile/daifahuo.png"><div>待发货</div></div>
     <div> <img src="../../../assets/img/profile/daishouhuo.png"><div>待收货</div></div>
     <div> <img src="../../../assets/img/profile/daipingjia.png"><div>待评价</div></div>
     <div> <img src="../../../assets/img/profile/tuikuan.png"><div>退款/售后</div></div>
     </div>
     
 </div>
</template>

<script>


export default {
  name: 'WuLiu',
  components: {
  
  }
}
</script >
<style>
.wl {
    background-color: #fff;
    height: 200px;
    width: 300px;
    position: relative;
    top: -20px;
    left: 10px;
    right: 10px;
    border-radius: 5px;
}
.wl-top {
    display: flex;
    text-align: center;
    border-bottom: 1px solid #EFEEEE;
    
}
.wl-top div {
    flex: 1;
    margin-top: 10px;
}
.wl-top span{
   padding: 5px;
}
.wl-top img {
    height:15px;
    width: 15px;
    
}
.wl-center{
    margin-top:15px;
    margin-left:15px;
    font-size:15px;
}
.wl-right{
    margin-left:160px;
    font-size:12px;
}
.wl-botton{
    display: flex;
    border-bottom: 1px solid #EFEEEE;
}
.wl-botton div {
    flex: 1;
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
}
.wl-botton img {
    width:25px;
    height:25px;
}

</style>