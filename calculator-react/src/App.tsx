import { Display, Keyboard } from './components';

import './App.css'
import { useState } from 'react';

function App() {
  const [expression, setExpression] = useState('0');

  const onChangeExpressionHandler = (updated: string, clear: boolean = false) => {
    if(clear){
      setExpression('0');
      return ;
    }

    if(expression !== '0'){
      setExpression(prev => `${prev}${updated}`)
    }
    else{
      setExpression(updated)
    }
  }
  return (
    <div className='calculator-wrapper'>
      <Display expression={expression} />
      <Keyboard onPress={onChangeExpressionHandler}/>
    </div>
  )
}

export default App
