import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "150px 0",
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.container} id="projects">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          whiteSpace: "nowrap",
        }}
      >
        <Typography variant="h3">Projects</Typography>
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
      <Container></Container>
      <div style={{ marginBottom: "30px" }}>
        <Card style={{ borderRadius: 0, boxShadow: "none" }}>
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              🍿
            </Typography>

            <Typography variant="h5" align="center">
              FilmLookUp
            </Typography>
            <Typography variant="body2" align="center">
              <strong>2020</strong>
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/images/filmlookup_ss1.png"
              style={{ minHeight: "400px" }}
            />
          </CardActionArea>
          <CardContent>
            <div
              style={{
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, in provident. Architecto dolor sunt laboriosam
                distinctio ducimus aut exercitationem animi, facilis eos
                repudiandae libero adipisci.
              </Typography>
              <Typography variant="body2">
                React JS, React Router, TMDB API
              </Typography>
              {/* <div style={{ display: "flex" }}>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  ReactJS
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  React Router
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  TMDB API
                </Typography>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Card style={{ borderRadius: 0, boxShadow: "none" }}>
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              👀
            </Typography>

            <Typography variant="h5" align="center">
              LookUpYourGitHub
            </Typography>
            <Typography variant="body2" align="center">
              <strong>2020</strong>
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/images/lookupyourgithub_ss1.png"
              style={{ minHeight: "400px" }}
            />
          </CardActionArea>
          <CardContent>
            <div
              style={{
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, in provident. Architecto dolor sunt laboriosam
                distinctio ducimus aut exercitationem animi, facilis eos
                repudiandae libero adipisci.
              </Typography>
              <div style={{ display: "flex" }}>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  ReactJS
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  React Router
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  TMDB API
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Card style={{ borderRadius: 0, boxShadow: "none" }}>
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              👿
            </Typography>

            <Typography variant="h5" align="center">
              Covid 19 Tracker
            </Typography>
            <Typography variant="body2" align="center">
              <strong>2020</strong>
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/images/covid19ruinmysummer_ss1.png"
              style={{
                minHeight: "400px",
              }}
            />
          </CardActionArea>
          <CardContent>
            <div
              style={{
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, in provident. Architecto dolor sunt laboriosam
                distinctio ducimus aut exercitationem animi, facilis eos
                repudiandae libero adipisci.
              </Typography>
              <div style={{ display: "flex" }}>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  ReactJS
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  React Router
                </Typography>
                <Typography variant="body2" style={{ marginRight: "15px" }}>
                  TMDB API
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
