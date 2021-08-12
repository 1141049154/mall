<template>
   <div class="flex bot-bar-wrap">
		<div class="bot-bar-item">
			<div><img src="../../../assets/img/detail/icon01.png" alt=""></div>
			<div>客服</div>
		</div>
		<div class="bot-bar-item">
			<div><img src="../../../assets/img/detail/icon02.png" alt=""></div>
			<div>店铺</div>
		</div>
		<div class="bot-bar-item">
			<div><img src="../../../assets/img/detail/icon03.png" alt=""></div>
			<div>收藏</div>
		</div>
		<div class="btn  cart-btn">加入购购物车</div>
		<div class="btn  buy-btn">购买</div>
	</div>
</template>

<script>


export default {
  name: 'DetailBotBar',
  components: {
  
  }
}
</script>
<style>
.bot-bar-wrap {
		height: 49px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
        }
.bot-bar-item {
			width: 16%;
			font-size: 12px;
			color: #333;
			text-align: center;
            }
.bot-bar-item img{
				width: 22px;
				height: 22px;
				margin: 1px 0;
                margin-top:5px;
				
			}
.bot-bar-item div{
    margin-top:1px;
}            
		
.btn {
			width: 26%;
			font-size: 13px;
			line-height: 49px;
			text-align: center;
		}
.cart-btn {
			background-color: #F9CD0B;
			line-height: 49px;
		}
.buy-btn {
			color: #fff;
			background-color: pink;
		}
	
</style>