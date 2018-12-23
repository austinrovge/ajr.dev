import React, { Component, Fragment } from 'react'
import Header from './header'
import Footer from './footer'

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main className="content">
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        )
    }
}
