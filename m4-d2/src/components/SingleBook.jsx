import React from 'react'
import Component from 'react'
import Card from 'react-bootstrap/Card'

class SingleBook extends React.Component {

  state = {
    selected: false,
  }

  render() {

    return (
      
      <Card style={{width: "250px"}}>
          <Card.Img variant="top" src={this.props.book.img}/>
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>

    )
  }
}

export default SingleBook