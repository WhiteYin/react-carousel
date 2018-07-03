import React from 'react';
import ReactDOM from 'react-dom';
import { view as Carousel } from './components/carousel/index';
import { Provider } from 'react-redux';
import store from './Store';

const imgList = [
    {
        imgLink: 'https://www.baidu.com',
        imgSrc: '/assets/img/carousel-1.jpeg'
    },
    {
        imgLink: 'http://www.zhihu.com',
        imgSrc: '/assets/img/carousel-2.jpeg'
    },
    {
        imgLink: 'https://sf.gg',
        imgSrc: '/assets/img/carousel-3.jpeg'
    },
    {
        imgLink: 'https://www.duitang.com',
        imgSrc: '/assets/img/carousel-4.jpeg'
    },
    {
        imgLink: 'https://www.github.com',
        imgSrc: '/assets/img/carousel-5.jpeg'
    }
];

import './index.less';

ReactDOM.render(
    <Provider store={store}>
        <Carousel imgList={imgList}/>
    </Provider>,
    document.getElementById('app')
);
