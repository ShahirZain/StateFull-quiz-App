import React, { Component } from 'react'
import './signup.css'

// const Name,Email,Pass,DOB;
class Signup extends Component {
 
    state = {
        Name: "",
        Email: "",
        Pass: "",
        DOB: "",
    }

    onchange = (event) => {

        let { name, value } = event.target;
        this.setState({ [name]: value })
    }

    onsubmitbtn = (event) => {
        event.preventDefault();
        localStorage.setItem('Email', this.state.Email);
        localStorage.setItem('Pass', this.state.Pass)
        alert("You have Succesfully SignedUp")
        this.props.history.push("/login");

    }
    formvalidate = () => {
        let iname = document.getElementsByName("Name").value;
        console.log(iname);
    }
    render() {


        return (
            <div className="signup-main">

                <div className="signup-inner">

                    <form onSubmit={this.onsubmitbtn} >

                        <table>
                            <tbody>
                                <tr>
                                    <td><label className="from-lab"  >Name:</label></td>
                                    <td><input type="text" className="inputs" name="Name" onChange={this.onchange} required /></td>
                                </tr>
                                <tr>
                                    <td><label className="from-lab" >Email:</label></td>
                                    <td><input type="Email" className="inputs" name="Email" onChange={this.onchange} required /></td>
                                </tr>
                                <tr>
                                    <td><label className="from-lab" >Password:</label></td>
                                    <td><input type="password" className="inputs" name="Pass" onChange={this.onchange} required /></td>
                                </tr>
                                <tr>
                                    <td><label className="from-lab">Date of Birth:</label></td>
                                    <td><input type="date" className="inputs" name="DOB" onChange={this.onchange} required /></td>
                                </tr>
                                <tr>
                                    <td></td>

                                    <td><input type="submit" value="Submit" className="btn" /></td>
                                    {/* <td></td> */}
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>)
    }
}
export default Signup;