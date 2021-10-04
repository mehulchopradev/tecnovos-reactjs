import './BookDetails.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import axios from 'axios';

import { /* updateBook ,*/ fetchBook } from '../../redux/library/library.action';

// TODO: manage loading and error states like done in LibraryPage
function BookDetails() {
  const params = useParams();
  const { bookId } = params;
  const book = useSelector(rootState => rootState.libraryReducer.books.find(book => book.id === bookId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, [dispatch, bookId]);

  /* useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axios.get(`http://localhost:3002/books/${bookId}`);
      dispatch(updateBook(data));
    }

    fetchBook();
  }, [dispatch, bookId]); */

  if (!book) {
    return null;
  }

  return (
    <div>
      <h2>{book.title} ({book.id})</h2>
      <p>
        Price: <i>{book.price}</i>
      </p>
      <p>
        Pages: <i>{book.pages}</i>
      </p>
    </div>
  )
}

export default BookDetails;