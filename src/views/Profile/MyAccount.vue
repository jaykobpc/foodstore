<template>
  <main class="myaccountview">
    <navigation-bar title="My Account" />
    <section class="myaccountview__wrapper">
      <div class="myaccountview__imagebox">
        <img src="@/assets/FoodAssets/food_1.jpg" alt="Profile" draggable="false" class="myaccountview__imagebox__img">
        <button class="myaccountview__imagebox__btnedit">Change picture</button>
      </div>
      <form @submit.prevent="handleSubmit" accept-charset="utf-u" class="myaccountview__formbox">
        <div class="myaccountview__formbox__formgroup">
          <label for="name">Name</label>
          <input type="text" id="name" required placeholder="Your fullname" class="myaccountview__formbox__formgroup__input">
        </div>
        <div class="myaccountview__formbox__formgroup">
          <label for="email">Email</label>
          <input type="email" id="email" required placeholder="Your email" class="myaccountview__formbox__formgroup__input">
        </div>
        <div class="myaccountview__formbox__formgroup">
          <label for="phonenumber">Phone number</label>
          <input type="text" id="phonenumber" required placeholder="Your phone number" class="myaccountview__formbox__formgroup__input">
        </div>
        <div class="myaccountview__formbox__formgroup">
          <label for="password">Password</label>
          <input type="password" id="password" required placeholder="Your password" class="myaccountview__formbox__formgroup__input">
        </div>
        <button class="myaccountview__formbox__formgroup__submit">Save changes</button>
      </form>
    </section>
  </main>
</template>

<script>
import NavigationBar from "@/components/Profile/Navigation.vue";

export default {
  name: "MyAccount",
  components: {
    NavigationBar,
  },
  setup() {
    const handleSubmit = () => {}

    return {
      handleSubmit
    }
  }
};
</script>
