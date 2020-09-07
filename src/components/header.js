import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import scrollTo from "gatsby-plugin-smoothscroll"

import Logo from "../images/elevate-logo.png"

const Header = ({ pageInfo }) => {
  const [links] = React.useState([
    { content: 'Home', href: 'home' },
    { content: 'Services', href: 'services' },
    { content: 'About', href: 'about' },
    { content: 'Insights', href: 'insights' },
    { content: 'Contact', href: 'contact' },
  ]);

  return (
    <header>
      <Navbar className="d-block d-lg-none" id="alt-site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} width="150" height="150" alt="Elevate Learning" />
          </Navbar.Brand>
        </Link>
      </Navbar>

      <Navbar fixed="top" className="d-none d-lg-flex" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} width="150" height="150" alt="Elevate Learning" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Scrollspy items={links.map(s => s.href)} currentClassName="current" offset={-300} className="navbar-nav">
              <Nav.Item as="li" className="mx-3">
                <Nav.Link onClick={() => scrollTo("#home")}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link onClick={() => scrollTo("#services")}>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link onClick={() => scrollTo("#about")}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link href="/insights">Insights</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-3">
                <Nav.Link onClick={() => scrollTo("#contact")}>Contact</Nav.Link>
              </Nav.Item>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
