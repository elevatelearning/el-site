import React from "react"
import { Link } from "gatsby"

import { Col, Container, Nav, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <Container fluid className="services-wrapper p-5" id="services">
      <h1 className="text-center">Our Services</h1>
      <Row noGutters>
        <Col>
          <Nav justify variant="pills" defaultActiveKey="/home" as="ul" className="mt-5">
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
              <h3>Learning Needs Analysis</h3>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
              <h3>Programme Design &amp; Development</h3>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
              <h3>Course &amp; Content Development</h3>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-4"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
              <h3>e-Learning Strategy &amp; Implementation</h3>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-5"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
              <h3>Facilitation Training</h3>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              The key to instilling a culture of lifelong learning is to curate and personalise flexible learning experiences. By gaining
              an individual understanding of each individual’s baseline and desired skills and knowledge, as well as preferred learning
              styles and the needs of the business, you’ll be in a better position meet those needs.
						</p>
          </blockquote>
        </Col>
      </Row>
      <Row noGutters>
        <Col className="text-center">
          <Link to="/" className="btn btn-outline-elevate btn-xl mt-5 link-no-style">About Us</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
