import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
        voluptatum quos? Consectetur, molestiae, consequatur perspiciatis,
        maxime nulla doloribus similique minima repellendus voluptates esse
        quidem eius!
      </Typography>
    </div>
  );
}

export default About;
