import './App.css';
// import NameGenerator from './components/name-generator/NameGenerator';
// import CalculatorForm from './components/calculator-form/CalculatorForm';

// import Calculator from './components/calculator/Calculator';

import { Route, Link } from 'react-router-dom';

import { lazy, Suspense } from 'react';

/* import CalculatorPage from './pages/calculator-page/CalculatorPage';
import TaskPage from './pages/task-page/TaskPage';
import LibraryPage from './pages/library-page/LibraryPage';
import Users from './pages/users/Users'; */

const CalculatorPage = lazy(() => import('./pages/calculator-page/CalculatorPage'));
const TaskPage = lazy(() => import('./pages/task-page/TaskPage'));
const LibraryPage = lazy(() => import('./pages/library-page/LibraryPage'));
const Users = lazy(() => import('./pages/users/Users'));
const MathsSeries = lazy(() => import('./pages/maths-series/MathsSeries'));

// React component
// JSX
function App() {
  return (
    <div className="App">
      <h1>Welcome to my utility application</h1>
      <div className='menu'>
        <Link to='/calc'>Calculator Utility</Link> | 
        <Link to='/todos'>Task management Utility</Link> | 
        <Link to='/library'>Library management</Link> |
        <Link to='/users'>Users</Link> |
        <Link to='/series'>Mathematical Series</Link>
      </div>

      <Suspense fallback={<h2>Loading...Please wait</h2>}>
        <Route path='/calc' component={CalculatorPage}/>
        <Route path='/todos' component={TaskPage}/>
        <Route path='/library' component={LibraryPage}/>
        <Route path='/users' component={Users}/>
        <Route path='/series' component={MathsSeries}/>
      </Suspense>
      <footer>
        Copyright 2021 All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
