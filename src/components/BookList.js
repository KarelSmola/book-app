import React, { useContext, useEffect } from "react";
import GlobalContext from "../store/GlobalContext";
import NewBook from "./NewBook";

import classes from "./BookList.module.css";

const BookList = () => {
  const globalCtx = useContext(GlobalContext);
  const { fetchBooks } = globalCtx;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className={classes["books-container"]}>
      {globalCtx.error && <p>{globalCtx.error}</p>}
      {globalCtx.books.map((book) => (
        <NewBook
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
};

export default BookList;
