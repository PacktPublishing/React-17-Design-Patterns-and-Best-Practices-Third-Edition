const Button = () => {
  const handleEvent = (event: any) => { 
    switch (event.type) { 
      case 'click': 
        console.log('clicked')
        break
     
      case 'dblclick': 
        console.log('double clicked')
        break
     
      default: 
        console.log('unhandled', event.type)
    } 
  }

  return ( 
    <button 
      onClick={handleEvent} 
      onDoubleClick={handleEvent} 
    > 
      Click me! 
    </button> 
  )
}
  
export default Button