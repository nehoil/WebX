<script>

</script>

<template>
  <div id="app" class="container">
    <div class="main-header">
    <nav>
            <div class="logo">
       <router-link to="/"> <img src="./assets/logo.png" alt="" srcset=""></router-link>
      </div>
      <div class="menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/templates">Templates</router-link> |
      <router-link to="/">Profile</router-link> |
      <router-link to="/editor">Editor</router-link>
      </div>
    </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
