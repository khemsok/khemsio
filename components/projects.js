import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.container} id="projects">
      <Typography variant="h2">Projects</Typography>
    </div>
  );
}

export default Projects;
