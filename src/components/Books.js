import React, { Fragment } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

// import classes from "./Books.module.css";

const Books = () => {
  return (
    <Fragment>
      <BookForm />
      <BookList />
    </Fragment>
  );
};

export default Books;
