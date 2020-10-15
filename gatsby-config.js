/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Joy Neon", "Joy Neon Hollow", "Joy Neon Script"],
          urls: ["/fonts/fonts.css"],
        },
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

    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
