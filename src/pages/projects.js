import React from 'react'
import { graphql } from 'gatsby'
import Project from '../components/project'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Projects({ data }) {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Here's some stuff I've worked on.</h1>
      <p>This isn't all of my projects that I've worked on, just some that I like!</p>
      <div className="projects">
        {
          data.github.user.pinnedRepositories.edges.map(({ node }, i) => (
            <Project key={i}
              url={node.url}
              name={node.name}
              language={node.primaryLanguage ? node.primaryLanguage.name : ''}
              description={node.description}
            />
          ))
        }
        {
          data.allMarkdownRemark.edges.map(({ node }, i) => (
            <Project key={i}
              url={node.frontmatter.link}
              name={node.frontmatter.title}
              language={node.frontmatter.language}
              description={node.rawMarkdownBody}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export const projectsQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                  rawMarkdownBody
                  frontmatter {
                    title
                    language
                    link
                  }
                }
            }
        }
        
        github {
            user(login: "austinrovge") {
                pinnedRepositories(first: 6) {
                    totalCount
                    edges {
                        node {
                            name
                            description
                            url
                            primaryLanguage {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`
