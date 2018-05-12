import React, {Component} from 'react'
import ReactSwipes from "react-swipes";
import "./swiper.scss";
const BasePath='https://zhaishuangshuang292.github.io/storeImg';
const images=[
    BasePath+'/pic01.png',
    BasePath+'/pic02.png',
    BasePath+'/pic03.png',
]
class SwiperComponent extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
    }

    render() {
        // swipes 的配置
        let opt = {
            distance: 230, // 每次移动的距离，卡片的真实宽度，需要计算
            currentPoint: 1, // 初始位置，默认从0即第一个元素开始
            autoPlay: true,//是否自动播放
            loop: true,
            swTouchstart: ev => {},
            swTouchmove: ev => {},
            swTouchend: ev => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled
                };
                console.log(data);
                // this.setState({
                //     curCard: ev.newPoint
                // })
            }
        };
        return (
            <section>
                <div className='testSwiper'>
                    <img src={BasePath+'/pic01.png'}/>
                </div>
                <div className="viewport">
                    <div className="flipsnap">
                        <ReactSwipes className="card-slide" options={opt}>
                            {images.map((val, index) => (
                                <div className="item" key={index}>
                                    <img src={val}/>
                                </div>
                            ))}
                        </ReactSwipes>
                    </div>
                </div>
            </section>
        )
    }
}

export default SwiperComponent