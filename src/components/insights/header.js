import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

import Logo from "../../images/elevate-logo.png"

const Header = () => {
  return (
    <header>
      <Navbar className="d-block d-lg-none" id="alt-site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} width="150" height="150" alt="Elevate Learning" />
          </Navbar.Brand>
        </Link>
      </Navbar>

      <Navbar className="d-none d-lg-flex" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} width="150" height="150" alt="Elevate Learning" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item as="li" className="mx-3">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="mx-3">
              <Nav.Link href="/">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="mx-3">
              <Nav.Link href="/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="mx-3 current">
              <Nav.Link href="/insights">Insights</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="mx-3">
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
