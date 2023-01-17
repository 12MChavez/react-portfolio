import React from "react";
import "../../bulma/css/bulma.min.css";
import {
  Hero,
  Container,
  Heading,
  Image,
  Columns,
} from "react-bulma-components";
import FooterC from "../../components/Footer";
const AboutMe = (
  <div
    style={{
      marginTop: "10px",
      background: "#7ebc89",
    }}
  >
    <Columns
      desktop={{
        narrow: false,
        offset: 4,
        size: 4,
      }}
      fullhd={{
        narrow: false,
        offset: 0,
        size: 3,
      }}
      mobile={{
        narrow: false,
        offset: 2,
        size: 8,
        textAlign: "center",
        textSize: 3,
      }}
      tablet={{
        narrow: false,
        offset: 3,
        size: 6,
      }}
      widescreen={{
        narrow: false,
        offset: 5,
        size: 2,
      }}
    >
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
              My name is Melissa. I am what some might call a Jill of all
              trades. I did my undergrad at the University of Georgia, and grad
              school at Mercer University. Recently I left the classroom and
              started coding. Keep an eye out for updates to my portfolio.
            </p>
          </Container>
        </Hero.Body>
      </Hero>
    </Columns>
    <FooterC />
  </div>
);

export default AboutMe;
