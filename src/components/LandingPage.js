import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: "100%", margin:"auto"}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
           src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-512.png"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
          <h1> Full Stack Developer</h1>
          <hr/>
          <p>HTML/CSS |Bootstrap | JavaScript | React | NodeJs | Express | MongODB</p>
          <div className="social-links">

          <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
          <i className="fa fa-linkedin-square" aria-hidden="true"/>

          <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
          <i className="fa fa-github-square" aria-hidden="true"/>

          <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
          <i className="fa fa-free-code-camp" aria-hidden="true"/>

          <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
          <i className="fa fa-youtube-square" aria-hidden="true"/>
          </div>

          </div>
        </Cell>
    </Grid>
      </div>
    )
  }
}
export default LandingPage;
