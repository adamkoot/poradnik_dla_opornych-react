import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import "../css/header.css";
class Header extends React.Component {
  render(){
  return (
      <Grid container alignItems="center" justify="center" className="top">
        <Grid item xs={3} >
            <img src="../../a.png" className="resp" alt="1"/>
        </Grid>
        <Grid item xs={2} >
        <Button onClick={this.props.zero}>Słowem wstępu</Button>
        </Grid>
        <Grid item xs={2}>
        <Button onClick={this.props.one}>Zaczynamy!</Button>
        </Grid>
        <Grid item xs={2}>
        <Button onClick={this.props.two}>Język JSX</Button>
        </Grid>
        <Grid item xs={2}>
        <Button onClick={this.props.three}>Komponenty</Button>
        </Grid>
      </Grid>
    
  );}
}

export default Header;
