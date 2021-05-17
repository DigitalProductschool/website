module.exports = {
  siteMetadata: {
    title: `Digital Product School`,
    description: `DPS is a 3 months training program where 
    product managers, interaction designers, software engineers
    and AI-specialists build innovative digital products.`,
    author: `@digitalproductschool`,
    twitterAuthor: `@dpschool_io`,
    image: `https://digitalproductschool.io/assets/shared/Batch14.jpg`,
    url: `https://digitalproductschool.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#182542`,
        theme_color: `#182542`,
        display: `minimal-ui`,
        icon: `static/assets/shared/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://digitalproductschool.io`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-no-javascript',
    'gatsby-plugin-no-javascript-utils',
  ],
};

// pathPrefix: "/Gatsby-DPS/static",
//     `gatsby-plugin-postcss`,
