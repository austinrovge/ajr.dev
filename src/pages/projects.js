import React, { Component } from 'react'
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
                        <p>This project is a website built using ReactJS and Node.js.</p>
                    </div>
                    <div className="project">
                        <a href="https://github.com/austinrovge/pathfinder">pathfinder</a>
                        <span className="language">
                            <span className="indicator java" />
                            <span className="text">Java</span>
                        </span>
                        <p>This is a JavaFX application that draws a map of rectangles out. The user is able to draw walls and set the start/end points. When run, the program will draw a path between the two points.</p>
                    </div>
                </div>
            </Layout>
        )
    }
}