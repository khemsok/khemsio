import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";

function Footer() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="body2"
        align="center"
        style={{ marginBottom: "10px" }}
      >
        Built with 💖 & NextJS By Khem Sok 🎯
      </Typography>
      {/* <Typography variant="body2" align="center">
        Developed by Khem Sok 🎯
      </Typography> */}
    </div>
  );
}

export default Footer;
