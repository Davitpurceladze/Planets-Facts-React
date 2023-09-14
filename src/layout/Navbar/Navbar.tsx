import styled from "styled-components";
function Navbar() {
  return (
    <div>
      <UlStyled>
        <DivStyled>MERCURY</DivStyled>
        <DivStyled>VENUS</DivStyled>
        <DivStyled>EARTH</DivStyled>
        <DivStyled>MARS</DivStyled>
        <DivStyled>JUPITER</DivStyled>
        <DivStyled>SATURN</DivStyled>
        <DivStyled>URANUS</DivStyled>
        <DivStyled>NEPTUNE</DivStyled>
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
