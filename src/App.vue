<template>
  <div id="app">
    <the-navbar />
    <button class="button" v-if="!isStartChecking" @click="startTest">
      Начать печатать
    </button>
    <printed-page
      v-if="isStartChecking"
      :key="numberOfAttempts"
      @reRerenderComponent="reRerenderComponent"
    />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue"
import PrintedPage from "./components/PrintedPage.vue"
import { mapActions } from "vuex"

export default {
  name: "App",
  components: {
    TheNavbar,
    PrintedPage,
  },
  data() {
    return {
      numberOfAttempts: 0,
      isStartChecking: false,
    }
  },
  methods: {
    ...mapActions(["getText"]),
    startTest() {
      this.getText()
      this.isStartChecking = !this.isStartChecking
    },
    reRerenderComponent() {
      this.getText()
      this.numberOfAttempts += 1
    },
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

* {
  margin: 0 auto;
  box-sizing: border-box;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d5053;
}
.button {
  width: 210px;
  padding: 10px 18px;
  margin-top: 70px;
  font-size: 16px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #1a73e8;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
.button:hover {
  background: #f1f3f4;
  color: #153b79;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
}
</style>
