const baseUrl = "https://fish-text.ru/"
const gettingTextUrl = "get?&type=sentence&number=2"

export default {
  getText() {
    return fetch(`${baseUrl}${gettingTextUrl}`)
      .then(response => response.json())
      .catch(err => console.log(err))
  },
}
