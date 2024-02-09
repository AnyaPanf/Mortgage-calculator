import { getUnitByValue } from './getUnitByValue'

export const Input = ({ title, options, minRange, maxRange, unit, setValue, value }) => {
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  console.log(value);
  return (
    <div className='calculate'>
      <p className='calculate__title'>{title}</p>
      <div className='calculate__input'>
        <input type='text' className='calculate__text' onInput={handleInput} value={value}></input>
        <p className='calculate__parameter'>{getUnitByValue(value, unit)}</p>
      </div>
      <input type='range' min={minRange} max={maxRange} onInput={handleInput} value={value} className='calculate__range'></input>
      <div className='calculate__btns'>
        {options.map((option) => (
          <button
            type='button'
            onClick={() => setValue(option)}
            className={value === option ? 'calculate__btn-clicked' : 'calculate__btn'}>
            {option} {getUnitByValue(option, unit)}
          </button>
        ))}
      </div>
    </div>
  )
}
