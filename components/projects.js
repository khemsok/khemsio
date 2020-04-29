import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          whiteSpace: "nowrap",
        }}
      >
        <Typography variant="h3">Projects</Typography>
        <div
          style={{
            height: "2px",
            backgroundColor: "grey",
            width: "100%",
            display: "inline-block",
            marginLeft: "20px",
            maxWidth: "250px",
          }}
        />
      </div>

      <LinearProgress style={{ width: "100px", marginBottom: "30px" }} />
      <div>
        <Typography
          variant="body1"
          align="center"
          style={{ marginBottom: "10px" }}
        >
          2020
        </Typography>
        <Typography
          variant="h3"
          align="center"
          style={{
            marginBottom: "10px",
          }}
        >
          🎬
        </Typography>
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "30px", fontWeight: "700" }}
        >
          FilmLookUp
        </Typography>
        <img
          src="https://github.com/khemsok/filmlookup/raw/master/static/images/screenshot1.png"
          style={{
            maxWidth: "100%",
            marginBottom: "30px",
          }}
        />
        <Container maxWidth="xs">
          <Typography variant="body1">Description: </Typography>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
