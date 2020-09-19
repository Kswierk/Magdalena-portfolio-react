import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { data } from "./data";
import SliderCard from "./SliderCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import { QuoteLeft } from "@styled-icons/boxicons-solid/QuoteLeft";

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  /* height: 400px; */
  padding: 30px;
  margin: 0 auto;
  outline: none;
  /* background-color: #fabea7; */
  box-sizing: border-box;
`;

const NewSlider = styled(Slider)``;

const Page = styled.div`
  width: 100%;
`;

const PositionedQuote = styled(QuoteLeft)`
  position: absolute;
  opacity: 0.5;
  color: lightgray;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
`;

class SlideView extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <>
        <SectionHeader textHeader="opinie" />
        <Wrapper>
          <PositionedQuote />

          <NewSlider {...settings}>
            {data.persons.map((index) => (
              <Page key={index}>
                <SliderCard name={index.name} text={index.text}></SliderCard>
              </Page>
            ))}
          </NewSlider>
        </Wrapper>
      </>
    );
  }
}

export default SlideView;
