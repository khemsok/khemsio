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
});

function Experience() {
  const classes = useStyles();

  const timelineObj = {
    dupont: {
      date: "2019 - Present",
      title: "Machine Learning Engineer - DuPont",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quo necessitatibus itaque ipsam soluta eligendi quam doloremque corporis delectus labore possimus sunt porro, accusantium dignissimos?",
      color: "red",
    },
    psu: {
      date: "2014 - 2018",
      title: "Student - Pennsylvania State University",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quo necessitatibus itaque ipsam soluta eligendi quam doloremque corporis delectus labore possimus sunt porro, accusantium dignissimos?",
      color: "blue",
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
      <Container maxWidth="xs">
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
        {/* <div style={{ textAlign: "center", marginTop: "70px" }}>
          <ArrowDownwardIcon fontSize="large" color="primary" />
        </div> */}
      </Container>
    </div>
  );
}

export default Experience;
