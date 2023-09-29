import React from "react";
import MercuryPlanet from "../assets/planet-mercury.svg";
import styled from "styled-components";
import UseWindowDimensions from "../Hooks/GetWindowDimensions";
import SourceIcon from "../assets/icon-source.svg";

function Mercury() {
  //get window width
  const { width, height } = UseWindowDimensions();

  const getPlanetWidth = (width: number) => {
    if (width < 768 && width > 375) {
      return "190px";
    } else if (width < 375) {
      return "111px";
    }
  };

  return (
    <div>
      <MainContentContainer>
        <PlanetImg
          src={MercuryPlanet}
          alt="MercuryPlanet"
          style={{
            justifySelf: "center",
            alignSelf: "center",
          }}
          width={getPlanetWidth(width)}
        />
        <InformationContainer style={{ justifySelf: "start" }}>
          <div>
            <PlanetName>MERCURY</PlanetName>
            <PlanetInformation>
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </PlanetInformation>
            {/* click on wikipedia button links to other page */}
            <WikipediaSource>
              Source: Wikipedia <img src={SourceIcon} alt="SourceIcon" />
            </WikipediaSource>
          </div>
          <ButtonsContainer>
            <Button>
              <ButtonNumber>01</ButtonNumber> OVERVIEW{" "}
            </Button>
            <Button>
              <ButtonNumber>02</ButtonNumber> INTERNAL STRUCTURE
            </Button>
            <Button>
              <ButtonNumber>03</ButtonNumber> SURFACE GEOLOGY
            </Button>
          </ButtonsContainer>
        </InformationContainer>
      </MainContentContainer>
      <div style={{ color: "white" }}>
        <div>ROTATION TIME</div>
        <div>REVOLUTION TIME</div>
        <div>RADIUS</div>
        <div>AVERAGE TEMP.</div>
      </div>
    </div>
  );
}

// "rotation": "58.6 Days",
//     "revolution": "87.97 Days",
//     "radius": "2,439.7 KM",
//     "temperature": "430°c",

export default Mercury;

const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 20% 10%;

  @media (max-width: 1000px) {
    grid-template-columns: 60% 30% 10%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const InformationContainer = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

const PlanetImg = styled.img`
  justify-self: center;
  align-self: center;
`;

const PlanetName = styled.h1`
  color: #ffffff;
  font-size: 80px;
  line-height: 103.52px;
  font-family: "Antonio";
  font-weight: 400;
`;

const PlanetInformation = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
  font-family: "League Spartan";
  font-weight: 400;
`;

const WikipediaSource = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
  font-family: "League Spartan";
  font-weight: 400;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 48px;
  width: 100%;
  color: #ffffff;
  font-family: "League Spartan";
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2.57px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5rem;
  cursor: pointer;
  gap: 1rem;
`;

const ButtonNumber = styled.span`
  opacity: 50%;
`;
