import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

// MUI Icons
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

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
  },
});

function Experience() {
  const classes = useStyles();

  const timelineObj = {
    dupont: {
      date: "2019 - Present",
      title: "Machine Learning Engineer - DuPont",
      description:
        "My role at DuPont is unique as it allows me to have the opportunities to work on various stack and utilize my flexible skillset. My role goes beyond just Machine Learning/Data Science, I contribute majorly with Data Engineering as well as Full Stack Development. I am an asset to every team as my knowledge based are sound.",
      color: "red",
    },
    psu: {
      date: "2014 - 2018",
      title: "Student - Pennsylvania State University",
      description:
        "I studied computer engineering at Penn State. During my time there, I held various teacher assistant positions for a multitude of different computer science courses, helping students with homeworks/projects as well as professors to create and design curriculum from semester to semesters. #WEARE",
      color: "red",
    },
  };

  const timelineMap = Object.keys(timelineObj).map((element, index) => (
    <div
      style={{
        marginBottom: "30px",
        padding: "20px",
        borderLeft: `2px solid ${timelineObj[element].color}`,
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
  ));
  return (
    <div className={classes.container} id="experience">
      {/* <Container maxWidth="xs"> */}
      <div style={{ maxWidth: "700px" }}>
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
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="h6" color="primary">
            Professional Timeline
          </Typography>
          <Typography variant="h5">What I've Done</Typography>
        </div>
        {timelineMap}
        <div className={classes.experiencImagesDiv}>
          <img
            src="/images/pennstate.svg"
            style={{ padding: "20px", opacity: "0.5", width: "200px" }}
          />

          <img
            src="/images/DuPont.svg"
            style={{ padding: "20px", opacity: "0.5", width: "200px" }}
          />
        </div>
      </div>

      {/* <div style={{ textAlign: "center", marginTop: "70px" }}>
          <ArrowDownwardIcon fontSize="large" color="primary" />
        </div> */}
      {/* </Container> */}
    </div>
  );
}

export default Experience;
