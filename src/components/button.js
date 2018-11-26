import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GlobalStyles} from "../util/config";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseHover: false,
        }
    }

    onMouseEnter = () => {
        this.setState({mouseHover: true})
    };

    onMouseLeave = () => {
        this.setState({mouseHover: false})
    };

    getButtonStyle = () => {
        if (this.state.mouseHover) {
            return {
                ...this.props.style,
                ...{backgroundColor: GlobalStyles.colors.applabBlue, color: 'white'}
            }
        } else {
            return this.props.style;
        }
    };

    render() {
        return(
            <a
                style={this.getButtonStyle()}
                href={this.props.href}
                target={this.props.shouldOpenInNewTab ? "_blank" : "_self"}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.buttonText}
            </a>
        )
    }
}

Button.propTypes = {
    style: PropTypes.object,
    href: PropTypes.string.isRequired,
    shouldOpenInNewTab: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
};

Button.defaultProps = {
    shouldOpenInNewTab: false,
};
