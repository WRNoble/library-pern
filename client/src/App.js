import React, { Fragment } from "react";
import AddBookForm from "./components/AddBookForm";
import Book from "./components/Book";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddBookForm />
        <Book></Book>
      </div>
    </Fragment>
  );
}

export default App;
