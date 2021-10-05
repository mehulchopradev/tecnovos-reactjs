import LIBRARY_ACTION_TYPES from "./library.types"
import axios from "axios"

const FETCH_BOOKS_URL = 'http://localhost:3002/books';

const initBooks = (books) => {
  return {
    type: LIBRARY_ACTION_TYPES.INIT_BOOKS,
    data: books
  }
}

const startBooksLoading = () => {
  return {
    type: LIBRARY_ACTION_TYPES.START_BOOKS_LOADING
  }
}

const endBooksLoading = () => {
  return {
    type: LIBRARY_ACTION_TYPES.END_BOOKS_LOADING
  }
}

const booksError = (err) => {
  return {
    type: LIBRARY_ACTION_TYPES.BOOKS_ERROR,
    data: err
  }
}

const updateBook = (book) => {
  return {
    type: LIBRARY_ACTION_TYPES.UPDATE_BOOK,
    data: book
  }
}

const startCreateBook = () => {
  return {
    type: LIBRARY_ACTION_TYPES.START_CREATE_BOOK
  }
}

const endCreateBook = () => {
  return {
    type: LIBRARY_ACTION_TYPES.END_CREATE_BOOK
  }
}

const newBook = (book) => {
  return {
    type: LIBRARY_ACTION_TYPES.NEW_BOOK,
    data: book
  }
}

// thunk action creator
export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch(startBooksLoading());
    try {
      const { data: books } = await axios.get(FETCH_BOOKS_URL);
      dispatch(initBooks(books));
    } catch (err) {
      console.log(err);
      dispatch(booksError(err));
    } finally {
      dispatch(endBooksLoading());
    }
  }
}

// TODO: manage the loading and error states for a particular book
export const fetchBook = (bookId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3002/books/${bookId}`);
    dispatch(updateBook(data));
  }
}

export const createBookAsync = (book) => {
  return async (dispatch) => {
    dispatch(startCreateBook());
    try {
      const { data } = await axios.post('http://localhost:3002/books', book);
      dispatch(newBook(data));
    } catch (err) {
      // TODO: dispatch an error action object
      // dispatch()
    } finally {
      dispatch(endCreateBook());
    }
  }
}