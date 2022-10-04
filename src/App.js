import './App.css';
import {useState} from 'react'
import Square from "./components/Square";




function App() {
const [board, setBoard] = useState(["","","","","","","","","",]);
const [player,  setPlayer] = useState("X"); 

const chooseSqaure = (square) => {
  setBoard(board.map((val, idx) => {
    if (idx === square && val === ""){
      return player
    }
    return val
  }))
  if( player === "X"){
    setPlayer("O");
  }else{
    setPlayer("X");
  }
}

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSqaure={() => {
              chooseSqaure(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSqaure={() => {
              chooseSqaure(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSqaure={() => {
              chooseSqaure(2);
            }}
          />
        </div>

        <div className="row">
          <Square
            val={board[3]}
            chooseSqaure={() => {
              chooseSqaure(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSqaure={() => {
              chooseSqaure(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSqaure={() => {
              chooseSqaure(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSqaure={() => {
              chooseSqaure(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSqaure={() => {
              chooseSqaure(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSqaure={() => {
              chooseSqaure(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
