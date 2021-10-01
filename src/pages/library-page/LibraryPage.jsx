import './LibraryPage.css';
import { Route, Redirect } from 'react-router-dom';
import BookList from '../book-list/BookList';
import BookDetails from '../book-details/BookDetails';

function LibraryPage(props) {
  const { match: { path } } = props; // BrowserRouter from react router dom injects match, location, history props to every route

  return (
    <div>
      <h2>Welcome to the world of books!</h2>
      <div>
        <button>Add a book</button>
      </div>
      <Route exact path={path}>
        <Redirect to={`${path}/book-list`}/>
      </Route>

      <Route path={`${path}/book-list`} component={BookList}/>
      <Route path={`${path}/book-details`} component={BookDetails}/>
    </div>
  )
}

export default LibraryPage;