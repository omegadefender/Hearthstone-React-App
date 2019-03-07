import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './stylesheets/index.css'
import Homepage from './components/Pages/Homepage'
import HScards from './components/Pages/HScards'
import Arena from './components/Pages/Arena'
import Stats from './components/Pages/Stats'

ReactDOM.render((
    <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hscards" component={HScards} />
        <Route exact path="/arena" component={Arena} />
        <Route exact path="/stats" component={Stats} />
        </Switch>
    </Router>
    ), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
