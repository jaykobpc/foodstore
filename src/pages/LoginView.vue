<template>
  <div class="authform">
    <div class="authform__wrapper">
      <div class="authform__navbar">
        <div title="Back" @click="toLanding" class="authform__iconbox">
          <i class="bx bx-left-arrow-alt"></i>
        </div>
      </div>
      <div class="authform__titlebox">
        <h2 class="authform__titlebox__title">Welcome back</h2>
        <p class="authform__titlebox__smtext">Sign In to your account</p>
      </div>
      <form
        accept-charset="utf-8"
        method="POST"
        @submit.prevent="handleSubmit"
        class="authform__formwrapper"
      >
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
          <router-link class="authform__formgroup__link" to="/reset"
            >Forgot password?</router-link
          >
        </div>
        <button type="submit" class="authform__formgroup__btnsubmit btn-green">
          Login
        </button>
      </form>
      <div class="authform__options">
        <router-link class="authform__options__link" to="/signup"
          >Don't have an account?</router-link
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
          Sign in with Google
        </button>
        <button class="authform__oauthbutton">
          <img
            src="@/assets/Branding/apple.png"
            alt="Apple"
            class="authform__oauthbutton__img"
          />
          Sign in with Apple
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();

    const toLanding = () => {
      router.push("/");
    };

    const handleSubmit = () => {
      router.push("/verification");
    };

    return {
      toLanding,
      handleSubmit,
    };
  },
};
</script>
