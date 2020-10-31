import React, { Fragment, useState } from "react";

function EditBook({ book }) {
  console.log(book);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [published, setPublished] = useState(book.published);
  const [description, setDescription] = useState(book.description);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const body = { title, author, genre, published, description };
      const response = await fetch(
        `http://localhost:5000/update/${book.library_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteBook = async (e) => {
    e.preventDefault();
    try {
      const body = { title, author, genre, published, description };
      const response = await fetch(`http://localhost:5000/book/${book.title}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning mr-5"
        data-toggle="modal"
        data-target={`#id${book.library_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${book.library_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Book</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h5>Title</h5>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Author</h5>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Genre</h5>
              <input
                type="text"
                className="form-control"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Year Published</h5>
              <input
                type="text"
                className="form-control"
                value={published}
                onChange={(e) => setPublished(e.target.value)}
              ></input>
            </div>
            <div className="modal-body">
              <h5>Description</h5>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateBook(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => deleteBook(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditBook;
