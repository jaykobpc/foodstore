<template>
  <nav role="navigation" class="appbar">
    <div>&nbsp;</div>
    <h3 class="appbar__title">{{ appBarTitle }}</h3>
    <div role="button" @click="nextPage" class="appbar__icon">
      <i class="bx bxs-bell"></i>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  props: {
    appBarTitle: String,
  },
  setup() {
    const router = useRouter();

    const nextPage = () => {
      router.push("/notifications");
    };

    return {
      nextPage,
    };
  },
};
</script>