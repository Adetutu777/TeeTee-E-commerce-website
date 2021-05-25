<template>
                    
        <nav class=" container navbar navbar-expand-lg">
	<a class="navbar-brand" href="">tee<b>Tee</b></a>  		
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon text-white"><img src="../src/assets/menu2.png" alt=""></span>
	</button>
	<!-- Collection of nav links, forms, and other content for toggling -->
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start my-nav" >
		<div class="navbar-nav">
		
			<!-- <a href="#about-about" class="nav-item nav-link text-white">About</a>	 -->
             <router-link :to="{name: 'About'}" class="nav-item nav-link">About</router-link> 
             <router-link :to="{name: 'Catalog'}" class="nav-link">Catalog</router-link>
              <router-link :to="{name: 'Contact'}" class="nav-link">Contact</router-link> 		
			<!-- <a href="#help-with" class="nav-item nav-link text-white">Services</a>			 -->
		
			<!-- <a href="#" class="nav-item nav-link active ">Blog</a> -->
			<!-- <a href="#my-contact" class="nav-item nav-link text-white">Contact</a> -->
        </div>
		<div class="navbar-nav ml-auto social ">
      <div class="all-soc my-soc-nav mt-2 text-center">
			<a href="https://www.linkedin.com/in/adetutu-gbangbola-05a48070/" class="nav-item nav-link soc-link"><i class="fab fa-linkedin pr-3 ">
      </i></a>
			<a href="https://github.com/Adetutu777" class="nav-item nav-link soc-link"><i class="fa fa-github pr-3"></i></a>
			<a href="https://twitter.com/adetutu2222" class="nav-item nav-link soc-link"><i class="fa fa-twitter"></i></a>
        </div>
        </div>		
	</div>
        </nav>
      
</template>




 <nav class="container navbar navbar-expand-lg navbar-light text-center ">
        <a class="navbar-brand" href="#">TeeTee</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
             <router-link to="/" class="nav-link">Home</router-link> 
           
            </li>
            <li class="nav-item">
            <router-link :to="{name: 'About'}" class="nav-link">About</router-link> 
            
            </li>
            
            <li class="nav-item">
             <router-link :to="{name: 'Catalog'}" class="nav-link">Catalog</router-link>
             
            </li>
            <li class="nav-item">
            <router-link :to="{name: 'Contact'}" class="nav-link">Contact</router-link> 
            
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link " href="#">FAQ</a>
            </li> -->
          </ul>
          <div class="form-inline  my-lg-0" style="list-style: none;">
            <li class="nav-item">
              <a class="nav-link " href="#">Log-In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Sign-Up</a>
            </li>
          </div>
        </div>
      </nav>    