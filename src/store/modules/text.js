import api from "../../api"

export default {
  state: () => ({
    currentText: "",
  }),

  mutations: {
    setText(state, text) {
      state.currentText = text
    },
  },

  actions: {
    getText({ commit }) {
      try {
        api.getText().then(res => {
          commit("setText", res.text)
        })
      } catch (error) {
        return console.log(error)
      }
    },
  },

  getters: {
    getLettersArr: state => state.currentText.split(""),
  },
}
