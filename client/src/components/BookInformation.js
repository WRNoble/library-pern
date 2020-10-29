import React, { Fragment, useEffect, useState } from "react";

function BookInformation(props) {
  const [books, setBooks] = useState([]);

  const getInformation = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  console.log(books);

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

export default BookInformation;
