import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      listItems: ["I", "AM", "GROOT", "I", "AM", "GROOT", "I", "AM", "GROOT", "SO", "ON", "AND", "SUCHWHICH"],
      string: ""
    }
  }

  handleChange(val) {
    this.setState({string: val});
  }

  render() {
    let listItemsToDisplay = this.state.listItems
    .filter(word => word.includes(this.state.string))
    .map((element, index) => {
      return <h1 key={index}>{element}</h1>;
    });
    return (
      <div className="App">
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        {listItemsToDisplay}
      </div>
    );
  }
}

export default App;
