<template>
  <div class="orderview__driver">
    <h3 class="orderview__driver__title">Driver</h3>
    <div class="orderview__driver__group">
      <div class="orderview__driver__imagebox">
        <img
          src="@/assets/FoodAssets/food_1.jpg"
          alt="Driver"
          draggable="false"
          class="orderview__driver__imagebox__img"
        />
      </div>
      <div class="orderview__driver__textview">
        <h3 class="orderview__textview__title">Nelson Ewen</h3>
        <p class="orderview__textview__smtext">+254 704 000 000</p>
        <p class="orderview__textview__smtext">KMCA 343C</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDriver",
};
</script>
