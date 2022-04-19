import React, { Component } from 'react'
import '../Styles/Home.css';
import HomeImage from '../Assets/types of hair.jpg';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
     <div classname="WelcomeScreen">
          <h1>HAIR IS FAIR DARLINGS</h1>
          <img src={HomeImage}/>
          <Link to="/NetArtHair">
          <button> See More</button>
          </Link>
     </div>
    )
  }
}
