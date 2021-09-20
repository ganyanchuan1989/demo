<template>
  <div id="app">
    <div id="nav">
      <router-link to="/demo01">demo01</router-link> |
      <router-link to="/style">style</router-link> |
      <router-link to="/slot">slot</router-link> |
      <router-link to="/ref">ref</router-link> |
      <router-link to="/props">props</router-link> |
      <router-link to="/route">route</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <button @click="goto">go to about</button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    goto() {
      // 注意是$router不是$route
      this.$router.push("/about");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
