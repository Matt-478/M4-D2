import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Scifi from '../scifi.json'

const LatestRelease = () => {
  return(
    <Container>
      <Row className=" d-flex justify-content-center">
        <Col md={4} className="mb-4" > 
          <Card >
            <Card.Img variant="top" src={Scifi[0].img} />
            <Card.Body>
              <Card.Title>{Scifi[0].title}</Card.Title>
              <Card.Text>
                {Scifi[0].asin} / {Scifi[0].category} / {Scifi[0].price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LatestRelease