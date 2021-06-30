import React, { useState } from "react"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Navbar, Nav } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

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
            <AnchorLink to="/#home" title="Elevate Learning">
              <StaticImage
                src="../images/elevate-logo-text-right.png"
                alt="Digital Needs Analysis"
                placeholder="blurred"
                layout="fixed"
                width={300}
                height={100}
              />
            </AnchorLink>
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
                <AnchorLink to="/#home" title="Home" />
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <AnchorLink to="/#services" title="Services" />
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <AnchorLink to="/#about" title="About" />
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <AnchorLink to="/insights" title="Insights" />
              </Nav.Item>
              <Nav.Item as="li" className="mx-lg-3">
                <AnchorLink to="/#contact" title="Contact" />
              </Nav.Item>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
