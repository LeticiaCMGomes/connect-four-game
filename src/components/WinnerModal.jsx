import React, {useContext} from 'react'
import Context from '../Context.jsx'

const WinnerModal = () => {
  
  const {winner} = useContext(Context)
  
  const {playAgain} = useContext(Context)
  
  return(
    <div class='winner-modal'>
      <span>{winner == 'X' ? 'player 1' : 'player 2'}</span>
      <strong>wins</strong>
      <button class='play-again-btn' onClick={playAgain}>play again</button>
    </div>
  )
}

export default WinnerModal