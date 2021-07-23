
// import App from './App.vue'
// import Vue from 'vue'
// import router from './router'

// import  store  from './store/store'




// createApp(App).use(router).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import store from "./store/store"

    
    // createApp(App).use(store).use(router).mount('#app');
    // To make this more readable, the below form makes it more readable
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')



