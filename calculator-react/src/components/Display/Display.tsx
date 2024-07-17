import './Display.css'

interface IDisplay{
  expression: string
}
const Display = ({expression}: IDisplay) => {

  return (
    <div className='calculator-display'>
      <label className='expression-text'>{expression}</label>
    </div>
  )
}

export default Display;
