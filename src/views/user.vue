<template>
  <section class="user-profile flex space center">
    <!-- <div class="user-nav">
      <img src="" alt="" /> 
      <h2>Your Websites</h2>
      <ul v-for="website in websites" :key="website._id">
        <li>{{ website.name }}</li>
      </ul>
      <router-link to="/templates">
        <div class="nav-create pointer">+ Create new website</div></router-link
      >
    </div> -->
    <div class="main-section">
      <h3>Welcome back, {{ user.username }}!</h3>
      <p class="main-section-title">
        Select a site to edit, view and open its dashboard
      </p>
      <div class="flex space center user-tmp-list">
        <span
          class="user-tmp-display"
          v-for="website in websites"
          :key="website._id"
        >
          <!-- <pre>{{ website.previewImg }}</pre> -->
          <!-- <img class="user-tmp-image" :src="website.previewImg" alt="" /> -->
          <span class="user-tmp-name">{{ website.name }}</span>
          <div class="tmp-img-container">
            <img class="user-tmp-image" :src="website.previewImg" alt="" />
          </div>
          <span class="flex center">
            <button @click="removeWeb(website._id)">
              <i class="el-icon-delete"></i>
            </button>
            <router-link class="choose pointer" :to="'editor/' + website._id">
              <button><i class="el-icon-edit"></i></button>
            </router-link>
          </span>
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
  methods: {
    removeWeb(webId) {
      this.$store.dispatch('removeWeb', webId);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    websites() {
      return this.$store.getters.userWebs;
    },
  },
  created() {
    this.$store.dispatch('loadUserWebs');
  },
};
</script>

