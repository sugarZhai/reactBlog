import React, {Component} from 'react'
import ReactSwipes from "react-swipes";
import "./swiper.scss";
const requireContext = require.context("../images", true, /^\.\/.*\.png$/);
const images = requireContext.keys().map(requireContext);
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
                <h3>distance</h3>
                <div className='testSwiper'>
                    <img src={images[0]}/>
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