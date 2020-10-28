import React, { Fragment } from "react";
import AddBookForm from "./components/AddBookForm";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="Container">
        <AddBookForm />
      </div>
    </Fragment>
  );
}

export default App;
