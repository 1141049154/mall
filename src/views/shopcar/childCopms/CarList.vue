<template>
  <div class="cart-list-wrap">
    <car-list-item :cartList="cartList"></car-list-item>
    
    
  </div>
</template>

<script>

import CarListItem from "./CarListItem.vue"

export default {
  name: 'CarList',
  components: {
  CarListItem
    
  },
  computed:{
      cartList(){
          return this.$store.state.cartlist
      }
  }
}
</script>
<style>
.cart-list-wrap {
		/* position: relative;
		
		bottom: 89px; */
		background-color: #fff;
	}
</style>