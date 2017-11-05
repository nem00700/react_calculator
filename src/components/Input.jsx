import React, { Component } from 'react';

class Input extends Component{
    

    render(){
        const classVal = 'input-value' + this.props.classVal;
        //style={{fontSize: this.props.styleInput}}
        var inputFieldStyle;
        if(this.props.styleInput){
            inputFieldStyle = {
                fontSize: '20px'
            }
        }


        return (<div className="input-field_element" style={inputFieldStyle}>
            <div className={classVal}>{this.props.val}</div>
        </div>);
    }
}

export default Input;