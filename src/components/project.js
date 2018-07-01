import React, { Component } from 'react';
import logo from '../images/logo.png';
import r_logo from '../images/r_logo.png';
import mongo from '../images/mongo.png';
import Cardd from './card';
import { Tabs,Tab, Grid, Cell } from 'react-mdl';
class Project extends Component {
  constructor(props){
    super(props);
    this.state={ activeTab:0};
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div style={{display:'flex' , justifyContent:'space-between'}}>
          <Cardd
            bimg={r_logo}
            projectName="React Project #1"/>
            <Cardd
            bimg={r_logo}
            projectName="React Project #2"/>
          <Cardd
            bimg={r_logo}
            projectName="React Project #3"/>
        </div>
      )
    }
    else if(this.state.activeTab === 1) {
      return(
        <div style={{display:'flex' , justifyContent:'space-between'}}>
          <Cardd
            bimg={mongo}
            projectName="MongoDB Project #1"/>
            <Cardd
            bimg={mongo}
            projectName="MongoDB Project #2"/>
          <Cardd
            bimg={mongo}
            projectName="MongoDB Project #3"/>
        </div>
      )
    }

    else if(this.state.activeTab === 2) {
      return(
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Cardd
            bimg={logo}
            projectName="Angular Project #1"/>
            <Cardd
            bimg={logo}
            projectName="Angular Project #2"/>
          <Cardd
            bimg={logo}
            projectName="Angular Project #3"/>
        </div>
      )
    }

  }

render() {
    return (
      <div className="category-tab">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                   <Tab>React</Tab>
                   <Tab>MongoDB</Tab>
                   <Tab>Angular</Tab>
               </Tabs>
                <Grid>
                  <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                  </Cell>
                </Grid>
      </div>
    )
  }
}
export default Project;
