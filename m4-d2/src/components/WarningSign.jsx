import React from 'react'
import Alert from 'react-bootstrap/Alert'

const WarningSign = (props) => {
  return(
    <Alert variant="secondary">{props.string}</Alert>
  )
}

export default WarningSign