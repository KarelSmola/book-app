import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

import classes from "./Books.module.css";

const Books = () => {
  return (
    <div className={classes.container}>
      <BookForm />
      <BookList />
    </div>
  );
};

export default Books;
