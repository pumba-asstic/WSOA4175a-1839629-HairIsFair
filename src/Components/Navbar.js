import React, { Component } from 'react'
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

export default class Navbar  extends Component {
  render() {
    return (
       <div classname ="Navbar" > 
            <div classname="leftside">
              <img src={logo}/>
          </div>
            <div classname="rightside">
            </div>
        </div>
    )
  }
}
