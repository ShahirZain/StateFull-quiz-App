import React from 'react';
import {BrowserRouter,NavLink} from 'react-router-dom'
import './TestToBeGiven.css'
import history from '../history'



const Child = (props) => (
  
  <div className='modal'>
    <ul>
       {
        props.val.map(({topic , route}) => <li className="list" key={route}> 
            <BrowserRouter>
              <div>
                <NavLink to={route} className="data" onClick={()=>history.push("/TestToBeGiven/TestKey")}>{topic}</NavLink>
              </div>
            </BrowserRouter>
          </li>)
      }    
    </ul>
  </div>
)


class TestToBeGiven extends React.Component {

  state={
    flag: true,
    quiztopic:[
        {topic:"Html test 1" ,
        route:"/TestToBeGiven/TestKey" },
        {topic:"Html test 2",
        route:"/TestToBeGiven/TestKey"}
      ]
  }
  toggleHidden = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    const Topic = this.state.quiztopic;
    return (    
      <div className="testToBeGiven">
        <BrowserRouter>
        <div>
          <NavLink to="/TestToBeGiven" onClick={this.toggleHidden} className="JS"> HTML</NavLink>  <br/>
          {!this.state.flag && <Child val={Topic} className="child"/>}
          <NavLink to="/" className="RC"> React</NavLink> 
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default TestToBeGiven;  