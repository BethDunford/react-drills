import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      listItems: ["I", "Am", "A", "Goddamn", "Unicorn", "Ass", "Coding", "Master"]
    }
  }
  render() {
    let listItemsToDisplay = this.state.listItems.map((element, index) => {
      return <h1 key={index}>{element}</h1>;
    });
    return (
      <div className="App">
      {listItemsToDisplay}
      </div>
    );
  }
}

export default App;
