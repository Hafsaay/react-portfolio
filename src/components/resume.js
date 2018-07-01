import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign:'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-512.png"
               alt="avatar"
                style={{height:'200px'}}
                />
            </div>
            <h2 style={{padding:'1em'}}>Hafsa Shaikh</h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <h5>Addres</h5>
            <p>Block No # 59,Street No # 3,Dawood Mention,Doc's Colony Hirabad, Hyderabad</p>
            <h5>Phone</h5>
            <p>0336-3910246</p>
            <h5>Email</h5>
            <p>hafsa.shaikh76.hs@gmail.com</p>
            

          </Cell>

          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>

          <Education
            startYear={2001}
            endYear={2011}
            schoolName="The City School"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            <Education
              startYear={2015}
              endYear={2018}
              schoolName="MUET"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            <hr style={{ borderTop: '3px solid #e22947'}}/>

          <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={2018}
              officeName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <Experience
                startYear={2015}
                endYear={2018}
                officeName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={100}
                />
                <Skills
                  skill="JavaScript"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={75}
                    />
                    <Skills
                      skill="ReactJS"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
