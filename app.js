const express = require('express')
const app = express()
const moviesList = require("./movies.json")
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_movies", (req, res) => {
    res.send(moviesList)
});

app.get("/quote", (req, res) => {
    const randomItem = moviesList[Math.floor(Math.random() * moviesList.length)];
    res.send(randomItem);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

