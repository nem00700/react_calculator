import React, {Component} from 'react';


class Button extends Component{
    
   

    render(){
        let secondClass = (isNaN(this.props.val)) ? 
            ((this.props.val === "=") ? "buttons-equals" : "buttons-sign") : "buttons-digit";


        return <input 
            value={this.props.val} 
            onClick={this.props.handle.bind(null, this.props.val)}
            type="button"
            className={"button " + secondClass}
        />;
    }
}

export default Button;