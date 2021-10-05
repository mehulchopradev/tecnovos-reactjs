import LIBRARY_ACTION_TYPES from "./library.types";

const INITIAL_STATE = {
  books: [],
  isBooksLoading: false,
  isBooksError: false,
  isCreateBookInProgress: false,
  isCreateBookError: false
};

const libraryReducer = (currentState = INITIAL_STATE, action) => {
  const { type, data } = action;
  switch(type) {
    case LIBRARY_ACTION_TYPES.INIT_BOOKS:
      return {
        ...currentState,
        books: data
      }
    case LIBRARY_ACTION_TYPES.START_BOOKS_LOADING:
      return {
        ...currentState,
        isBooksLoading: true,
        isBooksError: false
      }
    case LIBRARY_ACTION_TYPES.END_BOOKS_LOADING:
      return {
        ...currentState,
        isBooksLoading: false
      }
    case LIBRARY_ACTION_TYPES.BOOKS_ERROR:
      return {
        ...currentState,
        isBooksError: true
      }
    case LIBRARY_ACTION_TYPES.UPDATE_BOOK:
      for (let i = 0; i < currentState.books.length; i++) {
        if (currentState.books[i].id === data.id) {
          currentState.books[i] = data;
          break;
        }
      }
      return {
        ...currentState
      }
    case LIBRARY_ACTION_TYPES.START_CREATE_BOOK:
      return {
        ...currentState,
        isCreateBookInProgress: true
      }
    case LIBRARY_ACTION_TYPES.END_CREATE_BOOK:
      return {
        ...currentState,
        isCreateBookInProgress: false
      }
    case LIBRARY_ACTION_TYPES.NEW_BOOK:
      return {
        ...currentState,
        books: currentState.books.concat([data])
      }
    default:
      return currentState;
  }
};

export default libraryReducer;