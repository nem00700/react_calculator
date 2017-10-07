import React, { Component } from 'react';

class Input extends Component{
    render(){
        return (<input 
            value={this.props.val}
            onChange={this.props.change.bind(null)}
        />);
    }
}

export default Input;