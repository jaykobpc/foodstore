<template>
  <router-link to="/product" class="rowlistcard">
    <img
      :src="require(`@/assets/FoodAssets/${image}`)"
      alt="Assets"
      draggable="false"
      class="rowlistcard__image"
    />
    <h3 class="rowlistcard__title">{{ title }}</h3>
    <p class="rowlistcard__smtext">${{ price }}</p>
  </router-link>
</template>

<script>
export default {
  name: "RowListCard",
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: String,
    },
  },
};
</script>
