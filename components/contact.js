import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container} id="contact">
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
      {/* <div style={{ marginBottom: "30px" }}>
        <Typography variant="h6" color="primary" align="center">
          Say Hi
        </Typography>
        <Typography variant="h5" align="center">
          Send Me A Note
        </Typography>
      </div> */}
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
    </div>
  );
}

export default Contact;
