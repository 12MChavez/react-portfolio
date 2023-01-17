import React from "react";
import "../bulma/css/bulma.min.css";
import FooterC from "../components/Footer";
import {
  Heading,
  Columns,
  Box,
  Block,
  Notification,
  Image,
} from "react-bulma-components";

const Resume = (
  <div>
    <Columns>
      <Columns.Column offset={1} size={4}></Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={4} offset={1}>
        <Notification color="primary">
          <Heading size={5}>Skills: </Heading>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Liquid</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Git</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>mysql</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Insomnia</li>
            <li>TDD</li>
            <li>React.js</li>
            <li>Redux</li>
          </ul>
        </Notification>
      </Columns.Column>
      <Columns.Column size={4} offset={1}>
        <Notification color="primary">
          <Box>
            <a href={require("../assets/resume.pdf")} download>
              <Block>
                <Image
                  alt="resume-image"
                  src={require("../assets/images/resume.jpg")}
                />
              </Block>
            </a>
            <Block>Click image to download a copy of my resume.</Block>
          </Box>
        </Notification>
      </Columns.Column>
    </Columns>

    <FooterC />
  </div>
);

export default Resume;
