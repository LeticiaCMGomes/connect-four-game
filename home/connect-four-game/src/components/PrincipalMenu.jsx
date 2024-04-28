import React, {useContext} from 'react'
import Context from '../Context.jsx'

//Images
import Logo from '../../assets/logo.svg'
import PlayerVsPlayer from '../../assets/player-vs-player.svg'
import IconCheck from '../../assets/icon-check.svg'

const PrincipalMenu = () => {
  
  const {startGame} = useContext(Context)
  
  const {isRulesVisible, showRules, closeRules} = useContext(Context)
  
  
  return(
    <div class='principal-menu-container'>
      <img src={Logo} />
      <div class="btn-player-vs-player" onClick={startGame}>
        player vs player
        <img src={PlayerVsPlayer}/>
      </div>
      <div class="btn-rules" onClick={showRules}>
        game rules
      </div>
      <div class={`rules-modal ${isRulesVisible ? 'visible' : 'hidden'}`}>
        <h1>RULES</h1>
        <h2>OBJETIVE</h2>
        <p>
          Be the first player to connect 4
          of the same colored discs in a 4-in-a-row (either vertically, horizontally, or diagonally).
        </p>

        <h2>HOW TO PLAY</h2>
        <p>
            1. Red goes first in the first game.
        </p>
        <p>
            2. Players must alternate turns, and only one disc can be dropped in each turn.
        </p>
        <p>
            3. The game ends when there is a 4-in-a-row or a stalemate.
        </p>
        <p>
            4. The starter of the previous game goes second on the next
        </p>
        <img src={IconCheck} class='icon-check' onClick={closeRules}/>
      </div>
    </div>
  )
}

export default PrincipalMenu