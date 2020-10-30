import React, { Fragment, Component } from "react";
import EditBook from "./EditBook";

class BookInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      selected: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  // handleDelete = (book) => {
  //   this.setState((state) => {
  //     return {
  //       books: state.books.filter((books) => books.book !== book),
  //     };
  //   });
  // };

  render() {
    const books = this.state.books;
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          {books.map((book, item) => (
            <Fragment key={item}>
              <div>
                <h3>{book.title}</h3>
              </div>
              <div>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <p>{book.published}</p>
                <p>{book.description}</p>
                <EditBook />
                <button
                  className="btn btn-danger"
                  // onClick={this.props.handleDelete.bind(this, item)}
                >
                  Delete
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      );
    }
  }
}

export default BookInformation;
