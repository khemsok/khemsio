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
    "& a": {
      marginTop: "25px",
    },
  },
  jobTitle: {
    marginBottom: "10px",
  },
});

function Landing() {
  const classes = useStyles();
  return (
    <div>
      <Fade in={true} direction="right" timeout={1000}>
        <div className={classes.container}>
          <div className={classes.textSection}>
            <Typography variant="h1" color="primary">
              Khem Sok
            </Typography>
            <Typography variant="h2" className={classes.jobTitle}>
              Machine Learning Engineer
            </Typography>
            <Typography variant="body1">
              Highly skilled in multitude of different stack. Have a passion for
              learning and creating.
            </Typography>
            <Button
              component={"a"}
              href="mailto:khemsok97@gmail.com"
              size="large"
              variant="contained"
              color="primary"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Landing;
