
<template>
     <section class="pt-5 pb-5">
        <div class="container" >
            <div class="row" >
                <div class="col-md-3 mt-3" v-for= "data in myCatalog" :key="data.id">

                <!-- <router-link :to="{name: 'description', params: {id: data.image}}" class="descr-prod"> -->
                <!-- <router-link :to="{ name: 'description', params: { src: data.image} }"></router-link> -->
                <router-link :to="{name: 'description', params: {id: data.description}}" class="descr-prod">
                  <div class="card" style="background: aliceblue;">
             <img class="img-img w-50 text-center"  :src="data.image" alt="">
            <p class="text-center">  {{data.title}} </p>
                  <p class="text-center">  ${{data.price}} </p>                
                  </div>
                  </router-link>

                     <button v-on:click="addItem(data)" class="text-dark" style="border:1px solid red">Add to cart</button>
                  
                
                </div>
                
              </div>
           
        </div>
       
        
    </section>
    
  </template>

<script>
// import cart from './cart'
import { onMounted, ref } from 'vue';
import axios from 'axios';


export default {
  name: "Catalog",
  
  
  setup() {
    let cartStore = ref([])
  
    let myCatalog=ref('')
 
    onMounted (() => {
    axios.get('https://fakestoreapi.com/products')
  
    .then( response => myCatalog.value = response?.data)
   .catch(error => console.log(error))
   })
    
    //         const addItem = (data) => {
    //           //  console.log('tutu', data)
    //  cartStore.value.push(data);
    // console.log(cartStore)

    //     };

    // console.log(myCatalog)
    // console.log(cartStore)
   return { myCatalog}
  }
  

  
}
</script>

<style scoped>
.img-img{
margin: 0 auto;

}

.descr-prod{
text-decoration: none;
color: black;
}
</style>