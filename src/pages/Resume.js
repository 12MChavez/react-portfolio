import React from "react";
import "../bulma/css/bulma.min.css";
import FooterC from "../components/Footer";
import {
  Heading,
  Columns,
  Content,
  Box,
  Block,
  Image,
} from "react-bulma-components";

const Resume = (
  <div
    style={{
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10px",
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
      <Columns.Column size={4} offset={1}>
        <Box>
          <a href={require("../assets/resume.pdf")} download>
            <Block>
              <Image
                alt="resume-image"
                src={require("../assets/images/resume.jpg")}
              />
            </Block>
          </a>
          <Block className="download-msg">
            Click image to download a copy of my resume.
          </Block>
        </Box>

        <Heading
          className="skillsHeader"
          mobile={{}}
          desktop={{
            only: true,
            display: "flex",
            textAlign: "center",
          }}
          widescreen={{ display: "inline" }}
        >
          Here are some technologies I have worked with:
        </Heading>
        <Content
          size={5}
          desktop={{
            only: true,
            display: "flex",
            textAlign: "center",
          }}
          widescreen={{ display: "inline" }}
        >
          <ul style={{ margin: "30px" }} className="skillsUl">
            <li className="skills">HTML</li>
            <li className="skills">CSS</li>
            <li className="skills">JavaScript</li>
            <li className="skills">Liquid</li>
            <li className="skills">jQuery</li>
            <li className="skills">Bootstrap</li>
            <li className="skills">Bulma</li>
            <li className="skills">Git</li>
            <li className="skills">Python</li>
            <li className="skills">Node.js</li>
            <li className="skills">Express.js</li>
            <li className="skills">MySQL</li>
            <li className="skills">Sequelize</li>
            <li className="skills">NoSQL</li>
            <li className="skills">MongoDB</li>
            <li className="skills">Insomnia</li>
            <li className="skills">TDD</li>
            <li className="skills">React.js</li>
            <li className="skills">Redux</li>
          </ul>
        </Content>
      </Columns.Column>
      <Columns.Column size={4} offset={1}></Columns.Column>
    </Columns>

    <FooterC />
  </div>
);

export default Resume;
