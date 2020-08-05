import React, { useState } from "react";

import { Waypoint } from "react-waypoint";
import { light, dark } from "../src/theme";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

import { makeStyles } from "@material-ui/core/styles";

// MUI Icons
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  container: {
    padding: "100px 0",
  },
  titleNumber: {
    display: "inline",
    fontSize: "2rem",
  },
  contentDescription: {
    maxWidth: "700px",
  },
  cvSection: {
    display: "flex",
    alignItems: "center",
  },
  socialMediaDiv: {
    marginLeft: "23px",
    "& a": {
      color: "inherit",
      margin: "0 7px",
      cursor: "pointer",
      transition: "all .15s ease-in-out",
    },
    "& a:hover": {
      color: (props) => props.primaryColor,
    },
  },
  horizontalBar: {
    marginLeft: "30px",
    width: "50px",
    height: "2px",
    backgroundColor: "#9f9f9f",
  },
});

function About({ theme }) {
  const primaryColor =
    theme === "light" ? light.palette.primary.main : dark.palette.primary.main;

  const classes = useStyles({ primaryColor });
  const [viewStatusOne, setViewStatusOne] = useState(false);
  const [viewStatusTwo, setViewStatusTwo] = useState(false);
  const [viewStatusThree, setViewStatusThree] = useState(false);
  const [viewStatusFour, setViewStatusFour] = useState(false);

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

  const skillList = {
    Python: "Highly Skilled",
    JavaScript: "Highly Skilled",
    Java: "Proficient",
    Spark: "Proficient",
    PyTorch: "Proficient",
    "Azure/AWS": "Highly Skilled",
    Docker: "Proficient",
    "React/Redux": "Highly Skilled",
    NodeJS: "Highly Skilled",
    SQL: "Highly Skilled",
    "No-SQL": "Proficient",
    "Database Design": "Proficient",
  };

  const skillListMap = Object.keys(skillList).map((element, index) => {
    return (
      <Grid item lg={4} sm={6} xs={12} key={index}>
        <ArrowRightIcon color="primary" style={{ verticalAlign: "middle" }} />
        <Tooltip title={skillList[element]} placement="top-start">
          <Typography
            variant="body2"
            style={{ fontSize: ".9em", display: "inline" }}
          >
            {element}
          </Typography>
        </Tooltip>
      </Grid>
    );
  });
  return (
    <div className={classes.container} id="about-me">
      <Waypoint onEnter={handleEnteringOne} />
      <div className={classes.contentDescription}>
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
              <Typography variant="h3">About Me</Typography>
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
        <div style={{ marginBottom: "20px" }}>
          {/* UPDATE TO STYLED*/}
          <Fade in={viewStatusTwo} timeout={1000}>
            <div>
              <Typography
                variant="h6"
                color="primary"
                style={{ marginBottom: "5x" }}
              >
                Who am I?
              </Typography>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                I'm Khem Sok and I'm a Machine Learning Engineer
              </Typography>

              <Typography variant="body1">
                I graduated from{" "}
                <Typography
                  color="primary"
                  component={"span"}
                  style={{ fontWeight: "700" }}
                >
                  Penn State University
                </Typography>{" "}
                with a degree in Computer Engineering. During my time at Penn
                State, I enjoy learning about various stacks which allows me to
                be well-versed in many different fields of tech. I am currently
                working at{" "}
                <Typography
                  color="primary"
                  component={"span"}
                  style={{ display: "inline", fontWeight: "700" }}
                >
                  DuPont
                </Typography>{" "}
                and my role allows me to be at the forefront of helping
                businesses across DuPont to increase revenue with the usage of
                data.
              </Typography>
            </div>
          </Fade>
        </div>
        <Waypoint onEnter={handleEnteringThree} />
        <Fade in={viewStatusThree} timeout={1000}>
          <div>
            <div style={{ maxWidth: "500px", marginBottom: "50px" }}>
              {/* CHANGE TO STYLED*/}
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                Here are some technologies I am well-versed in:
              </Typography>
              <Grid container>{skillListMap}</Grid>
            </div>
          </div>
        </Fade>

        <Waypoint onEnter={handleEnteringFour} />
        <Fade in={viewStatusFour} timeout={1000}>
          <div className={classes.cvSection}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              component={"a"}
              href="/documents/khem_sok.pdf"
              target="_blank"
            >
              Download CV
            </Button>
            <div className={classes.horizontalBar} />
            <div className={classes.socialMediaDiv}>
              <a href="https://www.linkedin.com/in/khem-sok/" target="_blank">
                <Tooltip title="LinkedIn" placement="top">
                  <LinkedInIcon />
                </Tooltip>
              </a>
              <a href="https://www.instagram.com/_aceeeeeee_/" target="_blank">
                <Tooltip title="Instagram" placement="top">
                  <InstagramIcon />
                </Tooltip>
              </a>
              <a href="https://github.com/khemsok" target="_blank">
                <Tooltip title="GitHub" placement="top">
                  <GitHubIcon />
                </Tooltip>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
