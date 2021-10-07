import './LibraryPage.css';
import { Route, Redirect } from 'react-router-dom';
import BookList from '../book-list/BookList';
import BookDetails from '../book-details/BookDetails';
import BookForm from '../../components/book-form/BookForm';
import { /* initBooks, startBooksLoading, endBooksLoading, booksError, */ fetchBooks, refreshBooksStart } from '../../redux/library/library.action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/modal/Modal';

// import axios from 'axios';

// const FETCH_BOOKS_URL = 'http://localhost:3002/books';

function LibraryPage(props) {
  const { match: { path } } = props; // BrowserRouter from react router dom injects match, location, history props to every route

  const isBooksLoading = useSelector(rootState => rootState.libraryReducer.isBooksLoading);
  const isBooksError = useSelector(rootState => rootState.libraryReducer.isBooksError);
  const isCreateBookInProgress = useSelector(rootState => rootState.libraryReducer.isCreateBookInProgress);

  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (isCreateBookInProgress) {
      setIsVisible(false);
    }
  }, [isCreateBookInProgress])

  /* useEffect(() => {
    const fetchBooks = async () => {
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

    dispatch(startBooksLoading());
    fetchBooks();
  }, [dispatch]) */

  return (
    <div>
      <h2>Welcome to the world of books!</h2>
      <button onClick={() => dispatch(refreshBooksStart())}>Refresh</button>
      <div class="add-button-container">
        <button onClick={() => setIsVisible(true)}>Add a book</button>
        <Modal isVisible={isCreateBookInProgress || isVisible} onClose={() => setIsVisible(false)}>
          <BookForm/>
        </Modal>
      </div>

      <Route exact path={path}>
        <Redirect to={`${path}/book-list`}/>
      </Route>

      {
        isBooksError && (
          <div>
            Something went wrong. Please try again later
          </div>
        )
      }

      {
        isBooksLoading ? <p>Loading.....</p> : (
          <>
            <Route path={`${path}/book-list`} component={BookList}/>
            <Route path={`${path}/book-details/:bookId`} component={BookDetails}/>
          </>
        )
      }
    </div>
  )
}

export default LibraryPage;