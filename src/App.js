import './App.css';
// import NameGenerator from './components/name-generator/NameGenerator';
// import CalculatorForm from './components/calculator-form/CalculatorForm';

// import Calculator from './components/calculator/Calculator';

import { Route, Link } from 'react-router-dom';

import CalculatorPage from './pages/calculator-page/CalculatorPage';
import TaskPage from './pages/task-page/TaskPage';
import LibraryPage from './pages/library-page/LibraryPage';

// React component
// JSX
function App() {
  return (
    <div className="App">
      <h1>Welcome to my utility application</h1>
      <div className='menu'>
        <Link to='/calc'>Calculator Utility</Link> | 
        <Link to='/todos'>Task management Utility</Link> | 
        <Link to='/library'>Library management</Link>
      </div>

      <Route path='/calc' component={CalculatorPage}/>
      <Route path='/todos' component={TaskPage}/>
      <Route path='/library' component={LibraryPage}/>
      <footer>
        Copyright 2021 All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
