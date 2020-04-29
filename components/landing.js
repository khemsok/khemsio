import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  textSection: {
    "& button": {
      marginTop: "25px",
    },
  },
});

function Landing() {
  const classes = useStyles();
  return (
    <Fade in={true} direction="right" timeout={1000}>
      <div className={classes.container}>
        <div className={classes.textSection}>
          <Typography variant="body1">My name is</Typography>
          <Typography variant="h1" color="primary">
            Khem Sok
          </Typography>
          <Typography variant="h2">Machine Learning Engineer</Typography>
          <Typography variant="body2">
            Highly skilled in multitude of different stack. Have a passion for
            learning and creating.
          </Typography>
          <Button variant="outlined" color="primary">
            Contact Me
          </Button>
        </div>
      </div>
    </Fade>
  );
}

export default Landing;
