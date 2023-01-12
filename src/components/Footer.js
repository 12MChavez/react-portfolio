import React from "react";
import { Hero, Footer, Container, Content } from "react-bulma-components";
const FooterC = () => {
  return (
    <div style={{ margin: "-1rem" }}>
      <Hero size="halfheight">
        <Hero.Header renderAs="header" />

        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <div>
                  <strong>
                    <p className="navbar-item">
                      Made with love, react, and bulma.
                    </p>
                  </strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/melissac-dev/"
                    className="navbar-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/12MChavez"
                    className="navbar-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
  );
};
export default FooterC;
