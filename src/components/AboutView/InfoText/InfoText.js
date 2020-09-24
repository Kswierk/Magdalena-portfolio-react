import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  margin: 80px auto;
`;

const Header = styled.h3`
  margin: 30px auto;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  line-height: 2.5rem;
`;

const Paragraph = styled.p`
  text-align: center;
  margin: 20px auto;
  line-height: 1.7rem;
  width: 80%;
`;

const InfoText = () => (
  <>
    <Wraper>
      <Header>certyfikowana trenerka personalna w krakowie</Header>
      <Paragraph>
        Jeżeli szukasz trenerki personalnej z możliwością dojazdu do twojego
        miejsca zamieszkania, to dobrze trafiłaś!
      </Paragraph>
      <Paragraph>
        Jestem zdeterminowana i zależy mi na twoich wynikach. Moje kwalifikacje
        pomogą Ci osiągnąć wymarzony cel sylwetkowy. Wnoszę sprawdzone i
        efektywne metody treningowe, które pozwolą zmienić twój wygląd i
        samopoczucie.
      </Paragraph>
    </Wraper>
  </>
);

export default InfoText;
