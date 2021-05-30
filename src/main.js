
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store/store'




createApp(App).use(router).use(store).mount('#app')

new Vue({
   
    store,
    render: h => h(App)
    })
