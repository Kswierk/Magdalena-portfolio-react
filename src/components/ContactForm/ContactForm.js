import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContactDetails from "./ContactDetails";

const Wraper = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  position: relative;
  background-color: #fbe2e5;
  display: block;
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px 0;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  padding: 7px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 10px 15px 10px;
`;

const Input = styled.input`
  height: 35px;
  border: 2px solid lightgray;
`;

const StyledTextArea = styled.textarea`
  height: 80px;
  resize: none;
  border: 2px solid lightgray;
`;

// import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_i1xnavm",
        e.target,
        "user_Rpwkf6roYHGPjBFlAHjqI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Wraper>
      <SectionHeader textHeader="porozmawiajmy" />
      <StyledParagraph>
        Wypełnij formularz poniżej lub zadzwoń i dowiedz się jak mogę Ci pomóc
        osiągnąć wymarzoną sylwetkę.
      </StyledParagraph>
      <Form className="contact-form" onSubmit={sendEmail}>
        <StyledLabel>Imię</StyledLabel>
        <Input required type="text" name="user_name" />
        <StyledLabel>Numer</StyledLabel>
        <Input required type="number" name="contact_number" />
        <StyledLabel>Adres E-mail</StyledLabel>
        <Input required type="email" name="user_email" />
        <StyledLabel>Treść wiadomości</StyledLabel>
        <StyledTextArea name="message" />
        <StyledInput type="submit" value="Wyślij" />
      </Form>
      <ContactDetails />
    </Wraper>
  );
}
