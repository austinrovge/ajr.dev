import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class Photography extends Component {
	capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	render() {
		return (
			<Layout>
				<SEO title="Photography" />
				<h1>I like taking pictures.</h1>
				<p>I've been busy working on other features, so there isn't much here. I'll be able to add more content soon, but here are some random pictures in the meantime!</p>
				<div className="photo-gallery">
					{
						this.props.data.photos.edges.map((photo, i) => (
							<div key={i} className="photo">
								<Link to="/">
									<Img alt={this.capitalize(photo.node.name)} fluid={photo.node.childImageSharp.fluid} />
									<h2>{this.capitalize(photo.node.name)}</h2>
								</Link>
							</div>
						))
					}
				</div>
			</Layout>
		)
	}
}

export const photoQuery = graphql`
    query {
        photos: allFile(filter: { relativePath: { regex: "/photography/" }}) {
            edges {
                node {
                    ...fluidImage
                }
            }
        }
        
        directories: allDirectory(filter: { relativeDirectory: { regex: "/photography/" }}) {
            edges {
                node {
                    relativePath
                    name
                }
            }
        }
    }
`