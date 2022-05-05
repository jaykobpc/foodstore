<template>
  <div class="authform">
    <div class="authform__wrapper">
      <!--header-->
      <div class="authform__navbar">
        <div title="Back" @click="toLanding" class="authform__iconbox">
          <i class="bx bx-left-arrow-alt"></i>
        </div>
      </div>
      <div class="authform__titlebox">
        <h2 class="authform__titlebox__title">Forgot password</h2>
        <p class="authform__titlebox__smtext">Select which method you would like us to send your reset details</p>
      </div>
     <!--end-->
     <div class="authform__resetoptions">

       <div :class="{ 'active_option': selectedOption == 'email' }" @click="selectOption('email')" class="authform__boxview">
         <div class="authform__boxview__iconbox">
           <i class='bx bxs-envelope'></i>
         </div>
         <div class="authform__boxview__text">
           <h3 class="authform__boxview__text__title">Email</h3>
           <p class="authform__boxview__text__smtext">Send link via email</p>
         </div>
       </div>
     
       <div :class="{ 'active_option': selectedOption == 'phonenumber' }" @click="selectOption('phonenumber')" class="authform__boxview">
         <div class="authform__boxview__iconbox">
           <i class='bx bxs-phone' ></i>
         </div>
         <div class="authform__boxview__text">
           <h3 class="authform__boxview__text__title">Phone number</h3>
           <p class="authform__boxview__text__smtext">Send link via SMS</p>
         </div>
       </div>
       
       <button class="authform__boxview__submit btn-green">Continue</button>
  
     </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";

export default {
  name: "ResetView",
  setup() {
    const router = useRouter();
    const selectedOption = ref('email');

    const selectOption = (option) => {
      selectedOption.value = option;
    }

    const toLanding = () => {
      router.push("/login");
    };

    return {
      toLanding,
      selectedOption,
      selectOption,
    };
  },
};
</script>
