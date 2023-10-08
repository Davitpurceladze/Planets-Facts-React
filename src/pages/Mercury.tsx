import MercuryPlanet from "../assets/planet-mercury.svg";
import styled from "styled-components";
import UseWindowDimensions from "../Hooks/GetWindowDimensions";
import MobileButtons from "../components/MobileButtons";
import FactsAboutPlanets from "../components/FactsAboutPlanets";
import InformationAboutPlanets from "../components/InformationAboutPlanets";

import { useLoaderData } from "react-router-dom";
import PlanetDataInterface from "../PlanetDataInterface";

function Mercury() {
  //get window width
  const { width, height } = UseWindowDimensions();

  const buttonsDependingDimension = (width: number) => {
    if (width < 375) {
      return true;
    } else return false;
  };

  const getPlanetWidth = (width: number) => {
    if (width < 768 && width > 375) {
      return "190px";
    } else if (width < 375) {
      return "111px";
    }
  };

  const PlanetData = useLoaderData() as PlanetDataInterface;

  console.log(PlanetData);

  return (
    <div>
      <MainContentContainer>
        {buttonsDependingDimension(width) ? <MobileButtons /> : null}

        <PlanetImg
          src={MercuryPlanet}
          alt="MercuryPlanet"
          style={{
            justifySelf: "center",
            alignSelf: "center",
          }}
          width={getPlanetWidth(width)}
        />

        <InformationAboutPlanets
          buttonsDependingDimension={buttonsDependingDimension}
          width={width}
        />
      </MainContentContainer>

      <FactsAboutPlanets />
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

const PlanetImg = styled.img`
  justify-self: center;
  align-self: center;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;
