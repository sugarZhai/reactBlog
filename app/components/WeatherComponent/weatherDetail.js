const filterStr=(item)=>{
    return item.substr(0,9).replace(/[/]/ig,'-');
}
const getTime = () => {
    let d=new Date();
    let firstDay=d.toLocaleString()
    d.setDate(d.getDate()+1);
    let secDay=d.toLocaleString()
    d.setDate(d.getDate()+1.5);
    let thirdDay=d.toLocaleString()
    return [filterStr(firstDay),filterStr(secDay),filterStr(thirdDay)]
}
const BasePath = 'https://zhaishuangshuang292.github.io/storeImg';
const cityWeatherInfo = [
    {
        cityName: '上海',
        dayList: [
            {
                tempMin: 17,
                tempMax: 23,
                imgUrl: BasePath + '/1.png',
                weatherDetail: '阴',
                windLevel: 1,
                windDirection: '南 180',
                windSpeed: 10,
                dateTime: getTime()[0],
            },
            {
                tempMin: 11,
                tempMax: 29,
                imgUrl: BasePath + '/2.png',
                weatherDetail: '晴',
                windLevel: 2,
                windDirection: '北 180',
                windSpeed: 20,
                dateTime: getTime()[1],
            },
            {
                tempMin: 12,
                tempMax: 30,
                imgUrl: BasePath + '/4.png',
                weatherDetail: '多云',
                windLevel: 3,
                windDirection: '西南 360',
                windSpeed: 30,
                dateTime: getTime()[2],
            }
        ]
    },
    {
        cityName: '深圳',
        dayList: [
            {
                tempMin: 17,
                tempMax: 23,
                imgUrl: BasePath + '/5.png',
                weatherDetail: '多云转晴',
                windLevel: 1,
                windDirection: '南 180',
                windSpeed: 10,
                dateTime: getTime()[0],
            },
            {
                tempMin: 11,
                tempMax: 29,
                imgUrl: BasePath + '/14.png',
                weatherDetail: '小雨',
                windLevel: 2,
                windDirection: '北 180',
                windSpeed: 20,
                dateTime: getTime()[1],
            },
            {
                tempMin: 12,
                tempMax: 30,
                imgUrl: BasePath + '/26.png',
                weatherDetail: '阴转多云',
                windLevel: 3,
                windDirection: '西南 360',
                windSpeed: 30,
                dateTime: getTime()[2],
            }
        ]
    }, {
        cityName: '北京',
        dayList: [
            {
                tempMin: 17,
                tempMax: 23,
                imgUrl: BasePath + '/30.png',
                weatherDetail: '大雾',
                windLevel: 1,
                windDirection: '南 180',
                windSpeed: 10,
                dateTime: getTime()[0],
            },
            {
                tempMin: 11,
                tempMax: 29,
                imgUrl: BasePath + '/33.png',
                weatherDetail: '大风',
                windLevel: 2,
                windDirection: '北 180',
                windSpeed: 20,
                dateTime: getTime()[1],
            },
            {
                tempMin: 12,
                tempMax: 30,
                imgUrl: BasePath + '/36.png',
                weatherDetail: '大雨',
                windLevel: 3,
                windDirection: '西南 360',
                windSpeed: 30,
                dateTime: getTime()[2],
            }
        ]
    },
    {
        cityName: '广州',
        dayList: [
            {
                tempMin: 17,
                tempMax: 23,
                imgUrl: BasePath + '/26.png',
                weatherDetail: '阴转多云',
                windLevel: 1,
                windDirection: '南 180',
                windSpeed: 10,
                dateTime: getTime()[0],
            },
            {
                tempMin: 11,
                tempMax: 29,
                imgUrl: BasePath + '/30.png',
                weatherDetail: '大雾',
                windLevel: 2,
                windDirection: '北 180',
                windSpeed: 20,
                dateTime: getTime()[1],
            },
            {
                tempMin: 12,
                tempMax: 30,
                imgUrl: BasePath + '/1.png',
                weatherDetail: '阴',
                windLevel: 3,
                windDirection: '西南 360',
                windSpeed: 30,
                dateTime: getTime()[2],
            }
        ]
    }
]
export default cityWeatherInfo