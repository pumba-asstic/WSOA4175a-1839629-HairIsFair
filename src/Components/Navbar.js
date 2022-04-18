import React, { Component } from 'react'
import Logo from "../Assets/small Logo.png";
import { Link } from 'react-router-dom';

export default class Navbar  extends Component {
  render() {
    return (
       <div classname ="Navbar" > 
            <div classname="leftside">
              <img src={Logo}/>
          </div>
            <div classname="rightside">
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
  }
}
