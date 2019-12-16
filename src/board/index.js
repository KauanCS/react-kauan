import React from "react";
import _ from "lodash";
import {
  Status,
  Square as SquareComp,
  BoardRow,
  Botao,
  Body,
  Tabela,
  ContainerButton,
  T3
} from "./styles";
import { Redirect } from "react-router";

const Square = ({ value, handleClick }) => {
  return <SquareComp onClick={handleClick}>{value}</SquareComp>;
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      redirect: false,
      cont: {
        x: 0,
        o: 0,
        e: 0
      }
    };
  }

  handleClick = i => {
    const { xIsNext, squares } = this.state;
    const _squares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    _squares[i] = xIsNext ? "X" : "O";
    this.setState({
      squares: _squares,
      xIsNext: !xIsNext
    });
  };

  renderSquare = i => {
    const { squares } = this.state;
    return (
      <Square value={squares[i]} handleClick={() => this.handleClick(i)} />
    );
  };

  celulas = () => {
    const vetorLin = Array(3).fill(null);
    const vetorCol = Array(3).fill(null);
    let inc = 0;
    return vetorLin.map((v, ind) => (
      <BoardRow>
        {vetorCol.map((va, index) => {
          console.log(inc);
          return this.renderSquare((inc += 1));
        })}
      </BoardRow>
    ));
  };

  handleReset = () =>
    this.setState({ squares: Array(9).fill(null), xIsNext: true });

  handleAbout = () => {
    this.setState({ redirect: true });
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    const empate = verificaEmpate(this.state.squares);
    let status, msg;

    const { cont } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/about" />;
    }

    if (winner) {
      msg = "Vencedor: " + winner[0];
      cont.x += winner[0] === "X" ? 1 : 0;
      cont.o += winner[0] !== "X" ? 1 : 0;
    } else if (empate) {
      msg = "Empate";
      cont.e += 1;
    } else {
      msg = "Próximo jogador: " + (this.state.xIsNext ? "X" : "O");
    }
    status = <Body>{msg}</Body>;
    // console.log(winner);
    return (
      <Tabela>
        <Status>{status}</Status>
        {/* <BoardRow>{this.celulas().map(v => v)}</BoardRow> */}
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>

        <ContainerButton>
          <Botao onClick={this.handleReset}>Resetar</Botao>
          <Botao onClick={this.handleAbout}>About</Botao>
          <Botao>Teste</Botao>
        </ContainerButton>
        {/* {!winner ? (winner[0] = 0) : <h3>Vitórias do X: {winner[0]}</h3>} */}
        {cont && (
          <>
            <T3>Vitórias do X: {cont.x}</T3>
            <T3>Vitórias do O: {cont.o}</T3>
            <T3>Empates: {cont.e}</T3>
          </>
        )}
        {/* <h3>Vitórias do O: {winner[1]}</h3> */}
      </Tabela>
    );
  }
}

function verificaEmpate(squares) {
  var aux = true;
  for (let i = 0; i < squares.length; i++) {
    if (_.isNull(squares[i])) {
      aux = false;
    }
  }
  return aux;

  /*return _.reduce(
        squares,
        (acc, value) => {
          if (!acc && _.isNull(value)) {
            acc = true;
          }
          return acc;
        },
        false
      );
    }*/
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let vencedor = [squares[a], lines[i]];
      return vencedor;
    }
  }
  return null;
}

export default Board;
