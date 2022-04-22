const express = require('express')
const app = express()
const importData = require("./movies.json")
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_movies", (req, res) => {
    res.send(importData)
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

