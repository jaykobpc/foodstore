<template>
  <div class="authform">
    <div class="authform__wrapper">
      <div class="authform__navbar">
        <div title="Back" @click="toLanding" class="authform__iconbox">
          <i class="bx bx-left-arrow-alt"></i>
        </div>
      </div>
      <div class="authform__titlebox">
        <h2 class="authform__titlebox__title">Verification</h2>
        <p class="authform__titlebox__smtext">
          Please enter the verification code sent to you via email:
          <span class="bold">hello@client.com</span>
        </p>
      </div>
      <!-- sp -->
      <div class="authform__verification">
        <form
          accept-charset="utf-8"
          @submit.prevent="handleSubmit"
          autocomplete="off"
        >
          <div class="authform__verification__groupinput">
            <input
              type="number"
              class="authform__verification__groupinput__input"
              required
              maxlength="1"
              id="one"
              @keyup="handleInput"
            />
            <input
              type="number"
              class="authform__verification__groupinput__input"
              required
              maxlength="1"
              id="two"
              @keyup="handleInput"
            />
            <input
              type="number"
              class="authform__verification__groupinput__input"
              required
              maxlength="1"
              id="three"
              @keyup="handleInput"
            />
            <input
              type="number"
              class="authform__verification__groupinput__input"
              required
              maxlength="1"
              id="four"
            />
          </div>
          <div class="authform__verification__options">
            <a href="#/" class="authform__verification__link">Haven't recevied code?</a>
          </div>
          <button class="authform__verification__submit btn-green">
            Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

export default {
  name: "VerificationView",
  setup() {
    const router = useRouter();

    const handleInput = (elem) => {
      if (elem.target.value) {
        if (elem.target.id == "one") {
          document.getElementById("two").focus();
        }
        if (elem.target.id == "two") {
          document.getElementById("three").focus();
        }
        if (elem.target.id == "three") {
          document.getElementById("four").focus();
        }
      }
    };

    const toLanding = () => {
      router.push("/login");
    };

    const handleSubmit = () => {
      router.push("/store");
    };

    onMounted(() => {
      document.getElementById('one').focus();
    })

    return {
      toLanding,
      handleSubmit,
      handleInput,
    };
  },
};
</script>
