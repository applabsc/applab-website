import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {GlobalStyles} from "../util/config";

export default class DescriptionColumn extends Component {

    render() {
        return (
            <div style={{...styles.container, ...{backgroundColor: this.props.color}}}>
                <img
                    style={styles.icon}
                    src={this.props.image}
                    alt="icon"
                />

                <p style={styles.title}>
                    {this.props.title}
                </p>

                <p style={styles.paragraph}>
                    {this.props.paragraph}
                </p>
            </div>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    icon: {
        height: '140px',
        width: '140px',
        paddingTop: '25px',
        objectFit: 'contain',
    },
    title: {
        fontFamily: GlobalStyles.headerFontStack,
        fontWeight: 600,
        textAlign: 'center',
        color: 'white',
        paddingTop: '10px',
        display: 'block',
    },
    paragraph: {
        fontFamily: GlobalStyles.fontStack,
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '25px',
        textAlign: 'center',
        color: 'white',
        display: 'block',
        padding: '10px 20px 20px'
    },
};

DescriptionColumn.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};
