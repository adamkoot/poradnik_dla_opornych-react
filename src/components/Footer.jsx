import React from "react";
import Grid from "@material-ui/core/Grid";
import "../css/footer.css"
export default function Footer(props) {
  return (
    <Grid container alignItems="center" justify="center" align="center" className="footer">
      <Grid item xs={12}>
      <p>Copyright © 2020 Adam Kot</p>
      </Grid>
    </Grid>
  );
}
