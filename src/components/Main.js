import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './resume';
import Project from './project';
import AboutMe from './aboutme';
import Contact from './contact';

const Main = () => (
  <Switch>
  < Route exact path= '/' component= {LandingPage}/>
  < Route  path= '/resume' component= {Resume}/>
  < Route  path= '/project' component= {Project}/>
  < Route  path= '/aboutme' component= {AboutMe}/>
  < Route  path= '/contact' component= {Contact}/>

  </Switch>
)
export default Main;
