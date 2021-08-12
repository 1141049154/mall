<template>
 <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
		<div class="shop-name-info">
			<img :src="shop.shopLogo" alt="" class="shop-img">
			<div>{{shop.name}}</div>
		</div>
		<div class="shop-other-info">
			<div class="shop-other-item shop-other-sell">
				<div class="shop-sell">
					<p class="f16">{{shop.cSells|saveNum()}}</p>
					<p>总销量</p>
				</div>
				<div >
					<p class="f16">{{shop.cGoods}}</p>
					<p>全部宝贝</p>
				</div>
			</div>
			<div class="shop-other-item shop-other-right">
				<div v-for="(item,index) in shop.score" :key="index">
					{{item.name}}&ensp;
					<span class="score" :class="{aactive:item.isBetter}">{{item.score}}</span>
					<span class="score-bg" :class="{bactive:item.isBetter}">{{item.isBetter? '低' : '高'}}</span>
				</div>
			</div>
		</div>
		<div class="enter-shop-wrap">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'DetailShopInfo',
  components: {
  
  },
  data() {
			return {
				
			}
		},
  props:{
      shop:{
          type:Object,
          default() {
              return {}
          }
      }
  },
  methods: {
	  saveNum(value){
		  if(value < 10000) return value;
				return (value/10000).toFixed(1)+'万'
	  }
  }

  
}
</script>
<style>
.f16 {
	font-size: 16px;
	}
.shop-name-info {
		align-items: center;
		margin: 20px 10px;
        position: relative;
        }
.shop-name-info	.shop-img {
			border-radius: 100%;
			width: 50px;
			height: 50px;
			margin-right: 10px;
			vertical-align: middle;    
                    
		}
.shop-name-info div{
    position:absolute;
    left:55px;
    top: 12px;
}        
      
.shop-other-info {
		font-size: 12px;
		align-items: center;
		line-height: 22px;
        display: flex;
        }
 .shop-other-item {
			flex: 1;
                     
		}  
        
     
.shop-other-sell {
			  border-right: 1px solid #ececec;
              display:flex;
            }
.shop-other-sell div {
    flex: 1;
    text-align: center;
}
		
.shop-other-right {
			padding-left: 40px;
            }
.score {
    display: inline-block;
	width: 30px;
    color: #006666;
    }
.aactive{
	color: #880000;
		}
.score-bg {
		background-color: #006666;
		color: #fff;
		padding: 1px 4px;
		font-size: 12px;
        }
.bactive{
	background-color: #880000;
		}
			
.enter-shop-wrap{
		text-align: center;
        }
.enter-shop {
		display: inline-block;
		background-color: #f2f2f2;
		font-size: 12px;
		padding: 6px 30px;
	    border-radius: 100px;
		margin: 10px;
		}
	      
	
</style>