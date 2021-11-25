<template>
  <div class="checked-block">
    <input
      class="checked-text"
      type="text"
      autocomplete="off"
      ref="mainInput"
      v-model="textEntered"
      @keydown="checkPrevent"
      @keydown.once="initStopwatch"
    />
    <div class="main-block">
      <div class="main-text" @click="setFocusInput">
        <span
          v-for="(letter, index) in textChecked"
          :key="index"
          :class="{
            'right-letter': index === rightLetter,
            'wrong-letter': index === wrongLetter,
            'checked-letter': checkedLetters.includes(index),
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
        <button class="button" @click="reRerenderComponent">повторить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "PrintedPage",
  data() {
    return {
      textEntered: null,
      speedChecked: 0,
      accuracyChecked: 100,
      selectedLetter: false,
      rightLetter: null,
      wrongLetter: null,
      checkedLetters: [],
      mistakesCount: [],
      timeStart: null,
      initInterval: null,
      stopwatch: 0,
      buttonPrevent: [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Tab",
      ],
    }
  },
  computed: {
    ...mapGetters({ textChecked: "getLettersArr" }),
  },
  watch: {
    textEntered: function () {
      if (!this.textEntered) return

      let letterEntered = this.textEntered.slice(-1)
      let indexCurrent = this.textEntered.length - 1
      let letterChecked = this.textChecked[indexCurrent]

      if (letterEntered === this.textChecked[this.textChecked.length - 1]) {
        clearInterval(this.initInterval)
      }

      if (letterEntered === letterChecked) {
        this.setRightLetter(indexCurrent + 1)
        this.setCheckedLetters(indexCurrent + 1)
      }
      if (letterEntered !== letterChecked && this.textEntered) {
        this.textEntered = this.textEntered.slice(0, -1)
        this.setWrongLetter(indexCurrent)
        this.changeAccuracy(indexCurrent)
      }
    },
  },
  mounted() {
    this.setRightLetter(0)
    this.setFocusInput()
  },
  beforeDestroy() {
    clearInterval(this.initInterval)
  },
  methods: {
    ...mapActions(["getText"]),

    reRerenderComponent() {
      this.$emit("reRerenderComponent")
    },
    checkPrevent(e) {
      if (this.buttonPrevent.includes(e.code)) {
        e.preventDefault()
      }
    },
    setRightLetter(index) {
      this.rightLetter = index
      this.wrongLetter = null
    },
    setWrongLetter(index) {
      this.$nextTick(() => {
        this.rightLetter = null
        this.wrongLetter = index
      })
    },
    setCheckedLetters(index) {
      if (this.checkedLetters.includes(index - 1)) return
      this.checkedLetters.push(index - 1)
    },
    setFocusInput() {
      this.$refs.mainInput.focus()
    },
    changeAccuracy(index) {
      let inaccuracy = (100 / this.textChecked.length).toFixed(1)

      if (!this.mistakesCount.includes(index)) {
        this.accuracyChecked = (this.accuracyChecked - inaccuracy).toFixed(1)
        this.mistakesCount.push(index)
      }
    },
    changeSpeed() {
      let minutePassed = this.stopwatch * 0.0166667
      this.speedChecked = Math.round(this.textEntered.length / minutePassed)
    },
    initStopwatch() {
      this.initInterval = setInterval(() => {
        if (this.textEntered) {
          this.stopwatch++
          this.changeSpeed()
        }
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">
.checked-block {
  position: relative;
  width: 100%;
  max-width: 940px;
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
  cursor: text;
}
.main-status {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 170px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #838689;
}
.checked-text {
  position: absolute;
  height: 1px;
  overflow: hidden;
  outline: 0;
  border: none;
  color: transparent;
  background-color: transparent;
  caret-color: transparent;
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
  padding: 0px 2px;
  color: #f1f3f4;
  background-color: #1a73e8;
  border-radius: 2px;
}
.wrong-letter {
  padding: 0px 2px;
  color: #f1f3f4;
  background-color: #d92d28;
  border-radius: 2px;
}
.checked-letter {
  color: #1a73e8;
}
</style>
