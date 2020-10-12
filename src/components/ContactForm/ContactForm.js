import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContactDetails from "./ContactDetails";

const Wraper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  /* box-shadow: inset 0px 0px 15px 5px #bfbfbf; */

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  position: relative;
  background-color: #f0a500;
  font-weight: 500;
  color: #f4f4f4;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px auto 20px;
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
  color: #f0a500;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 15px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 10px 50px 10px;
  width: 80%;
`;

const StyledParagraphCentered = styled.p`
  margin: 0px auto 35px;
  color: green;
  padding: 15px;
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
  const [msg, setmsg] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);

  function sendEmail(e) {
    setisButtonDisabled(true);
    setmsg("Przesyłanie odpowiedzi");
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
            setmsg(
              "Dziękujemy za kontakt, skontaktujemy się z Tobą w przeciągu 24h"
            );
            setisButtonDisabled(false);
          }
        },
        (error) => {
          setmsg("Przepraszamy, spróbuj ponownie");
          setisButtonDisabled(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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

            <StyledButton disabled={isButtonDisabled} type="submit">
              Wyślij
            </StyledButton>
            <StyledParagraphCentered>{msg}</StyledParagraphCentered>
          </Form>
        </div>
        <ContactDetails />
      </Wraper>
    </>
  );
}
