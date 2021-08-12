<template>
  <div class="goods-item" @click="itemclick" >
		<img :src="showImg" alt="">
		<div class="goods-info">
			<p>{{goodsitem.title}}</p>
			<span class="price">{{goodsitem.price}}</span>
			<span class="collect">{{goodsitem.cfav}}</span>
		</div>
	</div>
	<!-- <div>goodsitem.show.img</div> -->
</template>

<script>


export default {
  name: 'GoodsListItem',
  components: {
  
  },
  props:{
      goodsitem:{
          type: Object,
          default(){
              return {}
          }
      }
  },
  methods:{
	  itemclick(){
		  this.$router.push('/detail/'+this.goodsitem.iid)
	  }
  },
  computed: {
			showImg(){
				return this.goodsitem.image || this.goodsitem.show.img;
			}
		}
 
		
}
</script>
<style>
.goods-item{
	position: relative;
	padding-bottom: 40px;
	width: 45%;
}
.goods-item img{
	width: 100%;
	border-radius: 5%;
}
.goods-info{
	font-size: 12px;
	position: absolute;
	bottom: 5px;
	left: 0px;
	right: 0px;
	overflow: hidden;
	text-align: center;
}
.goods-info p{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 3px;
}
.goods-info .price{
  color: pink;
   margin-right: 20px; 
  }
  .goods-info .collect{
	  position: relative;
  }
  .goods-info .collect::before{
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: -1px;
	  width: 14px;
	  height: 14px;
	  background: url("../../../assets/img/home/collect_icon.png");
  }
	
</style>
