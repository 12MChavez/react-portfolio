import React from "react";
import "../bulma/css/bulma.min.css";
import { Container, Form, Button } from "react-bulma-components";
import Footer from "../components/Footer";

const Contact = (
  <div>
    <Container>
      <Form.Field>
        <Form.Label>Name: </Form.Label>
        <Form.Control>
          <Form.Input color="success" value={"name"} />
          <Form.Label>Email: </Form.Label>
          <Form.Help color="danger">This email is invalid</Form.Help>
          <Form.Input color="success" value={"email"} />
          <Form.Label>Message: </Form.Label>
          <Form.Textarea color="success" value={"message"} />
          <Button color="link">Submit</Button>
        </Form.Control>
      </Form.Field>
    </Container>
    <Footer />
  </div>
);

export default Contact;
