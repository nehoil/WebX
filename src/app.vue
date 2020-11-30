

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
          <router-link to="/editor">Editor</router-link> |
          <router-link to="/" v-if="!user">Login</router-link> |
          <span v-if="!user">
            <router-link to="/">Loutout</router-link> |
            <router-link to="/user"
              >Profile <i class="el-icon-user"></i
            ></router-link>
          </span>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";
export default {
  name: "app",
  components: {},
  data() {
    return {
      isShowHeader: true,
    };
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    // isShowHeader(){
    //   if (this.$store.getters.isShowHeader) return true
    //   return false
    // }
  },
  created() {
    eventBus.$on("change-edit-mode", () => {
      this.isShowHeader = !this.isShowHeader;
      console.log("here");
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
  text-align: center;
  color: #2c3e50;
}
</style>
