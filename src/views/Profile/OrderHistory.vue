<template>
  <main class="orderhistoryview">
    <navigation-bar title="Order History" />
    <section class="orderhistoryview__wrapper">
      <div v-for="(n, index) in 5" :key="index" class="orderhistoryview__groupbox">
        <h3 class="orderhistoryview__groupbox__title">January, 2022</h3>
        <div class="orderhistoryview__groupbox__context">
          <div class="favourites__item">
            <div class="favourites__imagebox">
              <img
                src="@/assets/FoodAssets/food_1.jpg"
                alt="Asset"
                class="favourites__imagebox__img"
              />
            </div>
            <div class="favourites__textview">
              <h3 class="favourites__textview__title">
                Roasted beef &amp; Sour corn
              </h3>
              <p class="favourites__textview__subtitle">$12.25</p>
            </div>
          </div>
          <div class="favourites__item">
            <div class="favourites__imagebox">
              <img
                src="@/assets/FoodAssets/food_1.jpg"
                alt="Asset"
                class="favourites__imagebox__img"
              />
            </div>
            <div class="favourites__textview">
              <h3 class="favourites__textview__title">
                Roasted beef &amp; Sour corn
              </h3>
              <p class="favourites__textview__subtitle">$12.25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavigationBar from "@/components/Profile/Navigation.vue";

export default {
  name: "OrderHistory",
  components: {
    NavigationBar,
  },
};
</script>
