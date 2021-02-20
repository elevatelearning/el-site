import React from "react"

import Articles from "../components/insights/articles"
import Layout from "../components/insights/layout"
import SEO from "../components/insights/seo"

const Insights = () => {
  return (
    <Layout>
      <SEO title="All posts" />
      <h1>New Insights</h1>
      <p>
        A collection of insights about our people, our capabilities, our
        research, and the ever-changing face of our firm.
      </p>
      <Articles />
    </Layout>
  )
}

export default Insights
