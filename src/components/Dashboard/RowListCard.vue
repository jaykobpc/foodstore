<template>
  <router-link to="/product" class="rowlistcard">
    <img
      src="@/assets/FoodAssets/food_1.jpg"
      alt="Assets"
      draggable="false"
      class="rowlistcard__image"
    />
    <h3 class="rowlistcard__title">Food on a plate</h3>
    <p class="rowlistcard__smtext">$8.99</p>
  </router-link>
</template>

<script>
export default {
  name: "RowListCard",
};
</script>
