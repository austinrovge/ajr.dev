import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Photography({ data: { photos } }) {
  return (
    <Layout>
      <SEO title="Photography" />
      <h1>I like taking pictures.</h1>
      <p>I've been busy working on other projects and features, so there isn't much here. I'll be able to add more content soon, but here are my two dogs in the meantime!</p>
      <div className="photos">
        {
          photos.edges.map(({ node }, i) => (
            <div key={i} className="photo">
              <Img alt={node.name} fluid={node.childImageSharp.fluid} />
              <h2>{node.name}</h2>
            </div>
          ))
        }
      </div>
    </Layout>
  )
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
