import { useRef } from 'react'

const Focus = () => {
  const inputRef = useRef<any>(null)

  const handleClick = () => { 
    inputRef.current.focus()
  }

  return ( 
    <> 
      <input 
        type="text" 
        ref={inputRef} 
      /> 
      <button onClick={handleClick}>Set Focus</button> 
    </> 
  )
}

export default Focus