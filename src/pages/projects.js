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
                    <div className="project">
                        <a href="https://github.com/austinrovge/austinrovge.me">austinrovge.me</a>
                        <span className="language">
                            <span className="indicator javascript" />
                            <span className="text">JavaScript</span>
                        </span>
                        <div>
                            <p>This project is a website built using ReactJS and Node.js.</p>
                        </div>
                    </div>
                    <div className="project">
                        <a href="https://github.com/austinrovge/pathfinder">pathfinder</a>
                        <span className="language">
                            <span className="indicator java" />
                            <span className="text">Java</span>
                        </span>
                        <div>
                            <p>This is a JavaFX application that draws a map of rectangles out. The user is able to draw walls and set the start/end points. When run, the program will draw a path between the two points.</p>
                        </div>
                    </div>
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
    }
`