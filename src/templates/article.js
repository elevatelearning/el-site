import React from "react"

import { graphql } from "gatsby"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import Bio from "../components/bio"
import Layout from "../components/layout"
import RelatedArticles from "../components/related-articles"
import SEO from "../components/seo"

const InsightsPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="article"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Container fluid className="my-5">
          <Row className="justify-content-center article-header">
            <Col md={10} lg={8}>
              <Jumbotron className="text-center mt-7 mt-lg-8">
                <header>
                  <h1 itemProp="headline">{post.frontmatter.title}</h1>
                  <p>{post.frontmatter.date}</p>
                </header>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="justify-content-center article-content pt-5 pb-4">
            <Col md={10} lg={8}>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <hr />
              <footer>
                <Bio />
              </footer>
            </Col>
          </Row>
        </Container>
      </article>
      <RelatedArticles previous={data.previous} next={data.next} />
    </Layout>
  )
}

export default InsightsPostTemplate

export const pageQuery = graphql`
  query ArticleBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
