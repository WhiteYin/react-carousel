import React from 'react';
import ReactDOM from 'react-dom';
import { view as Carousel } from './components/carousel/index';
import { Provider } from 'react-redux';
import store from './Store';

const imgList = [
    {
        imgLink: 'https://www.baidu.com',
        imgSrc: 'https://b-ssl.duitang.com/uploads/item/201708/21/20170821230914_23WiR.jpeg'
    },
    {
        imgLink: 'http://www.zhihu.com',
        imgSrc: 'https://a-ssl.duitang.com/uploads/item/201806/22/20180622190827_PNGJ8.thumb.600_0.jpeg'
    },
    {
        imgLink: 'https://sf.gg',
        imgSrc: 'https://b-ssl.duitang.com/uploads/item/201806/22/20180622190717_GWuTc.thumb.600_0.jpeg'
    },
    {
        imgLink: 'https://www.duitang.com',
        imgSrc: 'https://b-ssl.duitang.com/uploads/item/201806/22/20180622190827_PUyQF.thumb.600_0.jpeg'
    },
    {
        imgLink: 'https://www.github.com',
        imgSrc: 'https://b-ssl.duitang.com/uploads/item/201806/22/20180622190827_AVvZQ.thumb.600_0.jpeg'
    }
];

import './index.less';

ReactDOM.render(
    <Provider store={store}>
        <Carousel imgList={imgList}/>
    </Provider>,
    document.getElementById('app')
);
