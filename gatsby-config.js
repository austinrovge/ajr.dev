const fs = require('fs')
const fetch = require('node-fetch')
const { buildClientSchema } = require('graphql')
const { createHttpLink } = require('apollo-link-http')

require('dotenv').config({
  path: '.env.api'
})

module.exports = {
  siteMetadata: {
    title: 'Austin Rovge',
    description: "Hi! I'm a software engineering student located in Milwaukee, WI. I'm working hard at learning new skills!",
    author: '@austinrovge'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: 'github',
        typeName: 'GitHub',
        createLink: () =>
          createHttpLink({
            uri: 'https://api.github.com/graphql',
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#2377BE',
        theme_color: '#2377BE',
        display: 'minimal-ui',
        icon: 'static/favicon.png'
      }
    }
  ]
}
