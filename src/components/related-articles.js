import React from "react"

import { Link } from "gatsby"
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap"

const RelatedArticles = ({ previous, next }) => {
  const previousCard = () => {
    return (
      <Card key={previous.frontmatter.title} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              src={previous.frontmatter.thumbnail.childImageSharp.sizes.src}
              alt={previous.frontmatter.title}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <Link style={{ boxShadow: `none` }} to={previous.fields.slug}>
                  {previous.frontmatter.title}
                </Link>
              </Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: previous.frontmatter.description,
                }}
              />
              <Card.Footer>
                <small className="text-muted">
                  {previous.frontmatter.date}
                </small>
              </Card.Footer>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    )
  }

  const nextCard = () => {
    return (
      <Card key={next.frontmatter.title} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              src={next.frontmatter.thumbnail.childImageSharp.sizes.src}
              alt={next.frontmatter.title}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <Link style={{ boxShadow: `none` }} to={next.fields.slug}>
                  {next.frontmatter.title}
                </Link>
              </Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: next.frontmatter.description,
                }}
              />
              <Card.Footer>
                <small className="text-muted">{next.frontmatter.date}</small>
              </Card.Footer>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    )
  }

  const cards = []
  if (previous) cards.push(previousCard())
  if (next) cards.push(nextCard())

  return (
    <Container fluid className="related-wrapper mb-4">
      <Row className="justify-content-center">
        <Col>
          <CardDeck>{cards}</CardDeck>
        </Col>
      </Row>
    </Container>
  )
}

export default RelatedArticles