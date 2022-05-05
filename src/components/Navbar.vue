<template>
  <nav role="navigation" class="appbar">
    <div>&nbsp;</div>
    <h3 class="appbar__title">{{ appBarTitle }}</h3>
    <div class="appbar__icon">
      <i class="bx bxs-bell"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    appBarTitle: String,
  },
};
</script>