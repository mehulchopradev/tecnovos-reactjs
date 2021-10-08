import { refreshBooksStart, createBookStart } from "./library/library.saga";

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    refreshBooksStart(),
    createBookStart()
  ])
}