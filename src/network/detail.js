import {request} from "./request"

export function getdetaildata(iid){
   return request({
       url:'/detail',
       params:{
           iid
       }
   })
}

//商品信息
export class Goods{
    constructor(itemInfo,columns,services){
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;
    }
} 

//商家信息
export class Shop {
	constructor(shopInfo) {
	    this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}