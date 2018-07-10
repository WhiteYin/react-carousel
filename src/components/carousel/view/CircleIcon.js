import React from 'react';
import PropTypes from 'prop-types';

class CircleIcon extends React.Component {
    constructor(props) {
        super(props);

        this.clickHander = this.clickHander.bind(this);
    }

    clickHander() {
        const { currentIndex, index, showImage, total } = this.props;
        showImage(index - currentIndex, total);
    }

    render() {
        return (
            <span
                className={'carousel-icon ' + (this.props.currentIndex === this.props.index ? 'active' : '')}
                onClick={this.clickHander}
            >
            </span>
        );
    }
}

CircleIcon.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    showImage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
};

export default CircleIcon;
