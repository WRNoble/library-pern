const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//create a book

//get all books

//update book

//delete book

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
