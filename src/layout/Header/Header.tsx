import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import HamburgerIcon from "../../assets/icon-hamburger.svg";

function Header() {
  return (
    <>
      <DivStyled>
        <ParagraphStyled>THE PLANETS</ParagraphStyled>
        <Navbar />
        <HamburgerIconWrapper>
          <img src={HamburgerIcon} alt="HamburgerIcon" />
        </HamburgerIconWrapper>
      </DivStyled>
      <HrStyled />
    </>
  );
}

export default Header;

const HamburgerIconWrapper = styled.div`
  opacity: 24.87%;
  margin-top: 5px;

  @media (min-width: 376px) {
    display: none;
  }
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding-left: 35px;
  padding-right: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 375px) {
    flex-direction: row;
  }
`;

const ParagraphStyled = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  color: #ffffff;
  line-height: 36.23px;
  letter-spacing: -1.05px;
`;

const HrStyled = styled.hr`
  color: #ffffff;
  opacity: 20%;

  @media (max-width: 768px) and (min-width: 376px) {
    margin-top: 4rem;
  }
`;
