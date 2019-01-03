import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class Projects extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Projects" />
                <h1>Here's some stuff I've worked on.</h1>
                <p>This isn't all of my projects that I've worked on, just some that I like!</p>
                <div className="projects">
                    {
                        this.props.data.github.user.pinnedRepositories.edges.map((project, i) => (
                            <div key={i} className="project">
                                <a href={project.node.url}>{project.node.name}</a>
                                <span className="language">
                                    <span className={`indicator ${project.node.primaryLanguage.name.toLowerCase()}`}/>
                                    <span className="text">{project.node.primaryLanguage.name}</span>
                                </span>
                                <div>
                                    <p>{project.node.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    {
                        this.props.data.allMarkdownRemark.edges.map((project, i) => (
                            <div key={i} className="project">
                                <a href={project.node.frontmatter.link}>{project.node.frontmatter.title}</a>
                                <span className="language">
                                    <span className={`indicator ${project.node.frontmatter.language.toLowerCase()}`} />
                                    <span className="text">{project.node.frontmatter.language}</span>
                                </span>
                                <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
                            </div>
                        ))
                    }
                </div>
            </Layout>
        )
    }
}

export const projectsQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                  html
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
                pinnedRepositories(last:3) {
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