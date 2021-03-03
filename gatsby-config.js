module.exports = {
  siteMetadata: {
    title: `Elevate Learning`,
    author: {
      name: `Kira Koopman`,
      summary: `Founder at Elevate Learning | Digital Learning Solutions Specialist`,
    },
    description: `Elevate Learning is a full-service learning design consultancy. We partner with you to design and implement online and blended learning experiences.`,
    siteUrl: `https://www.elevatelearning.org/`,
    social: {
      twitter: `elevatelearnhq`,
    },
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/elevate-logo-no-text.png`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/insights/" }],
        excludePaths: ["/"],
        height: 5,
        prependToBody: true,
        color: `#a9d8dd`,
        footerHeight: 500,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117525437-1`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
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
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
  ],
}
