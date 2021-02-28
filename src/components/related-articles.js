import React from "react"

import { Link } from "gatsby"
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap"

const RelatedArticles = ({ previous, next }) => {
  const limitStringLength = text => {
    return text.replace(/(.{250})..+/, "$1…")
  }

  const previousCard = () => {
    return (
      <Card key={previous.frontmatter.title} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              variant="top"
              src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
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
                  __html: limitStringLength(previous.frontmatter.description),
                }}
              />
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer>
          <small className="text-muted">{previous.frontmatter.date}</small>
        </Card.Footer>
      </Card>
    )
  }

  const nextCard = () => {
    return (
      <Card key={next.frontmatter.title} className="mb-4">
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              variant="top"
              src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
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
                  __html: limitStringLength(next.frontmatter.description),
                }}
              />
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer>
          <small className="text-muted">{next.frontmatter.date}</small>
        </Card.Footer>
      </Card>
    )
  }

  const cards = []
  if (previous) cards.push(previousCard())
  if (next) cards.push(nextCard())

  return (
    <Container className="related-wrapper mt-5 mt-lg-6">
      <Row className="justify-content-center">
        <Col>
          <CardDeck>{cards}</CardDeck>
        </Col>
      </Row>
    </Container>
  )
}

export default RelatedArticles
