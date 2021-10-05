import React from 'react'
import SingleBook from './SingleBook'
import {Container, Row, Col, Form} from 'react-bootstrap'


class BookList extends React.Component {

  state = {
    query: ""
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.query}
                onChange={e => {this.setState({query: e.target.value})}}
            />
          </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-space-between">
          {
            this.props.books.filter(b => b.title.toLowerCase().includes(this.state.query)).map((b) => (
        //  this.props.books.map((b) => (
              <Col xs={3} className="my-5">
                <SingleBook book={b} />
              </Col>
             ))
          }
        </Row>
      </Container>
    )
  }
}

export default BookList