import React, { Fragment, useEffect, useState } from "react";
import BookInformation from "./BookInformation";

function Book(props) {
  return (
    <Fragment>
      <div>
        <BookInformation></BookInformation>
      </div>
    </Fragment>
  );
}

export default Book;
