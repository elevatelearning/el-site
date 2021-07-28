import React from "react"

import { getSrc } from "gatsby-plugin-image"
import { Card, CardDeck, Col, Row } from "react-bootstrap"
import { useStaticQuery, Link, graphql } from "gatsby"

const Articles = () => {
  const data = useStaticQuery(
    graphql`
      query ArticlesQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
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
        }
      }
    `
  )

  const cards = data.allMarkdownRemark.edges.slice(1).map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <Card key={title} className="mb-4">
        <Card.Img src={getSrc(node.frontmatter.thumbnail)} alt={title} />
        <Card.Body>
          <Card.Title>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </Card.Title>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
          <Card.Footer>
            <small className="text-muted">{node.frontmatter.date}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    )
  })

  const card = data.allMarkdownRemark.edges[0].node

  return (
    <>
      <Row noGutters>
        <Col>
          <Card className="card-horizontal mb-4">
            <Row noGutters>
              <Col md={4}>
                <Card.Img
                  src={getSrc(card.frontmatter.thumbnail)}
                  alt={card.frontmatter.title}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>
                    <Link style={{ boxShadow: `none` }} to={card.fields.slug}>
                      {card.frontmatter.title}
                    </Link>
                  </Card.Title>
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: card.frontmatter.description || card.excerpt,
                    }}
                  />
                  <Card.Footer>
                    <small className="text-muted">
                      {card.frontmatter.date}
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <CardDeck>{cards}</CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default Articles
