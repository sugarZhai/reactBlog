import React, {Component} from 'react'
import {WeatherComponent} from './components'
import './components/WeatherComponent/index.scss'

class Weather extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentWillMount () {

    }
    render() {
        return (
        <div style={{width:'100%'}}>
            <WeatherComponent/>
        </div>)
    }
}

export default Weather
