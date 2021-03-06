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
      last_sign: '',
      answer: '',
      styleInput: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(num){
    let a = this.state.val;
    if(num === "="){
      this.setState({val: ''});
      this.setState({answer: new String(eval(a))})
      this.setState({styleInput: false})
    }
    else if(num === "←")
      this.setState({val: a.substring(0, a.length-1)})
    else if(num === "C")
      this.setState({val: ''});
    else if(isNaN(a.substr(-1)) && isNaN(num) && (this.state.last_sign !== "="))
      this.setState({val: a.substring(0, a.length-1) + num});
    else if(isNaN(num) && num === '.' && this.state.last_sign === '.')
      this.setState({val: this.state.val});
    else{
      if(a.length < 20)
        this.setState({val: this.state.val + num});
      if(a.length >= 10){
        this.setState({styleInput: true});
      }
    }
    if(isNaN(num))
      this.setState({last_sign: num});
  
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
        <div className="input-field">
          <Input
            styleInput={true}
            classVal=" answer" 
            val={this.state.answer}
          />
          <Input
            styleInput={this.state.styleInput}
            classVal=" example"
            val={this.state.val}  
          />
        </div>
        <div className="buttons">
          {buttons}
        </div>
        
      </div>
    );
  }
}

export default App;
