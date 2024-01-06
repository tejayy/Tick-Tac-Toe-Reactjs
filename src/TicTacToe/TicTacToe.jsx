import { useState } from "react"; // Import useState
import Buttons from "../components/Buttons";

const TicTacToe = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  function Square({ value, onSquareClick }) {
    return (
      <div
        onClick={onSquareClick}
        className="box h-24 w-24 flex items-center justify-center bg-blue-500 text-white font-bold text-2xl border-4 border-solid border-blue-700 cursor-pointer"
      >
        {value}
      </div>
    );
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
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handlePlay = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  return (
    <div>
      <div className="container flex justify-center mx-auto my-8">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((row) => (
            <div key={row} className="board-row">
              {[row * 3, row * 3 + 1, row * 3 + 2].map((col) => (
                <Square
                  key={col}
                  value={squares[col]}
                  onSquareClick={() => handlePlay(col)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Buttons onReset={handleReset} />
    </div>
  );
};

export default TicTacToe;
