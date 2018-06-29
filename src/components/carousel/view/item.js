import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../style/item.less';

class Item extends React.Component {
    constructor(props) {
        super(props);
        // 获取props中的数据
        const { imgList } = props;
        // 函数绑定
        this.clearTimer = this.clearTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        // 组件状态
        this.state = {
            // 图片数量
            imgAmount: imgList.length,
            // 图片样式
            liStyle: {
                width: (100 / imgList.length) + '%'
            },
            timer: 0
        };
    }

    componentDidMount() {
        // 定时器
        this.setState({
            timer: setInterval(() => {
                this.props.slideL2r(1);
            }, 3000)
        });
    }

    // 鼠标移入时清除定时器
    clearTimer() {
        clearInterval(this.state.timer);
    }

    // 鼠标移出时恢复定时器
    resetTimer() {
        // 定时器
        this.setState({
            timer: setInterval(() => {
                this.props.slideL2r(1);
            }, 3000)
        });
    }

    render() {
        // 容器样式
        const ulStyle = {
            width: (this.state.imgAmount * 100) + '%',
            left: -(this.props.currentIndex * 100) + '%'
        };

        return (
            <ul className="carousel-main" style={ulStyle} onMouseEnter={this.clearTimer} onMouseLeave={this.resetTimer}>
                {
                    this.props.imgList.map((item, index) => {
                        return (
                            <li key={'img-' + index} className="carousel-item" style={this.state.liStyle}>
                                <a target="_blank" href={item.imgLink} className="carousel-item-img" style={{ backgroundImage: 'url(' + item.imgSrc + ')' }} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

Item.propTypes = {
    imgList: PropTypes.array.isRequired,
    currentIndex: PropTypes.number.isRequired,
    slideL2r: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        imgList: props.imgList,
        currentIndex: state.carousel
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        slideL2r: (direction) => {
            dispatch(actions.slideCarousel(direction, props.imgList.length));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
