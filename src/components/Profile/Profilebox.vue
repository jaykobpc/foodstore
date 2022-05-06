<template>
  <div class="profilebox">
    <div class="profilebox__wrapper">
      <div class="profilebox__imagebox">
        <img
          src="@/assets/FoodAssets/food_1.jpg"
          alt="Profile"
          draggable="false"
          class="profilebox__imagebox__img"
        />
      </div>
      <div class="profilebox__textview">
        <h3 class="profilebox__textview__title">Karina Wu</h3>
        <p class="profilebox__textview__smtitle">+254 704 000 000</p>
      </div>
    </div>
    <button @click="exitApp" class="profilebox__btnout">Logout</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ProfileBox",
  setup() {
    const router = useRouter();

    const exitApp = () => {
      router.push("/login");
    };

    return {
      exitApp,
    };
  },
};
</script>
