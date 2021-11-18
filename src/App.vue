<template>
  <div id="app">
    <Navbar />
    <h2>{{ text }}</h2>
    <PrintedPage />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PrintedPage from "./components/PrintedPage.vue"
import { sendRequest } from "./api"

export default {
  name: "App",
  components: {
    Navbar,
    PrintedPage,
  },
  data: () => ({
    nusf: 5,
    text: sendRequest,
  }),
}
</script>

<style lang="scss">
* {
  margin: 0 auto;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
