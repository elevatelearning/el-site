import React from "react"

import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Services = () => {
  return (
    <Container fluid className="services-wrapper p-5" id="services">
      <h1 className="text-center">Our Services</h1>
      <Tab.Container defaultActiveKey="first" id="tabs">
        <Row noGutters>
          <Col>
            <Nav justify variant="pills" as="ul" className="mt-5">
              <Nav.Item as="li">
                <Nav.Link eventKey="first"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
                <h3>Learning Needs Analysis</h3>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="second"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
                <h3>Programme Design &amp; Development</h3>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="third"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
                <h3>Course &amp; Content Development</h3>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
                <h3>e-Learning Strategy &amp; Implementation</h3>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faGraduationCap} size="5x" /></Nav.Link>
                <h3>Facilitation Training</h3>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <blockquote className="blockquote text-center">
                  <p class="mb-0">
                    The key to instilling a culture of lifelong learning is to curate and personalise flexible learning experiences. By gaining
                    an individual understanding of each individual’s baseline and desired skills and knowledge, as well as preferred learning
                    styles and the needs of the business, you’ll be in a better position meet those needs.
                  </p>
                </blockquote>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <blockquote className="blockquote text-center">
                  <p class="mb-0">
                    We design interactive, user-centered learning programmes and academies that respond to the needs of your organisation. We
                    partner with you to design a curriculum that embeds competency-based learning objectives that are linked to your organisational
                    goals and the development needs of your teams or students.
                  </p>
                </blockquote>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <blockquote className="blockquote text-center">
                  <p class="mb-0">
                    We’ll design, develop or transform your content into experiential, memorable and practical online and face-to-face learning
                    experiences. By using integrated learner management systems and other digital technologies, learners are taken on
                    a journey in which they move from acquisition to application, to adoption of new skills and competencies.
                  </p>
                </blockquote>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <blockquote className="blockquote text-center">
                  <p class="mb-0">
                    We’ll work with you to design and implement a learner management system and an accompanying change management and communication
                    strategy that speaks to your organisational goals and needs, and which allows you to continuously track and monitor
                    engagement and performance.
                  </p>
                </blockquote>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <blockquote className="blockquote text-center">
                  <p class="mb-0">
                    We conduct train-the-trainer, facilitation and blended learning workshops and courses to ensure your team is ready to deliver
                    content in an engaging and memorable way. By combining face-to-face workshops with online learning modules and individualised
                    coaching support, we’ll empower your team to deliver in-house content and programmes confidently and effectively.
                  </p>
                </blockquote>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Row noGutters>
        <Col className="text-center">
          <Button variant="outline-primary" onClick={() => scrollTo("#about")} className="btn btn-xl mt-5 link-no-style">About Us</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
