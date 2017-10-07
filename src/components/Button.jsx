import React, {Component} from 'react';


class Button extends Component{

    render(){
        return <input 
            value={this.props.val} 
            onClick={this.props.handle.bind(null, this.props.val)}
            type="button"
            className="button"
        />;
    }
}

export default Button;