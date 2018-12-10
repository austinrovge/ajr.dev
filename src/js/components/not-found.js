import React, { Component } from 'react';
import Content from './layout/content';

export default class NotFound extends Component {
    render() {
        return (
            <Content>
                <h1>Looks like this link doesn't exist.</h1>
                <p>Hopefully there isn't a broken link somewhere on my site!</p>
            </Content>
        )
    }
}
