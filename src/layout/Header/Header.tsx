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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding-left: 35px;
  padding-right: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ParagraphStyled = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  color: #ffffff;
  line-height: 36.23px;
  letter-spacing: -1.05px;
`;
