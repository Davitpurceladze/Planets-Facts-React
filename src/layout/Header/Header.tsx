import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

function Header() {
  return (
    <DivStyled>
      <ParagraphStyled>THE PLANETS</ParagraphStyled>
      <Navbar />
    </DivStyled>
  );
}

export default Header;

const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding-left: 32px;
  padding-right: 35px;
`;

const ParagraphStyled = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  color: #ffffff;
  line-height: 36.23px;
  letter-spacing: -1.05px;
`;
