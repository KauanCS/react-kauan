import styled from "styled-components";
import { Link } from "react-router-dom";

const Status = styled.div`
  margin-bottom: 10px;
  display: center;
`;

const Bg = styled.div`
  background: rgb(4, 0, 70);
  background: linear-gradient(
    90deg,
    rgba(4, 0, 70, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  height: 100%;
  min-width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding-top: 3px;
  flex-direction: row;
  justify-content: center;
  font: 24px "Century Gothic", Futura, sans-serif;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  background-color: #222;
  border: 1px solid #222;
  border-radius:4px;
  font-background: #fff;
  display: center;
  margin: 5px;
  cursor: pointer;
  width: 90px
  transition-duration: 0.4s;
  :hover{
      background-color: white
      color: #555;
    }
`;

const T1 = styled.h1`
  color: white;
`;

const T3 = styled.h3`
  font: 24px "Century Gothic", Futura, sans-serif;
  color: white;
  opacity: 0.5;
`;

const Body = styled.body`
  font: 24px "Century Gothic", Futura, sans-serif;
  margin: 5px;
`;
const Square = styled.button`
  color: white;
  opacity: 0.3;
  background: #000;
  border: 1px solid #fff;
  float: left;
  font-size: 88px;
  font-weight: bold;
  line-height: 34px;
  height: 128px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  transition-duration: 0.8s;
  width: 128px;

  :focus: {
    outline: none;
  }
  :active {
    color: #000;
  }
`;
const Tabela = styled.div`
  color: #fff;
`;
const BoardRow = styled.div`
  background: black;
  :after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Botao = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: #222;
  border: 1px solid #222;
  border-radius:4px;
  font-background: #fff;
  display: center;
  margin: 5px;
  cursor: pointer;
  width: 90px
  transition-duration: 0.4s;
  :hover{
      background-color: white
      color: #555;
    }

`;

const ContainerButton = styled.div`
  background: white
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export {
  Status,
  Square,
  BoardRow,
  Botao,
  Body,
  ContainerButton,
  Tabela,
  Bg,
  T1,
  T3,
  StyledLink
};
