import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

        handleChange = (val) => {
            // console.log("value is :", val);
        this.setState({userInput: val});
    }
        render(){
            return(
                <div>
                    <Child 
                    typing={this.handleChange}
                    />
                    <h1>{this.state.userInput}</h1>
                </div>
            )
        }
    };
