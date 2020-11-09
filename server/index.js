const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//create a book

app.post("/addbook", async (req, res) => {
  try {
    const { title } = req.body;
    const { author } = req.body;
    const { genre } = req.body;
    const { published } = req.body;
    const { description } = req.body;
    const newBook = await pool.query(
      "INSERT INTO library (title, author, genre, published, description) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, author, genre, published, description]
    );

    res.json(newBook.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all books

app.get("/books", async (req, res) => {
  try {
    const allBooks = await pool.query("SELECT * FROM library");
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get specific book

app.get("/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const book = await pool.query("SELECT * FROM library WHERE title = $1", [
      title,
    ]);
    res.json(book.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all books by author

app.get("/author/:author", async (req, res) => {
  try {
    const { author } = req.params;
    const books = await pool.query("SELECT * FROM library WHERE author = $1", [
      author,
    ]);
    res.json(books.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all books by genre

app.get("/genre/:genre", async (req, res) => {
  try {
    const { genre } = req.params;
    const books = await pool.query("SELECT * FROM library WHERE genre = $1", [
      genre,
    ]);
    res.json(books.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update book

app.put("/update/:library_id", async (req, res) => {
  try {
    const { title } = req.body;
    const { author } = req.body;
    const { genre } = req.body;
    const { published } = req.body;
    const { description } = req.body;
    const updateBook = await pool.query(
      "UPDATE library SET title = $1, author = $2, genre = $3, published = $4, description = $5 WHERE library_id = library_id",
      [title, author, genre, published, description]
    );

    res.json("book was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete book

app.delete("/book/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const deleteBook = await pool.query(
      "DELETE FROM library WHERE title = $1",
      [title]
    );
    res.json("book was removed");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/bookid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await pool.query(
      "DELETE FROM library WHERE library_id = $1",
      [id]
    );
    res.json("book was removed");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
