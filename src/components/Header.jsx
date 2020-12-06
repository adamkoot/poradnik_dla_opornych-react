import React from "react";
import Grid from "@material-ui/core/Grid";
import "../css/header.css";
class Header extends React.Component {
  render(){
  return (
      <Grid container alignItems="center" justify="center" className="top">
        <Grid item xs={3} >
            <a href="#" onClick={this.props.zero}><img src="../../a.png" className="resp"/></a>
        </Grid>
        <Grid item xs={2} >
        <a href="#" onClick={this.props.zero}>Słowem wstępu</a>
        </Grid>
        <Grid item xs={2}>
        <a href="#" onClick={this.props.one}>Zaczynamy!</a>
        </Grid>
        <Grid item xs={2}>
        <a href="#" onClick={this.props.two}>Język JSX</a>
        </Grid>
        <Grid item xs={2}>
        <a href="#" onClick={this.props.three}>Komponenty</a>
        </Grid>
      </Grid>
    
  );}
}

export default Header;
