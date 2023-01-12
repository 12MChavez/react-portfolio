import React from "react";
import "../bulma/css/bulma.min.css";
import { Container, Form, Button } from "react-bulma-components";
import FooterC from "../components/Footer";
import validator from "validator";

let nameStatus = false;
let emailValue;
let emailStatus = false;

let msgStatus = false;

const setNameAdded = (evt) => {
  let name = evt.target.value;

  if (name.length > 0) {
    console.log("true");
    nameStatus = true;
  } else {
    nameStatus = false;
  }
};

const setEmailStatus = (evt) => {
  emailValue = evt.target.value;

  if (validator.isEmail(emailValue)) {
    console.log("true");
    emailStatus = true;
  } else {
    emailStatus = false;
  }
};

const setMessageAdded = (evt) => {
  let message = evt.target.value;

  if (message.length > 0) {
    console.log("true");
    msgStatus = true;
  } else {
    msgStatus = false;
  }
};

function showSubmit() {
  const submitBtn = document.getElementById("submitBtn");
  console.log(emailStatus, msgStatus, nameStatus);
  if (emailStatus === true && msgStatus === true && nameStatus === true) {
    submitBtn.classList.remove("is-hidden");
    console.log("name, ValidEmail and message added");
  } else {
    submitBtn.classList.add("is-hidden");
    console.log("fill out form");
  }
}
const Contact = (
  <div>
    <Container onChange={() => showSubmit()}>
      <Form.Field>
        <Form.Label>Name: </Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            placeholder="Name"
            onChange={(evt) => setNameAdded(evt)}
          />
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
          <Form.Textarea
            color="success"
            placeholder="Message"
            onChange={(evt) => setMessageAdded(evt)}
          />
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
