import React from 'react'
import {render} from 'react-dom'
import {Route, Switch,BrowserRouter} from 'react-router-dom'
import App from './app/App';
import About from './app/About'
import Weather from './app/Weather'

render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}/>
            <Route path="/weather" component={Weather}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))