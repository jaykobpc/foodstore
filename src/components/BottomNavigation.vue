<template>
  <nav role="navigation" class="bottomnavigation">
    <div class="bottomnavigation__wrapper">
      <div
        role="button"
        @click="changeRoute('')"
        :class="{ active_page: currentRoute == 'StoreView' }"
        class="bottomnavigation__item">
        <i class="bottomnavigation__icon bx bxs-home"></i>
        <span class="bottomnavigation__text">Home</span>
      </div>
      <div
        role="button"
        @click="changeRoute('favourites')"
        :class="{ active_page: currentRoute == 'FavouritesView' }"
        class="bottomnavigation__item">
        <i class="bottomnavigation__icon bx bxs-heart"></i>
        <span class="bottomnavigation__text">Favourites</span>
      </div>
      <div
        role="button"
        @click="changeRoute('cart')"
        :class="{ active_page: currentRoute == 'CartView' }"
        class="bottomnavigation__item">
        <i class="bottomnavigation__icon bx bxs-cart"></i>
        <span class="bottomnavigation__text">Cart</span>
      </div>
      <div
        role="button"
        @click="changeRoute('profile')"
        :class="{ active_page: currentRoute == 'SettingsView' }"
        class="bottomnavigation__item">
        <i class="bottomnavigation__icon bx bxs-user-circle"></i>
        <span class="bottomnavigation__text">Profile</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "BottomNavigation",
  data() {
    return {
      currentRoute: useRouter().currentRoute.value.name,
    }
  },
  setup() {
    const activeroute = ref("home");
    const router = useRouter();

    const changeRoute = (routename) => {
      if(routename == '') router.push('/store');
      router.push(`/store/${routename}`);
    };

    return {
      activeroute,
      changeRoute,
    };
  },
  watch: {
    $route: function(to) {
      this.currentRoute = to.name;
    }
  }
};
</script>
