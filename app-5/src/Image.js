import React, { Component } from "react";

class Image extends Component {
    render(){
        return(
        <div>
            <img src= {this.props.url} alt="You're About To Die" ></img>
            <div>Error 626</div>
        </div>
        )
    }
}

export default Image;