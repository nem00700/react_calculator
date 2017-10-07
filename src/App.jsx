import React, { Component } from 'react';
import './App.css';
import Input from "./components/Input";

class App extends Component {
  constructor(){
    super();
    this.state = {
      val: ''
    };
  }

  handleChange(event){
    this.setState({val: event.target.value});
  }


  render() {
    return (
      <div className="calculator">
        <Input
          val={this.state.val}  
        />
      </div>
    );
  }
}

export default App;
