<template>
  <main class="notificationsview">
    <navigation-bar title="Notifications" />
    <section class="notificationsview__wrapper">
      <div v-for="(n, index) in 2" :key="index" class="notificationsview__groupbox">
        <h3 class="notificationsview__groupbox__title">January, 2022</h3>
        <div class="notificationsview__contextbox">
          <notification-card />
          <notification-card />
          <notification-card />
          <notification-card />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavigationBar from "@/components/Notifications/NavigationBar.vue";
import NotificationCard from '@/components/Notifications/NotificationCard.vue';

export default {
  name: "NotificationsView",
  components: {
    NavigationBar,
    NotificationCard
  },
};
</script>
