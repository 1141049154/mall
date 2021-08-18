<template>
 <div class="money">
   <div class="money-left">零钱</div>
   <div class="money-center">余额：￥0.00</div>
   <button class="money-right">去充值</button>

 </div>
</template>

<script>


export default {
  name: 'Money',
  components: {
  
  }
}
</script>
<style>
.money {
     background-color: #fff;
    height: 50px;
    width: 300px;
    position: relative;
    top: -10px;
    left: 10px;
    right: 10px;
    border-radius: 5px;
    display: flex;
}
.money-left {
  margin-top:10px;
  font-size:20px;
  margin-left: 15px;
  text-align: center;
}
.money-center {
  margin-top:15px;
  font-size:20px;
  margin-left: 5px;
  text-align: center;
  font-size: 14px;
}
.money-right {
  margin-top:1px;
  font-size:20px;
  margin-left: 80px;
  text-align: center;
  background-color:#fff;
  color: red;
 
}
</style>