<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods " :goodsitem="item"  :key="index" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: {
  GoodsListItem
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style scoped>
.goods-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
	}
</style>
