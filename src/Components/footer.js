import React, { Component } from 'react'
import '../Styles/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


export default class footer extends Component {
  render() {
    return (
      <div className='Footer'>
          <div className='SocialMedia'>
              <p>@Copy Hair is Fair 2022</p>
            <InstagramIcon/> <TwitterIcon/> <FacebookIcon/>            
          </div>
      </div>
    )
  }
}
