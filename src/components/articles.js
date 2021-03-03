import React from "react"

import { useStaticQuery, Link, graphql } from "gatsby"
import { Card, CardDeck, Col, Row } from "react-bootstrap"

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
                    sizes(maxWidth: 600) {
                      ...GatsbyImageSharpSizes
                    }
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
        <Card.Img
          src={node.frontmatter.thumbnail.childImageSharp.sizes.src}
          alt={title}
        />
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
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{node.frontmatter.date}</small>
        </Card.Footer>
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
                  src={card.frontmatter.thumbnail.childImageSharp.sizes.src}
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
                </Card.Body>
              </Col>
            </Row>
            <Card.Footer>
              <small className="text-muted">{card.frontmatter.date}</small>
            </Card.Footer>
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
