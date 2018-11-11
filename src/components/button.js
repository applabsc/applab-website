import React, {Component} from 'react';
import "../Styles/Button.scss";

export default class button extends Component {
    render() {
        return(
            <button type="button">
                {this.props.text}
            </button>
        )
    }
}
