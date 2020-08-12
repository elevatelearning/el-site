import React from "react"
import { Link } from "gatsby"

import { Container, Jumbotron } from "react-bootstrap"

const About = () => {
  return (
    <Container fluid className="about-wrapper" id="about">
      <Jumbotron className="pt-sm-8">
        <h1 className="display-5">Elevated Experiential Learning</h1>
        <p>
          When you partner with Elevate Learning, our curriculum and learning design specialists, content experts, coaches and facilitators
          work with you to ensure that we design a learning programme that embeds relevant and leading-edge online learning theory
          and pedagogy.
        </p>
        <p>
          Our programme, curriculum development and learning design process is grounded by rigorous academic frameworks, and brought
          to life through experiential, practical and interactive learning.
        </p>
        <p>
          By adopting a flipped or blended classroom approach to learning, you're ensured that new knowledge is both embedded and practically
          applied. And by continuously closing the feedback loop in this way, you'll see improved individual performance, productivity
          and engagement, moving you one step closer to your organisational and development goals.
        </p>
        <Link to="/" className="btn btn-outline-elevate btn-xxl mt-5 link-no-style">Partner with Elevate</Link>
      </Jumbotron>
    </Container>
  )
}

export default About
