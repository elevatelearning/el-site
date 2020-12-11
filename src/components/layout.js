import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <SEO></SEO>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
