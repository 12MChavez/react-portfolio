import React from "react";
import "../bulma/css/bulma.min.css";
import { Container, Form, Button } from "react-bulma-components";
import FooterC from "../components/Footer";
import validator from "validator";

let nameValue;
let nameStatus = false;
let emailValue;
let emailStatus = false;
let msgValue;
let msgStatus = false;

// use validator to check for valid email
const setEmailStatus = (evt) => {
  emailValue = evt.target.value;

  if (validator.isEmail(emailValue)) {
    console.log("true");
    emailStatus = true;
  } else {
    emailStatus = false;
  }
};

// check to see if name and message were added
const setValueAdded = (evt) => {
  let value = evt.target.value;
  let elId = evt.target.id;
  console.log(evt.target.id);

  switch (elId) {
    case "name":
      if (value.length > 0) {
        nameStatus = true;
        nameValue = evt.target.value;
      } else {
        nameStatus = false;
        nameValue = evt.target.value;
      }
      break;
    case "msg":
      if (value.length > 0) {
        msgStatus = true;
        msgValue = evt.target.value;
      } else {
        msgStatus = false;
        msgValue = evt.target.value;
      }
      break;
    default: {
      break;
    }
  }
};

// if form is filled out the submit button will show
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

// send your message via email
function sendEmail() {
  let subject = `${nameValue} sent msg from ${emailValue} using React Portfolio`;

  window.open(
    `mailto:mel.chavez.code@gmail.com?subject=${subject}&body=${msgValue}`
  );
}

const Contact = (
  <div>
    <Container onChange={() => showSubmit()}>
      <Form.Field>
        <Form.Label>Name: </Form.Label>
        <Form.Control>
          <Form.Input
            id="name"
            color="success"
            placeholder="Name"
            value={nameValue}
            onChange={(evt) => setValueAdded(evt)}
          />
          <Form.Label>Email: </Form.Label>

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
            id="msg"
            color="success"
            placeholder="Message"
            value={msgValue}
            onChange={(evt) => setValueAdded(evt)}
          />
          <Form.Help color="danger">
            Submit button will show when form completed with name, message, and
            valid email.
          </Form.Help>
          <Button
            type="submit"
            color="link"
            className="is-hidden"
            id="submitBtn"
            onClick={() => sendEmail()}
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
