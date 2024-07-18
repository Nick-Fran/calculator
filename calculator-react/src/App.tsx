import { useState } from 'react';
import { Display, Keyboard } from './components';

import { DECIMAL_LENGTH, MATH_OPERATOR, MATH_OPERATORS } from './constants';
import './App.css'

function App() {
  const [expression, setExpression] = useState('0');

  const onCalculateExpressionHandler = () => {
    let result = 0;
    const mathOperator = MATH_OPERATORS.filter(item => expression.includes(item))[0]

    const [num1Str, num2Str] = expression.split(mathOperator);

    const num1 = parseInt(num1Str, 10)
    const num2 = parseInt(num2Str, 10)

    switch (mathOperator) {
      case MATH_OPERATOR.add:
        {
          result = num1 + num2;
          break;
        }
      case MATH_OPERATOR.subtract:
        {
          result = num1 - num2;
          break;
        }
      case MATH_OPERATOR.multiply:
        {
          result = num1 * num2;
          break;
        }
      case MATH_OPERATOR.divide:
        {
          if (num2 !== 0) {
            result = num1 / num2;
            const [, fraction] = result.toString().split(".")
            if (fraction) {
              if (fraction.length > DECIMAL_LENGTH) {
                result = parseFloat(result.toFixed(DECIMAL_LENGTH))
              }
              else {
                result = parseFloat(result.toFixed(fraction.length))
              }
            }
          }
          else {
            result = NaN;
          }
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
