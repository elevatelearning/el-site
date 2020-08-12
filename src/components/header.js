import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

import Logo from "../images/elevate-logo.png"

const Header = ({ pageInfo }) => {
  return (
    <header>
      <Navbar variant="dark" expand="lg" fixed="top" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} width="150" height="150" alt="Elevate Learning" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="#services">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </header>
  )
}

export default Header
