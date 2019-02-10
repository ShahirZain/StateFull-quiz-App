import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
/* import TestQuesJS1 from './testQuesJS1' */
import './testKey.css'
import history from '../history'


class testKey extends Component {
    state = {
        temp: "",
        key: "",
        flag: false
    }

    temp = (event) => {
        this.setState({
            temp: event.target.value
        })
    }

    submit = () => {
        this.setState({
            key: this.state.temp
        }, () => {
            console.log(this.state.key)
            if (this.state.key === "abc") {
                this.setState(
                    {
                        flag: true
                    }
                )
                history.push("/TestToBeGiven/TestKey/TestQuesJS1")
            }
            if (this.state.key === "bcd") {
                this.setState(
                    {
                        flag: true
                    }
                )
                history.push("/TestToBeGiven/TestKey/TestQuesJS2")
            }
            else {
                this.setState(
                    {
                        flag: false
                    })
            }

        })
    }
    render() {
        return (
            <div className="box">
                <p>Key</p>
                <input type="text" name="Key" onChange={this.temp} className="txt" value={this.state.temp} />
                <BrowserRouter>
                    <span>
                        <NavLink to="/TestToBeGiven/TestKey/TestQuesJS1"><input type="button" className="Button" value="Submit" onClick={this.submit} /></NavLink>
                    </span>
                </BrowserRouter>
                {
                    this.state.flag ?
                        history.push("/TestToBeGiven/TestKey/TestQuesJS1")
                        : null
                }
            </div>
        );
    }
}

export default testKey;
