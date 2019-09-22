import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <h1>Looks like this page doesn't exist.</h1>
      <p>Maybe try going to <Link to="/">the home page?</Link></p>
    </Layout>
  )
}
