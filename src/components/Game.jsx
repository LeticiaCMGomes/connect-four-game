import React, {useContext} from 'react'
import Context from '../Context.jsx'

//Components
import Header from './Header.jsx'
import GameMenu from './GameMenu.jsx'
import ScoreModal from './ScoreModal.jsx'
import Board from './Board.jsx'
import TimerModal from './TimerModal.jsx'
import WinnerModal from './WinnerModal.jsx'
import TieModal from './TieModal.jsx'

const Game = () => {
  
  const {isGameMenuVisible} = useContext(Context)
  
  const {winner} = useContext(Context)
  
  const {isTie} = useContext(Context)
  
  return(
    <>
      <Header />
      <GameMenu className={`game-menu-container ${isGameMenuVisible ? 'visible' : 'hidden'}`}/>
      <ScoreModal />
      <Board />
      {winner ? 
        <WinnerModal /> :
        isTie ? 
          <TieModal /> : 
          <TimerModal />
      }
    </>
  )
}

export default Game