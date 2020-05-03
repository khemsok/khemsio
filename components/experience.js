import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

import { makeStyles } from "@material-ui/core/styles";

// MUI Icons
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

// Theme
import { light, dark } from "../src/theme";

const useStyles = makeStyles({
  container: {
    padding: "100px 0",
  },
  experiencImagesDiv: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    ["@media (max-width: 960px)"]: {
      justifyContent: "center",
    },
    "& img": {
      padding: "20px",
      opacity: "0.6",
      width: "200px",
      cursor: "pointer",
      transition: "all .15s ease-in-out",
      "&:hover": {
        opacity: "1",
        filter: "brightness(150%)",
      },
    },
  },
});

function Experience({ theme }) {
  const primaryColor =
    theme === "light" ? light.palette.primary.main : dark.palette.primary.main;
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

  const timelineObj = {
    dupont: {
      date: "2019 - Present",
      title: "Machine Learning Engineer - DuPont",
      description:
        "My role at DuPont is unique as it allows me to have the opportunities to work on various stack and utilize my flexible skillset. My role goes beyond just Machine Learning/Data Science, I contribute majorly with Data Engineering as well as Full Stack Development. I am an asset to every team as my knowledge based are sound.",
    },
    psu: {
      date: "2014 - 2018",
      title: "Student - Pennsylvania State University",
      description:
        "I studied computer engineering at Penn State. During my time there, I held various teacher assistant positions for a multitude of different computer science courses, helping students with homeworks/projects as well as professors to create and design curriculum from semester to semesters. #WEARE",
    },
  };

  const timelineMap = Object.keys(timelineObj).map((element, index) => (
    <div key={index}>
      {element === "dupont" ? (
        <Waypoint onEnter={handleEnteringThree} />
      ) : (
        <Waypoint onEnter={handleEnteringFour} />
      )}
      <Fade
        in={element === "dupont" ? viewStatusThree : viewStatusFour}
        timeout={1000}
      >
        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            borderLeft: `2px solid ${primaryColor}`,
          }}
        >
          <Typography variant="body2" color="primary">
            {timelineObj[element].date}
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: "700", marginBottom: "20px" }}
          >
            {timelineObj[element].title}
          </Typography>
          <Typography variant="body1">
            {timelineObj[element].description}
          </Typography>
        </div>
      </Fade>
    </div>
  ));
  return (
    <div className={classes.container} id="experience">
      {/* <Container maxWidth="xs"> */}
      <Waypoint onEnter={handleEnteringOne} />
      <div style={{ maxWidth: "700px" }}>
        <Fade in={viewStatusOne} timeout={1000}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h3" style={{ display: "inline" }}>
                Experience
              </Typography>
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
              Professional Timeline
            </Typography>
            <Typography variant="h5">What I've Done</Typography>
          </div>
        </Fade>
        {timelineMap}
        <Waypoint onEnter={handleEnteringFive} />
        <Fade in={viewStatusFive} timeout={1000}>
          <div className={classes.experiencImagesDiv}>
            <a href="https://www.psu.edu/" target="_blank">
              <img src="/images/pennstate.svg" />
            </a>

            <a href="https://www.dupont.com/" target="_blank">
              <img src="/images/DuPont.svg" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Experience;
