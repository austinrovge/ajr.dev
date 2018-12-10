import React, { Component } from 'react';
import Content from './layout/content'

export default class About extends Component {
    render() {
        return (
            <Content>
                <h1>Hi, I'm Austin.</h1>
                <p>I enjoy programming, especially web development.</p>
                <p>I currently attend the <a href="https://www.msoe.edu/">Milwaukee School of Engineering</a> for Sofware Engineering.</p>
            </Content>
        )
    }
}
