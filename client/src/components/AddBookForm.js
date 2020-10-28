import React, { Fragment, useState } from "react";

function AddBookForm(props) {
  const [title, setTitle] = useState("Title");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { title };
      const response = await fetch("http://localhost:5000/addbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">add book</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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
