
<template>
  <div class="main-header">
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" srcset=""
        /></router-link>
      </div>
      <div class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/templates">Templates</router-link> |
        <router-link to="/user">Profile</router-link> |
        <router-link to="/editor">Editor</router-link>
      </div>
    </nav>
  </div>
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

