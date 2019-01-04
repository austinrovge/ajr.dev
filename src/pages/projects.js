import React, { Component } from 'react'
import Project from '../components/project'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class Projects extends Component {
	validateLanguage(language) {
		return language !== null ? language.name : ''
	}

	render() {
		return (
			<Layout>
				<SEO title="Projects" />
				<h1>Here's some stuff I've worked on.</h1>
				<p>This isn't all of my projects that I've worked on, just some that I like!</p>
				<div className="projects">
					{
						this.props.data.github.user.pinnedRepositories.edges.map((project, i) => (
							<Project key={i}
								url={project.node.url}
								name={project.node.name}
								language={this.validateLanguage(project.node.primaryLanguage)}
								description={project.node.description}
							/>
						))
					}
					{
						this.props.data.allMarkdownRemark.edges.map((project, i) => (
							<Project key={i}
								url={project.node.frontmatter.link}
								name={project.node.frontmatter.title}
								language={project.node.frontmatter.language}
								description={project.node.excerpt}
							/>
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
                  excerpt(pruneLength: 500)
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