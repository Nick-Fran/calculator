import './Keyboard.css'

interface IKeyboard {
  onPress: (updated: string, clear?: boolean) => void;
  onCalculate: () => void
}
const Keyboard = ({ onCalculate, onPress }: IKeyboard) => {

  return (
    <div className='calculator-keyboard'>
      <button className='grid-item-operator' onClick={() => onPress('+')}>+</button>
      <button className='grid-item-operator' onClick={() => onPress('-')}>-</button>
      <button className='grid-item-operator' onClick={() => onPress('*')}>*</button>
      <button className='grid-item-operator' onClick={() => onPress('/')}>/</button>
      <button className='grid-item-number' onClick={() => onPress('7')}>7</button>
      <button className='grid-item-number' onClick={() => onPress('8')}>8</button>
      <button className='grid-item-number' onClick={() => onPress('9')}>9</button>
      <button className='grid-item-calc' onClick={() => onCalculate()}>=</button>
      <button className='grid-item-number' onClick={() => onPress('4')}>4</button>
      <button className='grid-item-number' onClick={() => onPress('5')}>5</button>
      <button className='grid-item-number' onClick={() => onPress('6')}>6</button>
      <button className='grid-item-number' onClick={() => onPress('1')}>1</button>
      <button className='grid-item-number' onClick={() => onPress('2')}>2</button>
      <button className='grid-item-number' onClick={() => onPress('3')}>3</button>
      <button className='grid-item-number' onClick={() => onPress('', true)}>C</button>
      <button className='grid-item-number' onClick={() => onPress('0')}>0</button>
      <button className='grid-item-number'>.</button>
    </div >
  )
}

export default Keyboard;
