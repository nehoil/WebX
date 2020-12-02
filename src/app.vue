

<template>
  <div id="app" class="container">
    <nav class="main-nav" v-if="isShowHeader">
      <div class="logo">
        <router-link to="/">
          <!-- <img class="logo-pic" src="./assets/logo1.png" alt="" srcset=""
          /> -->
          <h1>Webix</h1>
        </router-link>
      </div>
      <div class="menu">
        <!-- <router-link to="/">Home</router-link> | -->
        <router-link to="/templates">Templates</router-link>
        <!-- <router-link to="/user">Profile</router-link> | -->
        <router-link to="/editor">Editor</router-link>
        <a @click="showLogin" v-if="!user">Log In</a>
        <span v-if="user">
          <a @click="doLogout">Log Out</a>
          <router-link to="/user">
            Profile <i class="el-icon-user"></i
          ></router-link>
        </span>
      </div>
    </nav>
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
    doLogout() {
      this.$store.dispatch({ type: 'logout' });
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
      console.log(this.$store.getters.loggedinUser);
    });
  },
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}
</style>