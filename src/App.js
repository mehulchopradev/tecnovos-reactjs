import './App.css';
import NameGenerator from './components/name-generator/NameGenerator';
import CalculatorForm from './components/calculator-form/CalculatorForm';

// React component
// JSX
function App() {
  return (
    <div className="App">
      <NameGenerator
        defaultFirst="Steve"
        defaultSecond="Jobs"
      />
      <CalculatorForm/>
    </div>
  );
}

export default App;
