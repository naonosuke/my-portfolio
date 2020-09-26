require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Naoki Shirahige - A Just My Portfolio`,
    siteTitle: `Naoki Shirahige`,
    siteUrl: `http://127.0.0.1`,
    siteDescription: ``,
    siteLanguage: ``,
    siteImage: ``,
    author: ``,
    siteHeadline: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/_naonosuke`,
          },
          {
            name: `Facebook`,
            url: `https://www.facebook.com/naonosuke.jp`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naoki Shirahige - A Just My Portfolio`,
        short_name: `Naoki Shirahige`,
        description: `It Is Just Naoki Shirahige's Portfolio.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ADB367`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
