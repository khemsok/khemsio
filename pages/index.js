import React, { useEffect, useState } from "react";

// Components
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

// MUI
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Home({ theme, handleThemeChange }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  const displayApp = isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <CircularProgress color="primary" style={{ marginBottom: "20px" }} />
    </div>
  ) : (
    <>
      <Navbar theme={theme} handleThemeChange={handleThemeChange} />

      <Container maxWidth="md">
        <Landing />
        <About theme={theme} />
        <Experience theme={theme} />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );

  return <>{displayApp}</>;
}
