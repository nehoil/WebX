

<template>
  <div id="app" class="container">
    <div class="main-header" v-if="isShowHeader">
      <nav>
        <div class="logo">
          <router-link to="/">
            <img src="./assets/logo.png" alt="" srcset=""
          /></router-link>
        </div>
        <div class="menu">
          <router-link to="/">Home</router-link> |
          <router-link to="/templates">Templates</router-link> |
          <router-link to="/user">Profile</router-link> |
          <router-link to="/editor">Editor</router-link> |
          <span @click="showLogin" class="login-btn" v-if="!user">Log In</span>
          <span v-if="!user">
            | <router-link to="/">Logout</router-link> |
            <router-link to="/user">
              Profile <i class="el-icon-user"></i
            ></router-link>
          </span>
        </div>
      </nav>
    </div>
    <div class="modal-bg" v-if="isShowLogin"></div>
    <loginCmp v-if="isShowLogin" @showLogin="showLogin" />
    <router-view />
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import loginCmp from '@/cmps/login.cmp';

export default {
  name: 'app',
  components: {
    loginCmp,
  },
  data() {
    return {
      isShowHeader: true,
      isShowLogin: false,
    };
  },
  methods: {
    showLogin() {
      this.isShowLogin = !this.isShowLogin;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    eventBus.$on('change-edit-mode', () => {
      this.isShowHeader = !this.isShowHeader;
      this.$forceUpdate();
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>