import React, { Fragment, useEffect, useState } from "react";
import BookInformation from "./BookInformation";

function Book(props) {
  return (
    <Fragment>
      <div>
        <h1 className="text-center mt-5">LIBRARY</h1>
        <BookInformation></BookInformation>
      </div>
    </Fragment>
  );
}

export default Book;
