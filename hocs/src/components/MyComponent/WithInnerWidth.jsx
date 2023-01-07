import { useEffect, useState } from 'react'

const withInnerWidth = (Component) => (props) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  
  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  
    return () => { // <<< componentWillUnmount
      window.removeEventListener('resize', handleResize)
    }
  }, []) // <<< componentDidMount
  
  return <Component {...props} innerWidth={innerWidth} />
}

export default withInnerWidth