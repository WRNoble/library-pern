import React, { Fragment } from "react";
import AddBookForm from "./components/AddBookForm";
import Library from "./components/Library";
import BookInformation from "./components/BookInformation";
import "./App.css";
import Book from "./components/Book";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddBookForm />
        <Library />
        <BookInformation></BookInformation>
      </div>
    </Fragment>
  );
}

export default App;
