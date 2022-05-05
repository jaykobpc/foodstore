<template>
  <section class="landingview">
    <div class="landingview__container">
      <div class="landingview__imagebox">
        <img
          src="@/assets/FoodAssets/landing_1.png"
          alt="Landing image"
          draggable="false"
          class="landingview__imagebox__img"
        />
      </div>
      <div class="landingview__textview">
        <h3 class="landingview__textview__title">All your favourite meals</h3>
        <p class="landingview__textview__text">
          Order your favourite food and get instant delivery
        </p>
      </div>
      <div class="landingview__btngroup">
        <button
          @click="toSignup"
          class="landingview__btngroup__btn btn-light-green"
        >
          Get started
        </button>
        <button
          @click="toLogin"
          class="landingview__btngroup__btn btn-light-green"
        >
          Sign In
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "LandingView",
  setup() {
    const router = useRouter();

    const toLogin = () => {
      router.push("/login");
    };

    const toSignup = () => {
      router.push("/signup");
    };

    return {
      toLogin,
      toSignup,
    };
  },
};
</script>
