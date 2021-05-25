<template>
     <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 fir-col" id="pix-first">
          <h1 class="purchase">Each Purchase will be made with pleasure</h1>
          <p class="global pt-3">We work with global brands and have  created <br> an application for you to get started</p>
          <p class="global pt-3">We work with global brands and have  created <br> an application for you to get started</p>
        </div>
        <div class="col-md-6">
        
          <img src="../../src/assets/Img/shopping-pix.png" class="" style="width: 75%;" alt="">
        </div>
      </div>
      
      <div class="class-btn mt-3">
     <router-link :to="{name: 'Catalog'}" class="shop-btn">Shop Now</router-link>
    
    </div>
    </div>
    <Catalog/>
  </section>

</template>

<script>

</script>

<style scoped>

.fir-col{
    padding-top: 9rem;
}

.purchase{
    font-size: 3rem;
}

.global{
    font-size: 1.2rem;

}

.shop-btn{
    background: rgb(226, 27, 226);
    padding: 1rem;
    color: white;
    font-size: 1rem;
    border: 1px solid rgb(226, 27, 226);
    border-radius: 1rem;
    text-decoration: none;
}

.class-btn{
    margin-bottom: 5rem;
}

@media screen and (max-width: 480px) {
    #pix-first{
      order: 1;
    }
    }
</style>