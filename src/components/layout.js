import React from "react"

import Header from "../components/header"
import Home from "../components/home"
import Services from "../components/services"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

const Layout = () => {
  return (
    <main>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default Layout
