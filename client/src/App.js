import React, { Fragment } from "react";
import AddBookForm from "./components/AddBookForm";
import Library from "./components/Library";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddBookForm />
        <Library />
      </div>
    </Fragment>
  );
}

export default App;
