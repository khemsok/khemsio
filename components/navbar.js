import React, { useState, useEffect } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// MUI Icon
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  navMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 16px",
    position: "fixed",
    width: "100%",
    top: "0",
    transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
    boxShadow: " 0px 1px 10px #999",
    backgroundColor: "white",
    zIndex: "9999",
    "& h1": {
      fontSize: "3em",
    },
  },

  navSection: {
    display: "none",
    "& p": {
      padding: "0 10px",
    },
    ["@media (min-width: 960px)"]: {
      display: "flex",
    },
    "& a": {
      textDecoration: "none",
      cursor: "pointer",
      "&:visited": {
        color: "inherit",
      },
      "&:hover": {
        color: "red",
      },
    },
  },
  navButton: {
    ["@media (min-width: 960px)"]: {
      display: "none",
    },
  },
});

function Navbar() {
  const classes = useStyles();

  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
  }, []);

  useEffect(() => {
    if (prevScrollPos !== null) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <div
      className={classes.navMain}
      style={
        !visible
          ? { top: "-100px", boxShadow: "none" }
          : prevScrollPos === 0
          ? { boxShadow: "none" }
          : null
      }
    >
      <Typography variant="h1">K</Typography>
      <div className={classes.navSection}>
        <a href="#">
          <Typography>About Me</Typography>
        </a>
        <a href="#">
          <Typography>Experience</Typography>
        </a>

        <a href="#">
          <Typography>Projects</Typography>
        </a>
        <a href="#">
          <Typography>Contact</Typography>
        </a>
      </div>
      <div className={classes.navButton}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Navbar;
