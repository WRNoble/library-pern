import React, { Fragment, useState } from "react";

function AddBookForm(props) {
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Author");
  const [genre, setGenre] = useState("Genre");
  const [published, setPublished] = useState("Published");
  const [description, setDescription] = useState("Description");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { title, author, genre, published, description };

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
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          value={published}
          onChange={(e) => setPublished(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add Book</button>
      </form>
    </Fragment>
  );
}

export default AddBookForm;
