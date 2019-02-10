import React, { Component } from 'react';
/* import TestToBeGiven from './TestToBeGiven'; */
import history from '../history';
import './login.css'

class Login extends Component {

    state = {
        tempUserName: "",
        tempUserPassword: "",
        tempUserEmail: ""
    }

    temp = (event) => {
        let {
            name, value
        } = event.target
        this.setState({
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();
        
        localStorage.setItem('Email', this.state.tempUserEmail);
        localStorage.setItem('Password', this.state.tempUserPassword)
        alert("You have Succesfully SignedUp")
        history.push("/login");
    }



    render() {
        return (
            <div className="login-page">
                <div className="form registered ">
                    <form className=" login-form" onSubmit={this.submit}>
                        <input type="text" value={this.state.tempUserName} onChange={this.temp} placeholder="user name" name="tempUserName" />
                        <input type="email" value={this.state.tempUserEmail} onChange={this.temp} name="tempUserEmail" id="email" placeholder="Email" />
                        <input type="password" value={this.state.tempUserPassword} onChange={this.temp} name="tempUserPassword" id="name" placeholder="Password" />
                        <input type="submit" value="SIGN UP" className="btn" />
                        <p className="msg">Already Registered?</p>
                    </form>
                </div>
            </div>

        );
    }
}

export default Login;
