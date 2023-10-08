import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <UlStyled>
        <Link to="Mercury" style={{ textDecoration: "none" }}>
          <DivStyled>MERCURY</DivStyled>
        </Link>
        <Link to="Venus" style={{ textDecoration: "none" }}>
          <DivStyled>VENUS</DivStyled>
        </Link>
        <Link to="Earth" style={{ textDecoration: "none" }}>
          <DivStyled>EARTH</DivStyled>
        </Link>
        <Link to="Mars" style={{ textDecoration: "none" }}>
          <DivStyled>MARS</DivStyled>
        </Link>
        <Link to="Jupiter" style={{ textDecoration: "none" }}>
          <DivStyled>JUPITER</DivStyled>
        </Link>
        <Link to="Saturn" style={{ textDecoration: "none" }}>
          <DivStyled>SATURN</DivStyled>
        </Link>
        <Link to="Uranus" style={{ textDecoration: "none" }}>
          <DivStyled>URANUS</DivStyled>
        </Link>
        <Link to="Neptune" style={{ textDecoration: "none" }}>
          <DivStyled>NEPTUNE</DivStyled>
        </Link>
      </UlStyled>
    </div>
  );
}

export default Navbar;

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

const DivStyled = styled.div`
  color: #ffffff;
  font-family: "League Spartan";
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: 700;
  opacity: 75%;
  text-align: center;
  transition: 0.3s;
  position: relative;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #419ebb;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 3px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    opacity: 100%;
    transition: opacity 0.3s;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    &::before {
      top: -5px;
    }
  }

  @media (max-width: 600px) {
    font-size: 9px;
  }
`;
