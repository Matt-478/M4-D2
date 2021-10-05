import ListGroup from 'react-bootstrap/ListGroup'

const CommentList = (props) => {
  return (
    <ListGroup>
      {
        props.commentsToShow.map(com => {
          return <ListGroup.Item key={com._id} style={{color:"black"}}>
            {console.log(com)}
            {com.comment}
            </ListGroup.Item>
        })
      }
    </ListGroup>
  )
}

export default CommentList