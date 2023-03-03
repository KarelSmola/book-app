import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

import classes from "./BookForm.module.css";

const BookForm = () => {
  const globalCtx = useContext(GlobalContext);

  return (
    <form onSubmit={globalCtx.submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.title}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.author}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          rows={10}
          cols={40}
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.description}
        />
      </div>
      <button>Add Book</button>
    </form>
  );
};

export default BookForm;
