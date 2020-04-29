import React from "react";

// Components
import Navbar from "../components/navbar";
import Landing from "../components/landing";
import About from "../components/about";

// MUI
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container maxWidth="md">
        <Landing />
        <About />
      </Container>
    </>
  );
}
