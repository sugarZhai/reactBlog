import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import DangerHtml from './components/DangerHtml'

class App extends Component{
    render() {
        return (
            <div>
                <h1>React Blog</h1>
                <DangerHtml/>
                <div>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        )
    }
}
export default App
