import React, { useState } from "react"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import Headroom from "react-headroom"
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
    <Headroom>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand onClick={() => scrollTo("#home")}>
          <AnchorLink to="/#home" title="Elevate Learning">
            <StaticImage
              src="../images/elevate-logo-text-right.png"
              alt="Digital Needs Analysis"
              placeholder="blurred"
              width={250}
            />
          </AnchorLink>
        </Navbar.Brand>
        <Navbar.Toggle
          className="custom-toggler"
          aria-controls="Headroom-navbar-nav"
        />
        <Navbar.Collapse id="Headroom-navbar-nav">
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
    </Headroom>
  )
}

export default Header
