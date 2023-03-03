import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";

const NewBook = (props) => {
  const globalCtx = useContext(GlobalContext);

  return (
    <div key={props.id}>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
      <button onClick={() => globalCtx.removeBook(props.id)}>
        Remove Book
      </button>
    </div>
  );
};

export default NewBook;
