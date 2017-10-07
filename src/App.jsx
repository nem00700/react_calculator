import React, { Component } from 'react';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  constructor(){
    super();
    this.state = {
      val: '',
      buttons: [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(num){
    this.setState({val: this.state.val + num});
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
