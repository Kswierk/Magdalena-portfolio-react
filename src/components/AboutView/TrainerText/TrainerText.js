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

const TrainerText = () => (
  <StyledText>
    <TextWraper>
      <p>
        As a Temple University alumni, Noelle gained her admiration for personal
        training after competing in Division 1 collegiate track and field where
        she set the new record in the 1000 meters. Noelle attributes her success
        to her coaches and her regimented body-specific training program. Her
        favorite over-used hash-tag is #nodaysoff because as her success has
        taught her; to become the best you can be, you must commit yourself to
        do the work when others won’t. This is the training philosophy she still
        uses today. Her training program is designed as a lifestyle approach to
        exercise. There is no end goal, because there is no end point, life will
        go on. As we master the workout in front of us, we then must level up to
        our new and improved selves so that we can continue to live our best
        lives. Like in her former track days, Noelle’s training program focuses
        on both fast and slow-twitch muscle development by using weight training
        for muscular strength and endurance.
      </p>
      <p>
        She couples this with yoga, which helps with toning and the elasticity
        of the muscles. Her background in dance is also apparent in the
        creativity and grace of her movements, which engage parts of the body
        you aren’t used to working. Each of her workouts incorporate a
        combination of total-body work and isolation movements. With 10+ years
        of experience in NYC as an ACE certified personal trainer and a
        reputation for being a hard-ass and a supportive motivator in the gym,
        Noelle is known for getting the job done in whatever capacity you need.
        She was recently named one of Men’s Health top picks for women who could
        100% kick your ass! Her celebrity clients include Jenn Hyman, Founder of
        Rent the Runway and former Rockette, Mandy Evans-Brown. Noelle also has
        a long-standing roster of clients who joined the Leading Edge movement
        in its infant stages, and years later are still getting their booty
        kicked under her supervision.
      </p>
    </TextWraper>
  </StyledText>
);

export default TrainerText;
