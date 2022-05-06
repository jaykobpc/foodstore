<template>
  <main class="orderview">
    <navigation-bar />
    <div class="orderview__wrapper">
      <order-confirm />
      <order-summary />
      <order-driver />
    </div>
  </main>
</template>

<script>
import NavigationBar from "@/components/Order/Navigation.vue";
import OrderConfirm from "@/components/Order/OrderConfirm.vue";
import OrderSummary from "@/components/Order/OrderSummary.vue";
import OrderDriver from "@/components/Order/OrderDriver.vue";

export default {
  name: "ConfirmOrderView",
  components: {
    NavigationBar,
    OrderConfirm,
    OrderSummary,
    OrderDriver,
  },
};
</script>
