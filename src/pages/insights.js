import React from "react"

import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareButtons from "../components/share-buttons"

const Insights = () => {
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Layout>
      <Seo title="Our Insights" />
      <Container fluid className="insights-wrapper" id="insights">
        <Row className="justify-content-center">
          <Col>
            <Jumbotron className="text-center py-4 py-md-5 py-lg-7 my-1">
              <h1>Featured Insights</h1>
              <p className="lead text-center mt-3">
                Our latest thinking, projects and insights into digital
                learning.
              </p>
              <ShareButtons
                url={url}
                title="Elevate Learning Insights"
                description="Our latest thinking on the issues that matter most in digital learning experiences."
              />
            </Jumbotron>
            <Articles />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Insights
