import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Welcome = () => {
  return (
      <Container className="mt-5 mb-0 text-left">
        <Jumbotron >
          <h1>Bookstore / Strivestore</h1>
          <p>
            Well isn't this the best place to read a book? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </Jumbotron>
      </Container>
  )
}

export default Welcome