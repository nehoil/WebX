

<template>
  <div id="app" class="container">
        <loading-cmp v-if="isLoading"/>
    <nav class="main-nav" v-if="isShowHeader">
      <div class="logo">
        <router-link to="/">
          <img
            class="logo-img"
            src="./assets/logo2.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="menu">
        <router-link to="/templates">Templates</router-link>
        <router-link to="/editor">Editor</router-link>
        <a @click="showLogin" v-if="!user">Login</a>
        <span v-if="user">
          <a @click="doLogout">Logout</a>
          <router-link to="/user">
            Profile <i class="el-icon-user"></i
          ></router-link>
        </span>
      </div>
    </nav>
    <div class="modal-bg" v-if="isShowLogin"></div>
    <login-cmp v-if="isShowLogin" @showLogin="showLogin" :msg="loginMsg" />
    <user-msg/>
    <router-view/>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import loginCmp from '@/cmps/login.cmp';
import userMsg from '@/cmps/user.msg.cmp';
import loadingCmp from '@/cmps/loading.cmp';

export default {
  name: 'app',
  components: {
    loginCmp,
    userMsg,
    loadingCmp
  },
  data() {
    return {
      isShowHeader: true,
      isShowLogin: false,
      isLoading: false,
      loginMsg: null
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
    });
    eventBus.$on('show-login', (msg) => {
      this.loginMsg = msg
      this.isShowLogin = true;
    });
    eventBus.$on('toggleLoading', () => {
      this.isLoading = !this.isLoading
    });
  },
};
</script>

<style lang="scss">
// #app {
// font-family: Avenir, Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// color: #2c3e50;
// }
</style>