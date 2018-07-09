import React from 'react';
import PropTypes from 'prop-types';

const CircleIcon = ({ currentIndex, index, showImage }) => {
    return (
        <span
            className={'carousel-icon ' + (currentIndex === index ? 'active' : '')}
            onClick={showImage}
        >

        </span>
    );
};

CircleIcon.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    showImage: PropTypes.func.isRequired
};

export default CircleIcon;
