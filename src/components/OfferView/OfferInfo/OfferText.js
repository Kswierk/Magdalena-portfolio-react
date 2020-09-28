import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  margin: 0 10px 50px 10px;
  line-height: 1.7rem;
`;

const OfferText = (props) => (
  <>
    {props.online ? (
      <StyledText>
        ONLINE import React from "react"; import styled from
        "styled-components";Stay fit anywhere in the world from the comfort of
        your home. Allow our team to match you with a fitness professional who
        will coach you via Skype, keeping motivation levels sky high. Our 45
        minute skype sessions require little to no equipment and are bespoke to
        your needs. If you enjoyed this and wish to carry on, we offer personal
        training blocks of 10, 20 or 30 sessions.
      </StyledText>
    ) : (
      <StyledText>
        Trening personalny jaki oferujemy jest ukierunkowany na
        wielopłaszczyznowy ruch, mający poprawić funkcjonalność Twojego ciała,
        wzmocnić mięśnie oraz spalić jak największą ilość tkanki tłuszczowej.
        Trening trwa około 60 minut, w takim czasie jesteśmy w stanie wykonać
        odpowednią pracę przybliżającą cię do założonego celu. Cena treningu
        wynosi od 100zł do 150zł w zależnośći
      </StyledText>
    )}
  </>
);

export default OfferText;
