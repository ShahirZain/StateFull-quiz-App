import React, { Component } from 'react';
import './testQuesJS1.css';
import Div from './Ques/ques'
import Input from './input/input'
import history from '../../history';
// import Result from './Result';
import { NavLink } from 'react-router-dom'


class testQues extends Component {

  state = {
    html1ques: {
      1: {
        qid: 1,
        ques: "HTML Stand for?",
        opt1: "Hyper Type Markup Language",
        opt2: "High Text Markup Language",
        opt3: "Hyper Text Markup Language",
        correct: ""
      },

      2: {
        qid: 2,
        ques: "Which tag is use for table ",
        opt1: "<tr>",
        opt2: "<table/>",
        opt3: "<table> </table>",
        correct: ""
      },

      three: {
        qid: 3,
        ques: "Where does the title tag define",
        opt1: "in head tag",
        opt2: "in body tag",
        opt3: "in html tag",
        correct: ""
      }
    },
    result: null
  }


  render() {
    let i=1
    return (
      <div>
        <div className="header">
          <header>
            <h3>JavaScript Quiz 1</h3>
          </header>
        </div>
        <form>
            <Div txt={this.state.html1ques[i].ques}/> <br/>
            <h4>{this.state.html1ques[i].opt1}</h4> <br/>
            <h4>{this.state.html1ques[i].opt2}</h4> <br/>
            <h4>{this.state.html1ques[i].opt3}</h4>
        </form>
      </div>
    );
  }
}

export default testQues;