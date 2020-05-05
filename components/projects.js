import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

// utils
import { projects } from "../utils/projects";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

// MUI Icon
import InfoIcon from "@material-ui/icons/Info";

// Theme
import { light, dark } from "../src/theme";

const useStyles = makeStyles({
  container: {
    paddingTop: "150px",
    paddingBottom: "100px",
  },
  viewMore: {
    marginTop: "50px",
  },
  projectBox: {
    position: "relative",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all .4s ease",
    boxShadow:
      "0 1px 1px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1), 0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.1)",
    "& a": {
      color: "inherit",
    },
    "&:hover": {
      backgroundColor: (props) => props.primaryColor,
      transform: "scale(0.95)",
      "& $imageBackground": {
        opacity: ".5",
        filter: "blur(1px)",
      },
      "& $title": {
        opacity: "1",
        filter: "blur(0px)",
      },
      "& $description": {
        opacity: "1",
      },
      "& $techStack": {
        opacity: "1",
      },
    },
  },
  imageBackground: {
    display: "block",
    width: "100%",
    minHeight: "450px",
    objectFit: "cover",
    borderRadius: "5px",
    transition: "all .4s ease-in-out",
  },
  projectMeta: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
  },
  title: {
    opacity: "0",
    transition: "all .4s ease-in-out",
    // -webkit-filter: blur(5px),
    filter: "blur(5px)",
    textTransform: "uppercase",
    fontFamily: "Roboto Condensed",
    // textShadow:
    //   "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)",
  },
  description: {
    transition: "all .5s ease-in-out",
    opacity: "0",
  },
  techStack: {
    transition: "all .5s ease-in-out",
    opacity: "0",
  },
});

function Project({
  imgDir,
  project: { title, description, imgSrc, techStack, url },
  theme,
}) {
  const primaryColor =
    theme === "light" ? light.palette.primary.main : dark.palette.primary.main;

  const classes = useStyles({ primaryColor });
  const [viewStatus, setViewStatus] = useState(false);
  const handleEntering = () => {
    setViewStatus(true);
  };

  return (
    <Grid item xs={12} md={6}>
      <Waypoint onEnter={handleEntering} />
      <Fade in={viewStatus} timeout={1000}>
        <div>
          <div className={classes.projectBox}>
            <a href={url} target="_blank">
              <img
                src={imgDir.concat(imgSrc)}
                className={classes.imageBackground}
              />
              <div className={classes.projectMeta}>
                <Typography
                  variant="h4"
                  className={classes.title}
                  align="center"
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                  align="center"
                >
                  {description}
                </Typography>
              </div>
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  className={classes.techStack}
                  align="center"
                >
                  {techStack}
                </Typography>
              </div> */}

              <div
                style={{ position: "absolute", bottom: "10px", right: "10px" }}
              >
                <Tooltip title="Click me!" placement="top">
                  <InfoIcon />
                </Tooltip>
              </div>
            </a>
          </div>
        </div>
      </Fade>
    </Grid>
  );
}

function Projects({ theme }) {
  const classes = useStyles();

  const [viewStatusOne, setViewStatusOne] = useState(false);
  const [viewStatusTwo, setViewStatusTwo] = useState(false);

  const [viewStatusFive, setViewStatusFive] = useState(false);

  const handleEnteringOne = () => {
    setViewStatusOne(true);
  };
  const handleEnteringTwo = () => {
    setViewStatusTwo(true);
  };

  const handleEnteringFive = () => {
    setViewStatusFive(true);
  };

  const imgDir = "/images/";

  const projectMap = Object.keys(projects).map((element, index) => (
    <Project
      imgDir={imgDir}
      project={projects[element]}
      key={index}
      theme={theme}
    />
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
            View More At GitHub
          </Button>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
