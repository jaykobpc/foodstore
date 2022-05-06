<template>
  <main class="mylocationview">
    <navigation-bar title="Location" />
    <section class="mylocationview__wrapper">
      <div class="mylocationview__mapbox">
        <p>Failed to start location service..</p>
      </div>
    </section>
  </main>
</template>

<script>
import NavigationBar from "@/components/Profile/Navigation.vue";

export default {
  name: "MyLocation",
  components: {
    NavigationBar,
  },
};
</script>
