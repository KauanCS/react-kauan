import styled from "styled-components";

const Ol = styled.ol`
  padding-left: 30px;
`;

const Game = styled.div`
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

const GameInfo = styled.div``;
export { Ol, Game, GameInfo };
