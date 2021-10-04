import {Container, Row} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'


const MyFooter = () => {
  return(
    <Container fluid >
      <Row>
        <Col className="bg-info py-5">Just a Footer</Col>
      </Row>
    </Container>
  )
}

export default MyFooter