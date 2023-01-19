import React from "react";
import { Hero, Footer, Container, Content } from "react-bulma-components";
const FooterC = () => {
  return (
    <div style={{ marginBottom: "0" }}>
      <Hero size="halfheight">
        <Hero.Header renderAs="header" />

        <Hero.Footer>
          <Footer style={{ background: "#f4a261" }}>
            <Container>
              <Content style={{ textAlign: "center", background: "#e9c46a" }}>
                <div>
                  <strong>
                    <p className="navbar-item">
                      Made with love, React, and bulma.
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
