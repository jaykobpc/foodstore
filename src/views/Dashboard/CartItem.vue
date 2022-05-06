<template>
  <div class="cartview__card">
    <div class="cartview__imagebox">
      <img
        src="@/assets/FoodAssets/food_1.jpg"
        alt="FoodAsset"
        draggable="false"
        class="cartview__imagebox__image"
      />
    </div>
    <div class="cartview__context">
      <div class="cartview__context__group">
        <h3 class="cartview__context__title">
          Roasted lamb chops with corriander
        </h3>
        <div title="Delete" class="favourites__iconbox icon-green">
          <i class="bx bxs-trash"></i>
        </div>
      </div>
      <div class="cartview__cartbox">
        <div class="cartview__cartgroup">
          <button
            @click="btnCompute('subtract')"
            class="cartview__cartgroup__btn"
          >
            -
          </button>
          <span class="cartview__cartgroup__counter">{{ counter }}</span>
          <button @click="btnCompute('add')" class="cartview__cartgroup__btn">
            +
          </button>
        </div>
        <h4 class="cartview__cartbox__pricecounter">${{ productTotal }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CartItem",
  setup() {
    const counter = ref(1);
    const productTotal = ref(3.99);
    const productPrice = ref(3.99);

    const btnCompute = (fnc) => {
      if (fnc == "subtract") {
        if (counter.value <= 1) return;
        counter.value -= 1;
        productTotal.value = (productTotal.value - productPrice.value).toFixed(
          2
        );
      }

      if (fnc == "add") {
        if (counter.value >= 20) return;
        counter.value += 1;
        productTotal.value = (productPrice.value * counter.value).toFixed(2);
      }
    };

    return {
      counter,
      productTotal,
      btnCompute,
    };
  },
};
</script>
