<template>
  <div class="recommend-info-wrap flex" v-if="Object.keys(recommendInfo).length !== 0">
		<div class="recommend-info-list" v-for="(item, index) in recommendInfo" :key="index">
			<img :src="item.image" alt="" class="recommend-info-img">
			<div class="recommend-info-title">{{item.title}}</div>
			<div>
				<span class="recommend-info-price">{{item.discountPrice}}</span>
				<span><img  src="../../../assets/img/home/collect_icon.png" alt="" class="icon">{{item.cfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'DetailRecommendInfo',
  components: {
  
  },
  props:{
			recommendInfo:{
				type: Array,
				default() {
					return []
				}
			}
		},
 	
}
</script>
<style>
</style>