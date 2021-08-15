import { createStore } from 'vuex'

export default createStore({
  state: {
    cartlist:[]
  },
  mutations: {
    addcount(state,payload) {
    payload.count++;
    },
    addcart(state,payload) {
     state.cartlist.push(payload)
    }
  },
  actions: {
    cart(context,payload) {
     return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
        if(oldProduct){
          context.commit('addcount',oldProduct)
          resolve('商品数量增加')
        }else{
          payload.count = 1;
          context.commit('addcart',payload)
          resolve('添加购物车成功')
        }
      })
     
    }
    
  },
  modules: {
  }
})
