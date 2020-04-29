import React, { useState, useEffect } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

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
    transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
    backgroundColor: "white",
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
      color: "inherit",
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
  navHamburger: {
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "&:visited": {
        color: "inherit",
      },
    },
  },
});

function Navbar() {
  const classes = useStyles();

  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const [visible, setVisible] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    setVisible(window.pageYOffset < 50);
  }, []);

  useEffect(() => {
    if (prevScrollPos !== null) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  const sectionIdDict = {
    "About Me": "#about-me",
    Experience: "#experience",
    Projects: "#projects",
    Contact: "#contact",
  };

  const hamburger = (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.navHamburger}
      >
        {Object.keys(sectionIdDict).map((element, index) => (
          <MenuItem onClick={handleClose}>
            <a href={sectionIdDict[element]}>{element}</a>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <Grow in={true} timeout={1000}>
      <div>
        <div
          className={classes.navMain}
          style={!visible ? { top: "-100px" } : {}}
        >
          <Typography variant="h1">K</Typography>
          <div className={classes.navSection}>
            {Object.keys(sectionIdDict).map((element, index) => (
              <a href={sectionIdDict[element]} key={index}>
                <Typography>{element}</Typography>
              </a>
            ))}
          </div>
          <div className={classes.navButton}>{hamburger}</div>
        </div>
      </div>
    </Grow>
  );
}

export default Navbar;
