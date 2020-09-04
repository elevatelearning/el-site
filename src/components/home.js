import React from "react"

import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap"
import scrollTo from "gatsby-plugin-smoothscroll"

const Home = () => {
  return (
    <Container fluid className="intro-wrapper" id="home">
      <Row noGutters>
        <Col lg={{ span: 10, offset: 1 }}>
          <Jumbotron className="pt-lg-10">
            <h1>Customised, User-Centered<br />Learning Experiences</h1>
            <p className="lead text-justify mt-3">
              Elevate Learning is a full-service learning design consultancy. We partner with you to design and implement online and blended
              learning experiences, organisation-specific learning programmes, and experiential content and workshops.
            </p>
            <Button variant="outline-primary" onClick={() => scrollTo("#services")} className="btn btn-xl d-none d-lg-block mt-5">Learn more</Button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
