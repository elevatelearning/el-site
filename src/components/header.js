import React, { useState } from "react"

import { Navbar, Nav } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import scrollTo from "gatsby-plugin-smoothscroll"

import Image from "./image"

const Header = () => {
  const [links] = useState([
    { content: "Home", href: "home" },
    { content: "Services", href: "services" },
    { content: "About", href: "about" },
    { content: "Insights", href: "insights" },
    { content: "Contact", href: "contact" },
  ])

  return (
    <header>
      <Navbar expand="lg" fixed="top" id="header-navbar">
        <Navbar.Brand onClick={() => scrollTo("#home")}>
          <div style={{ width: "250px" }}>
            <Image
              alt="Elevate Learning"
              filename="elevate-logo-text-right.png"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="d-none custom-toggler"
          aria-controls="header-navbar-nav"
        />
        <Navbar.Collapse id="header-navbar-nav">
          <Nav className="ml-auto">
            <Scrollspy
              items={links.map(s => s.href)}
              currentClassName="current"
              offset={-300}
              className="navbar-nav"
            >
              <Nav.Item as="li" className="mx-lg-3">
                <Nav.Link onClick={() => scrollTo("#home")}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <Nav.Link onClick={() => scrollTo("#services")}>
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <Nav.Link onClick={() => scrollTo("#about")}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <Nav.Link href="/insights">Insights</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <Nav.Link onClick={() => scrollTo("#contact")}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
