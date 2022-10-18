/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Luuppi_Puolue",
        short_name: "Luuppi_Puolue",
        start_url: "/",
        icon: "src/images/lp.ico",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${process.cwd()}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `numbers`,
        path: `${process.cwd()}/src/images/numbers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logoparts`,
        path: `${process.cwd()}/src/images/logoparts`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${process.cwd()}/src/images/people`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${process.cwd()}/src/images`,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
