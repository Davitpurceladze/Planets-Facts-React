import Header from "../layout/Header/Header";
import { createGlobalStyle, styled } from "styled-components";
import BackgroundImage from "../assets/background-stars.svg";

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HrStyled />
    </div>
  );
}

export default Root;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background-color: #070724;
    background-image: url(${BackgroundImage});
  }
`;

const HrStyled = styled.hr`
  color: #ffffff;
  opacity: 20%;
`;
