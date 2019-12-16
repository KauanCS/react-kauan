import React from "react";
import { ContainerButton, BoardRow, Bg, T1, T3, StyledLink } from "./style";

export class About extends React.Component {
  render() {
    return (
      <BoardRow>
        <Bg>
          <h1>_</h1>
          <T1>Learning</T1>
          <h1>_</h1>
        </Bg>
        <ContainerButton>
          <T3>Está é uma página desenvolvida utilizando conceitos de React.</T3>
        </ContainerButton>
        <ContainerButton>
          <Bg>
            <StyledLink to="/">Voltar</StyledLink>
          </Bg>
        </ContainerButton>
      </BoardRow>
    );
  }
}
