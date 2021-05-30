<template>
      <section clss="cont-sec ">
                <div class="container">
                    <h2 class="text-center">Get in touch</h2>
                    <p class="text-center">We will love to hear from you</p>
                    <div class="row text-center pt-5">
                      
                        <div class="col-md-4">
                             <img class="pb-4" style="width: 30px;" src="../../src/assets/Img/placeholder.svg" alt="">
                            <p>20, Lagos Nigeria</p>
                        </div>
                        <div class="col-md-4">
                         <img class="pb-4" style="width: 30px;" src="../../src/assets/Img/phone-call.svg" alt="">
                            <p>+23470111111</p>
                        </div>
                        <div class="col-md-4">
                         <img class="pb-4" style="width: 30px;" src="../../src/assets/Img/email.svg" alt="">
                            <p>anuoluwapotutu@gmail.com</p>
                        </div>
                    </div>
            
                    <form>
                        
                                <div class="row bg-white p-5 mt-5 mb-3 row-one">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" class="btn btn-primary mt-3 ml-2" value="Send Message">
                                        </div>
                                    </div>
                               
                            
                        </div>
                    </form>
                
                </div>
        </section>
  
</template>

<script>


</script>



<style scoped>

.btn-primary{
    background: rgb(226, 27, 226);
    padding: 1rem;
    color: white;
    font-size: 1rem;
    border: 1px solid rgb(226, 27, 226);
    border-radius: 1rem;
}


.row-one{
    border-radius: 10px;
}
.form-control{
     -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  height: 54px;
  font-size: 18px;
  font-weight: 300;
  border-radius: 10px;
}
#message {
  height: 12rem;
}
</style>