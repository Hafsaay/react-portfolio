import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
  render() {
    return(


          <div>
          <Grid>
            <Cell col={12}>
              <h1 style={{ fontFamily:'Anton', textAlign:'center'}}>About me</h1>
            </Cell>
            <Cell col={6}>
              <h2 style={{textAlign:'center', fontFamily:'Oxygen', fontSize:'30px' }}>Hafsa Shaikh</h2>
              <hr style={{borderTop:'3px dotted darkblue', width:'50%',margin:'auto'}}/>
              <h3 style={{textAlign:'center', fontFamily:'Oxygen', fontSize:'25px' }}>Web Developer</h3>
              <hr style={{borderTop:'3px dotted darkblue', width:'50%',margin:'auto'}}/>
               <p style={{textAlign:'center', fontFamily:'Oxygen'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                 <div className="likes">
                   <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
                   <i className="fa fa-thumbs-up" aria-hidden="true"/>
                     <a href="https://google.com" rel="noopener noreferrer" target="_blank"></a>
                     <i className="fa fa-thumbs-down" aria-hidden="true"/>
                 </div>
      </Cell>
        <Cell col={6}>
          <div className='side-img'>
            <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-512.png"/>
          </div>
        </Cell>
          </Grid>

      </div>


    )
  }
}
export default About;
