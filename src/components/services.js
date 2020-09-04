import React from "react"

import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Services = () => {
  const SERVICES = [
    {
      heading: "Learning Needs Analysis",
      description: "The key to instilling a culture of lifelong learning is to curate and personalise flexible learning experiences. By gaining an individual understanding of each individual’s baseline and desired skills and knowledge, as well as preferred learning styles and the needs of the business, you’ll be in a better position meet those needs.",
      eventKey: "first"
    },
    {
      heading: "Programme Design & Development",
      description: "We design interactive, user-centered learning programmes and academies that respond to the needs of your organisation. We partner with you to design a curriculum that embeds competency-based learning objectives that are linked to your organisational goals and the development needs of your teams or students.",
      eventKey: "second"
    },
    {
      heading: "Course & Content Development",
      description: "We’ll design, develop or transform your content into experiential, memorable and practical online and face-to-face learning experiences. By using integrated learner management systems and other digital technologies, learners are taken on a journey in which they move from acquisition to application, to adoption of new skills and competencies.",
      eventKey: "third"
    },
    {
      heading: "e-Learning Strategy & Implementation",
      description: "We’ll work with you to design and implement a learner management system and an accompanying change management and communication strategy that speaks to your organisational goals and needs, and which allows you to continuously track and monitor engagement and performance.",
      eventKey: "fourth"
    },
    {
      heading: "Facilitation Training",
      description: "We conduct train-the-trainer, facilitation and blended learning workshops and courses to ensure your team is ready to deliver content in an engaging and memorable way. By combining face-to-face workshops with online learning modules and individualised coaching support, we’ll empower your team to deliver in-house content and programmes confidently and effectively.",
      eventKey: "fifth"
    }
  ]

  const [services] = React.useState(SERVICES);

  return (
    <Container fluid className="services-wrapper d-none d-lg-block p-5" id="services">
      <h1 className="text-center">Our Services</h1>
      <Tab.Container defaultActiveKey="first" id="service-items">
        <Row noGutters>
          <Col lg={{ span: 10, offset: 1 }}>
            <Nav justify variant="pills" as="ul" className="mt-5">
              {services.map((service) =>
                <Nav.Item as="li" key={service.eventKey}>
                  <Nav.Link eventKey={service.eventKey}>
                    <FontAwesomeIcon icon={faGraduationCap} size="5x" />
                    <h3>{service.heading}</h3>
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Col>
        </Row>
        <Row noGutters>
          <Col lg={{ span: 10, offset: 1 }}>
            <Tab.Content>
              {services.map((service) =>
                <Tab.Pane eventKey={service.eventKey} key={service.eventKey}>
                  <blockquote className="blockquote text-center">
                    <p className="mb-0">{service.description}</p>
                  </blockquote>
                </Tab.Pane>
              )}
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
