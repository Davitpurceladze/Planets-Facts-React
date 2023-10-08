import styled from "styled-components";
import SourceIcon from "../assets/icon-source.svg";
import Buttons from "./Buttons";
import PlanetDataInterface from "../PlanetDataInterface";

interface Props {
  buttonsDependingDimension: (width: number) => boolean;
  width: number;
}

function InformationAboutPlanets(props: Props) {
  return (
    <>
      <InformationContainer>
        <AboutPlanet>
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
        </AboutPlanet>

        {props.buttonsDependingDimension(props.width) ? null : <Buttons />}
      </InformationContainer>
    </>
  );
}

export default InformationAboutPlanets;

const InformationContainer = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding-left: 2rem;
    margin-top: 5rem;
  }

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: 100%;
    padding-right: 2rem;
    margin-top: 2.5rem;
  }
`;

const AboutPlanet = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 375px) {
    font-size: 40px;
    line-height: 51.76px;
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

  @media (max-width: 375px) {
    text-align: center;
    line-height: 22px;
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

  @media (max-width: 375px) {
  }
`;
