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
				<p>I've been busy working on other projects and features, so there isn't much here. I'll be able to add more content soon, but here are some random pictures in the meantime!</p>
				<div className="photos">
					{
						this.props.data.photos.edges.map((photo, i) => (
							<div key={i} className="photo">
								<Img alt={photo.node.name} fluid={photo.node.childImageSharp.fluid} />
								<h2>{photo.node.name}</h2>
							</div>
						))
					}
				</div>
			</Layout>
		)
	}
}

export const query = graphql`
    query {
		photos: allFile(filter: { relativeDirectory: {regex: "/([a-zA-Z])/" }}) {
			edges {
				node {
					...fluidImage
					relativeDirectory
          		}
			}
      	}
    }
`