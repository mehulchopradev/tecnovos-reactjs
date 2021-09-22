import './App.css';
import NameGenerator from './components/name-generator/NameGenerator';

// React component
// JSX
function App() {
  return (
    <div className="App">
      <NameGenerator
        defaultFirst="Steve"
        defaultSecond="Jobs"
      />
    </div>
  );
}

export default App;
