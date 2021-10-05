import React from 'react'
import Card from 'react-bootstrap/Card'

const SingleBook = (props) => {
  console.log(props.book)
  return (

        <Card style={{width: "250px"}}>
          <Card.Img variant="top" src={props.book.img}/>
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
          </Card.Body>
        </Card>

  )
}

export default SingleBook