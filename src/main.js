import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'  //解决移动延迟300ms
import LazyLoad from 'vue-lazyload' 
createApp(App).use(store).use(router).mount('#app')
FastClick.attach(document.body)
