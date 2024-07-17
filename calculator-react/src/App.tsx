import { useState } from 'react';
import { Display, Keyboard } from './components';

import { MATH_OPERATOR, MATH_OPERATORS } from './constants';
import './App.css'

function App() {
  const [expression, setExpression] = useState('0');

  const onCalculateExpressionHandler = () => {
    let result = 0;
    const mathOperator = MATH_OPERATORS.filter(item => expression.includes(item))[0]

    const [num1, num2] = expression.split(mathOperator);
    switch (mathOperator) {
      case MATH_OPERATOR.add:
        {
          result = parseInt(num1, 10) + parseInt(num2, 10);
          break;
        }
      case MATH_OPERATOR.subtract:
        {
          result = parseInt(num1, 10) - parseInt(num2, 10);
          break;
        }
      case MATH_OPERATOR.multiply:
        {
          result = parseInt(num1, 10) * parseInt(num2, 10);
          break;
        }
      case MATH_OPERATOR.divide:
        {
          // TODO: validate whem dem is `0`
          result = parseInt(num1, 10) / parseInt(num2, 10);
          break;
        }
    }
    setExpression(`${result}`)
  }

  const onChangeExpressionHandler = (updated: string, clear: boolean = false) => {
    if (clear) {
      setExpression('0');
      return;
    }

    if (MATH_OPERATORS.some(item => item === updated)) {
      if (MATH_OPERATORS
        .filter(item => item !== MATH_OPERATOR.subtract)
        .some(item => expression.includes(item))
      ) {
        // TODO: calculate current expression
        return;
      }

      setExpression(prev => `${prev}${updated}`)
      return
    }

    if (expression !== '0') {
      setExpression(prev => `${prev}${updated}`)
    }
    else {
      setExpression(updated)
    }
  }
  return (
    <div className='calculator-wrapper'>
      <Display expression={expression} />
      <Keyboard onPress={onChangeExpressionHandler} onCalculate={onCalculateExpressionHandler} />
    </div>
  )
}

export default App
