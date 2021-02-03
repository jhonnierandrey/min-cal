import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    static propTypes = {
        value : PropTypes.string,
    };

    render(){
        return(
            <div className="component-display">
                <p>Display</p>
                <div>{props.value}</div>
            </div>
        )
    }
}

export default Display;