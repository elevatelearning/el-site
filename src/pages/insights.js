import React from "react"

import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import Articles from "../components/articles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Insights = () => {
  return (
    <Layout>
      <SEO title="Our Insights" />
      <Container fluid className="insights-wrapper" id="insights">
        <Row className="justify-content-center mb-1">
          <Col md={10} lg={8}>
            <Jumbotron className="text-center mt-7 mt-lg-8">
              <h1>Featured Insights</h1>
              <p className="lead text-center mt-3">
                Our latest thinking on the issues that matter most in digital
                learning experiences.
              </p>
            </Jumbotron>
            <Articles />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Insights
