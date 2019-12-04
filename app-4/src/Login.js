import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            userName: "",
            userPassword: ""
        }
    }

    handleChangeName(val) {
        this.setState({userName: val});
        console.log(this.state.userName)
    }

    handleChangePass(val) {
        this.setState({userPassword: val});
        console.log(this.state.userPassword)
    }

    alertUser(){
        alert(`Username:  ${this.state.userName}, Password: ${this.state.userPassword}`)
    }

    render(){
       return(
        <div className="Login">
            <input className="username" onChange={ e => this.handleChangeName(e.target.value) }></input>
            <input className="password" onChange={ e => this.handleChangePass(e.target.value)}></input>
            <button className="loginButton" onClick={ () => this.alertUser()}> Login </button>
        </div>) 
    }
}

export default Login;