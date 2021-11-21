<template>
  <div id="app">
    <Navbar />
    <button
      v-if="!isStartChecking"
      class="button"
      @click="
        ;(isStartChecking = !isStartChecking),
          sendRequest('GET', requestURLWithParams)
      "
    >
      Начать
    </button>
    <PrintedPage
      v-if="isStartChecking"
      ref="setFocusInPrintedPage"
      :textChecked="textChecked"
      :url="requestURLWithParams"
      @repeatCheck="sendRequest"
    />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PrintedPage from "./components/PrintedPage.vue"

export default {
  name: "App",
  components: {
    Navbar,
    PrintedPage,
  },
  data: () => ({
    isStartChecking: false,
    textChecked: [],
    requestURLWithParams: "https://fish-text.ru/get?&type=sentence&number=2",
  }),
  methods: {
    //Запрос на сервер реализовала в App, т.к. приложение небольшое и запрос всего один. Если было ба более сложное приложение, вынесла в отдельный файл
    sendRequest(method, url) {
      return fetch(url)
        .then(response => response.json())
        .then(data => (this.textChecked = data.text.split("")))
        .catch(err => console.log(err))
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
  width: 170px;
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
