import React from "react"

import { Col, Container, Row } from "react-bootstrap"

import Header from "../header"
import Footer from "../footer"

const Layout = ({ location, title, children }) => {
  return (
    <main>
      <Header></Header>
      <Container fluid className="insights-wrapper mt-7 mt-lg-8 py-6" id="blog">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default Layout
