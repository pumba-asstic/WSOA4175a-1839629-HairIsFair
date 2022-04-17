import React, { Component } from 'react'
import Logo from '../Assets/small logo.png';

export default class Navbar  extends Component {
  render() {
    return (
       <div> 
          <div classname="leftside">
              <img src={Logo}/>
          </div>

          <div classname="rightside"></div>
        </div>
    )
  }
}
