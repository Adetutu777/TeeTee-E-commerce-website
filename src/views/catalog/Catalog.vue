
<template>
     <section class="pt-5 pb-5">
        <div class="container" >
            <div class="row" >
                <div class="col-md-3 mt-3" v-for= "data in products" :key="data.id">
                <router-link :to="{name: 'description', params: {id: data.description}}" class="descr-prod">
                  <div class="card" style="background: aliceblue;">
             <img class="img-img w-50 text-center"  :src="data.image" alt="">
            <p class="text-center">  {{data.title}} </p>
                  <p class="text-center">  ${{data.price}} </p>                
                  </div>
                  </router-link>

                     <!-- <button v-on:click="addItem(data)" class="text-dark" style="border:1px solid red">Add to cart</button>
                   -->
                
                </div>
                
              </div>
           
        </div>
       
        
    </section>
    
  </template>


  
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  setup () {
    const store = useStore()
    console.log('kennybaby', store.state?.products)
    return {
      // access a state in computed function
      products: computed(() => store.state?.products),
      //  console.log(products),
       

      // access a getter in computed function
      getProducts: computed(() => store.getters.getProducts
      
      )
    }
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