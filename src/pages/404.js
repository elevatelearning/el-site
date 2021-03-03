import React from "react"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Col, Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Container
        className="not-found d-flex justify-content-center align-items-center"
        id="not-found"
      >
        <Row className="text-center">
          <Col>
            <h1>404 page not found</h1>
            <p className="mt-3">
              The page you are looking for might have been moved or renamed.
            </p>
            <p>
              We apologize for any inconvenience. Please double-check the URL or
              try the following:
            </p>
            <p>
              Visit our <AnchorLink to="/#home" title="Home" /> page or use the
              navigation menu to find what you need.
            </p>
            <p>
              <AnchorLink to="/#contact" title="Contact" /> us if you're still
              having a problem.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
