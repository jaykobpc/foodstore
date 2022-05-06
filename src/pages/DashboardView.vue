<template>
  <div class="contentwrapper">
    <nav-bar :appBarTitle="currentRoute" />
    <main class="contentscrollview">
      <router-view />
    </main>
    <bottom-navigation />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import { useRouter } from "vue-router";

export default {
  name: "DashboardView",
  components: {
    BottomNavigation,
    NavBar,
  },
  data() {
    return {
      currentRoute: "Home",
    };
  },
  methods: {
    computeCurrentRoute() {
      const currentPage = useRouter().currentRoute.value.name;
      /** set current page headers */
      if (currentPage == "StoreView") this.currentRoute = "Home";
      if (currentPage == "FavouritesView") this.currentRoute = "Favourites";
      if (currentPage == "CartView") this.currentRoute = "Cart";
      if (currentPage == "SettingsView") this.currentRoute = "Profile";
    },
  },
  mounted() {
    this.computeCurrentRoute();
  },
  watch: {
    $route: function (to) {
      if (to.name == "StoreView") this.currentRoute = "Home";
      if (to.name == "FavouritesView") this.currentRoute = "Favourites";
      if (to.name == "CartView") this.currentRoute = "Cart";
      if (to.name == "SettingsView") this.currentRoute = "Profile";
    },
  },
};
</script>
