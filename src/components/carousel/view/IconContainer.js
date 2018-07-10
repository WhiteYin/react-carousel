import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CircleIcon from './CircleIcon';

const IconContainer = ({ currentIndex, imgList, showImage }) => {
    return (
        <div className="carousel-icon-container">
            {
                imgList.map((item, index) => {
                    return (
                        <CircleIcon
                            key={'icon-' + index}
                            currentIndex={currentIndex}
                            index={index}
                            showImage={showImage}
                            total={imgList.length}
                        />
                    );
                })
            }
        </div>
    );
};

IconContainer.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    imgList: PropTypes.array.isRequired,
    showImage: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        currentIndex: state.carousel,
        imgList: props.imgList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showImage: (direction, totalLength) => {
            dispatch(actions.slideCarousel(direction, totalLength));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconContainer);
