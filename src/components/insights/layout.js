import React from "react"

import { Col, Container, Row } from "react-bootstrap"

import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <main>
      <Header></Header>
      <Container className="insights-wrapper mt-7 mt-lg-8 py-6" id="blog">
        <Row className="justify-content-center">
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default Layout
