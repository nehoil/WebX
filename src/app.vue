

<template>
  <div id="app" class="container">
    <nav class="main-nav" v-if="isShowHeader">
      <div class="logo">
        <router-link to="/">
          <!-- <img class="logo-pic" src="./assets/logo1.png" alt="" srcset=""
          /> -->
          <!-- <h1>Webix</h1> -->
          <img
            class="logo-img"
            src="./assets/logo2.png"
            alt=""
          />
          <!-- <svg width="200.6985103176093" height="96.9052172877193" viewBox="-4 0 373.6985103176093 96.9052172877193" class="css-1j8o68f"><defs id="SvgjsDefs4673"></defs><g id="SvgjsG4674" featurekey="HKaMnE-0" transform="matrix(-0.8353178686209602,0,0,-0.8353178686209602,78.80506190565507,102.20115433127557)" fill="#293462"><title xmlns="http://www.w3.org/2000/svg">icons</title><g xmlns="http://www.w3.org/2000/svg" data-name="15. circle saturn"><path d="M88.47,49.8C88.19,65.87,78.32,80.58,63,86A38.48,38.48,0,0,1,17,30,38.85,38.85,0,0,1,57.82,12.12C75.7,15.82,88.16,31.77,88.47,49.8c0,1.93,3,1.93,3,0A42,42,0,0,0,64.41,10.91a41.48,41.48,0,0,0-50,60.19A41.89,41.89,0,0,0,57.29,90.62c19.79-3.48,33.84-21,34.19-40.83C91.5,47.87,88.5,47.87,88.47,49.8Z"></path><path d="M3.3,51.3H97.63a1.5,1.5,0,0,0,0-3H3.3a1.5,1.5,0,0,0,0,3h0Z"></path></g></g><g id="SvgjsG4675" featurekey="J3GnXt-0" transform="matrix(4.490282867003948,0,0,4.490282867003948,100.55096357699146,5.842277661646666)" fill="#293462"><path d="M17.04 6 l2.88 0 l-4.24 14 l-2.9 0 l-2.76 -9.4 l-2.76 9.4 l-2.9 0 l-4.26 -14 l2.88 0 l2.88 10.14 l2.92 -10.14 l2.46 0 l2.92 10.14 z M25.18 20.28 c-3.24 0 -5.5 -2.14 -5.5 -5.34 c0 -3.02 2.12 -5.34 5.3 -5.34 c3.32 0 5.22 2.3 5.22 5.2 c0 0.32 0 0.62 -0.06 0.94 l-7.86 0 c0.18 1.3 1.1 2.3 2.94 2.3 c1.28 0 2.06 -0.58 2.46 -1.34 l2.38 0.7 c-0.58 1.32 -2.22 2.88 -4.88 2.88 z M22.28 14.08 l5.34 0 c-0.12 -1.24 -1.08 -2.24 -2.66 -2.24 c-1.54 0 -2.54 1.08 -2.68 2.24 z M38.12 9.6 c2.8 0 4.98 2.26 4.98 5.34 c0 3.06 -2.18 5.34 -4.98 5.34 c-1.44 0 -2.54 -0.6 -3.28 -1.52 l0 1.24 l-2.64 0 l0 -14.6 l2.64 0 l0 5.7 c0.74 -0.92 1.84 -1.5 3.28 -1.5 z M37.66 17.92 c1.66 0 2.84 -1.24 2.84 -3 c0 -1.74 -1.18 -2.96 -2.84 -2.96 c-1.6 0 -2.88 1.22 -2.88 2.96 c0 1.76 1.28 3 2.88 3 z M46.44 8.46 c-0.88 0 -1.58 -0.68 -1.58 -1.56 c0 -0.84 0.7 -1.52 1.58 -1.52 s1.58 0.68 1.58 1.52 c0 0.88 -0.7 1.56 -1.58 1.56 z M45.08 20 l0 -10.12 l2.66 0 l0 10.12 l-2.66 0 z M59.94 20 l-3.02 0 l-2.38 -3.22 l-2.38 3.22 l-3 0 l3.78 -5.12 l-3.62 -5 l3 0 l2.22 3.06 l2.24 -3.06 l2.98 0 l-3.6 5 z"></path></g></svg> -->
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
// #app {
// font-family: Avenir, Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// color: #2c3e50;
// }
</style>