import React, { useState } from "react";
import styles from "./game.module.css";
import Button from "./Button";

const Game = () => {
  const [board, markPositionOnBoard] = useState([[], [], []]);
  const [player, setPlayer] = useState(0);
  const [winner, setWinner] = useState();

  const handlePress = (row, column) => {
    const newBoard = board.slice();
    if (newBoard[row][column] === undefined) {
      newBoard[row][column] = player;
      markPositionOnBoard(newBoard);
      if (isGameOvered()) {
        setWinner(player);
      } else {
        setPlayer(1 - player);
      }
    }
    // console.log(newBoard);
  };

  const isGameOvered = () => {
    return checkRowCrossed() || checkColumnCrossed() || checkDiagonalCrossed();
  };

  const checkRowCrossed = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== undefined
      ) {
        return true;
      }
    }
    return false;
  };

  const checkColumnCrossed = () => {
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === board[1][j] &&
        board[1][j] === board[2][j] &&
        board[0][j] !== undefined
      ) {
        return true;
      }
    }
    return false;
  };

  const checkDiagonalCrossed = () => {
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== undefined
    ) {
      return true;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== undefined
    ) {
      return true;
    }
    return false;
  };

  const getBoxView = (row, column) => (
    //jsx statement
    <>
      {board[row][column] === 0 && "X"}
      {board[row][column] === 1 && "0"}
    </>
  );

  const handleClear = () => {
    markPositionOnBoard([[], [], []]);
    setPlayer(0);
    setWinner(undefined);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div>
        <Button title="Start new Game" handleClear={handleClear} />

        <div className={styles.player}>
          <Button
            title={`Next Player :- ${1 - player ? "Prajakta" : "Mitali"} `}
          />
        </div>

        {winner !== undefined && (
          // <div className={styles.winner}>Player {1 - player} won this game</div>
          <div className={styles.winner}>
            {player ? "Mitali" : "Prajakta"} won this game
          </div>
        )}

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td onClick={() => handlePress(0, 0)}>{getBoxView(0, 0)}</td>
                <td onClick={() => handlePress(0, 1)}>{getBoxView(0, 1)}</td>
                <td onClick={() => handlePress(0, 2)}>{getBoxView(0, 2)}</td>
              </tr>
              <tr>
                <td onClick={() => handlePress(1, 0)}>{getBoxView(1, 0)}</td>
                <td onClick={() => handlePress(1, 1)}>{getBoxView(1, 1)}</td>
                <td onClick={() => handlePress(1, 2)}>{getBoxView(1, 2)}</td>
              </tr>
              <tr>
                <td onClick={() => handlePress(2, 0)}>{getBoxView(2, 0)}</td>
                <td onClick={() => handlePress(2, 1)}>{getBoxView(2, 1)}</td>
                <td onClick={() => handlePress(2, 2)}>{getBoxView(2, 2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Game;
