import React from "react";
import "../../bulma/css/bulma.min.css";
import { Hero, Container, Heading, Image } from "react-bulma-components";
import FooterC from "../../components/Footer";
const AboutMe = (
  <div>
    <Hero>
      <Hero.Body>
        <Container>
          <Image
            alt="profile pic"
            src={require(`./profilePicture.jpg`)}
            rounded
            size={64}
          />
          <Heading size={5}>Bio</Heading>
          <p>
            My name is Melissa. I am what some might call a Jill of all trades.
            I did my undergrad at the University of Georgia, and grad school at
            Mercer University. Recently I left the classroom and started coding.
            Keep an eye out for updates to my portfolio.
          </p>
        </Container>
      </Hero.Body>
    </Hero>
    <FooterC />
  </div>
);

export default AboutMe;
