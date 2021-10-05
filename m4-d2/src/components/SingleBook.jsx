import React from 'react'
import Card from 'react-bootstrap/Card'
import {Container,Row} from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const SingleBook = (props) => {
  return (
    <Container>
      <Row>
        <Col md={3} className="my-5"  >

        <Card style={{width: "300px"}} className="d-flex justify-content-center">
          <Card.Img variant="top" src={props.books.img}/>
          <Card.Body>
            <Card.Title>{props.books.title}</Card.Title>
            <Card.Text>
              {props.books.price} - {props.books.category}
            </Card.Text>
          </Card.Body>
        </Card>

        </Col>
      </Row>
    </Container>
  )
}

export default SingleBook