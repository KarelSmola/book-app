import React from "react";
const GlobalContext = React.createContext({
  fetchBooks: () => {},
  inputChangeHandler: () => {},
  blurChangeHandler: () => {},
  enteredValue: {},
  books: [],
  removeBook: () => {},
  error: null,
  titleIsInvalid: false,
  authorIsInvalid: false,
  description: false,
});

export default GlobalContext;
