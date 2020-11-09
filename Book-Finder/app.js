const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let booksArray = [];

let newBooksArray = [];

app.get("/", (req, res) => {
  res.render("index", { booksArray: booksArray });
});

app.post("/query", function (req, res) {
  const userQuery = req.body.query;

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userQuery}&filter=ebooks&maxResults=10&key=${API_KEY}`
    )
    .then(function (response) {
      // handle success
      booksArray = response.data.items;

      for (book in booksArray) {
        let bookId = booksArray[book].id;
        let bookUrl = booksArray[book].volumeInfo.infoLink;
        let bookTitle = booksArray[book].volumeInfo.title;
        let bookauthors = booksArray[book].volumeInfo.authors;
        let bookImage = booksArray[book].volumeInfo.imageLinks.thumbnail;

        const BookObject = {
          bookId,
          bookUrl,
          bookTitle,
          bookauthors,
          bookImage,
        };

        newBooksArray.push(BookObject);
        // console.log(BookObject);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      res.render("index", {
        booksArray: newBooksArray,
      });
      newBooksArray = [];
      // console.log(newBooksArray);
    });
});

app.listen(port, () => {
  console.log(`App started http://localhost:${port}`);
});
