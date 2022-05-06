<template>
  <div class="profileview">
    <div class="profileview__wrapper">
      <profile-box />
      <div class="profileview__listview">
        <router-link to="/myaccount" class="profileview__link">
          <div class="profileview__link__group">
            <div class="profileview__link__iconbox">
              <i class="bx bxs-user"></i>
            </div>
            <div class="profileview__link__title">My Account</div>
          </div>
          <i class="bx bx-chevron-right"></i>
        </router-link>
        <router-link to="/mylocation" class="profileview__link">
          <div class="profileview__link__group">
            <div class="profileview__link__iconbox">
              <i class="bx bxs-edit-location"></i>
            </div>
            <div class="profileview__link__title">My Address</div>
          </div>
          <i class="bx bx-chevron-right"></i>
        </router-link>
        <router-link to="/orderhistory" class="profileview__link">
          <div class="profileview__link__group">
            <div class="profileview__link__iconbox">
              <i class="bx bx-history"></i>
            </div>
            <div class="profileview__link__title">Order History</div>
          </div>
          <i class="bx bx-chevron-right"></i>
        </router-link>
        <router-link to="/settings" class="profileview__link">
          <div class="profileview__link__group">
            <div class="profileview__link__iconbox">
              <i class="bx bxs-cog"></i>
            </div>
            <div class="profileview__link__title">Settings</div>
          </div>
          <i class="bx bx-chevron-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBox from "@/components/Profile/Profilebox.vue";

export default {
  name: "ProfileView",
  components: {
    ProfileBox,
  },
};
</script>
