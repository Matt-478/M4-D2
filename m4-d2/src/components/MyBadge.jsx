
import Badge from 'react-bootstrap/Badge'

const BadgeComponent = (props) => {
  return(
    <Badge variant={props.variant}>{props.text}</Badge>
    )
  }

export default BadgeComponent