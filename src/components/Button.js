import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GlobalStyles} from "../util/config";

export default class Button extends Component {
    onMouseEnter = () => {
        this.setState({mouseHover: true})
    };

    onMouseLeave = () => {
        this.setState({mouseHover: false})
    };

    getButtonStyle = () => {
        console.log("TPS", this.props.style)
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            width: '150px',
            borderRadius: '22px',
            border: 'solid #00D2FF 2px',
            outline: 'none',
            cursor: 'pointer !important',
            color: '#00D2FF',
            backgroundColor: 'transparent',
            textDecoration: 'none',
            fontSize: '18px',
            fontFamily: GlobalStyles.headerFontStack,
            fontWeight: 500,
        };
        if (this.state.mouseHover) {
            return {
                ...this.props.style,
                ...{backgroundColor: 'magenta'}
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
