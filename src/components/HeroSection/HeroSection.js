import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  const HeroImg = styled.img`
    background-image: url("https://www.medibank.com.au/content/dam/livebetter/en/images/migrated/342ee7aed60e0da80157f9b3c04ff7af/485dec12-why-women-should-do-weights.jpg");
    background-size: cover;
  `;

  return (
    <div>
      <HeroImg />
    </div>
  );
};

export default HeroSection;
