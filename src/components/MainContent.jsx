import { useEffect, useState } from 'react'
import {
  Col,
  Container,
  Row,
  Card,
  Image,
  InputGroup,
  Form,
} from 'react-bootstrap'

const MainContent = (props) => {
  const [query, setQuery] = useState('')
  const [meteoData, setMeteoData] = useState({})

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=8f6cfdee89828a762d2fc0e9157104af`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella richiesta')
        }
      })
      .then((data) => {
        console.log('dati ricevuti: ', data)
        setMeteoData(data)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  useEffect(() => {
    getData()
  }, [query])

  return (
    <Container className='p-3'>
      <Container fluid className='p-2'>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <InputGroup className='mb-3'>
              <Form.Control
                placeholder='Saerch location'
                aria-label='Search Location'
                aria-describedby='basic-addon2'
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Row className='justify-content-center'>
        <Col sm={12} md={8} lg={6}>
          <div className='custom-opacity'>
            {meteoData && (
              <Card className='p-3 bg-transparent text-light'>
                <Card.Title>{meteoData.name}</Card.Title>

                <Card.Text>
                  <Image
                    src={`https://openweathermap.org/img/wn/${meteoData.weather?.[0]?.icon}@2x.png`}
                  />
                  <p>Cloudiness {meteoData.clouds?.all} %</p>
                </Card.Text>
                <Card.Text>
                  Feels Like Temperature: {meteoData.main?.feels_like} &deg; C
                </Card.Text>
                <Card.Text>
                  <span>
                    Temp Max {Math.ceil(meteoData.main?.temp_max)} &deg; C
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    Temp Min {Math.ceil(meteoData.main?.temp_min)} &deg; C
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <i className='bi bi-wind me-2'></i>
                    {meteoData.wind?.speed} -
                    <i class='bi bi-droplet-fill mx-2'></i>
                    {meteoData.main?.humidity}
                  </span>
                </Card.Text>
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MainContent
