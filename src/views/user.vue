<template>
  <section class="user-profile flex space center">
    <div class="user-nav">
      <!-- <img src="" alt="" /> -->
      <h2>Your Websites</h2>
      <ul v-for="website in websites" :key="website._id">
        <li>{{ website.name }}</li>
      </ul>
      <router-link to="/templates">
        <div class="nav-create pointer">+ Create new website</div></router-link
      >
    </div>
    <div class="main-section">
      <h1>Welcome back, {{ user.username }}</h1>
      <h2 class="main-section-title">Your Websites:</h2>
      <div class="flex space center">
        <span v-for="website in websites" :key="website._id">
          <img :src="website.previewImg" alt="" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // websites: null
    };
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.user;
    },
    websites() {
      return this.$store.getters.userWebs;
    },
  },
  created() {
    this.$store.dispatch('loadUserWebs')
    console.log(this.$store.getters.userWebs);
  },
};
</script>

