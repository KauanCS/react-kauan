import React from "react";
//import "./index.css";
import Board from "../board/index";
import { Ol, Game as Games, GameInfo } from "./styles";

class Game extends React.Component {
  render() {
    return (
      <Games>
        <div className="game-board">
          <Board />
        </div>
        <GameInfo>
          <div>{/*status*/}</div>
          <Ol>{/*todo*/}</Ol>
        </GameInfo>
      </Games>
    );
  }
}

/*const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
      <div className="reset">
        <Reset />
      </div>
    </div>
    <div className="game-info">
      <div>{}</div>
      <ol>{}</ol>
    </div>
  </div>
);*/

// ========================================

export default Game;
