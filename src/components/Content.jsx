import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FastForwardIcon from "@material-ui/icons/FastForward";
import GroupIcon from "@material-ui/icons/Group";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import "../css/welcome.css";

export default function Content(props) {
  return (
    <Grid container alignItems="center" justify="center" align="center">
      <Grid item xs={12} className="welcome">
        <Typography variant="h3">REACT.JS</Typography>
        <br />
        <Typography variant="h4">Czemu akurat on?</Typography>
      </Grid>
      <Grid item xs={3} className="card">
        <CardContent>
          <FastForwardIcon fontSize="large" />
          <br />
          <br />
          {'Ma wysoką wydajność, opiera się na domenie wirtualnej'}
        </CardContent>
      </Grid>
      <Grid item xs={3} className="card">
        <CardContent>
          <AutorenewIcon fontSize="large" />
          <br />
          <br />
          {'Jego komponenty moga być ponownie używane w kodzie'}
        </CardContent>
      </Grid>
      <Grid item xs={3} className="card">
        <CardContent>
          <GroupIcon fontSize="large" />
          <br />
          <br />
          {
            'Jest stabilny, towrzy go Facebook cały czas go rozwijając'
          }
        </CardContent>
      </Grid>
      <Grid item xs={3} className="card">
        <CardContent>
          <FastForwardIcon fontSize="large" />
          <br />
          <br />
          {'Może być używany przez początkujących programistów'}
        </CardContent>
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <br />
      </Grid>
      <Grid item xs={12} className="linki">
        <b>Przydatne linki: </b>
        <Grid item xs={6} className="linki">
          <a href="https://github.com/adamkoot" style={{ color: "blue" }}>
            Mój github (ciekawe projekty :D)
          </a>
        </Grid>
        <Grid item xs={6} className="linki">
          <a href="https://pl.reactjs.org/" style={{ color: "blue" }}>
            Dokumentacja Reacta w języku polskim
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
