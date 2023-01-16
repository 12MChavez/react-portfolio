import React from "react";
import { Card, Media, Heading, Image, Content } from "react-bulma-components";
// title, image, attr, projectGithub, projectDeployedURL
const Project = ({ data }) => {
  return (
    <div>
      <Card style={{ width: 300, margin: "auto" }}>
        <Card.Image
          size="4by3"
          src={data.projectImage}
          attr={data.projectImageAttr}
        />
        <Card.Content>
          <Content>
            <Heading size={5}>{data.projectTitle}</Heading>
          </Content>
          <Media align="center">
            <Media.Item renderAs="figure"></Media.Item>
            <Media.Item renderAs="figure">
              <a href={data.projectGithub} target="_blank" rel="noreferrer">
                <Image
                  size={24}
                  alt="github url"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </a>

              <a
                href={data.projectDeployedURL}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  size={24}
                  alt="deployed website"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_9pW00YpfIVMayZRyQRWkZaRqYoZH6KdnQ&usqp=CAU"
                />
              </a>
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Project;
