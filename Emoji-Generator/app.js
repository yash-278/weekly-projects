const API_KEY = "10ddf5f2878b0861dc2170ecbc8f6a1ae53417e1";

const URL = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

const insertEmoji = document.getElementById("insert-emoji");

function EmojiSearch() {
  // Clear Existing Emotes
  insertEmoji.innerHTML = "";

  // Get Emotes Text
  let emojiSearchText = document.getElementById("emoji-text").value;

  // Make a Axios Get Request
  axios
    .get(`${URL}&search=${emojiSearchText}`)
    .then(function (response) {
      // handle success

      for (let i = 0; i < response.data.length; i++) {
        const emote = response.data[i].character;
        const name = response.data[i].slug;
        const code = response.data[i].codePoint;

        const htmlMarkup = `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${emote}</td>
            <td>${name}</td>
            <td>${code}</td>
          </tr>
        `;

        insertEmoji.insertAdjacentHTML("beforeend", htmlMarkup);
        // console.log(element);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
