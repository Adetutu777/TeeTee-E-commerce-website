
import axios from 'axios'
import Vue from 'vue'
// Vue.use(VueAxios, axios)

// export const getProducts = ({commit}) => {
//         axios.get('https://fakestoreapi.com/products')
//         .then(response => {
//             commit('set_MyCatalog', response.data)
//         })
// }

export const getProducts = ({commit}) => {
    
    axios.get('https://fakestoreapi.com/products')
        .then(response => response.data)
        .then(data => {
        // console.log('data1', data)
        commit('setMyCatalog', data)
})}

//  const actions = {
//     getAllProducts ({ commit }) {
//       shop.getProducts(products => {
//         commit('setProducts', products)
//       })
//     }
//   }


// const actions = {
//     getAllProducts ({ commit }) {
//       shop.getProducts(products => {
//         commit('setProducts', products)
//       })
//     }
//   }