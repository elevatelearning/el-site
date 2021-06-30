module.exports = {
  siteMetadata: {
    title: `Elevate Learning`,
    authors: [
      {
        name: `Kira Koopman`,
        summary: `Founder at Elevate Learning | Digital Learning Solutions Specialist`,
      },
      {
        name: `Pasqua Lawrenson`,
        summary: `Learning Experience Design Specialist`,
      },
    ],
    description: `Elevate Learning is a full-service learning design consultancy. We partner with you to design and implement online and blended learning experiences.`,
    siteUrl: `https://www.elevatelearning.org/`,
    social: {
      twitter: `elevatelearnhq`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/insights`,
        name: `insights`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-extract-image-attributes`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
            },
          },
          `gatsby-remark-images-insert-wrapper-attributes`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117525437-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  author: node.frontmatter.author,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elevate Learning`,
        short_name: `Elevate`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#193446`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/elevate-logo-no-text.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "/insights/([^/]+)/?$" }],
        excludePaths: ["/"],
        height: 5,
        prependToBody: true,
        color: `#a9d8dd`,
        footerHeight: 500,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
  ],
}
