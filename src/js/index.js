import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import About from './components/about';
import Projects from './components/projects';
import NotFound from './components/not-found';

render((
    <Router>
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('root'));
