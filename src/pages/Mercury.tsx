import React from "react";
import MercuryPlanet from "../assets/planet-mercury.svg";
import styled from "styled-components";
import UseWindowDimensions from "../Hooks/GetWindowDimensions";
import SourceIcon from "../assets/icon-source.svg";
import Buttons from "../components/Buttons";

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

          <Buttons />
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
    padding-left: 2rem;
    margin-top: 5rem;
  }
`;

const PlanetImg = styled.img`
  justify-self: center;
  align-self: center;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const PlanetName = styled.h1`
  color: #ffffff;
  font-size: 80px;
  line-height: 103.52px;
  font-family: "Antonio";
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 62.11px;
  }
`;

const PlanetInformation = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
  font-family: "League Spartan";
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 25px;
  }
`;

const WikipediaSource = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
  font-family: "League Spartan";
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
