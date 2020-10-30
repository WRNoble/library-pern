import React, { Fragment, useState } from "react";

function EditBook(props) {
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [genre, setGenre] = useState(props.genre);
  const [published, setPublished] = useState(props.published);
  const [description, setDescription] = useState(props.description);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning mr-5"
        data-toggle="modal"
        data-target={`#id${props.props_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${props.props_id}`}>
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
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
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
