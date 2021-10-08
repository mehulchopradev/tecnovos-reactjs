import LIBRARY_ACTION_TYPES from "./library.types";

import { initBooks, endBooksLoading, newBook, endCreateBook } from "./library.action";

import { takeEvery, takeLatest, put } from 'redux-saga/effects';

import axios from "axios";

const FETCH_BOOKS_URL = 'http://localhost:3002/books';


export function* fetchBooksAsync() {
  try {
    const { data: books } = yield axios.get(FETCH_BOOKS_URL);
    yield put(initBooks(books));
  } catch (err) {
    console.log(err);
    // dispatch(booksError(err));
  } finally {
    yield put(endBooksLoading());
  }
}

export function* refreshBooksStart() {
  // listen for the redux action REFRESH_BOOKS_START after which want to make an asynchronous call to fetch the books
  yield takeLatest(LIBRARY_ACTION_TYPES.REFRESH_BOOKS_START, fetchBooksAsync);
}


// worker saga
export function* postBookAsync({ data: book }) {
  try {
    const { data } = yield axios.post('http://localhost:3002/books', book);
    yield put(newBook(data));
  } catch (err) {
    // TODO: dispatch an error action object
    // dispatch()
  } finally {
    yield put(endCreateBook());
  }
}

// listener saga
export function* createBookStart() {
  yield takeEvery(LIBRARY_ACTION_TYPES.START_CREATE_BOOK, postBookAsync);
}