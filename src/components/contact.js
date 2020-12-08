import React from "react"

import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import ContactForm from "../components/contact-form"

const Contact = () => {
  return (
    <Container fluid className="contact-wrapper py-8" id="contact">
      <h1 className="text-center pb-5">Get In Touch</h1>
      <Row className="d-flex justify-content-center">
        <Col xl="4">
          <ContactForm></ContactForm>
        </Col>
        <Col xl="4">
          <blockquote className="blockquote text-center mt-5">
            <p className="mb-0">
              Our approach to creating effective, memorable learning experiences starts with you. If you're interested in elevating your
              learning, designing a curriculum, developing an e- learning strategy or online course, or implementing an online learning
              platform in your organisation, get in touch.
						</p>
          </blockquote>
          <address className="text-center mt-5">
            <h3>
              <FontAwesomeIcon icon={faCompass} size="sm" />
              <span>Cape Town - South Africa</span>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <span>+27 84 677 4342</span>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
              <a href="mailto:hello@elevatelearning.org">hello@elevatelearning.org</a>
            </h3>
          </address>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
