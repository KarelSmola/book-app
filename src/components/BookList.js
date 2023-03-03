import React, { useContext, useEffect } from "react";
import GlobalContext from "../store/GlobalContext";
import NewBook from "./NewBook";

// import classes from "./BookList.module.css";

const BookList = () => {
  const globalCtx = useContext(GlobalContext);

  useEffect(() => {
    globalCtx.fetchBooks();
  }, []);

  return (
    <div>
      <button onClick={globalCtx.fetchBooks}>Fetch books</button>
      {globalCtx.error && <p>{globalCtx.error}</p>}
      {globalCtx.books.map((book) => (
        <NewBook
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
