import { useEffect, useState } from 'react'

const withInnerWidth = (Component: any) => (props: any) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  
    return () => { // <<< This emulates the componentWillUnmount
      window.removeEventListener('resize', handleResize)
    }
  }, []) // <<< This emulates the componentDidMount
  
  return <Component {...props} innerWidth={innerWidth} />
}

export default withInnerWidth