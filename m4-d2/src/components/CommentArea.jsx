import React from 'react'

class CommentArea extends React.Component {

  state = {
    comments: []
  }

  componentDidMount = async() => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRjNzc2NmZkZGUyZjAwMTVlZjQ5NjUiLCJpYXQiOjE2MzI0MDEyNTQsImV4cCI6MTYzMzYxMDg1NH0.VMukG9Igd9jOg79SsFCMjaiM1E8IS9mBxfixDgDdhgM'
        }
      })
      console.log(response)
      
      let comments = await response.json()
      this.setState({comments: comments})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return(
      <>
        {/* <CommentList comments={}/> */}
      </>
    )
  }
}

export default CommentArea