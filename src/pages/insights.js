import React from "react"

import { Col, Container, Row } from "react-bootstrap"

import Articles from "../components/articles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Insights = () => {
  return (
    <Layout>
      <SEO title="Our Insights" />
      <Container fluid className="insights-wrapper" id="insights">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1>New Insights</h1>
            <p>
              A collection of insights about our people, our capabilities, our
              research, and the ever-changing face of our firm.
            </p>
            <Articles />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Insights
