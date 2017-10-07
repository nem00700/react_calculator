import React, { Component } from 'react';

class Input extends Component{
    render(){
        return (<input 
            value={this.props.val}
            disabled
        />);
    }
}

export default Input;