const path = require(`path`)
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your insights articles`,
      result.errors
    )
    return
  }

  const articles = result.data.allMarkdownRemark.nodes

  if (articles.length > 0) {
    articles.forEach((article, index) => {
      const previousId =
        index === 0 ? articles[index + 2].id : articles[index - 1].id
      const nextId =
        index === articles.length - 1
          ? articles[index - 2].id
          : articles[index + 1].id

      createPage({
        path: article.fields.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          id: article.id,
          previousId,
          nextId,
        },
      })
    })
  }
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  getCache,
}) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `/insights${slug}`,
    })

    if (node.frontmatter.imageUrl != null) {
      const imageUrlFileNode = await createRemoteFileNode({
        url: node.frontmatter.imageUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      })

      createNodeField({
        node,
        name: "image",
        value: imageUrlFileNode.id,
      })
    }

    if (node.frontmatter.infographicPreviewUrl != null) {
      const infographicPreviewUrlFileNode = await createRemoteFileNode({
        url: node.frontmatter.infographicPreviewUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      })

      createNodeField({
        node,
        name: "infographicPreview",
        value: infographicPreviewUrlFileNode.id,
      })
    }

    if (node.frontmatter.infographicUrl != null) {
      const infographicUrlFileNode = await createRemoteFileNode({
        url: node.frontmatter.infographicUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      })

      createNodeField({
        node,
        name: "infographic",
        value: infographicUrlFileNode.id,
      })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      authors: [Author]
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      image: File @link(from: "fields.image")
      infographicPreview: File @link(from: "fields.infographicPreview")
      infographic: File @link(from: "fields.infographic")
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter @dontInfer {
      imageUrl: String
      featured: Boolean
      title: String
      description: String
      author: String
      date: Date @dateformat
      infographicPreviewUrl: String
      infographicUrl: String
    }

    type Fields {
      slug: String
    }
  `)
}
