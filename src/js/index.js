import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';

const Home = () => (
    <h1>Hello world!</h1>
)

class Projects extends Component {
    render() {
        return (
            <h1>Here are my projects</h1>
        )
    }
}

class NotFound extends Component {
    render() {
        return (
            <h1>404 Not Found</h1>
        )
    }
}

render((
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('root'));
