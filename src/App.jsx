import './App.css'
import TicTacToe from './TicTacToe/TicTacToe';


function App() {


  return (
    <div className="font-bold text-2xl text-white">
      MY TICK-TAC-TOE GAME IN <span className='text-blue-500'>REACT</span>
      <div className="">
        <TicTacToe />
      </div>
    </div>
  );
}

export default App
