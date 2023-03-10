import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";

const url =
  "https://book-app-2f931-default-rtdb.europe-west1.firebasedatabase.app/books.json";

const bookReducer = (state, action) => {
  if (action.type === "FETCH_BOOKS") {
    return { ...state, books: [...action.payload], error: null };
  }

  if (action.type === "NEW_INPUT") {
    return {
      ...state,
      enteredValue: { ...state.enteredValue, ...action.payload },
    };
  }

  if (action.type === "ACTIVATE_BLUR") {
    return { ...state, blur: { title: true, author: true, description: true } };
  }

  if (action.type === "BLUR") {
    return { ...state, blur: { ...state.blur, ...action.payload } };
  }

  if (action.type === "ADD_NEW_BOOK") {
    const sendData = async () => {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: { "Content-type": "Aplication/json" },
      });
    };
    sendData();

    return {
      ...state,
      books: [...state.books, { ...action.payload }],
    };
  }

  if (action.type === "REMOVE_BOOK") {
    const updatedBooks = state.books.filter(
      (book) => book.id !== action.payload
    );

    return { ...state, books: [...updatedBooks] };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      enteredValue: { title: "", author: "", description: "" },
      blur: { title: false, author: false, description: false },
    };
  }

  if (action.type === "ERROR") {
    return { ...state, error: action.payload };
  }

  return initialState;
};

const initialState = {
  enteredValue: { title: "", author: "", description: "" },
  blur: { title: false, author: false, description: false },
  books: [],
  error: null,
};

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const fetchBooks = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      let laodedBooks = [];
      for (const key in data) {
        laodedBooks.push({
          id: key,
          title: data[key].title,
          author: data[key].author,
          description: data[key].description,
        });
      }
      dispatch({ type: "FETCH_BOOKS", payload: laodedBooks });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    dispatch({ type: "NEW_INPUT", payload: { [name]: value } });
  };

  const blurChangeHandler = (event) => {
    const name = event.target.name;

    dispatch({ type: "BLUR", payload: { [name]: true } });
  };

  const titleIsValid = state.enteredValue.title !== "";
  const titleIsInvalid = !titleIsValid && state.blur.title;

  const authorIsValid = state.enteredValue.author !== "";
  const authorIsInvalid = !authorIsValid && state.blur.author;

  const descriptionIsValid = state.enteredValue.description !== "";
  const descriptionIsInvalid = !descriptionIsValid && state.blur.description;

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "ACTIVATE_BLUR" });

    if (!titleIsValid || !authorIsValid || !descriptionIsValid) {
      dispatch({ type: "BLUR" });
      return;
    }

    const newBook = {
      id: new Date().getTime(),
      title: state.enteredValue.title,
      author: state.enteredValue.author,
      description: state.enteredValue.description,
    };

    dispatch({ type: "ADD_NEW_BOOK", payload: newBook });

    dispatch({ type: "RESET" });
  };

  const removeBook = async (bookId) => {
    await fetch(
      `https://book-app-2f931-default-rtdb.europe-west1.firebasedatabase.app/books/${bookId}.json/`,
      { method: "DELETE" }
    );

    dispatch({ type: "REMOVE_BOOK", payload: bookId });
  };

  const initial = {
    fetchBooks,
    inputChangeHandler,
    blurChangeHandler,
    submitHandler,
    enteredValue: {
      title: state.enteredValue.title,
      author: state.enteredValue.author,
      description: state.enteredValue.description,
    },
    books: state.books,
    removeBook,
    error: state.error,
    titleIsInvalid,
    authorIsInvalid,
    descriptionIsInvalid,
  };

  return (
    <GlobalContext.Provider value={initial}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
