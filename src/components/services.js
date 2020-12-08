import React from "react"

import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      digitalNeedsAnalysis: file(
        absolutePath: { regex: "/digital-needs-analysis.png/" }
      ) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      learningDevelopmentStrategy: file(
        absolutePath: { regex: "/learning-development-strategy.png/" }
      ) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      learningDesignContentDevelopment: file(
        absolutePath: { regex: "/learning-design-content-development.png/" }
      ) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      digitalLearningSolutions: file(
        absolutePath: { regex: "/digital-learning-solutions.png/" }
      ) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      learningExperienceDesignTraining: file(
        absolutePath: { regex: "/communication-change-management.png/" }
      ) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container fluid className="services-wrapper py-8" id="services">
      <h1 className="text-center pb-5">Our Services</h1>
      <Tab.Container defaultActiveKey="tab-1" id="service-items">
        <Row className="d-flex justify-content-center">
          <Col xl="8">
            <Nav justify variant="pills" as="ul">
              <Nav.Item as="li" key="tab-1">
                <Nav.Link eventKey="tab-1">
                  <Image
                    fixed={data.digitalNeedsAnalysis.childImageSharp.fixed}
                    alt="Digital Needs Analysis"
                  />
                  <span>Digital Needs Analysis</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" key="tab-2">
                <Nav.Link eventKey="tab-2">
                  <Image
                    fixed={
                      data.learningDevelopmentStrategy.childImageSharp.fixed
                    }
                    alt="Learning & Development Strategy"
                  />
                  <span>Learning & Development Strategy</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" key="tab-3">
                <Nav.Link eventKey="tab-3">
                  <Image
                    fixed={
                      data.learningDesignContentDevelopment.childImageSharp
                        .fixed
                    }
                    alt="Learning Design & Content Development"
                  />
                  <span>Learning Design & Content Development</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" key="tab-4">
                <Nav.Link eventKey="tab-4">
                  <Image
                    fixed={data.digitalLearningSolutions.childImageSharp.fixed}
                    alt="Digital Learning Solutions"
                  />
                  <span>Digital Learning Solutions</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" key="tab-5">
                <Nav.Link eventKey="tab-5">
                  <Image
                    fixed={
                      data.learningExperienceDesignTraining.childImageSharp
                        .fixed
                    }
                    alt="Learning Experience Design Training"
                  />
                  <span>Learning Experience Design Training</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl="8">
            <Tab.Content>
              <Tab.Pane eventKey="tab-1" key="tab-1" className="text-center">
                <p>
                  Leading digital change is more than kist purchasing an online
                  learning platform or creating digital course content. It
                  requires leaders who have a vision of how to transform their
                  organisations to thrive in a digital world.
                </p>
                <p>
                  We conduct research into global and local industry-specific
                  trends to measure your current and desired digital maturity.
                  By aligning your unique user journeys to your organisational
                  objectives, we’ll be able to identify opportunities to
                  implement changes in the short, medium and long-term.
                </p>
                <p>
                  We’ll then design a digital roadmap that integrates your
                  context and opportunities to the systems, programmes and
                  communication requirements to achieve your outcomes.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-2" key="tab-2" className="text-center">
                <p>
                  The key to instilling a culture of lifelong learning is to
                  curate and personalise flexible learning experiences which are
                  relevant, practical and goal-oriented. By gaining an
                  understanding of individual baseline and desired skills and
                  knowledge, as well as preferred learning styles and the needs
                  of your organisation, you’ll be in a better position to meet
                  those needs.
                </p>
                <p>
                  We’ll help you conduct team and organisation-wide learning
                  needs analyses, and design and implement a development
                  strategy that speaks to your strategic objectives and
                  individuals’ personal and professional goals.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-3" key="tab-3" className="text-center">
                <p>
                  We co-create interactive, user-centered learning programmes
                  that speak to the needs of your organisation and your teams.
                  We also design, develop or transform your existing content
                  into highly relevant and impactful online and blended learning
                  experiences.{" "}
                </p>
                <p>
                  We embed learning experience design principles that are
                  goal-oriented, user-centred and design focused, and which
                  respond to the unique needs of your learners in a practical
                  and experiential way.
                </p>
                <p>
                  By continuously closing the feedback loop, our approach to
                  learning experience design improves individual performance,
                  productivity and engagement, moving you one step closer to
                  achieving your organisational and development goals.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-4" key="tab-4" className="text-center">
                <p>
                  By using integrated learner management systems and other
                  digital technologies, learners are taken on a journey in which
                  they move from acquisition to application, to adoption of new
                  skills and behaviours, elevating their understanding and
                  experience of the world.
                </p>
                <p>
                  We have extensive experience implementing different learning
                  solutions, and can help you design and implement a learner
                  management system and social learning tools that speaks to
                  your organisational goals and needs, allowing you to
                  continuously track and monitor engagement and performance, and
                  intentionally measure your return on investment.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-5" key="tab-5" className="text-center">
                <p>
                  Learning Experience Design (LXD) is a relatively new field of
                  learning sciences that combines user experience design and
                  adult learning principles to create experiences that are
                  user-centered, goal-oriented and design-focused.{" "}
                </p>
                <p>
                  We have many years’ experience conducting and facilitating
                  learning experience design workshop and online courses. We
                  empower teams with the skills and confidence to create
                  effective learning strategies and deliver learning experiences
                  in an engaging and memorable way.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Row noGutters>
        <Col className="text-center">
          <Button
            variant="outline-primary"
            onClick={() => scrollTo("#about")}
            className="btn btn-xl mt-5 link-no-style"
          >
            About Us
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
