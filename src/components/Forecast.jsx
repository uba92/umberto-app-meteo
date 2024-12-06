import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Forecast = () => {
  const params = useParams()
  const getForecast = () => {
    fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${params.city},us&mode=xml&appid=8f6cfdee89828a762d2fc0e9157104af`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((data) => {
        console.log('forecast', data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  useEffect(() => {
    getForecast()
  })
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={12} md={8} lg={6}>
          FORECAST TEST
        </Col>
      </Row>
    </Container>
  )
}

export default Forecast
