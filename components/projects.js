import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    paddingTop: "150px",
    paddingBottom: "100px",
  },
  viewMore: {
    marginTop: "50px",
  },
});

function Projects() {
  const classes = useStyles();

  const [viewStatusOne, setViewStatusOne] = useState(false);
  const [viewStatusTwo, setViewStatusTwo] = useState(false);
  const [viewStatusThree, setViewStatusThree] = useState(false);
  const [viewStatusFour, setViewStatusFour] = useState(false);
  const [viewStatusFive, setViewStatusFive] = useState(false);

  const handleEnteringOne = () => {
    setViewStatusOne(true);
  };
  const handleEnteringTwo = () => {
    setViewStatusTwo(true);
  };
  const handleEnteringThree = () => {
    setViewStatusThree(true);
  };

  const handleEnteringFour = () => {
    setViewStatusFour(true);
  };

  const handleEnteringFive = () => {
    setViewStatusFive(true);
  };

  const imgList = [
    "fer_ss1.jpg",
    "filmlookup_ss1.png",
    "lookupyourgithub_ss1.png",
    "covid19ruinmysummer_ss1.png",
  ];
  const imgDir = "/images/";

  const projectMap = imgList.map((element, index) => (
    <Grid item xs={12} md={6}>
      {(index === 0) | (index === 1) ? (
        <Waypoint onEnter={handleEnteringThree} />
      ) : (
        <Waypoint onEnter={handleEnteringFour} />
      )}
      <Fade
        in={(index === 0) | (index === 1) ? viewStatusThree : viewStatusFour}
        timeout={1000}
        style={(index === 1) | (index === 3) ? { transitionDelay: ".3s" } : {}}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={imgDir.concat(element)}
              style={{
                minHeight: "400px",
                boxShadow:
                  " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                borderRadius: "5px",
              }}
            />
          </CardActionArea>
        </Card>
      </Fade>
    </Grid>
  ));

  return (
    <div className={classes.container} id="projects">
      <Waypoint onEnter={handleEnteringOne} />
      <Fade in={viewStatusOne} timeout={1000}>
        <div>
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
        </div>
      </Fade>
      <Waypoint onEnter={handleEnteringTwo} />

      <Fade in={viewStatusTwo} timeout={1000}>
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="h6" color="primary">
            Personal Projects
          </Typography>
          <Typography variant="h5">What I've Built</Typography>
        </div>
      </Fade>

      <Grid container spacing={4}>
        {projectMap}
      </Grid>
      <Waypoint onEnter={handleEnteringFive} />
      <Fade in={viewStatusFive} timeout={1000}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            component={"a"}
            className={classes.viewMore}
            href="https://github.com/khemsok"
            target="_blank"
          >
            View More
          </Button>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
