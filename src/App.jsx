import React, { Component } from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  constructor(){
    super();
    this.state = {
      val: '',
      buttons: [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '←', '+', '=', 'C'],
      last_sign: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(num){
    let a = this.state.val;
    if(num === "=")
      this.setState({val: new String(eval(this.state.val))});
    else if(num === "←")
      this.setState({val: a.substring(0, a.length-1)})
    else if(num === "C")
      this.setState({val: ''});
    else if(isNaN(this.state.last_sign) && isNaN(num) && (this.state.last_sign !== undefined))
      this.setState({val: a.substring(0, a.length-1) + num});
    else
      this.setState({val: this.state.val + num});
    this.setState({last_sign: a.substring(a.length-1)});
  }


  render() {
    const buttons = this.state.buttons.map((elem, index) => {
      return <Button
        val={elem}
        handle={this.handleChange}
        key={index} 
      />;
    });



    return (
      <div className="calculator">
        <Input
          val={this.state.val}  
        />
        <div className="buttons">
          {buttons}
        </div>
        
      </div>
    );
  }
}

export default App;
