import React from "react";
const GlobalContext = React.createContext({
  fetchBooks: () => {},
  enteredValue: {},
  books: [],
  removeBook: () => {},
  error: null
});

export default GlobalContext;
