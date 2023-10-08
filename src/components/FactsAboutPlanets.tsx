import styled from "styled-components";
import PlanetDataInterface from "../PlanetDataInterface";

interface Props {
  data: PlanetDataInterface;
}

function FactsAboutPlanets(props: Props) {
  return (
    <>
      <InterestingFactsContainer>
        <InterestingFacts>
          <FactTitle>ROTATION TIME</FactTitle>
          <Fact>{props.data.rotation}</Fact>
        </InterestingFacts>

        <InterestingFacts>
          <FactTitle>REVOLUTION TIME</FactTitle>
          <Fact>{props.data.revolution}</Fact>
        </InterestingFacts>

        <InterestingFacts>
          <FactTitle>RADIUS</FactTitle>
          <Fact>{props.data.radius}</Fact>
        </InterestingFacts>

        <InterestingFacts>
          <FactTitle>AVERAGE TEMP.</FactTitle>
          <Fact>{props.data.temperature}</Fact>
        </InterestingFacts>
      </InterestingFactsContainer>
    </>
  );
}

export default FactsAboutPlanets;

const InterestingFactsContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const InterestingFacts = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 255px;
  height: 128px;

  @media (max-width: 768px) {
    width: 164px;
    height: 88px;
  }

  @media (max-width: 375px) {
    height: 48px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const FactTitle = styled.p`
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  font-family: "League Spartan";
  font-weight: 700;
  opacity: 50%;
  margin: 20px 0px 0px 23px;

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.73px;
    margin-top: 10px;
  }

  @media (max-width: 375px) {
    margin: 0px;
    margin-left: 15px;
  }
`;

const Fact = styled.p`
  font-size: 40px;
  line-height: 51.76px;
  letter-spacing: -1.5px;
  font-family: "Antonio";
  font-weight: 400;
  margin: 10px 0px 0px 23px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31.05px;
    letter-spacing: -0.9px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 25.88px;
    margin: 0px;
    margin-right: 15px;
  }
`;
