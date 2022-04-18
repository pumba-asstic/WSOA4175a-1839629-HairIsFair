import React, { Component } from 'react'
import Logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

export default class Navbar  extends Component {
  render() {
    return (
       <div classname ="Navbar" > 
            <div classname="leftside">
              <img src={Logo}/>
          </div>
            <div classname="rightside">
            </div>
        </div>
    )
  }
}
