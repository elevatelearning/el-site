import React from "react"

import { Card, CardDeck, Col, Container, Row } from "react-bootstrap"
import { getSrc } from "gatsby-plugin-image"
import { Link } from "gatsby"

const RelatedArticles = ({ previous, next }) => {
  const previousTitle = previous.frontmatter.title || previous.fields.slug

  const previousCard = () => {
    return (
      <Card key={previous.id} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              src={getSrc(previous.image)}
              alt={previousTitle}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <Link style={{ boxShadow: `none` }} to={previous.fields.slug}>
                  {previousTitle}
                </Link>
              </Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: previous.frontmatter.description || previous.excerpt,
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

  const nextTitle = next.frontmatter.title || next.fields.slug

  const nextCard = () => {
    return (
      <Card key={next.id} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              src={getSrc(next.image)}
              alt={nextTitle}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <Link style={{ boxShadow: `none` }} to={next.fields.slug}>
                  {nextTitle}
                </Link>
              </Card.Title>
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: next.frontmatter.description || next.excerpt,
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
