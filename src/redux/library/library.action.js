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