import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  margin: 0 10px 20px 10px;
  line-height: 1.7rem;
`;

const OfferText = (props) => (
  <>
    {props.online ? (
      <StyledText>
        Opieka trenerska online zawiera przygotowanie planu treningowego,
        wskazówki dietetyczne, monitorowanie i modyfikowanie na bierząco twoich
        efektów oraz recencję filmów, które podsyłasz w celu weryfikacji
        techniki. Plany treningowe rozpisujemy w oparciu o ankietę, dzięki
        której indywidualnie dostosowujemy ćwiczenia do Twoich możliwości,
        preferencji, oraz poziomu zaawansowania. Jesteśmy dla Ciebie na bieżąco
        i monitorujemy metamorfozę twojej sylwetki na podstawie cotygodniowych
        raportów.
      </StyledText>
    ) : (
      <StyledText>
        Trening personalny jaki oferujemy jest ukierunkowany na
        wielopłaszczyznowy ruch, mający poprawić funkcjonalność Twojego ciała,
        wzmocnić mięśnie oraz spalić jak największą ilość tkanki tłuszczowej.
        Trening trwa około 60 minut, w takim czasie jesteśmy w stanie wykonać
        odpowednią pracę przybliżającą cię do założonego celu. Cena treningu
        wynosi od 100zł do 150zł i jest ustalana po dokładnym wywiadzie
        dotyczącym stanu zdrowia i celów treningowych.
      </StyledText>
    )}
  </>
);

export default OfferText;
