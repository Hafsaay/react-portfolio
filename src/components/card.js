import React, {Component} from 'react';
import { Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';
import logo from '../images/logo.png';
import r_logo from '../images/r_logo.png';
import mongo from '../images/mongo.png';
class Cardd extends Component{
  render(){
    return(
        <div>
          <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
      <CardTitle style={{color: 'black', height: '176px', background:"url(" + this.props.bimg + ") center / cover"}}>{this.props.projectName}</CardTitle>
      <CardText>
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>FreeCamp</Button>
      </CardActions>
      <CardMenu style={{color: 'black'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card>
</div>
    )
  }
}
export default Cardd;
// background:"url(" + this.props.bimg + ") center / cover"
