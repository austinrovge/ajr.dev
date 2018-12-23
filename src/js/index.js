import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { render } from 'react-dom'
import About from './components/about'
import Projects from './components/projects'
import Resume from './components/resume'
import Photography from './components/photography'
import NotFound from './components/not-found'

render((
    <Router>
        <Switch>
            <Route exact path="/" component={About} />
            <Redirect exact from="/about" to="/" />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/resume" component={Resume} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('root'))
