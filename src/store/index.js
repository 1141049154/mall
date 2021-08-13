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
      let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
      if(oldProduct){
        context.commit('addcount',oldProduct)
      }else{
        payload.count = 1;
        context.commit('addcart',payload)
        
      }
    }
    
  },
  modules: {
  }
})
