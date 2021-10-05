import SingleBook from './SingleBook'
import {Container, Row, Col} from 'react-bootstrap'


const BookList = (props) => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-space-between">
          {
             props.books.map((b) => (
              <Col xs={3} className="my-5">
                <SingleBook book={b} />
              </Col>
             ))
          }
        </Row>
      </Container>
    </>
  )
}

export default BookList