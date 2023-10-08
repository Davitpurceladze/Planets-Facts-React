import Header from "../layout/Header/Header";
import { createGlobalStyle, styled } from "styled-components";
import BackgroundImage from "../assets/background-stars.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Mercury");
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
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
