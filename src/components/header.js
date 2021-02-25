import React, { useState } from "react"

import { Navbar, Nav } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      desktopImage: file(
        absolutePath: { regex: "/elevate-logo-text-right.png/" }
      ) {
        childImageSharp {
          fixed(width: 300, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileImage: file(
        absolutePath: { regex: "/elevate-logo-text-right.png/" }
      ) {
        childImageSharp {
          fixed(width: 250, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ]

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
          <Image fixed={sources} alt="" />
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
