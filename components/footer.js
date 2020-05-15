import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

// MUI
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

function Footer() {
  const [viewStatusOne, setViewStatusOne] = useState(false);

  const handleEnteringOne = () => {
    setViewStatusOne(true);
  };
  return (
    <>
      <Waypoint onEnter={handleEnteringOne} />
      <Fade in={viewStatusOne} timeout={1000}>
        <div style={{ padding: "20px" }}>
          <Typography
            variant="body2"
            align="center"
            style={{ marginBottom: "10px" }}
          >
            Built with 💖 using NextJS by Khem Sok 🎯
          </Typography>
        </div>
      </Fade>
    </>
  );
}

export default Footer;
