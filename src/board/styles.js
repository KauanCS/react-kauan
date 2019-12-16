import styled from "styled-components";

const Status = styled.div`
  margin-bottom: 10px;
  display: center;
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
  font-size: 88px;
  font-weight: bold;
  line-height: 34px;
  height: 128px;
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
  ${"" /* border: 1px solid #fff; */}
`;
const BoardRow = styled.div`
  ${"" /* border: 1px solid #fff; */}
  display: flex;
`;

const Botao = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: #222;
  border: 1px solid #aaa;
  border-radius:4px;
  font-background: #fff;
  display: center;
  cursor: pointer;
  width: 100px;
  transition-duration: 0.4s;
  :hover{
      background-color: white
      color: #555;
    }
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 15px;
  justify-content: space-between;
`;

const T3 = styled.h3`
  font: 24px "Century Gothic", Futura, sans-serif;
`;

export { Status, Square, BoardRow, Botao, Body, ContainerButton, Tabela, T3 };
