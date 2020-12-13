import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  line-height: 1.7rem;
  background-color: white;
  margin: 0 10px;
`;

const TextWraper = styled.div`
  margin: 20px 10px;
`;

const trainerText = [
  "Jest certyfikowanym trenerem personalnym z wieloletnim doświadczeniem. Pasję do sportu odkrył już w szkole podstawowej zaczynając od pływania, co w późniejszych latach zaprowadziło go do treningu siłowego. Po kilku latach zagłębiania się w zagadnienia treningowe oraz dietetyczne stwierdził, że juz pora usystematyzować wiedzę na kursach tematycznych. Zdobywanie wiedzy poskutkowało znalezieniem pracy w zawodzie i dalszym zdobywaniu doświadczenia przy wymagających podopiecznych. Największą motywacją jest dla niego świadomość jak dużą wartość potrafi wnieść odpowiednia aktywność fizyczna dostosowana do indywidualnych predyspozycji oraz potrzeb. Jego podejście do treningu bazuje na treningu funcjonalnym, zawierającym wzorce ruchowe wykorzystywane w życiu codziennym, a są one indywidualne dla każdego z osobna. Zależy mu na elastycznym podejsciu tak, aby dla każdego znaleźć odpowiedni typ ćwiczeń oraz nawyków aktywnościowych w ciągu dnia codziennego. Wierzy w holistyczne podejście do fitnessu, dopasowująć odpowiednie ćwiczenia i programy, które poprawiają siłę, wytrzymałość oraz balans dla kompletnego zajęcia się ciałem pod względem aktywności fizycznej. Najważniejszym aspektem jest dla niego dostarczanie pozytywnych i satysfakcjonujących doświadczeń treningowych. Jest to kluczowe w dążeniu do długofalowych zmian w aktywności fizycznej oraz przezwyciężaniu swoich słabości.",
  "Nazywam się Magdalena Dżugan i jestem trenerką personalną. W 2018 roku ukończyłam kurs trenera personalnego, lecz w siłownią jestem związana już od czasów szkolnych. Obecnie studiuję na Akademii Wychowania Fizycznego oraz biorę udział w licznych kursach dotyczących treningu i żywienia, aby zdobyta wiedza przełożyła się na Twoje ekety treningowe, zdrowie i samopoczucie. Specjalizuję się w treningu sylwetkowym, prozdrowotnym, a także rehablitacji wad postawy. Lubię pracować z kobietami, ponieważ w pełni rozumiem ich potrzeby. Dzięki temu sprawiam, że na siłowni czują się komfortowo i pewne siebie.",
];

const TrainerText = (props) => (
  <StyledText>
    <TextWraper>{props.madzia ? trainerText[1] : trainerText[0]}</TextWraper>
  </StyledText>
);

export default TrainerText;
