import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  margin: 80px auto;
  max-width: 1200px;
`;

const Header = styled.h3`
  margin: 30px 30px;
  font-size: 2rem;
  font-weight: 500;
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
      <Header>certyfikowani trenerzy personalni w krakowie</Header>
      <Paragraph>
        Wybierając nas masz pewność, że pracujesz z najlepszymi. Ukończyliśmy
        wiele wartościowych szkoleń i kursów z zakresu nowoczesnych metod
        treningowych opartych o badaniach naukowych oraz dietetyki.
      </Paragraph>
      <Paragraph>
        Jesteśmy zdeterminowani i zależy nam na twoich wynikach. Nasze
        kwalifikacje pomogą Ci osiągnąć wymarzony cel sylwetkowy. Wnosimy
        sprawdzone i efektywne metody treningowe, które pozwolą zmienić twój
        wygląd i samopoczucie.
      </Paragraph>
    </Wraper>
  </>
);

export default InfoText;
