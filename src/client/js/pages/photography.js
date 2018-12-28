import React, { Component } from 'react'
import Content from '../components/content'

export default class Photography extends Component {
    render() {
        return (
            <Content>
                <h1>I like taking pictures.</h1>
                <p>I've been busy working on other features, so there isn't much here. I'll be able to add more content soon, but here are my two dogs in the meantime!</p>
                <div className="photos">
                    <img className="photo" src="/assets/kepler.jpg" alt="My dog Kepler!"  />
                    <img className="photo" src="/assets/kammi.jpg" alt="My dog Kammi!" />
                </div>
            </Content>
        )
    }
}
