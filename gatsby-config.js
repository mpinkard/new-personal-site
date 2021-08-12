require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Michael Pinkard`,
    description: `All about Michael Pinkard, geographer and software developer!`,
    author: `@michaelpinkard`,
    siteUrl: "https://michaelpinkard.com",
    keywords: [
      "Michael",
      "Pinkard",
      "software",
      "geography",
      "knowledge",
      "tennis",
      "Lafayette",
      "UBC",
      "Lafayette College",
      "University of British Columbia",
      "Front-end development",
      "Full-stack development",
      "data pipelines",
      "high-performance computing",
      "python",
      "javascript",
      "react",
      "java",
      "postgresql",
      "mysql",
      "sql",
      "agriculture",
      "food politics",
      "food",
      "politics",
      "science",
      "STS",
      "science and technology studies",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/*": ["X-Frame-Options: SAMEORIGIN"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sitemap",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
