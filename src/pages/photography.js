import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class Photography extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Photography" />
                <h1>I like taking pictures.</h1>
                <p>I've been busy working on other features, so there isn't much here. I'll be able to add more content soon, but here are some random pictures in the meantime!</p>
                <div className="photos">
                    {
                        this.props.data.photos.edges.map((photo, i) => (
                            <Img key={i} className="photo" fluid={photo.node.childImageSharp.fluid} />
                        ))
                    }
                </div>
            </Layout>
        )
    }
}

export const photoQuery = graphql`
    query {
        photos: allFile(filter: { absolutePath: { regex: "\/photography/" } }) {
            edges {
                node {
                    ...fluidImage
                }
            }
        }
    }
`