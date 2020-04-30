import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function Contact() {
  const classes = useStyles();

  const [viewStatusOne, setViewStatusOne] = useState(false);
  const [viewStatusTwo, setViewStatusTwo] = useState(false);

  const handleEnteringOne = () => {
    setViewStatusOne(true);
  };
  const handleEnteringTwo = () => {
    setViewStatusTwo(true);
  };

  return (
    <div className={classes.container} id="contact">
      <Waypoint onEnter={handleEnteringOne} />
      <Fade in={viewStatusOne} timeout={1000}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h3" style={{ marginBottom: "20px" }}>
            Contact
          </Typography>

          <LinearProgress style={{ width: "100px" }} />
        </div>
      </Fade>

      <Waypoint onEnter={handleEnteringTwo} />

      <Fade in={viewStatusTwo} timeout={1000}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{ marginBottom: "30px" }}
          >
            If you would like to say hi or want to collab, send me a note via
            email.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ display: "block", margin: "0 auto" }}
          >
            Say Hi 👋
          </Button>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
