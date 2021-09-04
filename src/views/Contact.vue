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
            
            <div class="pop-up text-white text-center bg-info font-weight-bold p-3 mb-4"
                  v-if="mesg_show_alert" :class="mesg_alert_variant">
                  {{ mesg_alert_msg }}
                  </div>
                    <form>
                        
                                <div class="row bg-white p-5 mt-5 mb-3 row-one">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="name" class="form-control" placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" v-model="email" class="form-control" placeholder="Email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea name="" v-model="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message" required></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" :disabled="mesg_in_submission" class="btn btn-primary mt-3 ml-2" value="Send Message">
                                        </div>
                                    </div>
                               
                            
                        </div>
                    </form>
                
                </div>
        </section>
  
</template>

<script>
import {  ref } from 'vue';
import  emailjs  from 'emailjs-com';

export default{
    name:'Contact',

    setup() {

    let name = ref("");
    let email = ref("");
   let message = ref("");

   let mesg_in_submission= ref( false );
     let mesg_show_alert = ref( false );
    let mesg_alert_variant= ref('pink');
    let mesg_alert_msg= ref('Please wait, your account is been created.');

         const sendEmail= (e) => {
      emailjs.sendForm('teeteeStore',  'template_l99nigo', e.target,
        'user_qqNYHHVb84i1Mh5uUtZN2',)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });

       mesg_show_alert.value = true;
      mesg_in_submission.value = true;
      mesg_alert_variant.value = 'pink';
      mesg_alert_msg.value = 'Message sending.';

     mesg_alert_variant.value = 'green';
     mesg_alert_msg.value = 'Message sent, Thank you,';
      // console.log(e);
       
        name.value = '';
        email.value = '';
        message.value ='';
      
    }
     return { sendEmail, name, email, message, mesg_in_submission,
    mesg_show_alert, mesg_alert_variant, mesg_alert_msg }
  }
    }
    
// }
// npm install --save emailjs-com
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

.btn-primary:hover{
 border: 2px solid rgb(226, 27, 226);
color: rgb(27, 27, 25);
background: inherit;

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