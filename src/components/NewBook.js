import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

import Button from "./UI/Button";
import classes from "./NewBook.module.css";

const NewBook = (props) => {
  const globalCtx = useContext(GlobalContext);

  return (
    <div key={props.id} className={classes["book-container"]}>
      <h1 className={classes.title}>{props.title}</h1>
      <h3 className={classes.author}>{props.author}</h3>
      <p className={classes.description}>{props.description}</p>
      <Button
        type="submit"
        className={classes["remove-button"]}
        onClick={() => globalCtx.removeBook(props.id)}
      >
        Remove Book
      </Button>
    </div>
  );
};

export default NewBook;
