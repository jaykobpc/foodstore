<template>
  <main class="favourites">
    <router-link to="/product" v-for="(n, index) in 5" :key="index" class="favourites__wrapper">
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
        <div title="Delete" class="favourites__iconbox icon-green">
         <i class='bx bxs-trash' ></i>
        </div>
      </div>
    </router-link>
  </main>
</template>

<script>
export default {
  name: "FavouritesView",
};
</script>
