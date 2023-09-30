import styled from "styled-components";

function Buttons() {
  return (
    <>
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
    </>
  );
}

export default Buttons;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    align-self: center;
  }
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

  @media (max-width: 768px) {
    font-size: 9px;
    letter-spacing: 1.93px;
  }
`;

const ButtonNumber = styled.span`
  opacity: 50%;
`;
