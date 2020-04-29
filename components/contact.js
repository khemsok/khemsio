import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
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
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" style={{ display: "inline" }}>
          Contact
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
  );
}

export default Contact;
