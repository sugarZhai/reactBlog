import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {SwiperComponent,DangerHtml} from './components'

class App extends Component{
    render() {
        return (
            <div>
                <h1>React Blog</h1>
                <DangerHtml/>
                <SwiperComponent/>
                <div>
                    <Link to='/about'>About</Link>
                </div>
                <Link to='/weather'>Weather</Link>
            </div>
        )
    }
}
export default App
