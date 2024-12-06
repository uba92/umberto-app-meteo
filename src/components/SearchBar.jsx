import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, InputGroup } from 'react-bootstrap'
// 8f6cfdee89828a762d2fc0e9157104af
// 2872ef7d1e3a044a84b9a5544f630549
const SearchBar = (props) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  useEffect(() => {
    props.getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked])

  console.log('dati per località: ', props.meteoData)
  return (
    
  )
}

export default SearchBar
