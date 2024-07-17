import './Keyboard.css'

const Keyboard = () => {

  return (
    <div className='calculator-keyboard'>
      <button className='grid-item-operator'>+</button>
      <button className='grid-item-operator'>-</button>
      <button className='grid-item-operator'>*</button>
      <button className='grid-item-operator'>/</button>
      <button className='grid-item-number'>7</button>
      <button className='grid-item-number'>8</button>
      <button className='grid-item-number'>9</button>
      <button className='grid-item-calc'>=</button>
      <button className='grid-item-number'>4</button>
      <button className='grid-item-number'>5</button>
      <button className='grid-item-number'>6</button>
      <button className='grid-item-number'>1</button>
      <button className='grid-item-number'>2</button>
      <button className='grid-item-number'>3</button>
      <button className='grid-item-number'>0</button>
      <button className='grid-item-number'>C</button>
      <button className='grid-item-number'>.</button>
    </div>
  )
}

export default Keyboard;
