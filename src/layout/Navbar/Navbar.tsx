import styled from "styled-components";
function Navbar() {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
}

export default Navbar;

const UlStyled = styled.ul`
  display: flex;
  gap: 2rem;
`;

const DivStyled = styled.div`
  color: #ffffff;
  font-family: "League Spartan";
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: 700;
`;
