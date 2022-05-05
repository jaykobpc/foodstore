<template>
  <div class="authform">
    <div class="authform__wrapper">
      <div class="authform__navbar">
        <div title="Back" @click="toLanding" class="authform__iconbox">
          <i class="bx bx-left-arrow-alt"></i>
        </div>
      </div>
      <div class="authform__titlebox">
        <h2 class="authform__titlebox__title">Sign Up</h2>
        <p class="authform__titlebox__smtext">
          Create your account and make your first order
        </p>
      </div>
      <form
        accept-charset="utf-8"
        method="POST"
        @submit.prevent="handleSubmit"
        class="authform__formwrapper"
      >
        <div class="authform__formgroup">
          <label for="email">Name</label>
          <input
            type="text"
            placeholder="Your name"
            class="authform__formgroup__input"
            required
          />
        </div>
        <div class="authform__formgroup">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Your email"
            class="authform__formgroup__input"
            required
          />
        </div>
        <div class="authform__formgroup">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Your password"
            class="authform__formgroup__input"
            required
          />
          <i class="bx bx-hide authform__formgroup__pwdicon"></i>
        </div>
        <div class="authform__formgroup">
          <label for="password">Confirm</label>
          <input
            type="password"
            placeholder="Confirm password"
            class="authform__formgroup__input"
            required
          />
          <i class="bx bx-hide authform__formgroup__pwdicon"></i>
        </div>
        <button type="submit" class="authform__formgroup__btnsubmit btn-green">
          Sign Up
        </button>
      </form>
      <div class="authform__options">
        <router-link class="authform__options__link" to="/login"
          >Already have an account?</router-link
        >
      </div>
      <div class="authform__separator">
        <p class="authform__separator__text">or</p>
      </div>
      <div class="authform__listgroup">
        <button class="authform__oauthbutton">
          <img
            src="@/assets/Branding/Google.png"
            alt="Google"
            class="authform__oauthbutton__img"
          />
          Sign up with Google
        </button>
        <button class="authform__oauthbutton">
          <img
            src="@/assets/Branding/apple.png"
            alt="Apple"
            class="authform__oauthbutton__img"
          />
          Sign up with Apple
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "SignupView",
  setup() {
    const router = useRouter();

    const toLanding = () => {
      router.push("/");
    };

    const handleSubmit = () => {
      router.push("/dashboard");
    };

    return {
      toLanding,
      handleSubmit,
    };
  },
};
</script>
