import React, { Component } from 'react';

class Input extends Component{
    render(){
        return (<div className="input-field">
            <div className="input-value">{this.props.val}</div>
        </div>);
    }
}

export default Input;