import React, { Fragment, Component } from "react";

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

  render() {
    const books = this.state.books;
    let error = this.state.error;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Fragment>
          <div>
            {books.map((book) => (
              <div>
                <h2>{book.title}</h2>
              </div>
            ))}
          </div>
        </Fragment>
      );
    }
  }
}

export default BookInformation;
