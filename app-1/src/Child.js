import React, { Component } from "react";


class Child extends Component {
    // console.log("props in child: ", props);


    render(){
        return (
            <div className="input">
                <input className="inputLine" onChange={ (e) => this.props.typing(e.target.value) }></input>
            </div>
        )
}
};

export default Child;