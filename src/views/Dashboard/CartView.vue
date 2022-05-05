<template>
  <div class="cartview">
    <div class="cartview__titlebox">
      <h3 class="cartview__titlebox__text">Your Order (3)</h3>
    </div>
    <div class="cartview__listview">
      <cart-item v-for="(n, index) in 2" :key="index" />
    </div>
    <div class="cartview__footer">
      <button @click="pushOrder" class="cartview__footer__button">Place your order</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import CartItem from "./CartItem.vue";

export default {
  name: "CartView",
  components: {
    CartItem,
  },
  setup() {
    const router = useRouter();

    const pushOrder = () => {
      router.push('/confirmorder');
    }

    return {
      pushOrder
    }
  }
};
</script>
