
// import Vue from 'vue';
// import Vuex from 'vuex';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
// import store from './vuex/Store';
// import { createStore } from "vuex"

// Vue.use(Vuex)
// Vue.use(VueAxios, axios)


// import Vue from 'vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(Vuex)
// Vue.use(VueAxios, axios)

// export const store = new Vuex.Store({
//     state: {
//         myCatalog: [],
//     },

//     getters: {
//         myCatalog: state => {
//             return state.myCatalog;
//         }
//     },

//     mutations: {
//         SET_Items (state,myCatalog) {
//             state.myCatalog = myCatalog
//         }
//     },

//     actions: {
//         loadItems ({ commit }) {
//             axios
//                 .get('https://fakestoreapi.com/products', {
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': 'your key',
//                     }
//                 })
//                 .then(response => response.data)
//                 .then(myCatalog => {
//                     console.log(myCatalog);
//                 commit('SET_Items', myCatalog)
//             })
//         }
//     },
// });


// export default store


// import Vue from 'vue';
// import Vuex from 'vuex';


// Vue.use(Vuex);

// import state from './state';
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// export default new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });


// import { createStore } from "vuex";
// import state from './state';
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// const store = createStore({
//    state:{
//       name: "Vue"
//    }
//     state,
//     getters,
//     mutations,
//     actions
// })

// export default store

// import { createStore } from 'vuex';

// export default createStore({
//     state: { 
  
//         Catalog: []
//     },
    
//     mutations: {
      
//   },
//     actions: {
      
//   },
//     modules: {
      
//   },
// });

import Vue from 'vue';
import Vuex, { storeKey } from 'vuex';
import axios from 'axios'

const url = "https://fakestoreapi.com/products";
// Vue.use(Vuex);


export default new Vuex.Store({
state : {
        products: []  
    },

    mutations: {
       setProducts(state, products) {
        state.products = products

        }
    },
actions: {
    async setProducts(state) {
    const results = await axios.get(url);
        state.commit('setProducts', results.data)
        
        }
    },
    getters: {
        getProducts: state => state.products
    }
})


