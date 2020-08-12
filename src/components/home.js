import React from "react"
import { Link } from "gatsby"

import { Container, Jumbotron } from "react-bootstrap"

const Home = () => {
  return (
    <Container fluid className="intro-wrapper" id="home">
      <Jumbotron className="pt-sm-10">
        <h1>Customised, User-Centered<br />Learning Experiences</h1>
        <p className="lead text-justify mt-3">
          Elevate Learning is a full-service learning design consultancy. We partner with you to design and implement online and blended
          learning experiences, organisation-specific learning programmes, and experiential content and workshops.
        </p>
        <Link to="/" className="btn btn-outline-elevate btn-xl mt-5 link-no-style">Learn more</Link>
      </Jumbotron>
    </Container>
  )
}

export default Home
