import { Link } from 'gatsby'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Austin Rovge</h1>
                <nav className="links">
                    <Link to="/">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/photography">Photography</Link>
                    <Link to="/resume">Resume</Link>
                </nav>
            </header>
        )
    }
}