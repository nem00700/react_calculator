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
      <div>
        <Input
          val={this.state.val}
          change={this.handleChange.bind(this)}  
        />
      </div>
    );
  }
}

export default App;
