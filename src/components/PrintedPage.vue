<template>
  <div class="checked-block">
    <!-- <a href="https://router.vuejs.org" target="_blank" rel="noopener"
      >vue-router</a
    > -->
    <input
      class="checked-text"
      type="text"
      autocomplete="off"
      v-model="textEntered"
    />
    <div class="main-block">
      <div class="main-text">
        <span
          v-for="(letter, index) in textChecked"
          :key="index"
          :data-index="index"
          :class="{
            'right-letter': index === rightLetter,
            'wrong-letter': index === wrongLetter,
          }"
          >{{ letter }}</span
        >
      </div>
      <div class="main-status">
        <div class="checked-speed">
          <span>скорость</span>
          <span>{{ speedChecked }} зн./мин</span>
        </div>
        <div class="checked-accuracy">
          <span>точность</span>
          <span>{{ accuracyChecked }}%</span>
        </div>
        <button class="button" @click="test">заново</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrintedPage",
  data: () => ({
    textChecked: [],
    textEntered: "",
    speedChecked: 0,
    accuracyChecked: 100,
    selectedLetter: false,
    rightLetter: null,
    wrongLetter: null,
  }),
  mounted() {
    const requestURLWithParams =
      "https://fish-text.ru/get?&type=sentence&number=3"
    this.sendRequest("GET", requestURLWithParams)
      .then(data => (this.textChecked = data.text.split("")))
      .catch(err => console.log(err))
  },
  watch: {
    textEntered: function () {
      let letterEntered = this.textEntered.slice(-1)
      let index = this.textEntered.length - 1
      let letterGiven = this.textChecked[index]
      //console.log(letterEntered)
      //console.log(letterGiven)
      console.log("OK", this.wrongLetter)

      if (letterEntered === letterGiven) {
        this.rightLetter = index
        this.wrongLetter = null

        // return console.log("OK")
      }

      if (letterEntered !== letterGiven && this.textEntered) {
        // console.log("OK-2")
        this.textEntered = this.textEntered.slice(0, -1)

        this.$nextTick(() => {
          this.rightLetter = null
          this.wrongLetter = index
        })
        //setTimeout(() => (this.textEntered = this.textEntered.slice(0, -1)), 10)
        console.log(index)
      }
    },
    /* textChecked: function () {
      let checkedArr = this.textChecked.split("")
      console.log(checkedArr, this.textChecked)
      for (let i = 0; i < checkedArr.length; i++) {
        if (checkedArr[i] === this.textGiven[i]) {
          console.log(
            checkedArr[i],
            this.textGiven[i],
            checkedArr[i] === this.textGiven[i]
          )
        }
        if (checkedArr[i] !== this.textGiven[i]) {
          console.log("вызван второй if")
          return (this.textChecked = this.textChecked.slice(0, -1))
        }
      }
    }, */
  },
  methods: {
    sendRequest(method, url) {
      return fetch(url).then(response => response.json())
    },
    test() {
      let checkedArr = ["А", " ", "р"]
      for (let i = 0; i < checkedArr.length; i++) {
        console.log(
          checkedArr.length,
          checkedArr[i],
          this.textGiven[i],
          checkedArr[i] === this.textGiven[i]
        )
        //if (checkedArr[i] === this.textGiven[i]) return console.log("1", true)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.checked-block {
  position: relative;
  width: 100%;
  max-width: 940px;
  height: 1200px;
  margin-top: 70px;
}
.main-block {
  position: relative;
  display: flex;
  min-height: 300px;
  margin: 20px;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12) inset;
}
.main-text {
  width: calc(100% - 170px);
  margin-right: 30px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #838689 !important;
}
.selected-letter {
  padding: 3px 2px;
  color: #f1f3f4;
  background-color: #1a73e8;
  border-radius: 2px;
}
.main-status {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  min-width: 170px;
}
.checked-speed,
.checked-accuracy {
  display: flex;
  flex-direction: column;
}
.button {
  width: 100%;
  padding: 10px 18px;
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
.right-letter {
  padding: 3px 2px;
  color: #f1f3f4;
  background-color: #1a73e8;
  border-radius: 2px;
}
.wrong-letter {
  padding: 3px 2px;
  color: #f1f3f4;
  background-color: #d92d28;
  border-radius: 2px;
}
.checked-letter {
  color: #4d5053;
}
</style>
