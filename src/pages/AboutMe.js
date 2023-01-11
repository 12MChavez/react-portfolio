import React from "react";
import "../bulma/css/bulma.min.css";
import { Hero, Container, Heading } from "react-bulma-components";
import Footer from "../components/Footer";
const AboutMe = (
  <div
    style={{
      margin: "-1rem",
    }}
  >
    <Hero>
      <Hero.Body>
        <Container>
          <Heading size={5}>Personal Portfolio</Heading>
          <Heading size={3} subtitle>
            Melissa Chavez
          </Heading>
          <p color="primary">
            My name is Melissa. I am what some might call a Jill of all trades.
            I did my undergrad at the University of Georgia, and grad school at
            Mercer University. Recently I left the classroom and started coding.
            Keep an eye out for updates to my portfolio.
          </p>
        </Container>
      </Hero.Body>
    </Hero>
    <Footer />
  </div>
);

export default AboutMe;
