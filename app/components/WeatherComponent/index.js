import React, {Component} from 'react'
import "./index.scss";
import cityWeatherInfo  from './weatherDetail.js'

const BasePath = 'https://zhaishuangshuang292.github.io/storeImg';

class WeatherComponent extends Component {
    constructor() {
        super()
        this.state = {
            cityIndex:0,
            dayList:cityWeatherInfo[0].dayList,
            weatherDetailRes:cityWeatherInfo[0].dayList[0],
            cityName:cityWeatherInfo[0].cityName,
            cityWeatherInfo:cityWeatherInfo
        }
        this.changeCity=this.changeCity.bind(this)
        this.changeDetail=this.changeDetail.bind(this)
    }

    componentDidMount() {

    }
    changeCity(itemIndex){
        //Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or
        // componentDidUpdate. React limits the number of nested updates to prevent infinite loops.是因为调用的时候未使用箭头函数的写法
        this.setState({
            cityIndex:itemIndex,
            dayList:cityWeatherInfo[itemIndex].dayList,
            cityName:cityWeatherInfo[itemIndex].cityName,
            weatherDetailRes:cityWeatherInfo[itemIndex].dayList[0],
        })
    }
    changeDetail(detailIndex){
        this.setState({
            weatherDetailRes:this.state.dayList[detailIndex]
        })
    }
    render() {
        const {
            tempMin,
            tempMax,
            imgUrl,
            weatherDetail,
            windLevel,
            windDirection,
            windSpeed }=this.state.weatherDetailRes
        return (
            <div className='weatherBox'>
                <div className='changeCity'>
                    {
                      Array.isArray(cityWeatherInfo)&&  cityWeatherInfo.map((item,index)=>(
                            <div className={index===this.state.cityIndex?'activeItem':'cityItem'} key={index} onClick={()=>{this.changeCity(index)}}>{item.cityName}</div>
                        ))
                    }
                </div>
                <p>{this.state.cityName}</p>
                <b>{weatherDetail}</b>
                <div className='weatherDetail'>
                    <img src={imgUrl}/>
                    <div className="detailItem">
                        <b>{tempMin} ~<br/>{tempMax} ℃</b>
                    </div>
                    <div className="detailItem">
                        <p>风力等级:{windLevel}</p>
                        <p>风向角度(0~360):<br/>{windDirection}</p>
                        <p>风速(km):{windSpeed}</p>
                    </div>
                </div>
                <div className="weatherList">
                    {
                        Array.isArray(this.state.dayList)&&this.state.dayList.map((item,index)=>(
                            <div className='listItem' key={index} onClick={()=>{this.changeDetail(index)}}>
                                <p>{item.dateTime}</p>
                                <img src={item.imgUrl}/>
                                <p>{item.tempMin} ~ {item.tempMax} ℃</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default WeatherComponent