<template>
  <div id="app">
    <Navbar />
    <PrintedPage />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PrintedPage from "./components/PrintedPage.vue"
//import { sendRequest } from "./api"

export default {
  name: "App",
  components: {
    Navbar,
    PrintedPage,
  },
  data: () => ({}),
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

* {
  margin: 0 auto;
  box-sizing: border-box;
  //color: #2c3e50;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d5053;
}
</style>
