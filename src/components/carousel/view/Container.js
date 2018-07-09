import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ImgContainer from './ImgContainer';
import IconContainer from './IconContainer';

import '../style/container.less';

const Container = ({ imgList }) => {
    return (
        <div className="carousel-container">
            <ImgContainer imgList={imgList} />
            <IconContainer imgList={imgList} />
        </div>
    );
};

Container.propTypes = {
    imgList: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        imgList: props.imgList
    };
};

export default connect(mapStateToProps)(Container);
