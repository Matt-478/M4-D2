import React from 'react'
import Card from 'react-bootstrap/Card'
import CommentArea from './CommentArea'

class SingleBook extends React.Component {

  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card
         onClick={() => {
          this.setState({selected: !this.state.selected})
        }}
         style={{width: "250px", border: this.state.selected ? "5px solid orange" : "none"}}
        >
          <Card.Img variant="top" src={this.props.book.img}/>
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>

        {
          this.state.selected && <CommentArea asin={this.props.book.asin}/>
        }
      </>
    )
  }
}

export default SingleBook