import React, { Component } from 'react'
import {Bloglist} from '../Helps/BlogsList.js';
import BlogsContent from '../Components/BlogsContent';
import '../Styles/Blogs.css';

export default class Blogs extends Component {
  render() {
    return (
      <div className='Blogs'>
          <h1 className='welcomeTitle'>Welcome to Blogs</h1>
          
          <div className='BlogsIndex'>
            {Bloglist.map((BlogsList, value) => {
              return(
                <BlogsContent title={BlogsContent.title} brief={BlogsContent.brief}/>
              )
            })};
        </div>
      </div>
    )
  }
}
