import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.container} id="experience">
      <Typography variant="h2">Experience</Typography>
    </div>
  );
}

export default Experience;
