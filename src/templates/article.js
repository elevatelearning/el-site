import React from "react"

import { graphql } from "gatsby"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import Bio from "../components/bio"
import DownloadInfographic from "../components/download-infographic"
import Layout from "../components/layout"
import RelatedArticles from "../components/related-articles"
import Seo from "../components/seo"
import ShareButtons from "../components/share-buttons"

const ArticleTemplate = ({ data }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="article mb-5"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Container fluid>
          <Row className="justify-content-center article-header">
            <Col md={10} lg={8}>
              <Jumbotron className="text-center py-4 py-md-5 py-lg-7 my-1">
                <header>
                  <h1 itemProp="headline">{post.frontmatter.title}</h1>
                  <p>{post.frontmatter.date}</p>
                </header>
                <ShareButtons
                  url={url}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                />
              </Jumbotron>
            </Col>
          </Row>
          <Row className="justify-content-center article-content py-3 py-md-5">
            <Col md={10} lg={8}>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <hr />
              <footer>
                <Bio selected={post.frontmatter.author} />
              </footer>
            </Col>
          </Row>
        </Container>
      </article>
      <DownloadInfographic attachments={post.frontmatter.attachments} infographic={post.frontmatter.infographic} />
      <RelatedArticles previous={data.previous} next={data.next} />
    </Layout>
  )
}

export default ArticleTemplate

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
        author
        infographic {
          childImageSharp {
            gatsbyImageData(
              width: 250
              quality: 80
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        attachments {
          publicURL
          name
        }
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
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
