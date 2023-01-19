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
  Notification,
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
          <div class="notification" style={{ background: "#f4a261" }}>
            HTML | CSS | JavaScript | Liquid | jQuery | Bootstrap | Bulma | Git
            | Python | Node.js | Express.js | MySQL | Sequelize | NoSQL |
            MongoDB | Insomnia | TDD | React.js | Redux
          </div>
        </Content>
      </Columns.Column>
      <Columns.Column size={4} offset={1}></Columns.Column>
    </Columns>

    <FooterC />
  </div>
);

export default Resume;
