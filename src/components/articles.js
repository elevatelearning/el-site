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
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  )

  const limitStringLength = text => {
    return text.replace(/(.{150})..+/, "$1…")
  }

  const cards = data.allMarkdownRemark.edges.slice(1).map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <Card key={title} className="mb-4">
        <Card.Img
          variant="top"
          src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
        />
        <Card.Body>
          <Card.Title>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </Card.Title>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: limitStringLength(
                node.frontmatter.description || node.excerpt
              ),
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
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="mt-4">
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
