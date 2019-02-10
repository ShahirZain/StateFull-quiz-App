import React, { Component } from 'react';
import history from '../history';
import './login.css'

class Login extends Component {

    state = {
        tempUserEmail: "",
        tempUserPassword: ""
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
        if (this.state.tempUserEmail === localStorage.getItem("Email") && this.state.tempUserPassword === localStorage.getItem("Password")) {
            console.log("success")
            history.push('/TestToBeGiven')
        }
        else console.log("error")
    }



    render() {
        return (
            <div className="login-page">
                <div className="form registered ">
                    <form className=" login-form" onSubmit={this.submit}>
                        <input type="email" value={this.state.tempUserEmail} onChange={this.temp} name="tempUserEmail" id="email" placeholder="Email" />
                        <input type="password" value={this.state.tempUserPassword} onChange={this.temp} name="tempUserPassword" id="name" placeholder="Password" />
                        <input type="submit" value="LOGIN" className="btn" />
                        <p className="msg">Not Registered?</p>
                    </form>
                </div>
            </div>

        );
    }
}

export default Login;
