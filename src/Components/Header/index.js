import React from "react";
import MarvelLogo from "../../assets/svg/marvel.svg";

import { Container, BoxSearch } from "./styles";

export function Header({ children }) {
  return (
    <Container>
      <BoxSearch>
        <img src={MarvelLogo} alt="logo" />
        <strong>Marvel characters</strong>
        <span>Find your favourite characters here</span>
        {children}
      </BoxSearch>
    </Container>
  );
}
