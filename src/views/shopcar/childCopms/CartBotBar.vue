<template>
<div class="cart-bot-bar">
 <div><input type="checkbox" class="check-bot" :checked="ischeck"   id="check">&ensp;<label for="check"> 全部</label> </div>
		<div>合计：{{totalPrice}}</div>
		<div>去结算{{checkLength}}</div>
 </div>
</template>

<script>


export default {
  name: 'CartBotBar',
  components: {
  
  },
  computed:{
      totalPrice(){
          return '￥' + this.$store.state.cartlist.filter(item => {
              return item.checked
          }).reduce((preValue, item) => {
              return preValue + item.price * item.count;
          },0)
          
      },
      checkLength(){
          return '(' + this.$store.state.cartlist.filter(item => item.checked).length + ')'
      },
      ischeck(){
          if(this.$store.state.cartlist.length === 0){
              return false
          }
          for(let item of this.$store.state.cartlist){
              if(!item.checked){
                  return false
              }
          }
          return true
      }
  }
}
</script>
<style>
.cart-bot-bar {
    display: flex;
		position: fixed;
		bottom: 49px;
		left:0;
		right: 0;
		height: 40px;
		padding: 0 10px;
		font-size: 13px;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ececec;
		border-top: 1px solid #ececec;
        }
        .cart-bot-bar div {
            flex: 1;
        }
		.check-bot {
            
			width: 18px;
			height: 18px;
			overflow: hidden;
			border-radius: 100%;
			vertical-align: bottom;
			border: 1px solid #ececec;
		}
		.check:checked {
			border: 1px solid pink;
			background: url(../../../assets/img/detail/back.png) no-repeat center;
			background-size: cover;
		}
       
        
	
</style>