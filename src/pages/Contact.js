import React from "react";
import "../bulma/css/bulma.min.css";
import { Container, Form, Button } from "react-bulma-components";
import FooterC from "../components/Footer";
import validator from "validator";

let emailValue;
function setEmailStatus(evt) {
  let newEmailValue = evt.target.value;
  const submitBtn = document.getElementById("submitBtn");

  let isValidEmail;

  if (validator.isEmail(newEmailValue)) {
    submitBtn.classList.remove("is-hidden");
    isValidEmail = true;
  } else {
    submitBtn.classList.add("is-hidden");
    isValidEmail = false;
  }
  console.log(isValidEmail);
}
const Contact = (
  <div>
    <Container>
      <Form.Field>
        <Form.Label>Name: </Form.Label>
        <Form.Control>
          <Form.Input color="success" placeholder="Name" />
          <Form.Label>Email: </Form.Label>
          <Form.Help color="danger">
            Submit button will show when email entered
          </Form.Help>
          <Form.Input
            color="success"
            type="email"
            placeholder="Email"
            id="emailInput"
            value={emailValue}
            onChange={(evt) => setEmailStatus(evt)}
          />
          <Form.Label>Message: </Form.Label>
          <Form.Textarea color="success" placeholder="Message" />
          <Button
            type="submit"
            color="link"
            className="is-hidden"
            id="submitBtn"
          >
            Submit
          </Button>
        </Form.Control>
      </Form.Field>
    </Container>
    <FooterC />
  </div>
);

export default Contact;
