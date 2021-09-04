<template>
  <div id="nav">
   <nav class=" container navbar navbar-expand-lg">
   
	<a class="navbar-brand" href="">tee<b>Tee</b></a>  		
	<button type="button" class="navbar-toggler " data-toggle="collapse" data-target="#navbarCollapse">
  
		<span class="navbar-toggler-icon mysrc"><img class="bg-dark" src="../src/assets/Img/menu2.png" alt=""></span>
	</button>
	<!-- Collection of nav links, forms, and other content for toggling -->
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start my-nav" >
		<div class="navbar-nav">
              <router-link to="/" class="nav-link">Home</router-link> 
             <router-link :to="{name: 'About'}" class="nav-item nav-link">About</router-link> 
             <router-link :to="{name: 'Catalog'}" class="nav-link">Catalog</router-link>
              <router-link :to="{name: 'Contact'}" class="nav-link">Contact</router-link> 		
		
        </div>
		<div class="navbar-nav ml-auto social ">
    <div class="mr-3" style="margin-top:1.2rem"> 
    <router-link :to="{nae: 'Contact'}" class="nav-lik text-dark" style="background:aliceblue">
   <img class="" style="width:28px" src="../src/assets/Img/shopping-cart.svg" alt="">
    </router-link> 
    
    
    </div>
      <div class="all-soc my-soc-nav mt-2 text-center">
			<a href="https://www.linkedin.com/in/adetutu-gbangbola-05a48070/" class="nav-item nav-link soc-link"><i class="fab fa-linkedin pr-3 ">
      </i></a>
			<a href="https://github.com/Adetutu777" class="nav-item nav-link soc-link"><i class="fa fa-github pr-3"></i></a>
			<a href="https://twitter.com/adetutu2222" class="nav-item nav-link soc-link"><i class="fa fa-twitter"></i></a>
      
        </div>
        
        </div>		
	</div>
        </nav>
  </div>
 
  <router-view/>
</template>



<script>
import Catalog from './views/catalog/Catalog'
import store from './store/store'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
  

export default {
  store,
    name: 'app',
    components: { Catalog},

    setup() {
        // const store = useStore()
  onMounted(() => {
      // console.log('mounted!')
      store.dispatch('setProducts')
      // console.log( store.dispatch('setProducts'))
      // console.log(setProducts)

    })
    }
}

</script>

<style>   
  #app {
  
    color: #2c3e50;
  }
  .all-soc{
display: flex;
font-size: 1.2rem;
}
.mysrc{
color:black
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #5e8fc4;
  text-decoration: none;
  padding: 12px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: rgb(252, 83, 252);
  border-radius: .5rem;
}

.navbar .navbar-brand {
	color: #555;
	padding-left: 0;
	font-size: 25px;
	padding-right: 50px;
	font-family: 'Raleway', sans-serif;
}
.navbar .navbar-brand b {
	font-weight: bold;
	color: rgb(226, 27, 226);
}

 @media screen and (max-width: 480px) {
   #pix-first{
     order: 1;
   }

   #aa{
    
     margin-top: 1rem;
   }

   .last-sec{
     padding-top: -12rem;
     
   }

  
   .all-soc{
   display: flex;
  justify-content: center;
  
  

  
   }

   .social{
   margin: 0 auto;
   }
  
 }


</style>
