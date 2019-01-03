import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class NotFoundPage extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Not Found" />
                <h1>Looks like this page doesn't exist.</h1>
                <p>Hopefully there isn't a broken link somewhere on my site!</p>
            </Layout>
        )
    }
}