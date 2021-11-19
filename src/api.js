/* const requestURL = "https://fish-text.ru/get?"
//const requestURLWithParams = requestURL + "&format=html" + "&number=3"
//const requestURLWithParams = "https://fish-text.ru/get?&type=sentence&number=3";
const requestURLWithParams = requestURL + "&type=sentence" + "&number=3"

function sendRequest(method, url) {
  return fetch(url).then(response => response.json())
}

sendRequest("GET", requestURLWithParams)
  .then(text => console.log(text.text))
  .catch(err => console.log(err)) */
