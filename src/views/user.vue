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
      <h1>Welcome back, {{ user }}</h1>
      <h2 class="main-section-title">Your Websites:</h2>
      <div class="flex space center">
        <span v-for="website in websites" :key="website._id">
          <img :src="website.previewImage" alt="" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    websites() {
      return this.$store.getters.templatesOfUser;
    },
  },
  created() {},
};
</script>

