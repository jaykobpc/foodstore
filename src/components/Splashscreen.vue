<template>
  <div v-if="splashShowing" class="splashscreen">
    <div class="splashscreen__container">
      <img
        src="@/assets/Branding/store_svg_logo.svg"
        alt="Brand"
        draggable="false"
        class="splashscreen__image"
      />
      <h3 class="splashscreen__text">Foodie</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SplashScreen",
  props: ["duration"],
  setup(props) {
    const splashShowing = ref(true);
    let duration = parseInt(props.duration);

    setTimeout(() => {
      splashShowing.value = false;
    }, duration);

    return {
      splashShowing,
    };
  },
};
</script>
