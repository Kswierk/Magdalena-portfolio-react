import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContactDetails from "./ContactDetails";
import Modal from "../Modal/Modal";

const Wraper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 15px 5px #bfbfbf;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const StyledInput = styled.input`
  position: relative;
  background-color: #fc5185;
  font-weight: 500;
  color: white;
  display: block;
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px auto;
  text-transform: uppercase;
  width: 30%;
  min-width: 150px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  padding: 7px;
  color: #fc5185;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 15px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 10px 50px 10px;
  width: 80%;
`;

const Input = styled.input`
  height: 35px;
  border: 1px solid lightgray;
`;

const StyledTextArea = styled.textarea`
  height: 80px;
  resize: none;
  border: 1px solid lightgray;
`;

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
          if (result.text === "OK") {
            console.log("udalo sie");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const formSendHandler = () => <div>asdasdas</div>;

  return (
    <>
      <Wraper>
        <div>
          <SectionHeader textHeader="porozmawiajmy" />
          <StyledParagraph>
            Wypełnij formularz lub zadzwoń i dowiedz się jak możemy Ci pomóc
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

            <StyledInput
              onClick={formSendHandler}
              type="submit"
              value="Wyślij"
            />
            <p>{formSendHandler}</p>
          </Form>
        </div>
        <ContactDetails />
      </Wraper>
    </>
  );
}
