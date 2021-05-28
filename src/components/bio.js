import React from "react"

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Bio = ({ selected }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 50, height: 50, quality: 95) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          authors {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const authors = data.site.siteMetadata?.authors
  const author = authors.find(author => author.name.includes(selected))

  const social = data.site.siteMetadata?.social
  const avatar = data.images?.edges.find(n => {
    return n.node.relativePath.includes(
      author.name.replace(/\s+/g, "-").toLowerCase()
    )
  })

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar.node.childImageSharp.fixed}
          alt={author?.name || ``}
          className="avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          <br />
          {author?.summary || null}
          {` `}
          <br />
          <strong>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              <FontAwesomeIcon icon={faTwitter} size="1x" />
              &nbsp;{social?.twitter || ``}
            </a>
          </strong>
        </p>
      )}
    </div>
  )
}

export default Bio
