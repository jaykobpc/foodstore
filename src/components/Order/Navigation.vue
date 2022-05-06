<template>
  <nav class="orderview__navigation">
    <div
      role="button"
      @click="rollBack"
      class="orderview__navigation__iconview">
      <i class="bx bx-left-arrow-alt"></i>
    </div>
    <h3 class="orderview__navigation__title">Order Status</h3>
    <span>&nbsp;</span>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "NavigationBar",
  setup() {
    const router = useRouter();

    const rollBack = () => {
      router.push("/store/cart");
    };

    return { rollBack };
  },
};
</script>
