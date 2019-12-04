import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
 render() {
    return (
      <div className="App">
          <Image 
          url={"https://i.pinimg.com/originals/5d/11/ef/5d11eff3d69df54dc1d8f9804eb96417.jpg"}/>
      </div>
    );
  }
}

export default App;
