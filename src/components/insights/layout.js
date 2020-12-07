import React from "react"

import Header from "../insights/header"
import Footer from "../insights/footer"

import { Col, Container, Row } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  return (
    <main>
      <Header></Header>
      <Container className="insights-wrapper" id="blog">
        <Row noGutters>
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
