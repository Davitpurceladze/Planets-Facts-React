import styled from "styled-components";

function MobileButtons() {
  return (
    <div>
      <ButtonsContainer>
        <StyledDiv>OVERVIEW</StyledDiv>
        <StyledDiv>STRUCTURE</StyledDiv>
        <StyledDiv>SURFACE</StyledDiv>
      </ButtonsContainer>
      <StyledHr />
    </div>
  );
}

export default MobileButtons;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

const StyledDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #ffffff;
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10.08px;
  letter-spacing: 1.93px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
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
`;

const StyledHr = styled.hr`
  opacity: 20%;
  color: #ffffff;
  margin-top: 14px;
`;
