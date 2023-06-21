import { useState } from 'react'
import { categories } from './utils'
import { selectedEmojis } from './utils'
import { MyForm } from './components/MyForm';
import { Board } from './components/Board';
import { InfoGame } from './components/InfoGame';


const initialState={
  size:0,
  category:'',
  remaining: null,
  score:0,
  won:false,
  running:false
}



function App() {

  const [gameState, setGameState] = useState(initialState);
  const [emojis, setEmojis] = useState([]);

/*console.log(categories())
console.log(selectedEmojis("Flags", 4))*/

/*console.log(gameState, emojis)*/

  return (
    <div className='container'>
      
      <div className="flex-col items-center max-w-[1200px]  mx-auto">
        <div className='h1'>
        Memory game
      </div>
      <MyForm setGameState={setGameState} setEmojis={setEmojis}/>
      {emojis.length>0 && <Board emojis={emojis} gameState={gameState} setEmojis={setEmojis} setGameState={setGameState}/>}
    {gameState.size && <InfoGame {...gameState}/>}
      </div>
    </div>
  )
}

export default App
