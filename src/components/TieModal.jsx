import React, {useContext} from 'react'
import Context from '../Context.jsx'

const TieModal = () => {
  
  const {playAgain} = useContext(Context)
  
  return(
    <div class='tie-modal'>
      <strong>it's a tie</strong>
      <button class='play-again-btn' onClick={playAgain}>Play Again</button>
    </div>
  )
}

export default TieModal