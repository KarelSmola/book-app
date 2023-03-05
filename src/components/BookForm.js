import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

import Button from "./UI/Button";
import classes from "./BookForm.module.css";

const BookForm = () => {
  const globalCtx = useContext(GlobalContext);

  return (
    <form onSubmit={globalCtx.submitHandler} className={classes.form}>
      <div className={classes["label-container"]}>
        <label htmlFor="title" className={classes.label}>
          Title
        </label>
        <input
          className={classes.input}
          type="text"
          id="title"
          name="title"
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.title}
        />
      </div>
      <div className={classes["label-container"]}>
        <label htmlFor="author" className={classes.label}>
          Author
        </label>
        <input
          className={classes.input}
          type="text"
          id="author"
          name="author"
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.author}
        />
      </div>
      <div className={classes["label-container"]}>
        <label htmlFor="description" className={classes.label}>
          Short description
        </label>
        <textarea
          className={classes.textarea}
          type="text"
          id="description"
          name="description"
          rows="3"
          maxLength="160"
          onChange={globalCtx.inputChangeHandler}
          value={globalCtx.enteredValue.description}
        />
      </div>
      <Button type="submit" className={classes["add-button"]}>
        Add Book
      </Button>
    </form>
  );
};

export default BookForm;
