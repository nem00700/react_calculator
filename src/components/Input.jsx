import React, { Component } from 'react';

class Input extends Component{
    

    render(){
        const classVal = 'input-value' + this.props.classVal;

        return (<div className="input-field_element">
            <div className={classVal}>{this.props.val}</div>
        </div>);
    }
}

export default Input;