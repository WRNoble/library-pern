import React, { Fragment, useState } from "react";

function AddBookForm(props) {
  const [title, setTitle] = useState("Title");
  return (
    <Fragment>
      <h1 className="text-center mt-5">add book</h1>
      <form className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-success">Add Book</button>
      </form>
    </Fragment>
  );
}

export default AddBookForm;
