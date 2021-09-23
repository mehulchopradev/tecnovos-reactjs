import './LiveAlgebraicExpression.css';

function LiveAlgebraicExpression(props) {
  const { firstNo, secondNo, operation, ans } = props;
  return (
    <div className='live-algebraic-expression'>
      <h2>Live algebraic expression</h2>
      <span data-testid="expression">{ans ? `${firstNo} ${operation} ${secondNo} = ${ans}`: null}</span>
    </div>
  )
}

export default LiveAlgebraicExpression;