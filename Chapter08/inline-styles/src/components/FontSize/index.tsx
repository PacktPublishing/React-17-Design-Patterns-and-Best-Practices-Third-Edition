import { useState, ChangeEvent } from 'react'

const FontSize = () => {
  const [value, setValue] = useState<number>(16)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(Number(e.target.value))
  }

  return ( 
    <input 
      type="number" 
      value={value} 
      onChange={handleChange} 
      style={{ fontSize: value }} 
    /> 
  )
}

export default FontSize