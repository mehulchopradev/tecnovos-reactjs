import './CalculatorPage.css';
import { useSelector } from 'react-redux';
import Calculator from '../../components/calculator/Calculator';

function CalculatorPage() {
  const top3Tasks = useSelector(rootState => rootState.tasksReducer.tasks.slice(0, 3));

  return (
    <div>
      <h3>Calculate anything!</h3>
      <Calculator/>
      <h2>Top 3 tasks!</h2>
      {
        top3Tasks.length ? top3Tasks.map(task => <div key={task.id}>{task.title}</div>) : <div>No Tasks Planned</div>
      }
    </div>
  )
}

export default CalculatorPage;