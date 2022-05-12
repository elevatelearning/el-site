import React from "react"

import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import FormatDate from "../../utils/format-date"
import Layout from "../../components/layout"
import ShareButtons from "../../components/share-buttons"

const ArticlePreview = ({ entry, widgetFor }) => {
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Layout>
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
                  <h1 itemProp="headline">{entry.getIn(["data", "title"])}</h1>
                  <p>{FormatDate(entry.getIn(["data", "date"]))}</p>
                </header>
                <ShareButtons
                  url={url}
                  title={entry.getIn(["data", "title"])}
                  description={entry.getIn(["data", "description"])}
                />
              </Jumbotron>
            </Col>
          </Row>
          <Row className="justify-content-center article-content py-3 py-md-5">
            <Col md={10} lg={8}>
              <section itemProp="articleBody">{widgetFor("body")}</section>
              <hr />
              <footer></footer>
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  )
}

export default ArticlePreview
